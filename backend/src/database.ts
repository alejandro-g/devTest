/*Mongo DB connection */
import mongoose from 'mongoose'

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/studentsDB', {
        useUnifiedTopology: true, 
        useNewUrlParser: true
    });
    console.log('database is connected')
})()