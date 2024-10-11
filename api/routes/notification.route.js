import express from 'express';
import { createNotification, getNotifications } from '../controllers/notification.controller.js';

const router = express.Router();

router.post('/notifications', createNotification);
router.get('/notifications', getNotifications); // Add this line

export default router;
<<<<<<< HEAD
;
=======
>>>>>>> 71bcfcc6365ad64a29b13ed74f2a8b0137cf16ac
