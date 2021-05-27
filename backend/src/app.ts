/* All express configuration */
import express from 'express'
import config from './config'

import studentsRoutes from './routes/students.routes'

const app = express(); 

app.set('port', config.PORT);

app.use(studentsRoutes);

export default app;