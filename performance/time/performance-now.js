const performance = require("perf_hooks");

function contar(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// método usamos para calcular el tiempo en JavaScript
let inicio_tiempo = performance.performance.now();
contar(5);
let final_tiempo = performance.performance.now();
let duracion = final_tiempo - inicio_tiempo;

console.log(`El algoritmo contar ha durado ${duracion}ms.`);