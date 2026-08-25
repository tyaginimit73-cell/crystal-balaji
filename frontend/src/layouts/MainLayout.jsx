import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1f1c]">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}