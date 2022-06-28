/*1. Valor más cercano
Encuentre el valor más cercano a un valor dado.
Se proporciona una lista de valores en forma de arreglo y un valor para el que se necesita
encontrar el más cercano.
Por ejemplo, tenemos el siguiente conjunto de números: 4, 7, 10, 11, 12, 17, y necesitamos encontrar el valor más cercano al número 9. Si ordenamos este conjunto en orden
ascendente, entonces a la izquierda del número 9 estará el número 7 ya la derecha estará el
número 10. El número 10 está más cerca que 7, lo que significa que la respuesta correcta
es 10.
Algunas aclaraciones:
• Si 2 números están a la misma distancia, debe elegir el más pequeño
• El conjunto de números nunca está vacío, es decir, el tamaño es >=1
• El valor dado puede estar en el conjunto, lo que significa que es la respuesta
• El conjunto puede contener números tanto positivos como negativos, pero siempre
son enteros
• El conjunto no está ordenado y consta de números únicos (no repetidos)
Entrada: dos argumentos. Una lista de valores en forma de arreglo. El valor buscado es
un int.
Podemos realizar las siguientes pruebas para verificar el correcto funcionamiento:
nearestValue([4, 7, 10, 11, 12, 17], 9) == 10
nearestValue([4, 7, 10, 11, 12, 17], 8) == 7
nearestValue([4, 8, 10, 11, 12, 17], 9) == 8
nearestValue([4, 9, 10, 11, 12, 17], 9) == 9
nearestValue([4, 7, 10, 11, 12, 17], 0) == 4*/

const sortArray = (lista) => {
  return lista.sort((a, b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  })
}

const findLimits = (listaNumeros, numero) => {
  let indiceLimiteDerecho = listaNumeros.findIndex(item => item > numero)
  let indiceLimiteIzquierdo = indiceLimiteDerecho - 1

  return {
    limiteIzquierdo: listaNumeros[indiceLimiteIzquierdo],
    limiteDerecho: listaNumeros[indiceLimiteDerecho]
  }
}

const nearestValue = (listaNumeros, numero) => {
  const listaOrdenada = sortArray(listaNumeros)
  const limites = findLimits(listaOrdenada, numero)
  const distanciaDerecha = limites.limiteDerecho - numero
  const distanciaIzquierda = numero - limites.limiteIzquierdo

  // Si uno de los limites no existe automaticamente devolvemos el otro
  if (!limites.limiteIzquierdo) {
    return limites.limiteDerecho
  }

  if (!limites.limiteDerecho) {
    return limites.limiteIzquierdo
  }

  if (distanciaDerecha > distanciaIzquierda) {
    return limites.limiteIzquierdo
  } else if (distanciaDerecha < distanciaIzquierda) {
    return limites.limiteDerecho
  } else {
    return limites.limiteIzquierdo
  }
}

//nearestValue([4, 7, 10, 11, 12, 17], 0) == 4

/* 2. Encuentra la diferencia simétrica
El término matemático diferencia simétrica (sim) de dos conjuntos es el conjunto de elementos que están en cualquiera de los dos conjuntos pero no en ambos. Por ejemplo, para
conjuntos A = {1, 2, 3} y B = {2, 3, 4}, A sim B = {1, 4}.
La diferencia simétrica es una operación binaria, lo que significa que opera solo en dos
elementos. Entonces, para evaluar una expresión que involucra diferencias simétricas entre
tres elementos (A sim B sim C), debemos completar una operación a la vez. Así, para los
conjuntos A y B anteriores, y C = {2, 3}, A sim B sim C = (A sim B) sim C = {1, 4}
sim {2, 3} = {1, 2, 3, 4}.
Cree una función que tome dos o más matrices y devuelva una matriz de su diferencia
simétrica. La matriz devuelta debe contener solo valores únicos (sin duplicados).
Podemos realizar las siguientes pruebas para verificar el correcto funcionamiento: 
/*
Utilizamos el metodo reduce para calcular la diferencia simetrica
entre cada item de conjuntos y el item siguiente reduciendo asi conjuntos
a un solo conjunto con la diferencia simetrica 
*/
const sym = (conjuntos = []) => {
  return conjuntos.reduce((acumulador, conjuntoActual) => {
    return AsimB(acumulador, conjuntoActual)
  }, [])
}

// Calcula diferencia simetrica entre conjuntos a y b
const AsimB = (a, b) => {
  let sim = []
  a.forEach(aItem => {
    if (b.indexOf(aItem) === -1) {
      sim.push(aItem)
    }
  })

  b.forEach(bItem => {
    if (a.indexOf(bItem) === -1) {
      sim.push(bItem)
    }
  })

  let result = []

  sim.forEach((item) => {
    if (result.indexOf(item) === -1) {
      result.push(item)
    }
  })

  return result
}

