import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  position: { type: String, required: true },
  uniqueId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Notification', NotificationSchema);

