const functions = require('./functions')

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

// Not
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

// toBeFalsy & toBeTruthy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
})

// If it should pass with deep equality, replace "toBe" with "toStrictEqual"
test('User should be Park Jong Hyeok object', () => {
    expect(functions.createUser()).toStrictEqual({
        firstName: 'Park',
        lastName: 'Jong Hyeok',
    })
})

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800
    const load2 = 700
    expect(load1 + load2).toBeLessThan(1600)
    // expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i)
})

// Arrays
test('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
    // expect(usernames).not.toContain('admin')
})

// Working with async data
// Promise
test('User fetched name should be leanne Graham', () => {
    expect.assertions(1)
    return functions.fetchUser().then((data) => {
        expect(data.name).toEqual('Leanne Graham')
    })
})

// Async & Await
test('User fetched name should be leanne Graham', async () => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})
