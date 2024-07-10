import { Router } from 'express';
import { getAllUsers, getUserInfo, postUserInfo } from '../controllers/signupController';
const router = Router();

router.get('/read', getAllUsers);
router.get('/get/id', getUserInfo);
router.post('/add', postUserInfo);

export default router;