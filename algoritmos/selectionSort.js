/** SIMPLIFICAR SIEMPRE LA NOTACION
 * Complejidad Temporal -> O( n^2 )
 * Complejidad Espacial -> O( n + 5  ) + simplificar O ( n )
 * Espacio Auxiliar -> O( 5 ) + simplificar = O( 1 ) -> complejidad espacial -  Espacio de los datos de entarda (params)
 */
 function selectionSort(arreglo) { // O ( n )
    let longitud = arreglo.length; // O ( 1 )
  
    for (let i = 0; i < longitud; i++) { // O ( 1 )
      let minimo = i; // O ( 1 )
      for (let j = i + 1; j < longitud; j++) { // O ( 1 )
        if (arreglo[j] < arreglo[minimo]) {
          minimo = j; 
        }
      }
      if (minimo != i) {
        let temporal = arreglo[i]; // O ( 1 )
        arreglo[i] = arreglo[minimo];
        arreglo[minimo] = temporal;
      }
    }
    return arreglo;
  }


    /* Espacio Auxiliar = espacio ocupado por el cuerpo del algoritmo, mas no por el cuerpo de entrada. */