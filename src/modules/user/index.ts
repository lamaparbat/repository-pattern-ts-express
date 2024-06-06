import { Router } from "express";
import { container } from "../../config/dependencyRegistration";


const router = Router();
const userController = container.resolve("userController");

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/register', userController.register);

export default router;