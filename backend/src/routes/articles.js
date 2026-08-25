import express from 'express';
import Article from '../models/Article.js';
import { protect } from '../middleware/auth.js';
const r=express.Router();
r.get('/', async(req,res)=>{
  const { search, category, published, page=1, limit=9 }=req.query;
  const q={};
  if(published) q.published = published==='true';
  if(category) q.category=category;
  if(search) q.title={$regex:search,$options:'i'};
  try{
    const data=await Article.find(q).sort({ publishedAt:-1, createdAt:-1 }).limit(limit*1).skip((page-1)*limit);
    const total=await Article.countDocuments(q);
    if(data.length===0 && !search){
      // fallback mock
      const mock=[
        { _id:'1', title:'Crystal Balaji Commissions 200 KLPD Distillery', slug:'200-klpd-commissioned', excerpt:'200 KLPD grain-based distillery at Begrajpur.', coverImage:'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800', category:'Operations', author:'Corporate', published:true, publishedAt:new Date(), tags:['ethanol'] },
        { _id:'2', title:'Zero Liquid Discharge Approach', slug:'zld-sustainability', excerpt:'Integrated water management.', coverImage:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800', category:'Sustainability', published:true, publishedAt:new Date(), tags:['zld'] },
        { _id:'3', title:'Proposed Expansion to 400 KLPD', slug:'expansion-400-klpd', excerpt:'₹383.14 Cr expansion vision.', coverImage:'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800', category:'Expansion', published:true, publishedAt:new Date(), tags:['expansion'] }
      ];
      return res.json({ success:true, data:mock, total:mock.length });
    }
    res.json({ success:true, data, total });
  }catch(e){ res.status(500).json({ success:false, message:e.message }); }
});
r.get('/:slug', async(req,res)=>{
  const a=await Article.findOne({ slug:req.params.slug });
  if(!a) return res.status(404).json({ success:false, message:'Not found' });
  res.json({ success:true, data:a });
});
r.post('/', protect, async(req,res)=>{
  const a=await Article.create(req.body);
  res.status(201).json({ success:true, data:a });
});
r.put('/:id', protect, async(req,res)=>{
  const a=await Article.findByIdAndUpdate(req.params.id, req.body, { new:true });
  res.json({ success:true, data:a });
});
r.delete('/:id', protect, async(req,res)=>{
  await Article.findByIdAndDelete(req.params.id);
  res.json({ success:true, message:'Deleted' });
});
export default r;
