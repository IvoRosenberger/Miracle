// Ejercicio 3.4
// Dado el siguiente codigo:
function greet(greeting: string = "Hola"): string {
    return greeting.toUpperCase();
  }
  const defaultGreeting: string = greet();
  const portugueseGreeting: string = greet("Oi como vai!");
  console.log("[Ejercicio 3.4]", defaultGreeting, portugueseGreeting);
  // 1 Añadir tipos explícitos a los parámetros y tipo de retorno
  // 2 Añadir un saludo predeterminado: ”hola”