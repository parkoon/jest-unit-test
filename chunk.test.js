const chunkArray = require('./chunk')

test('chunkArry function exists', () => {
    expect(chunkArray).toBeDefined()
})

test('Chunk and array of 10 values with length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const len = 2
    const chunkedArr = chunkArray(numbers, len)
    expect(chunkedArr).toEqual([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9, 10],
    ])
})

test('Chunk and array of 10 values with length of 1', () => {
    const numbers = [1, 2, 3]
    const len = 1
    const chunkedArr = chunkArray(numbers, len)
    expect(chunkedArr).toEqual([[1], [2], [3]])
})
