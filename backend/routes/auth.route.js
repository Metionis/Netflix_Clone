import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller.js';

const router = express.Router();

// auth is post up the input data then check database if there exist the account or not
router.post("/signup", signup);

router.post("/login", login)

router.post("/logout", logout)

export default router;