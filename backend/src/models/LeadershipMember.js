import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  position: String,
  bio: String,
  image: String,
  order: { type: Number, default: 0 },
  linkedin: String
}, { timestamps: true });
export default mongoose.model('LeadershipMember', schema);
