import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  position: String,
  resumeUrl: String,
  message: String,
  status: { type: String, default: 'pending' }
}, { timestamps: true });
export default mongoose.model('JobApplication', schema);
