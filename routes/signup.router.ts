import { Router } from 'express';
import { getAllUsers, getUserInfo, postUserInfo, login } from '../controllers/authController';
import { postSwiper } from '../controllers/swipeController';
import { postMatch } from '../controllers/matchesController';
import { authMiddleware } from '../middlewares/auth';
const router = Router();

router.get('/read', getAllUsers);
router.get('/get/id', getUserInfo);
router.post('/sign-up', postUserInfo);
router.post('/login', login);

router.post('/swiper',authMiddleware, postSwiper);
router.post('/match', authMiddleware, postMatch);

export default router;