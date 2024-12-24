import { Router } from 'express';
import { getUserData, handleLogout, LoginUser, registerUser } from '../controller/user-controller.js';
import { authMiddleware } from '../utility/auth.js';
const router= Router()

router.post('/signup',registerUser)
router.post('/login',LoginUser)
router.get('/profile',authMiddleware,getUserData)
router.post('/logout',handleLogout)
export default router 