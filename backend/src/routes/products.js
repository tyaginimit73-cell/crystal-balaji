import express from 'express';
import Product from '../models/Product.js';
import { protect } from '../middleware/auth.js';
const r=express.Router();
r.get('/', async(req,res)=>{
  const p=await Product.find({ status:'active' }).sort({ order:1 });
  if(p.length===0){
    return res.json({ success:true, data:[
      { name:'Pure Ethanol', slug:'ethanol', excerpt:'Fuel-grade anhydrous ethanol', description:'High-purity grain ethanol.', image:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800', specs:['99.8% purity']},
      { name:'DDGS', slug:'ddgs', excerpt:'High-protein animal feed', description:'Premium DDGS.', image:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800', specs:['32% protein']},
      { name:'Liquid CO₂', slug:'liquid-co2', excerpt:'Food-grade CO₂', description:'Recovered CO₂.', image:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800', specs:['Food grade']}
    ]});
  }
  res.json({ success:true, data:p });
});
r.get('/:slug', async(req,res)=>{
  const p=await Product.findOne({ slug:req.params.slug });
  if(!p) return res.status(404).json({ success:false, message:'Not found' });
  res.json({ success:true, data:p });
});
r.post('/', protect, async(req,res)=>{
  const p=await Product.create(req.body);
  res.status(201).json({ success:true, data:p });
});
r.put('/:id', protect, async(req,res)=>{
  const p=await Product.findByIdAndUpdate(req.params.id, req.body, { new:true });
  res.json({ success:true, data:p });
});
r.delete('/:id', protect, async(req,res)=>{
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success:true, message:'Deleted' });
});
export default r;
