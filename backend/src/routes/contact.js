import express from 'express';
import ContactInquiry from '../models/ContactInquiry.js';
import { protect } from '../middleware/auth.js';
const r=express.Router();
r.post('/', async(req,res)=>{
  const { name,email,message }=req.body;
  if(!name||!email||!message) return res.status(400).json({ success:false, message:'Required fields missing' });
  const d=await ContactInquiry.create(req.body);
  res.status(201).json({ success:true, message:'Inquiry received', data:d });
});
r.get('/', protect, async(req,res)=>{
  const data=await ContactInquiry.find().sort({ createdAt:-1 });
  res.json({ success:true, data });
});
r.delete('/:id', protect, async(req,res)=>{
  await ContactInquiry.findByIdAndDelete(req.params.id);
  res.json({ success:true, message:'Deleted' });
});
export default r;
