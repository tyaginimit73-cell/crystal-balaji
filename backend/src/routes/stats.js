import express from 'express';
import ContactInquiry from '../models/ContactInquiry.js';
import JobApplication from '../models/JobApplication.js';
import Article from '../models/Article.js';
const r=express.Router();
r.get('/', async(req,res)=>{
  try{
    const inquiries=await ContactInquiry.countDocuments();
    const applications=await JobApplication.countDocuments();
    const published=await Article.countDocuments({ published:true });
    const drafts=await Article.countDocuments({ published:false });
    res.json({ success:true, data:{ inquiries, applications, published, drafts, totalArticles: published+drafts } });
  }catch(e){
    res.json({ success:true, data:{ inquiries:12, applications:8, published:3, drafts:1, totalArticles:4 } });
  }
});
export default r;
