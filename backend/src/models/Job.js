import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  department: String,
  location: String,
  type: { type: String, default: 'Full-time' },
  description: String,
  requirements: [String],
  active: { type: Boolean, default: true }
}, { timestamps: true });
export default mongoose.model('Job', schema);
