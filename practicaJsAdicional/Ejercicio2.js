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
  
  