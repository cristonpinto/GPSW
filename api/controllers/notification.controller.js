<<<<<<< HEAD
import Notification from '../models/notification.model.js';

export const createNotification = async (req, res) => {
  try {
    const { fullname, position } = req.body;
    const uniqueId = `notif_${Date.now()}`; // Generating a unique ID

    const newNotification = new Notification({
      fullname,
      position,
      uniqueId
=======
import Notification from '../models/Notification.js';

// Controller to create a new notification
export const createNotification = async (req, res) => {
  try {
    const { type, title, description } = req.body;
    const uniqueId = `notif_${Date.now()}`; // Generate a unique ID

    // Create a new notification with additional fields
    const newNotification = new Notification({
      type,           // Type of notification
      title,          // Title for the notification
      description,    // Detailed description     // User's department
      uniqueId        // Unique identifier
>>>>>>> 71bcfcc6365ad64a29b13ed74f2a8b0137cf16ac
    });

    await newNotification.save();
    res.status(201).json({ message: 'Notification created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

<<<<<<< HEAD
=======
// Controller to get all notifications
>>>>>>> 71bcfcc6365ad64a29b13ed74f2a8b0137cf16ac
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
<<<<<<< HEAD
};

=======
};
>>>>>>> 71bcfcc6365ad64a29b13ed74f2a8b0137cf16ac
