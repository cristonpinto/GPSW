// controllers/notification.controller.js
import Notification from '../models/Notification.js';

export const createNotification = async (req, res) => {
  try {
    const { fullname, position } = req.body;
    const uniqueId = `notif_${Date.now()}`; // Generating a unique ID

    const newNotification = new Notification({
      fullname,
      position,
      uniqueId
    });

    await newNotification.save();
    res.status(201).json({ message: 'Notification created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
