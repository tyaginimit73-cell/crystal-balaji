import User from '../models/User.js';
import Product from '../models/Product.js';
import Article from '../models/Article.js';
import Job from '../models/Job.js';
import LeadershipMember from '../models/LeadershipMember.js';
export async function seed(){
  try{
    if(!(await User.findOne({ email: process.env.ADMIN_EMAIL }))){
      await User.create({ name:'Admin', email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD });
      console.log('Admin seeded');
    }
    if((await Product.countDocuments())===0){
      await Product.insertMany([
        { name:'Pure Ethanol', slug:'ethanol', excerpt:'Fuel-grade anhydrous ethanol for blending and industrial use.', description:'High-purity grain-based ethanol produced through advanced distillation and molecular sieve dehydration. Meets fuel-blending specifications and industrial application standards.', image:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800', specs:['99.8% purity','Molecular sieve dehydration','Grain-based feedstock','EBP compliant'], order:1 },
        { name:'DDGS', slug:'ddgs', excerpt:'High-protein Distillers Dried Grains with Solubles for animal nutrition.', description:'Premium DDGS recovered from grain-based distillation – rich in protein, fiber and energy. Ideal for cattle, poultry and aqua feed.', image:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800', specs:['32%+ protein','High digestibility','Long shelf life','Integrated recovery'], order:2 },
        { name:'Liquid CO₂', slug:'liquid-co2', excerpt:'Food-grade recovered carbon dioxide for industrial applications.', description:'Captured and purified CO₂ from fermentation, liquefied for beverage, cold-chain, and industrial use – advancing circular manufacturing.', image:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800', specs:['Food grade','99.9% purity','Integrated recovery','Circular economy'], order:3 }
      ]);
    }
    if((await Article.countDocuments())===0){
      await Article.insertMany([
        { title:'Crystal Balaji Commissions 200 KLPD Grain-Based Distillery', slug:'200-klpd-commissioned', excerpt:'State-of-the-art grain-based distillery begins operations at Begrajpur, Muzaffarnagar.', content:'<p>Crystal Balaji Industries has commissioned its 200 KLPD grain-based distillery... Detailed project updates to follow.</p>', coverImage:'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800', category:'Operations', author:'Corporate Communications', tags:['ethanol','distillery'], published:true, publishedAt:new Date() },
        { title:'Sustainability by Design: Zero Liquid Discharge Approach', slug:'zld-sustainability', excerpt:'How integrated water management and ZLD shape responsible manufacturing.', content:'<p>Our ZLD philosophy ensures maximum water recycling...</p>', coverImage:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800', category:'Sustainability', author:'ESG Team', tags:['sustainability','zld'], published:true, publishedAt:new Date() },
        { title:'Proposed Expansion to 400 KLPD: Vision for Next-Scale Manufacturing', slug:'expansion-400-klpd', excerpt:'Proposed ₹383.14 Crore expansion toward 400 KLPD and 12.5 MW co-generation.', content:'<p>The proposed expansion is under planning... This article clarifies proposed vs operational capacities.</p>', coverImage:'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800', category:'Expansion', author:'Management', tags:['expansion','investment'], published:true, publishedAt:new Date() }
      ]);
    }
    if((await Job.countDocuments())===0){
      await Job.insertMany([
        { title:'Shift Chemist - Distillation', department:'Operations', location:'Begrajpur, Muzaffarnagar', type:'Full-time', description:'Oversee distillation and fermentation operations.', requirements:['B.Sc / M.Sc Chemistry','2+ years in distillery','Knowledge of DCS'] },
        { title:'Maintenance Engineer - Boiler & Power', department:'Engineering', location:'Begrajpur', type:'Full-time', description:'Maintain 40 TPH boiler and 4.2-5 MW power infrastructure.', requirements:['B.E. Mechanical','Boiler operation cert preferred','3+ years experience'] },
        { title:'EHS Officer', department:'Sustainability', location:'Muzaffarnagar', type:'Full-time', description:'Lead environment, health, safety and ZLD compliance.', requirements:['Industrial safety diploma','Knowledge of environmental norms'] }
      ]);
    }
    if((await LeadershipMember.countDocuments())===0){
      await LeadershipMember.insertMany([
        { name:'Sapna Kumar', position:'Director', order:1 },
        { name:'Karan Swarup', position:'Director', order:2 },
        { name:'Akansha Kumar', position:'Director', order:3 },
        { name:'Kartik Swarup', position:'Director', order:4 },
        { name:'Shourya Jain', position:'Director', order:5 },
        { name:'Kanika Swarup', position:'Director', order:6 }
      ]);
    }
    console.log('Seed completed');
  }catch(e){ console.error('Seed error', e.message); }
}
