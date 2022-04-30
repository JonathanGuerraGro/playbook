const repo = {
    name: "LaunchX",
    author: "JonathanGuerra",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())


   const facebook = {
       user: "Jonathan",
       alias: "Guera Guerrero",
       age: 25,
       friends: 509,
       photos: 100,
       posts: 20,

       info: function() {
    return `The Facebook of ${this.user} have a total of ${this.photos} photos and ${this.friends} friends`
       }
   }
   console.log(facebook.info())


  