import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'
export default function Dashboard(){
  const [stats,setStats]=useState(null)
  const [articles,setArticles]=useState([])
  const [inquiries,setInquiries]=useState([])
  const [tab,setTab]=useState('overview')
  const nav=useNavigate()
 useEffect(() => {
  const token = localStorage.getItem('token')

  if (!token) {
    nav('/admin/login', { replace: true })
    return
  }

  api.get('/stats')
    .then((r) => setStats(r.data.data))
    .catch((error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('token')
        nav('/admin/login', { replace: true })
      }
    })

  api.get('/articles')
    .then((r) => setArticles(r.data.data))
    .catch((error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('token')
        nav('/admin/login', { replace: true })
      }
    })

  api.get('/contact')
    .then((r) => setInquiries(r.data.data))
    .catch((error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('token')
        nav('/admin/login', { replace: true })
      }
    })
}, [nav])

const logout = () => {
  localStorage.removeItem('token')
  nav('/admin/login', { replace: true })
}
  return <div className="min-h-screen bg-offwhite">
    <div className="bg-forest text-white px-6 py-4 flex justify-between items-center">
      <div className="font-display font-bold tracking-[0.15em]">CRYSTAL BALAJI — ADMIN</div>
      <button onClick={logout} className="border border-white/20 px-4 py-1.5 text-sm">Logout</button>
    </div>
    <div className="max-w-[1400px] mx-auto px-6 py-6">
      <div className="flex gap-2 mb-6">
        {['overview','articles','inquiries'].map(t=> <button key={t} onClick={()=>setTab(t)} className={`px-4 py-2 text-sm capitalize ${tab===t?'bg-forest text-white':'bg-white border border-black/10'}`}>{t}</button>)}
        <Link to="/" className="ml-auto bg-white border border-black/10 px-4 py-2 text-sm">← View Website</Link>
      </div>
      {tab==='overview' && stats && (
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white border border-black/10 p-6"><div className="text-xs tracking-[0.2em] text-steel">INQUIRIES</div><div className="font-display text-3xl mt-2">{stats.inquiries}</div></div>
          <div className="bg-white border border-black/10 p-6"><div className="text-xs tracking-[0.2em] text-steel">APPLICATIONS</div><div className="font-display text-3xl mt-2">{stats.applications}</div></div>
          <div className="bg-white border border-black/10 p-6"><div className="text-xs tracking-[0.2em] text-steel">PUBLISHED</div><div className="font-display text-3xl mt-2">{stats.published}</div></div>
          <div className="bg-white border border-black/10 p-6"><div className="text-xs tracking-[0.2em] text-steel">DRAFTS</div><div className="font-display text-3xl mt-2">{stats.drafts}</div></div>
        </div>
      )}
      {tab==='articles' && (
        <div className="bg-white border border-black/10 p-6">
          <h3 className="font-semibold">Articles ({articles.length})</h3>
          <div className="mt-4 space-y-3">
            {articles.map(a=> <div key={a._id||a.slug} className="flex justify-between items-center border-b border-black/5 pb-3"><span className="text-sm font-medium">{a.title}</span><span className={`text-xs px-2 py-1 ${a.published?'bg-green-100 text-green-700':'bg-amber-100 text-amber-700'}`}>{a.published?'Published':'Draft'}</span></div>)}
          </div>
          <p className="text-xs text-steel mt-4">Full CRUD via API: POST/PUT/DELETE /api/articles with Bearer token. Use Postman or extend UI.</p>
        </div>
      )}
      {tab==='inquiries' && (
        <div className="bg-white border border-black/10 p-6">
          <h3 className="font-semibold">Recent Inquiries</h3>
          <div className="mt-4 space-y-3">
            {inquiries.length===0 && <div className="text-sm text-steel">No inquiries yet — submit via Contact page.</div>}
            {inquiries.map(q=> <div key={q._id} className="border border-black/5 p-3"><div className="text-sm font-medium">{q.name} — {q.email}</div><div className="text-xs text-steel">{q.subject}</div><div className="text-sm mt-1">{q.message}</div></div>)}
          </div>
        </div>
      )}
    </div>
  </div>
}
