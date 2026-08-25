import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label:'About', to:'/about' },
  { label:'Plant', to:'/plant' },
  { label:'Products', to:'/products' },
  { label:'Sustainability', to:'/sustainability' },
  { label:'Technology', to:'/technology' },
  { label:'Expansion', to:'/expansion' },
  { label:'Careers', to:'/careers' },
  { label:'News', to:'/news' },
]

export default function Navbar(){
  const [scrolled,setScrolled]=useState(false)
  const [open,setOpen]=useState(false)
  const loc=useLocation()
  const isHome = loc.pathname==='/'
  const transparent = isHome && !scrolled && !open

  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>20)
    window.addEventListener('scroll',h)
    return()=>window.removeEventListener('scroll',h)
  },[])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${transparent? 'bg-transparent py-6' : 'bg-white/95 backdrop-blur-md border-b border-black/5 py-4 shadow-sm'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className={`w-10 h-10 flex items-center justify-center font-display text-lg font-bold ${transparent? 'bg-white text-forest' : 'bg-forest text-white'}`}>CB</div>
          <div>
            <div className={`font-display text-[17px] font-bold tracking-[0.14em] leading-none ${transparent? 'text-white':'text-forest'}`}>CRYSTAL BALAJI</div>
            <div className={`text-[9px] tracking-[0.22em] font-medium ${transparent? 'text-white/70':'text-steel'}`}>BIO-ENERGY • SUSTAINABILITY • INDUSTRIAL EXCELLENCE</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l=>{
            const active=loc.pathname.startsWith(l.to)
            return <Link key={l.to} to={l.to} className={`px-3 py-2 text-[12.5px] tracking-wide font-medium transition ${active? (transparent?'text-white border-b border-white':'text-forest border-b border-forest') : (transparent?'text-white/80 hover:text-white':'text-charcoal/70 hover:text-forest')}`}>{l.label}</Link>
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium transition ${transparent ? 'bg-white text-forest hover:bg-offwhite' : 'bg-forest text-white hover:bg-forest-800'}`}>Contact Us <ArrowUpRight size={16}/></Link>
        </div>

        <button onClick={()=>setOpen(!open)} className={`lg:hidden p-2 ${transparent?'text-white':'text-forest'}`}>{open? <X/> : <Menu/>}</button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="lg:hidden bg-white border-t border-black/5 absolute inset-x-0 top-full">
            <div className="px-6 py-6 space-y-1">
              {links.map(l=> <Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="block py-3 text-base font-medium border-b border-black/5">{l.label}</Link>)}
              <Link to="/contact" onClick={()=>setOpen(false)} className="mt-4 flex items-center justify-center gap-2 bg-forest text-white py-3 font-medium">Contact Us <ArrowUpRight size={16}/></Link>
              <Link to="/admin/login" onClick={()=>setOpen(false)} className="block text-center py-3 text-sm text-steel">Admin Login</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
