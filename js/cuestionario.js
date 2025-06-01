/***************************
* Autor: Equipo 6
* Estructuras Discretas
* 2025-2
****************************/

function valuap(respuest) {
    var reto;
    if (parseInt(respuest) == this.correcta) {
        // var reto;
        alert("Es correcta");
        reto = true;
        return reto;
    } else {
        alert("Es false");
        return reto;
    }
}

function pregunta(pregun, respuesta1, respuesta2, respuesta3, respuesta4, correcta) {
    this.pregun = pregun;
    this.respuestas = [];
    this.respuestas[0] = respuesta1;
    this.respuestas[1] = respuesta2;
    this.respuestas[2] = respuesta3;
    this.respuestas[3] = respuesta4;
    this.correcta = parseInt(correcta);
    this.ocupado = false;
    this.valuap = valuap;
}

var retorno = [];
var preguntas = [];

preguntas[0] = new pregunta("(1) ¿Quién inventó el álgebra booleana?","A) August De Morgan","B) George Boole","C) Maurice Karnaugh","D) Elwood Shannon", 1);
preguntas[1] = new pregunta("(2) ¿Para qué se utiliza el álgebra booleana?","A) Para modelar los circuitos de dispositivos electrónicos.","B) Para modelar circuitos magnéticos.","C) Para modelar los circuitos de dispositivos mecánicos.","D) Para modelar circuitos hidráulicos", 0);
preguntas[2] = new pregunta("(3) ¿Método más efectivo para resolver la minimización de funciones booleanas con más de 6 variables?","A) Minimización por Quine-McCluskey","B) Tablas de verdad","C) Minimización por mapas de Karnaugh","D) Tablas de implicantes primos esenciales", 0);
preguntas[3] = new pregunta("(4) ¿Físico y matemático conocido por crear el método tabular?","A) George Boole","B) Claude Elwood Shannon","C) Maurice Karnaugh","D) August De Morgan", 2);
preguntas[4] = new pregunta("(5) ¿Qué es la forma canónica disyuntiva?","A) La suma de todos los Minterms","B) La suma de todos los Minterms y Maxterms","C) La suma de todos los Maxterms","D) La suma de todas las funciones booleanas", 0);
preguntas[5] = new pregunta("(6) ¿De qué forma se pueden hacer grupos en una tabla de Karnaugh?","A) Diagonalmente","B) Aleatoriamente","C) Solo con adyacentes","D) Solo unitarios", 2);
preguntas[6] = new pregunta("(7) Un álgebra de Boole es un conjunto B con:","A) Dos operaciones, que se suelen llamar suma y producto y notar con + y × (o, a veces, por solamente un punto: ·), .","B) Todas son correctas.","C) Una transformación que asocia a cada elemento de x un elemento x0 de B que se suele llamar complementario","D) Elementos distinguidos 0 y 1 tal que todas las leyes se verifican.", 1);
preguntas[7] = new pregunta("(8) ¿Qué es la forma canónica conjuntiva?","A) La suma de todos los Minterms","B) La suma de todos los Minterms y Maxterms","C) El producto de todos los Maxterms","D) La suma de todas las funciones booleanas", 2);
preguntas[8] = new pregunta("(9) Teniendo la siguiente expresión x + x = x, x * x = x. ¿Qué propiedad se utiliza?","A) Conmutativa","B) De Morgan","C) Idempotencia","D) Distributiva", 2);
preguntas[9] = new pregunta("(10) Conjunto de números en que se trabaja el álgebra de Boole.","A) (0,1,2,3…,∞)","B) Todos los números reales","C) (0,1)","D) Números imaginarios", 2);
preguntas[10] = new pregunta("(11) Propiedad del álgebra de Boole que al aplicarse una operación entre un elemento y otro, no hace cambios en el primer elemento.","A) Propiedad elemental.","B) Propiedad de absorción.","C) Propiedad del inverso para el cero.","D) Propiedad del elemento neutro.", 3);
preguntas[11] = new pregunta("(12) Propiedad del álgebra de Boole que permite que el primer y segundo lugar se inviertan sin alterar el resultado.","A) Propiedad del inverso.","B) Propiedad conmutativa.","C) Propiedad de cambio.","D) Propiedad del elemento neutro.", 1);
preguntas[12] = new pregunta("(13) Los elementos básicos de los circuitos se llaman _____ lógicas.","A) Capas.","B) Entidades.","C) Puertas.","D) Tablas.", 2);
preguntas[13] = new pregunta("(14) Circuitos que producen una salida que depende solo de la entrada y no del estado actual del circuito.","A) Redes lógicas.","B) Circuitos de operación neutra","C) Redes combinacionales","D) Circuitos cerrados", 2);
preguntas[14] = new pregunta("(15) Elemento usado en redes lógicas que produce el complemento del valor de entrada.","A) Puerta AND.","B) Puerta OR.","C) Puerta IN.","D) Puerta NOT.", 3);
preguntas[15] = new pregunta("(16) ¿Cuál es la ventaja del método de Karnaugh sobre el algebraico","A) Requiere menos variables.","B) Permite una simplificación visual rápida para funciones pequeñas.","C) No necesita conocimientos de lógica","D) Funciona mejor con funciones de más de 6 variables.", 1);
preguntas[16] = new pregunta("(17) Resultado que obtenemos al emplear la puerta OR.","A) El complemento de la entrada.","B) La suma booleana de las entradas que pueden ser dos o más.","C) La misma entrada.","D) Producto booleano de los valores de entrada.", 1);
preguntas[17] = new pregunta("(18) La eficiencia de un circuito _________ depende del número de ______ que tenga y de la disposición de estas.","A) Combinacional, combinaciones.","B) Combinacional, puertas.","C) De entrada, puertas.","D) De salida, combinaciones.", 1);
preguntas[18] = new pregunta("(19) Procedimiento desarrollado en los cincuenta para ayudar a minimizar circuitos de forma manual.","A) Diagramas de Karnaugh.","B) Diagrama descriptivo.","C) Diagrama minimizador.","D) Diagrama simple.", 0);
preguntas[19] = new pregunta("(20) ¿Qué complejidad maneja el método Quine-McCluskey?","A) Logarítmica.","B) Cuadrática.","C) Lineal.","D) Exponencial.", 3);
preguntas[20] = new pregunta("(21) ¿En qué año introduce Maurice Karnaugh el llamado K-diagrama?","A) 1901.","B) 1952.","C) 1953.","D) 1954.", 2);
preguntas[21] = new pregunta("(22) Seleccione la salida final de la expresión booleana 1 · 0 + (0 + 1)","A) 1.","B) 0.","C) .1","D) .0", 1);
preguntas[22] = new pregunta("(23) ¿A qué base numérica deben ser traducidos los valores binomiales en el método de Quine-McCluskey?","A) Hexadecimal.","B) Posicional.","C) Cuaternario.","D) Decimal.", 3);
preguntas[23] = new pregunta("(24) ¿Qué variables booleanas representan el número binario 1010?","A) BCD","B) A-C-.","C) 𝐴𝐵𝐶𝐷","D) AC.", 2);
preguntas[24] = new pregunta("(25) ¿Qué expresión representa un maxitérmino?","A) 𝑥𝑦𝑧","B) (x+y+z)","C) 𝑥𝑦𝑧 + 𝑥𝑦𝑧 + 𝑥𝑦𝑧 + 𝑥𝑦","D) 𝑥𝑦", 1);
preguntas[25] = new pregunta("(26) ¿Qué expresión representa un minitérmino?","A) 𝐼𝐽𝐾","B) 𝐼𝐽","C) 𝐼𝐽𝐾 + 𝐼𝐽𝐾","D) 𝐼𝐽𝐾 + 𝐼𝐽 + 𝐼𝐽𝐾 + 𝐼𝐽𝐾", 0);
preguntas[26] = new pregunta("(27) En el algebra booleana, la propiedad de absorción se expresa como:","A) A+ A=1","B) A*1=A","C) A+AB=A","D) A*A'=1", 2);
preguntas[27] = new pregunta("(28) ¿Qué característica tiene un mapa de Karnaugh de 4 variables?","A) Tiene doce celdas.","B) Tiene 8 combinaciones posibles.","C) Tiene 16 celdas.","D) Tiene 4 columnas y tres filas.", 2);
preguntas[28] = new pregunta("(29) Con ayuda del álgebra de Boole, seleccione la minimización correcta de la expresión booleana 𝑥𝑦𝑧 + 𝑥𝑦𝑧","A) xy","B) xz","C) x","D) y", 1);
preguntas[29] = new pregunta("(30) Seleccione la primera regla de comparación de grupos (en cuanto a diferencia de bits) del método de Quine-McCluskey","A) n con n + 1.","B) n con n + 2.","C) n con n - 1.","D) n con n - 2.", 0);
preguntas[30] = new pregunta("(31) En el último paso del método de minimización de Quine-McCluskey, ¿qué regla se tiene que seguir para obtener la fórmula booleana simplificada?","A) Las implicaciones con dos X en la misma columna de algún valor binario, se incluyen como un minitérmino.","B) Las implicaciones con una X en la misma columna de algún valor binario, se incluyen como un minitérmino.","C) La implicación con una X en la misma columna de algún valor binario, se incluye como término canónico.","D) La implicación con dos X en la misma columna de algún valor binario, se incluye como término canónico.", 0);
preguntas[31] = new pregunta("(32) En el método de Quine-McCluskey, ¿qué nombre reciben los términos obtenidos en la representación en bits, traducidos a variables booleanas?","A) Expresión booleana.","B) Implicante.","C) Minitérmino.","D) Resultante.", 1);
preguntas[32] = new pregunta("(33) En un diagrama de Karnaugh de dos variables, ¿qué conectivo se usa en caso de que existan dos posibles resultados?","A) .¬","B) .·","C) .∧","D) ∨", 3);
preguntas[33] = new pregunta("(34) ¿Cuántas tablas de diferenciación puede tener una función booleana en el método de Quine-McCluskey?","A) De una a cuatro.","B) Menos de tres.","C) De una a tres.","D) Más de tres.", 3);
preguntas[34] = new pregunta("(35) Seleccione una de las condiciones para que el método de Quine-McCluskey sea válido","A) Los implicantes deben contener todas las variables booleanas de la fórmula inicial.","B) Todas las columnas de valores decimales deben tener al menos una X.","C) El resultado final solo contiene a los implicantes obtenidos en la última tabla de diferenciación.","D) La regla de comparación para la diferenciación de cadenas de bits es n contra n - 1.", 1);
preguntas[35] = new pregunta("(36) Dos valores _____son válidos en el método de Quine-McCluskey si, comparados, difieren en ______.","A) Binarios, un bit.","B) Binarios, dos bits.","C) Binarios, un guión.","D) Binarios, dos guiones.", 0);
preguntas[36] = new pregunta("(37) ¿Cuál es el orden correcto de los valores binarios de dos variables booleanas en un diagrama de Karnaugh?","A) 00, 01, 10, 11.","B) 01, 10, 11, 00.","C) 00, 01, 11, 10.","D) 00, 11, 10, 01.", 2);
preguntas[37] = new pregunta("(38) ¿Qué fórmula permite saber cuántos renglones contiene una tabla de verdad, sabiendo que n es igual al número de variables booleanas en cuestión?", "A) n2", "B) 22n", "C) 2n", "D) 2ⁿ", 3);
preguntas[38] = new pregunta("(39) ¿Cuántos renglones tendría una tabla de verdad de una fórmula booleana con ocho variables diferentes?", "A) 256", "B) 128", "C) 64", "D) 512", 0);
preguntas[39] = new pregunta("(40) ¿Qué número decimal representa el número binario 100?", "A) 5", "B) 2", "C) 4", "D) 3", 2);
preguntas[40] = new pregunta("(41) ¿Cuál es la característica más importante para organizar una tabla de diferenciación en el método de Quine-McCluskey, de mayor a menor?", "A) Términos", "B) Grupos", "C) Cadena de bits", "D) Número de unos", 3);
preguntas[41] = new pregunta("(42) El diagrama de Karnaugh también se le conoce como:", "A) J-Diagrama", "B) E-Diagrama", "C) K-Diagrama", "D) N-Diagrama", 2);
preguntas[42] = new pregunta("(43) Se le llama minimización booleana a:", "A) Al proceso de obtener restas", "B) Al proceso de obtener divisiones", "C) Al proceso de simplificar expresiones booleanas para reducir el número de términos o variables", "D) Al proceso de obtener restas menores", 2);
preguntas[43] = new pregunta("(44) ¿Dónde nació George Boole?", "A) En Estados Unidos", "B) En Alemania", "C) En Reino Unido", "D) En Polonia", 2);
preguntas[44] = new pregunta("(45) ¿Quién demostró que se podían utilizar las reglas de la lógica para diseñar circuitos?", "A) Maurice Karnaugh", "B) Claude Shannon", "C) George Boole", "D) August De Morgan", 1);
preguntas[45] = new pregunta("(46) ¿Cuáles son las tres operaciones fundamentales del álgebra de Boole?", "A) Complemento, Suma booleana, Producto booleano", "B) Resta booleana, División booleana, Elemento neutro", "C) De morgan, Conmutativa, Acotación", "D) Absorción, Inversión para el uno, Complemento neutro", 0);
preguntas[46] = new pregunta("(47) ¿Quién contribuyó de manera considerable al avance de la lógica?", "A) Maurice Karnaugh", "B) Claude Shannon", "C) August De Morgan", "D) George Boole", 2);
preguntas[47] = new pregunta("(48) ¿Qué ley creó August de Morgan?", "A) Conmutativa", "B) Asociativa", "C) Distributiva", "D) De Morgan", 3);
preguntas[48] = new pregunta("(49) ¿Dónde nació Maurice Karnaugh?", "A) Viena", "B) Houston", "C) Nueva York", "D) Edimburgo", 2);
preguntas[49] = new pregunta("(50) ¿Cuál es el objetivo principal de minimizar una función booleana?", "A) Reducir la cantidad de compuertas lógicas necesarias.", "B) Obtener una tabla de verdad equivalente", "C) Aumentar el número de combinaciones posibles", "D) Generar una función redudante", 0);
