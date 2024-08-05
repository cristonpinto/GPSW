// routes/notification.route.js
import express from 'express';
import { createNotification } from '../controllers/notification.controller.js';

const router = express.Router();

router.post('/notifications', createNotification);

export default router;
