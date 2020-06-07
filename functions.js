const axios = require('axios').default

const functions = {}

functions.add = (a, b) => a + b
functions.isNull = () => null
functions.checkValue = (x) => x
functions.createUser = () => {
    const user = { firstName: 'Park' }
    user['lastName'] = 'Jong Hyeok'
    return user
}
functions.fetchUser = () =>
    axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => res.data)
        .catch((err) => 'error')

module.exports = functions
