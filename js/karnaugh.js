document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const calculateBtn = document.getElementById('calculate');
    const resetBtn = document.getElementById('reset');
    const resultElement = document.getElementById('result');
    
    // Mapeo de índices a coordenadas del mapa de Karnaugh (orden Gray)
    const karnaughMap = [
        [0, 1, 3, 2],    // Fila 0: 00
        [4, 5, 7, 6],    // Fila 1: 01
        [12, 13, 15, 14], // Fila 2: 11
        [8, 9, 11, 10]    // Fila 3: 10
    ];
    
    // Variables para rastrear grupos
    let currentGroups = [];
    
    // Reiniciar el mapa
    resetBtn.addEventListener('click', resetMap);
    
    // Calcular la expresión
    calculateBtn.addEventListener('click', calculateExpression);
    
    // Función para reiniciar el mapa
    function resetMap() {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.classList.remove('group-highlight');
        });
        resultElement.textContent = 'F = 0';
        currentGroups = [];
    }
    
    // Función para calcular la expresión
    function calculateExpression() {
        const minterms = getSelectedMinterms();
        const expression = simplifyKarnaugh(minterms);
        resultElement.textContent = 'F = ' + expression;
        highlightGroups();
    }
    
    // Obtener los minterms seleccionados
    function getSelectedMinterms() {
        const minterms = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const row = parseInt(checkbox.dataset.row);
                const col = parseInt(checkbox.dataset.col);
                minterms.push(karnaughMap[row][col]);
            }
        });
        return minterms;
    }
    
    // Simplificar usando el mapa de Karnaugh
    function simplifyKarnaugh(minterms) {
        if (minterms.length === 0) return '0';
        if (minterms.length === 16) return '1';
        
        // Crear matriz del mapa de Karnaugh
        const kmap = Array(4).fill().map(() => Array(4).fill(0));
        
        // Marcar los minterms seleccionados
        for (const minterm of minterms) {
            for (let row = 0; row < 4; row++) {
                const col = karnaughMap[row].indexOf(minterm);
                if (col !== -1) {
                    kmap[row][col] = 1;
                    break;
                }
            }
        }
        
        // Encontrar los grupos más grandes posibles
        currentGroups = findGroups(kmap);
        
        // Generar la expresión simplificada
        return generateExpression(currentGroups);
    }
    
    // Encontrar grupos de 1s adyacentes
    function findGroups(kmap) {
        const groups = [];
        const covered = Array(4).fill().map(() => Array(4).fill(false));
        
        // Buscar grupos de 8, 4, 2 y 1 en ese orden
        const groupSizes = [8, 4, 2, 1];
        
        for (const size of groupSizes) {
            for (let row = 0; row < 4; row++) {
                for (let col = 0; col < 4; col++) {
                    if (kmap[row][col] === 1 && !covered[row][col]) {
                        const group = getLargestGroup(kmap, covered, row, col, size);
                        if (group) {
                            groups.push(group);
                            // Marcar las celdas como cubiertas
                            for (let r = group.row; r < group.row + group.height; r++) {
                                for (let c = group.col; c < group.col + group.width; c++) {
                                    covered[r % 4][c % 4] = true;
                                }
                            }
                        }
                    }
                }
            }
        }
        
        return groups;
    }
    
    // Obtener el grupo más grande posible desde una celda dada
    function getLargestGroup(kmap, covered, startRow, startCol, maxSize) {
        const possibleGroups = getPossibleGroupDimensions(maxSize);
        
        for (const [height, width] of possibleGroups) {
            let isValid = true;
            
            // Verificar si todas las celdas del grupo son 1 y no están cubiertas
            for (let r = 0; r < height && isValid; r++) {
                for (let c = 0; c < width && isValid; c++) {
                    const row = (startRow + r) % 4;
                    const col = (startCol + c) % 4;
                    if (kmap[row][col] !== 1 || covered[row][col]) {
                        isValid = false;
                    }
                }
            }
            
            if (isValid) {
                return {
                    row: startRow,
                    col: startCol,
                    height,
                    width
                };
            }
        }
        
        return null;
    }
    
    // Obtener posibles dimensiones para un tamaño de grupo dado
    function getPossibleGroupDimensions(size) {
        switch (size) {
            case 8: return [[2, 4], [4, 2]];
            case 4: return [[1, 4], [4, 1], [2, 2]];
            case 2: return [[1, 2], [2, 1]];
            case 1: return [[1, 1]];
            default: return [];
        }
    }
    
    // Generar la expresión booleana a partir de los grupos
    function generateExpression(groups) {
        if (groups.length === 0) return '0';
        
        const terms = [];
        
        for (const group of groups) {
            const { row, col, height, width } = group;
            const rows = [];
            const cols = [];
            
            // Obtener rangos de filas y columnas del grupo
            for (let r = 0; r < height; r++) {
                rows.push((row + r) % 4);
            }
            for (let c = 0; c < width; c++) {
                cols.push((col + c) % 4);
            }
            
            // Determinar variables constantes en el grupo
            const cTerm = getVariableTerm(rows, 'C', 'D'); // Cambiado a CD para filas
            const aTerm = getVariableTerm(cols, 'A', 'B'); // Cambiado a AB para columnas
            
            terms.push(cTerm + aTerm); // Orden invertido para coincidir con el nuevo diseño
        }
        
        return terms.join(' + ').replace(/\+\s*\+/g, '+').replace(/\s*\+\s*/g, ' + ');
    }
    
    // Obtener el término para una variable (filas o columnas)
    function getVariableTerm(indices, var1, var2) {
        let term = '';
        const bits1 = new Set();
        const bits2 = new Set();
        
        // Convertir índices Gray a bits
        for (const index of indices) {
            // Mapear índice Gray a binario (para 2 bits)
            let grayIndex;
            if (index === 0) grayIndex = 0; // 00
            else if (index === 1) grayIndex = 1; // 01
            else if (index === 2) grayIndex = 3; // 11
            else grayIndex = 2; // 10
            
            bits1.add((grayIndex >> 1) & 1);
            bits2.add(grayIndex & 1);
        }
        
        // Si todos los bits de var1 son iguales, agregar a término
        if (bits1.size === 1) {
            term += bits1.has(0) ? var1 + "'" : var1;
        }
        
        // Si todos los bits de var2 son iguales, agregar a término
        if (bits2.size === 1) {
            term += bits2.has(0) ? var2 + "'" : var2;
        }
        
        return term;
    }
    
    // Resaltar los grupos en el mapa
    function highlightGroups() {
        // Limpiar resaltados anteriores
        checkboxes.forEach(checkbox => {
            checkbox.classList.remove('group-highlight');
        });
        
        // Aplicar nuevos resaltados
        for (const group of currentGroups) {
            const { row, col, height, width } = group;
            
            for (let r = 0; r < height; r++) {
                for (let c = 0; c < width; c++) {
                    const actualRow = (row + r) % 4;
                    const actualCol = (col + c) % 4;
                    
                    // Encontrar el checkbox correspondiente
                    for (const checkbox of checkboxes) {
                        const checkboxRow = parseInt(checkbox.dataset.row);
                        const checkboxCol = parseInt(checkbox.dataset.col);
                        
                        if (checkboxRow === actualRow && checkboxCol === actualCol) {
                            checkbox.classList.add('group-highlight');
                            break;
                        }
                    }
                }
            }
        }
    }
});