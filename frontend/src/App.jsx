import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import About from './pages/About'
import Plant from './pages/Plant'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Technology from './pages/Technology'
import Sustainability from './pages/Sustainability'
import Expansion from './pages/Expansion'
import Corporate from './pages/Corporate'

import Careers from './pages/Careers'
import Contact from './pages/Contact'
import News, { ArticleDetail } from './pages/News'

import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Website */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/plant" element={<Plant />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />

          <Route path="/technology" element={<Technology />} />

          <Route
            path="/sustainability"
            element={<Sustainability />}
          />

          <Route path="/expansion" element={<Expansion />} />

          <Route path="/corporate" element={<Corporate />} />

          {/* Keep investor URL as an alias for corporate information */}
          <Route path="/investor" element={<Corporate />} />

          <Route path="/careers" element={<Careers />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<ArticleDetail />} />
        </Route>

        {/* Admin */}
        <Route
          path="/admin/login"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={<Dashboard />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center px-6">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-forest/60 mb-4">
                  Page Not Found
                </p>

                <h1 className="font-display text-6xl md:text-8xl text-forest mb-6">
                  404
                </h1>

                <p className="text-gray-600 mb-8">
                  The page you're looking for doesn't exist.
                </p>

                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  Back to Home
                </a>
              </div>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}