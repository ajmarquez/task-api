require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndRemove('5f0cb88dbdac9c2b8753d7b5').then((task) => {
    console.log(task)
    return Task.find({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})