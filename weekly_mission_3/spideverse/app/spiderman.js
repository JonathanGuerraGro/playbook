class Spiderman{
constructor(name, age, actor, movies, studio, info) {
    this.name = name,
    this.age = age,
    this.actor = actor,
    this.movies = movies,
    this.studio = studio,
    this.info = info
}
get getInfo(){
    return this.info
    }
}


module.exports = Spiderman
