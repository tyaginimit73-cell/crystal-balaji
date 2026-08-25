import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  company: String,
  subject: String,
  message: { type: String, required: true },
  status: { type: String, default: 'new' }
}, { timestamps: true });
export default mongoose.model('ContactInquiry', schema);
