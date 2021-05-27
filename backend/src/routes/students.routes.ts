/*GET,POST,PUT Methods*/
import { Router } from 'express';
import * as studentCtrl from './students.controller'

const router = Router(); 

// Establishing routes for all possible CRUD operations
router.get('/students' , studentCtrl.getStudents);

router.get('/students/:id' , studentCtrl.getStudent);

router.post('/students' , studentCtrl.createStudent);

router.delete('/students/:id' , studentCtrl.deleteStudent);

router.put('/students/:id' , studentCtrl.updateStudent);

export default router;