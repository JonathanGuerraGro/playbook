const User = require ('./../../app/models/User')

describe('Unit Test for User class', () => {

    test ('Create an User object', () => {
        //Aqui se invoca el codigo que se usara en la app
        const user = new User(1, "jonathan guerra", "Jonathan", "Bio", "dateCreated", "lastUpdated")

        //Aqui validamos los resultado del codigo
        // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)

        expect(user.id).toBe(1)
        expect(user.username).toBe("jonathan guerra")
        expect(user.name).toBe("Jonathan")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test('Add getters', () => {
        const user = new User(1, "jonathan guerra", "Jonathan", "Bio")
        expect(user.getUsername).toBe("jonathan guerra")
        expect(user.getBio).toBe("Bio")
        expect(user.getDataCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })


})