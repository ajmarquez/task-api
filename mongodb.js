//CRUD Create Read Update and Delete
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to Database! 😖')
    }

    const db = client.db(databaseName)

    // db.collection('users').updateOne({ 
    //     _id: new ObjectID("5f09da104f94ec3b882e0bdc")
    // }, {
    //     $inc: {
    //         age: 2
    //     }
    // }).then((result) => {
    //     console.log('Here is the result: ' + result)
    // }).catch((error) => {
    //     console.log('Theres been an error: ' + error)
    // })

    db.collection('tasks').deleteOne({
        description: "Work on Node.js" 
    }).then((result) => {
            console.log('Success')
        }).catch((error) => {
            console.log(error)
        })
})