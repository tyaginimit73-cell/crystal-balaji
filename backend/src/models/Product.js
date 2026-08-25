import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: String,
  description: String,
  image: String,
  specs: [String],
  order: { type: Number, default: 0 },
  status: { type: String, enum: ['active','draft'], default: 'active' }
}, { timestamps: true });
export default mongoose.model('Product', productSchema);
