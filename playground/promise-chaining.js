require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5f0cac3a66d85124fed7289d', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments( { age: 1 })
}).then((result) => {
    console.log(result)
})
