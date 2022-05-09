const UserService = require ('./../../app/services/UserService')

describe("Test for UserService", () => {

    test ("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "jonathan guerra", "Jonathan")
        expect(user.username).toBe("jonathan guerra")
        expect(user.name).toBe("Jonathan")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
        })
    })