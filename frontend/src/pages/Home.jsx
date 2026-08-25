import { Link } from 'react-router-dom'
import { ArrowUpRight, Droplets, Zap, Leaf, Factory } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts'

export default function Home(){
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-forest">
        <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80" alt="plant" className="absolute inset-0 w-full h-full object-cover opacity-60"/>
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/70 to-transparent"/>
        <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent"/>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 py-32 w-full">
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur px-3 py-1.5 text-[11px] tracking-[0.2em] text-white/90 mb-6">CIN : U15400UP2020PTC133900 • ESTD 2020 • MUZAFFARNAGAR</div>
            <h1 className="font-display text-[44px] md:text-[64px] lg:text-[72px] leading-[0.9] tracking-tight text-white">
              Powering a <span className="italic font-normal text-gold">Sustainable</span><br/>Future Through<br/>Bio-Energy
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">Advanced grain-based bio-energy manufacturing built around efficiency, innovation and responsible industrial growth.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/plant" className="inline-flex items-center gap-2 bg-white text-forest px-8 py-4 text-sm font-semibold tracking-wide hover:bg-offwhite transition">Explore Our Capabilities <ArrowUpRight size={18}/></Link>
              <Link to="/products" className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-white hover:text-forest transition">Discover Our Products</Link>
            </div>
          </motion.div>

          {/* floating stats */}
          <div className="mt-12 lg:mt-0 lg:absolute lg:right-8 lg:bottom-10 grid grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3 max-w-3xl">
            {[
              {k:'200 KLPD', v:'Grain Distillation'},
              {k:'4.2–5 MW', v:'Power Infrastructure'},
              {k:'Zero Liquid Discharge', v:'Sustainability Focus'}
            ].map(s=>(
              <div key={s.k} className="bg-white/95 backdrop-blur p-5 min-w-[180px]">
                <div className="text-forest font-display text-xl font-bold leading-none">{s.k}</div>
                <div className="text-[11px] tracking-[0.15em] text-steel uppercase mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO EDITORIAL */}
      <section className="py-20 lg:py-28 bg-offwhite">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80" className="w-full h-[520px] object-cover"/>
              <div className="absolute -bottom-6 -right-6 bg-forest text-white p-6 max-w-[240px] hidden md:block">
                <div className="text-gold text-xs tracking-[0.2em] mb-2">LOCATION</div>
                <div className="text-sm leading-relaxed">Begrajpur, Tehsil Khatauli,<br/>Muzaffarnagar, Uttar Pradesh — Grain belt of India</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <div className="text-gold text-xs tracking-[0.25em] font-semibold mb-4">WHO WE ARE</div>
              <h2 className="font-display text-[38px] md:text-[46px] leading-[0.95] text-forest mb-6">Engineering Energy<br/><span className="italic font-normal">From What Grows</span></h2>
              <p className="text-steel leading-relaxed mb-6">Crystal Balaji Industries Private Limited transforms agricultural feedstock — corn and broken rice — into fuel-grade ethanol, high-protein DDGS and food-grade liquid CO₂ through an integrated, resource-efficient manufacturing platform at Begrajpur.</p>
              <p className="text-steel leading-relaxed mb-8">Established in 2020, the company combines grain-based distillation, molecular sieve dehydration, biomass energy and Zero Liquid Discharge to deliver scale with responsibility.</p>
              <div className="grid grid-cols-2 gap-6 border-t border-black/10 pt-6">
                <div><div className="font-display text-2xl text-forest">2020</div><div className="text-xs tracking-[0.15em] text-steel">ESTABLISHED</div></div>
                <div><div className="font-display text-2xl text-forest">Grain-Based</div><div className="text-xs tracking-[0.15em] text-steel">BIO-ENERGY</div></div>
                <div><div className="font-display text-2xl text-forest">Integrated</div><div className="text-xs tracking-[0.15em] text-steel">MANUFACTURING</div></div>
                <div><div className="font-display text-2xl text-forest">Uttar Pradesh</div><div className="text-xs tracking-[0.15em] text-steel">HEARTLAND</div></div>
              </div>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-semibold text-forest">More About Us <ArrowUpRight size={16}/></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY NUMBERS */}
      <section className="bg-forest text-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
            <h3 className="font-display text-3xl">Scale. Precision. Responsibility.</h3>
            <p className="text-white/60 max-w-md text-sm">Current operational capacities. Proposed expansion clearly distinguished — see Expansion page.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              {n:'200', u:'KLPD', l:'Distillation Capacity', sub:'Current'},
              {n:'40', u:'TPH', l:'Boiler System', sub:'Steam'},
              {n:'4.2–5', u:'MW', l:'Power Infrastructure', sub:'Co-generation'},
              {n:'3+', u:'', l:'Core Product Categories', sub:'Ethanol • DDGS • CO₂'}
            ].map(s=>(
              <div key={s.l} className="bg-forest p-8">
                <div className="font-display text-4xl leading-none">{s.n}<span className="text-gold text-xl ml-1">{s.u}</span></div>
                <div className="text-sm mt-2">{s.l}</div>
                <div className="text-xs tracking-[0.15em] text-white/50 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div><div className="text-gold text-xs tracking-[0.25em] font-semibold">PRODUCTS</div><h3 className="font-display text-4xl text-forest mt-2">From Grain to Value</h3></div>
            <Link to="/products" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold border border-forest px-6 py-3">View All Products <ArrowUpRight size={16}/></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {name:'Pure Ethanol', desc:'Anhydrous fuel-grade ethanol for blending and industrial applications. 99.8% purity via molecular sieve.', img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600', specs:['EBP Compliant','High Purity']},
              {name:'DDGS', desc:'Distillers Dried Grains with Solubles — protein-rich, high-energy animal nutrition.', img:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600', specs:['32%+ Protein','Long Shelf Life']},
              {name:'Liquid CO₂', desc:'Food-grade carbon dioxide recovered from fermentation, liquefied for beverage & industry.', img:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600', specs:['Food Grade','99.9% Purity']}
            ].map(p=>(
              <div key={p.name} className="group border border-black/10 bg-offwhite overflow-hidden">
                <div className="h-64 overflow-hidden"><img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/></div>
                <div className="p-6">
                  <h4 className="font-display text-xl text-forest">{p.name}</h4>
                  <p className="text-sm text-steel mt-2 leading-relaxed">{p.desc}</p>
                  <div className="flex gap-2 mt-4">{p.specs.map(s=> <span key={s} className="text-[11px] tracking-wide bg-white border border-black/10 px-2 py-1">{s}</span>)}</div>
                  <Link to="/products" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forest">Learn More <ArrowUpRight size={14}/></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPANSION TEASER */}
      <section className="py-16 bg-cream border-y border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-forest text-gold px-3 py-1 text-[11px] tracking-[0.2em]">PROPOSED EXPANSION • NOT YET OPERATIONAL</div>
            <h3 className="font-display text-3xl md:text-4xl text-forest mt-4">Building the Next Scale of Sustainable Manufacturing</h3>
            <p className="text-steel mt-4 leading-relaxed">Proposed vision: from 200 KLPD → 400 KLPD distillation and 4.2–5 MW → 12.5 MW co-generation. Proposed project value ~₹383.14 Crore — subject to approvals.</p>
            <div className="mt-6 flex gap-4">
              <div className="flex-1 bg-white border border-black/10 p-4 text-center"><div className="text-xs tracking-[0.15em] text-steel">CURRENT</div><div className="font-display text-2xl text-forest">200 KLPD</div></div>
              <div className="flex items-center text-gold">→</div>
              <div className="flex-1 bg-forest text-white p-4 text-center"><div className="text-xs tracking-[0.15em] text-white/60">PROPOSED</div><div className="font-display text-2xl">400 KLPD</div></div>
            </div>
            <Link to="/expansion" className="mt-6 inline-flex items-center gap-2 bg-forest text-white px-6 py-3 text-sm font-medium">Explore Expansion Vision <ArrowUpRight size={16}/></Link>
          </div>
          <div className="bg-white p-6 border border-black/10">
            <div className="text-xs tracking-[0.2em] font-semibold text-steel mb-4">CAPACITY ROADMAP</div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={[{name:'Current', val:200},{name:'Proposed', val:400}]}>
                <XAxis dataKey="name" tick={{fontSize:12}} axisLine={false} tickLine={false}/>
                <YAxis tick={{fontSize:12}} axisLine={false} tickLine={false}/>
                <Tooltip/>
                <Bar dataKey="val" radius={[8,8,0,0]}>
                  <Cell fill="#0f2a1d"/><Cell fill="#c9a86a"/>
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="text-xs text-steel text-center mt-2">KLPD — Distillation Capacity</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="font-display text-4xl">Partner With Responsible Energy</h3>
          <p className="text-white/70 mt-4">Whether you're an offtaker, partner or future colleague — we'd like to hear from you.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/contact" className="bg-white text-forest px-8 py-3 font-medium inline-flex items-center gap-2">Contact Us <ArrowUpRight size={16}/></Link>
            <Link to="/careers" className="border border-white text-white px-8 py-3 font-medium">Careers</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
