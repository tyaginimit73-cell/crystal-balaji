import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  category: String,
  fileUrl: String,
  fileName: String,
  size: String
}, { timestamps: true });
export default mongoose.model('Document', schema);
