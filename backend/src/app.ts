/* All express configuration */
import cors from 'cors';
import express from 'express'
import morgan from 'morgan'
import config from './config'

import studentsRoutes from './routes/students.routes'

const app = express(); 

app.set('port', config.PORT);

app.use(morgan('dev')) //displays route being called on terminal 
app.use(cors()) //allows any server to make calls to the backend
app.use(express.json()); //allows to read json objects from POST methods
app.use(express.urlencoded({extended: false}));


app.use(studentsRoutes);

export default app;