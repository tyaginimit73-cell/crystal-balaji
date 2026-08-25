import express from 'express';
import LeadershipMember from '../models/LeadershipMember.js';
const r=express.Router();
r.get('/', async(req,res)=>{
  const data=await LeadershipMember.find().sort({ order:1 });
  if(data.length===0){
    return res.json({ success:true, data:[
      { name:'Sapna Kumar', position:'Director' },
      { name:'Karan Swarup', position:'Director' },
      { name:'Akansha Kumar', position:'Director' },
      { name:'Kartik Swarup', position:'Director' },
      { name:'Shourya Jain', position:'Director' },
      { name:'Kanika Swarup', position:'Director' }
    ]});
  }
  res.json({ success:true, data });
});
export default r;
