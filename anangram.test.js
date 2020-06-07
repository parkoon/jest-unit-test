const isAnagram = require('./anagram')

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function')
})

test('"cinema" is and anangram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test('"Dormitory" is and anangram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy()
})
