
import { Router } from 'express';
import { addStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } from '../controller/student-controller.js';
import { authMiddleware } from '../utility/auth.js';

const router = Router();

router.post('/students',authMiddleware,addStudent);
router.get('/students',authMiddleware, getAllStudents);
router.get('/students/:id',authMiddleware, getStudentById);
router.put('/students/:id',authMiddleware, updateStudent);
router.delete('/students/:id',authMiddleware, deleteStudent);

export default router;
 