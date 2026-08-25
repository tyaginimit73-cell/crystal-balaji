import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crystal-balaji', { serverSelectionTimeoutMS: 2000 });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (e) {
    console.error('MongoDB connection failed:', e.message);
    console.log('Running without DB - using in-memory fallback');
  }
};
export default connectDB;
