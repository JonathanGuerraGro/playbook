// Ejemplo  9: Herencia entre dos clases
class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
          return this.name
      }
  }
  
  console.log("Ejemplo  9: Herencia entre dos clases")
  const JonathanDev = new Developer("Jonathan Guerra", "js", ["html", "css", "react"])
  console.log(JonathanDev)
  
  // Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
  // Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
  class LaunchXStudent extends Developer{
  }
  
  const JonathanLaunchXDev = new LaunchXStudent("Jonathan Guerra", "js", ["html", "css", "react" ])
  console.log(JonathanLaunchXDev)
  console.log(JonathanLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija
  