/***************************
* Autor: Equipo 3
* Estructuras Discretas
* 2025-1
****************************/

function seleccionarOpcion(opcion) {
    // Oculta todas las secciones
    ocultarTodasLasOpciones();
    // Muestra la sección correspondiente a la opción seleccionada
    document.getElementById(opcion).classList.remove('oculto');
 }
 
 function ocultarTodasLasOpciones() {
     const opciones = ['ProbabilidadDiscreta', 'ProbabilidadCondicional', 'Independencias', 'TeoremaDeBayes'];
 
     opciones.forEach(opcion => {
         const elemento = document.getElementById(opcion);
         if (elemento) {
             elemento.classList.add('oculto');
         }
     });
 }
 
 function calcularProbabilidadBinomial() {
     const numEnsayos = parseInt(document.getElementById('numEnsayos').value);
     const probExito = parseFloat(document.getElementById('probExito').value);
     const numExitos = parseInt(document.getElementById('numExitos').value);
 
     if (isNaN(numEnsayos) || isNaN(probExito) || isNaN(numExitos) ||
         numEnsayos < 1 || probExito < 0 || probExito > 1 || numExitos < 0 || numExitos > numEnsayos) {
         alert("Ingrese valores válidos.");
         return;
     }
 
     const probabilidadBinomial = calcularCoeficienteBinomial(numEnsayos, numExitos) *
         Math.pow(probExito, numExitos) * Math.pow(1 - probExito, numEnsayos - numExitos);
 
     const probabilidadPorcentaje = (probabilidadBinomial * 100).toFixed(2);
 
     const resultadoElement = document.getElementById('output');
     resultadoElement.innerHTML = `<h2>Resultado:</h2>`;
     resultadoElement.innerHTML += `<p>Probabilidad Binomial: ${probabilidadPorcentaje}%</p>`;
 }
 
 function calcularCoeficienteBinomial(n, k) {
     return factorial(n) / (factorial(k) * factorial(n - k));
 }
 
 
 function factorial(num) {
     if (num === 0 || num === 1) {
         return 1;
     } else {
         return num * factorial(num - 1);
     }
 }
 
 function reiniciar() {
     document.getElementById('numEnsayos').value = '';
     document.getElementById('probExito').value = '';
     document.getElementById('numExitos').value = '';
     document.getElementById('output').innerHTML = '';
 }
 
 function mostrarCamposEntrada() {
     var opcionSeleccionada = document.getElementById('opcion').value;
 
     // Ocultar todos los mensajes
     var mensajes = document.getElementsByClassName('CalculoCondicional');
     for (var i = 0; i < mensajes.length; i++) {
         mensajes[i].style.display = 'none';
     }
 
     // Mostrar el mensaje correspondiente
     var mensajeElement = document.getElementById('Opcion' + opcionSeleccionada);
     if (mensajeElement) {
         mensajeElement.style.display = 'block';
     }
 }
 
 
 function calcularProbabilidadCondicionalAB() {
     const ProbabilidadA = parseFloat(document.getElementById('probabilidadA1').value);
     const ProbabilidadB = parseFloat(document.getElementById('probabilidadB1').value);
 
     if (isNaN(ProbabilidadA) || isNaN(ProbabilidadB) || ProbabilidadA < 0 || ProbabilidadB < 0 || ProbabilidadA > 1 || ProbabilidadB > 1) {
         alert("Ingrese valores válidos para las probabilidades.");
         return;
     }
     
     const probabilidadCondicional = (ProbabilidadA * ProbabilidadB) / ProbabilidadA;
 
     const probabilidadPorcentaje = (probabilidadCondicional * 100).toFixed(2);
 
     const resultado = document.getElementById('fuera');
     // Limpiar contenido anterior
     resultado.innerHTML = '';
     // Agregar nuevo resultado
 
     resultado.innerHTML +=  `<h2>Resultado:</h2>`;
     resultado.innerHTML += `<p>Probabilidad condicional P(B|A): ${probabilidadPorcentaje}%</p>`;
     resultado.innerHTML +=  `<p>Para calcular la probabilidad condicional P(B|A), utilizamos la fórmula:</p>`;
     resultado.innerHTML +=  `<p>"P(B|A) = P(A ∩ B) / P(A)"</p>`;
 }
 
 function calcularProbabilidadCondicionalBA() {
     const ProbabilidadA = parseFloat(document.getElementById('probabilidadA2').value);
     const ProbabilidadB = parseFloat(document.getElementById('probabilidadB2').value);
     
     if (isNaN(ProbabilidadA) || isNaN(ProbabilidadB) || ProbabilidadA < 0 || ProbabilidadB < 0 || ProbabilidadA > 1 || ProbabilidadB > 1) {
         alert("Ingrese valores válidos para las probabilidades.");
         return;
     }
 
     const probabilidadCondicional = (ProbabilidadB * ProbabilidadA) / ProbabilidadB;
     
     const probabilidadPorcentaje = (probabilidadCondicional * 100).toFixed(2);    
     
     const resultado = document.getElementById('fuera');
     // Limpiar contenido anterior
     resultado.innerHTML = '';
     // Agregar nuevo resultado
 
     resultado.innerHTML +=  `<h2>Resultado:</h2>`;
     resultado.innerHTML += `<p>Probabilidad condicional P(A|B): ${probabilidadPorcentaje}%</p>`;
     resultado.innerHTML +=  `<p>Para calcular la probabilidad condicional P(A|B), utilizamos la fórmula:</p>`;
     resultado.innerHTML +=  `<p>"P(A|B) = P(A ∩ B) / P(B)"</p>`;
 }
 
 function calcularProbabilidadCondicionalBComplemento() {
     const ProbabilidadA = parseFloat(document.getElementById('probabilidadA3').value);
     const ProbabilidadBComplemento = 1- parseFloat(document.getElementById('probabilidadB3').value);
  
     if (isNaN(ProbabilidadA) || isNaN(ProbabilidadBComplemento) || ProbabilidadA < 0 || ProbabilidadBComplemento < 0 || ProbabilidadA > 1 || ProbabilidadBComplemento > 1) {
         alert("Ingrese valores válidos para las probabilidades.");
         return;
     }
 
     const probabilidadCondicional = (ProbabilidadA * ProbabilidadBComplemento)/ProbabilidadBComplemento;
     
     const probabilidadPorcentaje = (probabilidadCondicional * 100).toFixed(2); 
 
     const resultado = document.getElementById('fuera');
     // Limpiar contenido anterior
     resultado.innerHTML = '';
     // Agregar nuevo resultado
 
     resultado.innerHTML +=  `<h2>Resultado:</h2>`;
     resultado.innerHTML += `<p>Probabilidad condicional P(A|B'): ${probabilidadPorcentaje}%</p>`;
     resultado.innerHTML +=  `<p>Para calcular la probabilidad condicional P(A|B'), utilizamos la fórmula:</p>`;
     resultado.innerHTML +=  `<p>"P(A|B') = P(A ∩ B') / P(B')"</p>`;
 }
 
 function calcularIndependencias() {
     const ProbabilidadA = parseFloat(document.getElementById('probA').value);
     const ProbabilidadB = parseFloat(document.getElementById('probB').value);
     
     if (isNaN(ProbabilidadA) || isNaN(ProbabilidadB) || ProbabilidadA < 0 || ProbabilidadB < 0 || ProbabilidadA > 1 || ProbabilidadB > 1) {
         alert("Ingrese valores válidos para las probabilidades.");
         return;
     }
 
     const independencia = (ProbabilidadA * ProbabilidadB);
     
     const probabilidadPorcentaje = (independencia * 100).toFixed(2);    
     
     const resultado = document.getElementById('SOS');
     // Limpiar contenido anterior
     resultado.innerHTML = '';
     // Agregar nuevo resultado
 
     resultado.innerHTML +=  `<h2>Resultado:</h2>`;
     resultado.innerHTML += `<p>La Independencia es: ${probabilidadPorcentaje}%</p>`;
     resultado.innerHTML +=  `<p>Para calcular la Independencia, utilizamos la fórmula:</p>`;
     resultado.innerHTML +=  `<p>"P(A ∩ B) = P(A) * P(B)"</p>`;
 }
 
 
 function reinicio() {
     document.getElementById('probA').value = '';
     document.getElementById('probB').value = '';
     document.getElementById('SOS').innerHTML = '';
 }
 
 function calcularTeoremaDeBayes() {
     const probA = parseFloat(document.getElementById('probA_Bayes').value);
     const probB = parseFloat(document.getElementById('probB_Bayes').value);
     const probBA = parseFloat(document.getElementById('probBA_Bayes').value);
 
     if (isNaN(probA) || isNaN(probB) || isNaN(probBA) || probA < 0 || probB < 0 || probBA < 0 || probA > 1 || probB > 1 || probBA > 1) {
         alert("Ingrese valores válidos para las probabilidades.");
         return;
     }
 
     const probAB = (probBA * probA) / probB;
 
     const probabilidadPorcentaje = (probAB * 100).toFixed(2);
 
     const resultado = document.getElementById('resultadoBayes');
     // Limpiar contenido anterior
     resultado.innerHTML = '';
     // Agregar nuevo resultado
 
     resultado.innerHTML += `<h2>Resultado:</h2>`;
     resultado.innerHTML += `<p>Probabilidad P(A|B): ${probabilidadPorcentaje}%</p>`;
     resultado.innerHTML += `<p>Para calcular la probabilidad P(A|B) utilizando el Teorema de Bayes, utilizamos la fórmula:</p>`;
     resultado.innerHTML += `<p>"P(A|B) = (P(B|A) * P(A)) / P(B)"</p>`;
 }
 
 function reiniciarBayes() {
     document.getElementById('probA_Bayes').value = '';
     document.getElementById('probB_Bayes').value = '';
     document.getElementById('probBA_Bayes').value = '';
     document.getElementById('resultadoBayes').innerHTML = '';
 }