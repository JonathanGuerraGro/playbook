const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]


   explorers.forEach(explorers => console.log(explorers.name))
   explorers.forEach(explorers => console.log(explorers.stack))


   const newStack = explorers.map((explorer)=>{return explorer.stack})
   console.log(newStack)

   const filter = explorers.filter((explorer)=>{return explorer.stack.includes("js")})
   console.log(filter)

   const ciudad = explorers.find((element) => {return element.city == "CDMX"})
   console.log(ciudad)

   const suma = explorers.reduce( function (acc, element) {return acc + element.exercises_completed},0)
   console.log(suma)

   const frontEndTrue = explorers.some((element) => {return element.missions.frontend.exercisesFinished === true})
   console.log(frontEndTrue)