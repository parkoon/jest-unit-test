const reversString = require('./reversestring')

test('reverseString function exists', () => {
    // expect(typeof reversString).toBe('function')
    expect(reversString).toBeDefined()
})

test('String reverses', () => {
    expect(reversString('hello')).toEqual('olleh')
})

test('String reverses with Uppercase', () => {
    expect(reversString('Hello')).toEqual('olleh')
})
