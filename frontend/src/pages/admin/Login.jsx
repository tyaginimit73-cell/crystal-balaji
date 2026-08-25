import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, LockKeyhole, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import api from '../../services/api'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
  event.preventDefault()
  setError('')

  try {
    const response = await api.post('/auth/login', {
      email,
      password,
    })

    const token =
      response.data?.data?.token ||
      response.data?.token

    if (!token) {
      throw new Error('Authentication token was not returned by the server.')
    }

    localStorage.setItem('token', token)

    // Remove old temporary authentication flag
    localStorage.removeItem('adminAuthenticated')

    navigate('/admin')
  } catch (error) {
    console.error('Admin login error:', error)

    setError(
      error.response?.data?.message ||
      'Invalid administrator credentials.'
    )
  }
}

  return (
    <main className="min-h-screen bg-[#0f2a1d] text-white">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE */}
        <section className="relative hidden overflow-hidden lg:flex">

          <div className="absolute inset-0 opacity-[0.06]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
                backgroundSize: '70px 70px',
              }}
            />
          </div>

          <div className="relative flex w-full flex-col justify-between p-12 xl:p-16">

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to website
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#c9a86a]">
                Crystal Balaji Industries
              </p>

              <h1 className="mt-7 font-display text-6xl leading-[0.95] tracking-[-0.04em] xl:text-7xl">
                Administration
                <span className="block text-white/35">
                  control centre.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-base leading-8 text-white/50">
                Secure access to the Crystal Balaji Industries
                content management system.
              </p>
            </motion.div>

            <p className="text-xs text-white/30">
              Private administrator area
            </p>

          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="flex min-h-screen items-center justify-center bg-[#faf8f5] px-6 py-16 text-[#1a1f1c]">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >

            <div className="mb-10 lg:hidden">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-[#55705e]"
              >
                <ArrowLeft size={16} />
                Back to website
              </Link>
            </div>

            <div className="mb-10">

              <div className="flex h-12 w-12 items-center justify-center bg-[#0f2a1d] font-display font-bold text-[#c9a86a]">
                CB
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#55705e]">
                Administrator Login
              </p>

              <h2 className="mt-4 font-display text-4xl text-[#0f2a1d] md:text-5xl">
                Welcome back.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#737973]">
                Sign in to manage website content and corporate
                information.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-[0.15em] text-[#55705e]"
                >
                  Administrator Email
                </label>

                <div className="relative mt-2">

                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a8f89]"
                  />

                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="admin@crystalbalaji.com"
                    className="h-13 w-full border border-[#1a1f1c]/10 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-[#55705e]"
                  />

                </div>
              </div>

              {/* PASSWORD */}
              <div className="mt-6">

                <label
                  htmlFor="password"
                  className="text-xs uppercase tracking-[0.15em] text-[#55705e]"
                >
                  Password
                </label>

                <div className="relative mt-2">

                  <LockKeyhole
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8a8f89]"
                  />

                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter password"
                    className="h-13 w-full border border-[#1a1f1c]/10 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-[#55705e]"
                  />

                </div>

              </div>

              {/* ERROR */}
              {error && (
                <div className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-3 bg-[#0f2a1d] px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#173b29]"
              >
                Sign In
                <ArrowUpRight size={17} />
              </button>

            </form>

            <div className="mt-8 border-t border-[#1a1f1c]/10 pt-6">

              <p className="text-center text-xs leading-6 text-[#8a8f89]">
                This area is restricted to authorised administrators.
              </p>

            </div>

          </motion.div>

        </section>

      </div>

    </main>
  )
}