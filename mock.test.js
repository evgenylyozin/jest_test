function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index])
    }
}

const mockCallback = jest.fn((x) => 42 + x)
forEach([0, 1], mockCallback)

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2)

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0)

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(1)

// The return value of the first call to the function was 42
expect(mockCallback.mock.results[0].value).toBe(42)

const myMock = jest.fn()
console.log(myMock())
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)

console.log(myMock(), myMock(), myMock(), myMock())
// > 10, 'x', true, true

// users.test.js
import axios from 'axios'
import Users from './users'

jest.mock('axios')

test('should fetch users', () => {
    const users = [{ name: 'Bob' }]
    const resp = { data: users }
    axios.get.mockResolvedValue(resp)

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return Users.all().then((data) => expect(data).toEqual(users))
})
