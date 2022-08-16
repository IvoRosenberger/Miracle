// Ejercicio 4.2
// Dado el siguiente codigo:
class Person {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  const jane = new Person("Juan", 31);
  console.log("[Ejercicio 5.2]", `El nombre de la nueva persona es ${jane.getName()}.`);
  // 1 Añadir tipos de parámetros explícitos al constructor
  // 2 Agregue parámetros con tipos para almacenar valores