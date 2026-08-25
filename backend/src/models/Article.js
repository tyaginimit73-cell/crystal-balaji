import mongoose from 'mongoose';
const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: String,
  content: String,
  coverImage: String,
  category: { type: String, default: 'Company News' },
  author: { type: String, default: 'Crystal Balaji' },
  tags: [String],
  published: { type: Boolean, default: false },
  publishedAt: Date,
  seoTitle: String,
  seoDescription: String
}, { timestamps: true });
articleSchema.index({ slug: 1, published: 1 });
export default mongoose.model('Article', articleSchema);
