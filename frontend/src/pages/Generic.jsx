import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { ArrowUpRight } from 'lucide-react'

function Hero({ title, subtitle, hint }){
  return (
    <section className="pt-32 pb-16 bg-forest text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {hint && <div className="text-gold text-xs tracking-[0.25em] font-semibold mb-4">{hint}</div>}
        <h1 className="font-display text-[40px] md:text-[54px] leading-[0.95] max-w-3xl">{title}</h1>
        {subtitle && <p className="text-white/70 mt-4 max-w-2xl text-lg leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}

export function About(){
  return <div>
    <Hero hint="ABOUT US" title="Sustainable Manufacturing, Rooted in Agriculture" subtitle="Crystal Balaji Industries Private Limited — incorporated 3 September 2020, CIN U15400UP2020PTC133900 — builds integrated grain-based bio-energy at Muzaffarnagar, Uttar Pradesh."/>
    <section className="py-16 bg-offwhite">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <Reveal><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900" className="w-full h-[420px] object-cover"/></Reveal>
        <div>
          <h3 className="font-display text-3xl text-forest">Mission</h3><p className="text-steel mt-3 leading-relaxed">To produce clean energy and industrial products efficiently, safely and responsibly — creating value from agricultural feedstock while minimizing environmental impact.</p>
          <h3 className="font-display text-3xl text-forest mt-8">Vision</h3><p className="text-steel mt-3 leading-relaxed">To scale as a trusted Indian bio-energy platform recognized for operational excellence, circular manufacturing and long-term partnerships.</p>
          <h3 className="font-display text-2xl text-forest mt-8">Values</h3><ul className="mt-3 grid grid-cols-2 gap-3 text-sm text-steel"><li className="border border-black/10 bg-white p-3">Integrity</li><li className="border border-black/10 bg-white p-3">Safety First</li><li className="border border-black/10 bg-white p-3">Resource Efficiency</li><li className="border border-black/10 bg-white p-3">Environmental Responsibility</li></ul>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <h3 className="font-display text-3xl text-forest">Timeline</h3>
        <div className="mt-8 border-l-2 border-gold/40 pl-8 space-y-8">
          <div><div className="font-display text-xl text-forest">2020 — Company Incorporated</div><p className="text-steel text-sm">Crystal Balaji Industries Private Limited incorporated as a Non-Government Private Limited Company (ROC Kanpur).</p></div>
          <div><div className="font-display text-xl text-forest">Operational Development</div><p className="text-steel text-sm">Development of 200 KLPD grain-based distillery, 40 TPH boiler and 4.2–5 MW power infrastructure at Begrajpur.</p></div>
          <div><div className="font-display text-xl text-forest">Current Operations</div><p className="text-steel text-sm">Integrated production of ethanol, DDGS and liquid CO₂ with ZLD philosophy.</p></div>
          <div><div className="font-display text-xl text-gold">Future — Proposed Expansion</div><p className="text-steel text-sm">Proposed expansion toward 400 KLPD and 12.5 MW — clearly marked as proposed, not operational.</p></div>
        </div>
        <h3 className="font-display text-3xl text-forest mt-16">Leadership</h3>
        <p className="text-steel text-sm mt-2">Verified directors. Biographies to be published when officially provided.</p>
        <div className="mt-6 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {["Sapna Kumar","Karan Swarup","Akansha Kumar","Kartik Swarup","Shourya Jain","Kanika Swarup"].map(n=>(
            <div key={n} className="bg-offwhite border border-black/10 p-4 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-forest text-white flex items-center justify-center font-display text-lg">{n.split(' ').map(w=>w[0]).join('')}</div>
              <div className="font-medium mt-3 text-sm">{n}</div><div className="text-xs text-steel tracking-wide">Director</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
}

export function Plant(){
  const steps=["Feedstock (Corn / Broken Rice)","Milling & Liquefaction","Fermentation","Distillation","Dehydration (Molecular Sieve)","Ethanol Storage","DDGS Recovery","CO₂ Recovery","Power & Steam","ZLD Water Management"]
  return <div>
    <Hero hint="OUR PLANT" title="Integrated Grain-Based Manufacturing" subtitle="Begrajpur, Tehsil Khatauli, Muzaffarnagar — 200 KLPD distillation, 40 TPH boiler, 4.2–5 MW power infrastructure."/>
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
        {[
          {t:'Plant Overview', d:'Grain-based distillery with integrated utilities and recovery systems.'},
          {t:'Feedstock', d:'Corn and broken rice — agricultural grains processed through milling and fermentation.'},
          {t:'Distillation & Dehydration', d:'Multi-column distillation + molecular sieve for 99.8% anhydrous ethanol.'},
          {t:'DDGS Recovery', d:'High-protein byproduct recovery for animal nutrition.'},
          {t:'CO₂ Recovery', d:'Fermentation CO₂ captured, purified and liquefied.'},
          {t:'Power & ZLD', d:'Co-generation and Zero Liquid Discharge water management.'},
        ].map(c=> <div key={c.t} className="border border-black/10 p-6 bg-offwhite"><h4 className="font-semibold text-forest">{c.t}</h4><p className="text-sm text-steel mt-2">{c.d}</p></div>)}
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mt-12">
        <h3 className="font-display text-2xl text-forest mb-6">Manufacturing Process</h3>
        <div className="flex flex-col items-center">
          {steps.map((s,i)=>(
            <div key={s} className="flex flex-col items-center">
              <div className="bg-forest text-white px-6 py-3 text-sm font-medium min-w-[280px] text-center">{s}</div>
              {i<steps.length-1 && <div className="w-0.5 h-6 bg-gold"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
}

export function Products(){
  return <div>
    <Hero hint="PRODUCTS" title="From Grain to Value — Ethanol, Nutrition, Carbon" subtitle="Three integrated product lines from a single grain-based platform."/>
    <section className="py-16 bg-offwhite">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 space-y-8">
        {[
          {name:'Pure Ethanol', slug:'ethanol', img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800', desc:'Anhydrous ethanol (99.8%) for Ethanol Blended Petrol and industrial use. Produced via grain fermentation, distillation and molecular sieve dehydration.', uses:['Fuel blending (EBP)','Industrial solvent','Chemical feedstock']},
          {name:'DDGS', slug:'ddgs', img:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800', desc:'Distillers Dried Grains with Solubles — protein and fiber rich, produced by drying stillage. High digestibility for livestock.', uses:['Cattle feed','Poultry feed','Aqua feed']},
          {name:'Liquid CO₂', slug:'liquid-co2', img:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800', desc:'Food-grade liquid CO₂ recovered from fermentation, purified and liquefied — closing the carbon loop.', uses:['Beverage carbonation','Cold chain','Industrial applications']},
        ].map(p=>(
          <div key={p.slug} className="bg-white border border-black/10 grid md:grid-cols-2 overflow-hidden">
            <img src={p.img} className="h-80 w-full object-cover"/>
            <div className="p-8">
              <h3 className="font-display text-2xl text-forest">{p.name}</h3>
              <p className="text-steel mt-3 leading-relaxed text-sm">{p.desc}</p>
              <div className="mt-4 text-xs tracking-[0.2em] font-semibold text-steel">APPLICATIONS</div>
              <ul className="mt-2 flex flex-wrap gap-2">{p.uses.map(u=> <span key={u} className="bg-offwhite border border-black/10 px-3 py-1 text-xs">{u}</span>)}</ul>
              <div className="mt-6 text-xs text-steel">Technical specifications available on request.</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
}

export function Sustainability(){
  return <div>
    <Hero hint="SUSTAINABILITY" title="Industrial Growth. Responsible by Design." subtitle="Renewable feedstock, biomass energy, water conservation, carbon recovery and circular manufacturing."/>
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-6">
        {[
          {t:'Renewable Feedstock', d:'Corn and broken rice — agricultural grains, not fossil resources.'},
          {t:'Biomass Energy', d:'Steam and power integration to improve energy efficiency.'},
          {t:'Zero Liquid Discharge', d:'Maximum water recycling, minimal discharge — ZLD philosophy.'},
          {t:'Water Conservation', d:'Integrated water management across milling, fermentation and utilities.'},
          {t:'Carbon Recovery', d:'Food-grade CO₂ captured from fermentation for productive use.'},
          {t:'Circular Manufacturing', d:'Every output — ethanol, DDGS, CO₂ — creates value.'},
        ].map(c=> <div key={c.t} className="border border-black/10 p-6 bg-offwhite"><h4 className="font-semibold text-forest">{c.t}</h4><p className="text-sm text-steel mt-2">{c.d}</p></div>)}
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mt-12">
        <h3 className="font-display text-2xl text-forest">Sustainability Metrics</h3>
        <p className="text-sm text-steel mt-2">We do not invent statistics. Metrics will be published when verified.</p>
        <div className="mt-6 grid md:grid-cols-5 gap-4">
          {[
            {k:'Water Recycling', v:'Data to be published'},
            {k:'Biomass Utilization', v:'Data to be published'},
            {k:'CO₂ Recovery', v:'Integrated recovery operational'},
            {k:'Energy Efficiency', v:'Data to be published'},
            {k:'Waste Minimization', v:'ZLD in design'},
          ].map(m=> <div key={m.k} className="border border-black/10 p-5 text-center bg-offwhite"><div className="text-xs tracking-[0.15em] text-steel">{m.k.toUpperCase()}</div><div className="text-sm font-medium mt-2 text-forest">{m.v}</div></div>)}
        </div>
      </div>
    </section>
  </div>
}

export function Technology(){
  return <div>
    <Hero hint="TECHNOLOGY" title="Advanced Grain-Based Bio-Energy Technology" subtitle="Fermentation, distillation, dehydration, recovery and energy integration — engineered for efficiency."/>
    <section className="py-16 bg-offwhite">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-6">
        {[
          {t:'Grain-Based Distillation', d:'Multi-column distillation designed for grain mash.'},
          {t:'Advanced Fermentation', d:'Controlled yeast fermentation for maximum yield.'},
          {t:'Molecular Sieve Dehydration', d:'Achieves ~99.8% anhydrous ethanol.'},
          {t:'DDGS Recovery', d:'Integrated drying for high-protein feed.'},
          {t:'CO₂ Recovery', d:'Capture, purification and liquefaction.'},
          {t:'Biomass Energy & Heat Integration', d:'40 TPH boiler + 4.2–5 MW co-generation with heat recovery.'},
          {t:'Water Management', d:'ZLD-oriented recycling and treatment.'},
          {t:'Energy Efficiency', d:'Process integration to reduce specific energy.'},
          {t:'Quality & Safety', d:'Lab, QC and EHS systems throughout.'},
        ].map(c=> <div key={c.t} className="bg-white border border-black/10 p-6"><h4 className="font-semibold text-forest">{c.t}</h4><p className="text-sm text-steel mt-2">{c.d}</p></div>)}
      </div>
    </section>
  </div>
}

export function Expansion(){
  return <div>
    <Hero hint="EXPANSION • PROPOSED" title="Building the Next Scale of Sustainable Manufacturing" subtitle="Proposed expansion toward ~400 KLPD distillation and ~12.5 MW co-generation. Clearly proposed — not operational."/>
    <section className="py-16 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="bg-forest text-white p-1 inline-flex text-xs tracking-[0.2em] px-3 py-1">PROPOSED PROJECT VALUE ~ ₹383.14 CRORE • SUBJECT TO APPROVALS</div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-black/10 p-8 text-center">
            <div className="text-xs tracking-[0.2em] text-steel">CURRENT OPERATIONAL</div>
            <div className="font-display text-4xl text-forest mt-2">200 KLPD</div><div className="text-sm text-steel">Distillation</div>
            <div className="font-display text-2xl text-forest mt-4">4.2–5 MW</div><div className="text-sm text-steel">Power Infrastructure</div>
          </div>
          <div className="bg-forest text-white p-8 text-center">
            <div className="text-xs tracking-[0.2em] text-gold">PROPOSED VISION</div>
            <div className="font-display text-4xl mt-2">400 KLPD</div><div className="text-sm text-white/70">Distillation Capacity</div>
            <div className="font-display text-2xl mt-4">12.5 MW</div><div className="text-sm text-white/70">Co-generation Capacity</div>
          </div>
        </div>
        <h3 className="font-display text-2xl text-forest mt-12">Roadmap</h3>
        <div className="mt-6 flex flex-col gap-0 border-l-2 border-gold/40 ml-4 pl-8">
          {[
            {y:'2020', t:'Company Established', d:'Incorporated 3 Sept 2020'},
            {y:'Current', t:'200 KLPD Operations', d:'Integrated plant at Begrajpur operational'},
            {y:'Planning', t:'Expansion Planning', d:'Proposed 400 KLPD + 12.5 MW under planning'},
            {y:'Vision', t:'400 KLPD Vision', d:'Proposed scale — future, not operational'},
            {y:'Vision', t:'12.5 MW Co-generation Vision', d:'Proposed power scale'},
          ].map(r=>(
            <div key={r.t} className="relative py-4">
              <div className="absolute -left-[41px] top-5 w-3 h-3 bg-gold rounded-full border-2 border-white"></div>
              <div className="text-gold text-xs tracking-[0.2em] font-semibold">{r.y}</div>
              <div className="font-semibold text-forest">{r.t}</div><div className="text-sm text-steel">{r.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
}

export function Corporate(){
  return <div>
    <Hero hint="CORPORATE INFORMATION" title="Corporate Information" subtitle="Crystal Balaji Industries Private Limited — CIN U15400UP2020PTC133900"/>
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div className="border border-black/10 p-8 bg-offwhite">
          <h3 className="font-display text-xl text-forest">Company Details</h3>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between border-b border-black/5 pb-3"><dt className="text-steel">CIN</dt><dd className="font-medium font-mono">U15400UP2020PTC133900</dd></div>
            <div className="flex justify-between border-b border-black/5 pb-3"><dt className="text-steel">Company Type</dt><dd className="font-medium">Private Limited / Non-Government</dd></div>
            <div className="flex justify-between border-b border-black/5 pb-3"><dt className="text-steel">Incorporation</dt><dd className="font-medium">3 September 2020</dd></div>
            <div className="flex justify-between border-b border-black/5 pb-3"><dt className="text-steel">ROC</dt><dd className="font-medium">ROC Kanpur</dd></div>
            <div className="flex justify-between border-b border-black/5 pb-3"><dt className="text-steel">Industry</dt><dd className="font-medium">Bio-energy / Ethanol / Manufacturing</dd></div>
            <div className="flex justify-between border-b border-black/5 pb-3"><dt className="text-steel">Registered Office</dt><dd className="font-medium text-right max-w-[220px]">316, Patel Nagar, New Mandi, Muzaffarnagar, U.P. – 251002</dd></div>
            <div className="flex justify-between"><dt className="text-steel">Manufacturing</dt><dd className="font-medium text-right">Begrajpur, Tehsil Khatauli, Muzaffarnagar</dd></div>
          </dl>
        </div>
        <div>
          <h3 className="font-display text-xl text-forest">Documents</h3>
          <p className="text-sm text-steel mt-2">Corporate documents uploaded via Admin Dashboard will appear here. No placeholder certificates are shown as verified.</p>
          <div className="mt-6 border border-dashed border-black/20 p-8 text-center bg-offwhite">
            <div className="text-sm text-steel">No documents published yet.</div>
            <div className="text-xs text-steel/70 mt-2">Admin can upload via /admin</div>
          </div>
          <div className="mt-6 bg-forest text-white p-6">
            <div className="text-gold text-xs tracking-[0.2em]">NOTE</div>
            <p className="text-sm text-white/80 mt-2">Authorized and paid-up capital, financials and approvals are not displayed unless verified. Contact us for official records.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
}
