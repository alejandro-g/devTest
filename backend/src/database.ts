/*Mongo DB connection */
import mongoose, { ConnectionOptions, ConnectOptions } from 'mongoose'
import config from './config';

(async () => {
    try{
        const mongooseOptions: ConnectionOptions = {
            useUnifiedTopology: true, 
            useNewUrlParser: true,
        }
        const database = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
        console.log('database is connected to:', `${config.MONGO_DATABASE}`);
    } catch(error) {
        console.error(error)
    }
})()