import express from 'express';
import Job from '../models/Job.js';
import JobApplication from '../models/JobApplication.js';
import { protect } from '../middleware/auth.js';
const r=express.Router();
r.get('/', async(req,res)=>{
  const data=await Job.find({ active:true }).sort({ createdAt:-1 });
  if(data.length===0){
    return res.json({ success:true, data:[
      { _id:'1', title:'Shift Chemist - Distillation', department:'Operations', location:'Begrajpur, Muzaffarnagar', type:'Full-time', description:'Oversee distillation and fermentation.', requirements:['B.Sc Chemistry','2+ years']},
      { _id:'2', title:'Maintenance Engineer - Boiler & Power', department:'Engineering', location:'Begrajpur', type:'Full-time', description:'Maintain 40 TPH boiler and power.', requirements:['B.E. Mechanical','Boiler cert']},
      { _id:'3', title:'EHS Officer', department:'Sustainability', location:'Muzaffarnagar', type:'Full-time', description:'Lead EHS and ZLD compliance.', requirements:['Safety diploma']}
    ]});
  }
  res.json({ success:true, data });
});
r.post('/', protect, async(req,res)=>{
  const j=await Job.create(req.body);
  res.status(201).json({ success:true, data:j });
});
r.delete('/:id', protect, async(req,res)=>{
  await Job.findByIdAndDelete(req.params.id);
  res.json({ success:true, message:'Deleted' });
});
r.post('/applications', async(req,res)=>{
  const { name,email }=req.body;
  if(!name||!email) return res.status(400).json({ success:false, message:'Name and email required' });
  const a=await JobApplication.create(req.body);
  res.status(201).json({ success:true, message:'Application received', data:a });
});
r.get('/applications/all', protect, async(req,res)=>{
  const data=await JobApplication.find().sort({ createdAt:-1 });
  res.json({ success:true, data });
});
export default r;
