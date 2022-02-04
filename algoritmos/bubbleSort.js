/** SIMPLIFICAR SIEMPRE LA NOTACION
 * Complejidad Temporal -> O( n^2 )
 * Complejidad Espacial -> O( n + 4 ) = O( n )
 * Espacio Auxiliar -> O( 4 ) = se simplifica a O( 1 ) Mucho mas imporantrente en este algoritmo
 */


 function bubbleSort(arreglo) { // O( n ) = arreglo
    let longitud = arreglo.length; // O ( 1 ) Nueva variable, nuevo espacio
    for (let i = 0; i < longitud; i++) { // O ( 1 ) Nueva variable, nuevo espacio
      for (let j = 0; j < longitud; j++) { // O ( 1 ) Nueva variable, nuevo espacio
        if (arreglo[j] > arreglo[j + 1]) {
          let temporal = arreglo[j]; // O ( 1 ) Nueva variable, nuevo espacio
          arreglo[j] = arreglo[j + 1];
          arreglo[j + 1] = temporal;
        }
      }
    }
    return arreglo;
  }



  /* Espacio Auxiliar = espacio ocupado por el cuerpo del algoritmo, mas no por el cuerpo de entrada. */
  /* Un algoritmo con O( 1 ) es MEJOR que un O( n ) */
  /*  Esto es genial porque un O(1) será el mismo, así tengamos una computadora de hace 20 años o una actual. */

  /* Analisis asintotico, el crecimiento no siempre importa  */
  // Los algoritmos que se ejecutan al realizar accines pueden ser medibles en la notacion Big-O
  // Cuando esperas a que cargue una aplicación web o cuando una pestaña de un navegador ocupa mucho espacio, estamos consumiendo recursos como tiempo o espacio.

  /* 
  Reglas para Big-O en TIEMPO son:

  1 - let a = true   -> O(1)
  
  2 - for() {}       -> O(n)
  
  3 - for(){         -> O(n^2)
    for(){}
  }

  */


  /* 
  Reglas para Big-O en ESPACIO son:

  1 - let a = true                   -> O(1)
  
  2 - let b = [1, 2, 3, 4, ...]      -> O(n)
  
  3 - let c = [[1, 2], [3, 4]]       -> O(n^2)

  */



// Y siempre debemos SIMPLIFICAR la notación:
/* 
 
 O(1000 + 50) -> los numeros constantes se simplifican a 1 = O(1)
  
 O(n + 50) -> n es mayor que 50 en crecimiento = O(n)
  
 O(n + n) -> n+n es 2n, pero los factores se descartan = O(n)
  
 O(n^2 + n) -> n^2 > n, asi que nos quedamos con n^2 = O(n^2) */



 /* 
 Porque necesitamos big-O?

 Un algoritmo o un programa podrian ejecutarse en 5 o 10 horas, incluso si hablamos de una o varias
 computadoras, Big-O viene a poner ondragend, dandonos una forma facil de leer en la que podemos
 medir la eficiecnia de un algoritmo.
 */



 /* 
 ¿Por qué asignamos Big-O a cada estructura?

 Big-O medira el recurso generado respecto a la entreda del algoritmo, y las estructuras
 son un aspecto sencillo de convertir en medicion de recursos.Bi

 Por ejemplo

 -Con los bucles es sencillo, los bucles repiten instrucciones, y 
 al repetir toman más tiempo en la computadora.

 -Con los arreglos es igual, repiten una serie de elementos, y al 
 repetir esos elementos toman más espacio de la computadora. 
 */




 /* 
 ¿Por qué nos quedamos con el grado mayor al simplificar Big-O?

 En Big-O queremos comprender que tanto recurso (como tiempo y espacio) nos un 
 algoritmo cuando aumetamos los datos. Y cada grado aumenta a un ritmo totalmente distinto.

 Por ejemplo n crece más que 1000: 
 */


 /* 
 ¿Solo hay Big-O para espacio y tiempo?

 No, la complejidad es el estudio de los recursos que utlizan los algoritmos, estos recursos
 pueden ser medidos en cualquier concepto de hardware o software. Como acceso a la memoria, 
 comparaciones de condiciones, o lo que se necesite limitar.Big */


