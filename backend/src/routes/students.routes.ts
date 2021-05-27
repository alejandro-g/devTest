/*GET,POST,PUT Methods*/
import { Router } from 'express';
const router = Router(); 

router.get('/students' , (req, res) => res.json('getting students'));

export default router;