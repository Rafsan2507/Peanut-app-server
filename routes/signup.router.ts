import { Router } from 'express';
import { getAllUsers, getUserInfo, postUserInfo, login2 } from '../controllers/signupController';
const router = Router();

router.get('/read', getAllUsers);
router.get('/get/id', getUserInfo);
router.post('/add', postUserInfo);
router.post('/login', login2);

export default router;