/** SIMPLIFICAR SIEMPRE LA NOTACION
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> O( 1 ) , complejidad espacial -  Espacio de los datos de entarda (params)
 */


function linearSearch(arreglo, clave) { // O( n ) = arreglo
  for (let indice = 0; indice < arreglo.length; indice++) { // O( 1 ) let indice
    if (arreglo[indice] === clave) {
      return indice;
    }
  }
  return -1;
}

  /* Espacio Auxiliar = espacio ocupado por el cuerpo del algoritmo, mas no por el cuerpo de entrada. */