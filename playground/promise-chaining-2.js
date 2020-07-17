require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndRemove('5f0cb88dbdac9c2b8753d7b5').then((task) => {
//     console.log(task)
//     return Task.find({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const findAndremove = async (id) => {
    const removeTask = await Task.findByIdAndRemove('5f0cb88dbdac9c2b8753d7b5')
    const countTasks = await Task.countDocuments({completed: false})
    return countTasks
}

findAndremove("5f1063df4625612a96c50d1d").then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})