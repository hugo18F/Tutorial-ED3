document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate').addEventListener('click', function() {
        let minterms = [];

        // Recolectar los valores de los checkboxes
        for (let i = 0; i < 16; i++) {
            let cell = document.getElementById('cell' + String(i).padStart(2, '0'));
            if (cell && cell.checked) {
                minterms.push(i); // Agregar el minitérmino correspondiente
            }
        }

        // Convertir minterms a expresión booleana simplificada
        let result = '';
        if (minterms.length > 0) {
            result = simplifyMinterms(minterms);
        } else {
            result = 'No se seleccionó ningún minitérmino.';
        }

        // Mostrar el resultado
        document.getElementById('result').innerText = 'Expresión Booleana Simplificada: ' + result;
    });

    // Esta función simplifica minterms considerando agrupaciones básicas en Karnaugh
    function simplifyMinterms(minterms) {
        // Crear un mapa de Karnaugh (4x4)
        let kmap = Array(4).fill(null).map(() => Array(4).fill(0));

        // Mapear minterms a posiciones de filas y columnas en el mapa de Karnaugh
        // La codificación para fila y columna sigue el orden Gray para Karnaugh 4 variables
        // Variables A,B para fila; C,D para columna (orden Gray): 00,01,11,10
        // Para conversión numérica ajustamos índice

        // Definimos correspondencia índice a posición Karnaugh:
        // Mapear índice 0..15 a (row, col) índices de mapa Karnaugh:
        // Usamos orden Gray para columnas y filas:
        // La fila: bits A,B en orden binario normal 00=0, 01=1, 11=3, 10=2 (Gray)
        // La columna: bits C,D en orden binario normal 00=0, 01=1, 11=3, 10=2 (Gray)
        function binToGray(n) {
            return n ^ (n >> 1);
        }

        for (let minterm of minterms) {
            // Extraer bits de variables
            let A = (minterm >> 3) & 1;
            let B = (minterm >> 2) & 1;
            let C = (minterm >> 1) & 1;
            let D = minterm & 1;

            // Conversión a índices Gray para filas y columnas
            // fila = A B en Gray
            let rowBin = (A << 1) | B;
            let row = binToGray(rowBin);

            // columna = C D en Gray
            let colBin = (C << 1) | D;
            let col = binToGray(colBin);

            kmap[row][col] = 1;
        }

        // Buscar los grupos para simplificar expresión
        let groups = findGroups(kmap);

        // Generar la expresión final
        let expr = generateExpression(groups);
        return expr;
    }

    // Función para encontrar grupos de 1's en el mapa de Karnaugh
    // Esta versión identifica grupos rectangulares y simplifica
    function findGroups(kmap) {
        let groups = [];

        // Todos los tamaños posibles de grupos en potencias de dos
        const sizes = [8, 4, 2, 1];
        // Buscar grupos mayores primero

        for (let size of sizes) {
            // Examinar filas y columnas para grupos rectangulares de tamaño "size"
            for (let r = 0; r < 4; r++) {
                for (let c = 0; c < 4; c++) {
                    // Construir grupos rectangulares de area 'size'
                    // Factores posibles (height x width) para size
                    let factors = getFactors(size);

                    for (let [h, w] of factors) {
                        // Revisar grupo de (h x w) comenzando en (r,c) con wrap around
                        if (checkGroup(kmap, r, c, h, w)) {
                            // Almacenar el grupo si es válido y no se superpone con grupos previos
                            groups.push({r, c, h, w});
                            // Marcar esas celdas para no repetir grupos (opcional)
                            markGroup(kmap, r, c, h, w);
                        }
                    }
                }
            }
        }

        return groups;
    }

    // Obtener factores (alto x ancho) para un tamaño dado (solo potencias de dos)
    function getFactors(size) {
        let factors = [];
        for (let i = 1; i <= size; i *= 2) {
            if (size % i === 0) {
                let j = size / i;
                if (isPowerOfTwo(j)) {
                    factors.push([i, j]);
                    factors.push([j, i]);
                }
            }
        }
        // Filtrar duplicados (h,w) que sean iguales a (w,h)
        let unique = [];
        let added = new Set();
        for (let f of factors) {
            let key = f[0] + ',' + f[1];
            let keyRev = f[1] + ',' + f[0];
            if (!added.has(key) && !added.has(keyRev)) {
                unique.push(f);
                added.add(key);
            }
        }
        return unique;
    }

    function isPowerOfTwo(x) {
        return (x & (x - 1)) === 0 && x > 0;
    }

    // Chequear si todas las celdas de un grupo (h x w) desde (r,c) están en 1, con wrap-around
    function checkGroup(kmap, r, c, h, w) {
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                let rr = (r + i) % 4;
                let cc = (c + j) % 4;
                if (kmap[rr][cc] !== 1) {
                    return false;
                }
            }
        }
        return true;
    }

    // Marcar las celdas del grupo en kmap para evitar contar grupos repetidos
    // Aquí usamos valor 2 para marcar
    function markGroup(kmap, r, c, h, w) {
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                let rr = (r + i) % 4;
                let cc = (c + j) % 4;
                kmap[rr][cc] = 2; // Marcado
            }
        }
    }

    // Generar la expresión booleana simplificada a partir de grupos hallados
    function generateExpression(groups) {
        let terms = [];

        for (let group of groups) {
            let {r, c, h, w} = group;

            // Encontrar cuáles variables están constantes en el grupo
            // Variables A y B corresponden a filas; C y D a columnas
            // Para filas: 0->A'B', 1->A'B, 2->AB, 3->AB'
            // Para columnas: 0->C'D',1->C'D,2->CD,3->CD'

            // Variables A y B
            let rowIndices = [];
            for(let i=0; i<h; i++) {
                rowIndices.push( (r + i) % 4 );
            }
            // Variables C y D
            let colIndices = [];
            for(let j=0; j<w; j++) {
                colIndices.push( (c + j) % 4 );
            }

            // Determinar qué bits son iguales en todos los índices (tanto filas como columnas)
            let A_term = getCommonRowTerm(rowIndices);
            let C_term = getCommonColTerm(colIndices);

            let term = A_term + C_term;
            if(term === '') term = '1'; // Caso grupo con todas las celdas

            terms.push(term);
        }

        return terms.join(' + ');
    }

    // Obtener parte de la expresión para filas (A,B)
    function getCommonRowTerm(rows) {
        // Los 4 estados de fila codificados en Gray:
        // 0 -> 00 (A'B')
        // 1 -> 01 (A'B)
        // 3 -> 11 (AB)
        // 2 -> 10 (AB')
        // Para encontrar variables constantes, examinamos los bits A y B en cada fila

        // Primero recuperar bits AB para cada fila (en orden binario)
        // Inverso Gray a binario (simple para 2 bits)
        function grayToBin(g) {
            if(g === 0) return 0; // 00
            if(g === 1) return 1; // 01
            if(g === 3) return 3; // 11
            if(g === 2) return 2; // 10
            return 0;
        }

        let bitsA = new Set();
        let bitsB = new Set();

        for(let r of rows) {
            let bin = grayToBin(r);
            bitsA.add( (bin >> 1) & 1 );
            bitsB.add( bin & 1 );
        }

        let term = '';
        // Si bitsA tiene solo 0 o solo 1, esa variable es constante, si no, no aparece
        if(bitsA.size === 1) {
            term += (bitsA.has(0) ? "A'" : 'A');
        }
        if(bitsB.size === 1) {
            term += (bitsB.has(0) ? "B'" : 'B');
        }

        return term;
    }

    // Obtener parte de la expresión para columnas (C,D)
    function getCommonColTerm(cols) {
        // Similar a filas, convertir Gray a binario para columnas CD

        function grayToBin(g) {
            if(g === 0) return 0; // 00
            if(g === 1) return 1; // 01
            if(g === 3) return 3; // 11
            if(g === 2) return 2; // 10
            return 0;
        }

        let bitsC = new Set();
        let bitsD = new Set();

        for(let c of cols) {
            let bin = grayToBin(c);
            bitsC.add( (bin >> 1) & 1 );
            bitsD.add( bin & 1 );
        }

        let term = '';
        if(bitsC.size === 1) {
            term += (bitsC.has(0) ? "C'" : 'C');
        }
        if(bitsD.size === 1) {
            term += (bitsD.has(0) ? "D'" : 'D');
        }

        return term;
    }
});

