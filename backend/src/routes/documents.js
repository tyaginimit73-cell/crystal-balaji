import express from 'express';
import Document from '../models/Document.js';
import { protect } from '../middleware/auth.js';
const r=express.Router();
r.get('/', async(req,res)=>{
  const data=await Document.find().sort({ createdAt:-1 });
  res.json({ success:true, data });
});
r.post('/', protect, async(req,res)=>{
  const d=await Document.create(req.body);
  res.status(201).json({ success:true, data:d });
});
r.delete('/:id', protect, async(req,res)=>{
  await Document.findByIdAndDelete(req.params.id);
  res.json({ success:true, message:'Deleted' });
});
export default r;
