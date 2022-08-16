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