describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {

       const andrewGarfield = new Spider ("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

       expect(andrewGarfield.name).toBe("Spiderman Sony")
       expect(andrewGarfield.age).toBe(31)
       expect(andrewGarfield.actor).toBe("Andrew Garfield")
       expect(andrewGarfield.movies.movies).toBe(31)
       expect(andrewGarfield.movies.studio).toBe("Sony")
    });
})