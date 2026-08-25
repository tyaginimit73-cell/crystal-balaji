import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { useState } from 'react'

const offices = [
  {
    title: 'Corporate Office',
    address: (
      <>
        316, Patel Nagar,
        <br />
        New Mandi, Muzaffarnagar
        <br />
        Uttar Pradesh – 251002
      </>
    ),
  },
  {
    title: 'Manufacturing Location',
    address: (
      <>
        Begrajpur, Tehsil Khatauli,
        <br />
        Muzaffarnagar,
        <br />
        Uttar Pradesh, India
      </>
    ),
  },
]

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="overflow-hidden bg-[#faf8f5] text-[#1a1f1c]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0f2a1d] px-6 pb-28 pt-36 text-white md:pb-36 lg:px-10">

        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">

          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#c9a86a]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a]">
                Contact
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-6xl font-display text-5xl leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Let's build a
              <span className="block text-white/40">
                sustainable future.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              Connect with Crystal Balaji Industries for business
              enquiries, partnerships, manufacturing discussions and
              corporate communication.
            </p>
          </Reveal>

        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}
          <Reveal>
            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#55705e]">
                Get in touch
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-5xl">
                We would be glad to hear from you.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-8 text-[#737973]">
                Whether you are exploring a business opportunity,
                looking for more information about our operations or
                interested in working with us, send us a message.
              </p>

              <div className="mt-10 space-y-7">

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#0f2a1d] text-[#c9a86a]">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8a8f89]">
                      Email
                    </p>

                    <a
                      href="mailto:info@crystalbalaji.com"
                      className="mt-1 block text-sm text-[#0f2a1d] hover:text-[#55705e]"
                    >
                      info@crystalbalaji.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#0f2a1d] text-[#c9a86a]">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8a8f89]">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-[#0f2a1d]">
                      Contact through our corporate office
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.1}>
            <div className="border border-[#1a1f1c]/10 bg-[#ece9e2] p-7 md:p-10">

              {submitted ? (
                <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f2a1d] text-[#c9a86a]">
                    <ArrowUpRight size={25} />
                  </div>

                  <h3 className="mt-7 font-display text-3xl text-[#0f2a1d]">
                    Message received
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#737973]">
                    Thank you for contacting Crystal Balaji Industries.
                    Our team will review your enquiry.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full bg-[#0f2a1d] px-6 py-3 text-sm text-white transition hover:-translate-y-1"
                  >
                    Send another message
                  </button>

                </div>
              ) : (
                <form onSubmit={handleSubmit}>

                  <div className="grid gap-6 md:grid-cols-2">

                    <div>
                      <label className="text-xs uppercase tracking-[0.15em] text-[#55705e]">
                        Full Name
                      </label>

                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        className="mt-2 h-12 w-full border border-[#1a1f1c]/10 bg-[#faf8f5] px-4 text-sm outline-none transition focus:border-[#55705e]"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-[0.15em] text-[#55705e]">
                        Email
                      </label>

                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2 h-12 w-full border border-[#1a1f1c]/10 bg-[#faf8f5] px-4 text-sm outline-none transition focus:border-[#55705e]"
                      />
                    </div>

                  </div>

                  <div className="mt-6">
                    <label className="text-xs uppercase tracking-[0.15em] text-[#55705e]">
                      Company
                    </label>

                    <input
                      type="text"
                      placeholder="Company name"
                      className="mt-2 h-12 w-full border border-[#1a1f1c]/10 bg-[#faf8f5] px-4 text-sm outline-none transition focus:border-[#55705e]"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="text-xs uppercase tracking-[0.15em] text-[#55705e]">
                      Subject
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="How can we help?"
                      className="mt-2 h-12 w-full border border-[#1a1f1c]/10 bg-[#faf8f5] px-4 text-sm outline-none transition focus:border-[#55705e]"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="text-xs uppercase tracking-[0.15em] text-[#55705e]">
                      Message
                    </label>

                    <textarea
                      required
                      rows="6"
                      placeholder="Write your message..."
                      className="mt-2 w-full resize-none border border-[#1a1f1c]/10 bg-[#faf8f5] px-4 py-4 text-sm outline-none transition focus:border-[#55705e]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#0f2a1d] px-7 py-4 text-sm text-white transition hover:-translate-y-1"
                  >
                    Send Enquiry
                    <ArrowUpRight size={17} />
                  </button>

                </form>
              )}

            </div>
          </Reveal>

        </div>
      </section>

      {/* LOCATIONS */}
      <section className="border-y border-[#1a1f1c]/10 bg-[#ece9e2] px-6 py-24 md:py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-[#55705e]">
                Our locations
              </p>

              <h2 className="mt-4 font-display text-4xl text-[#0f2a1d] md:text-5xl">
                Where to find us.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">

            {offices.map((office, index) => (
              <Reveal key={office.title} delay={index * 0.08}>

                <div className="group border border-[#1a1f1c]/10 bg-[#faf8f5] p-8 transition duration-500 hover:-translate-y-1 hover:shadow-xl md:p-10">

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center bg-[#0f2a1d] text-[#c9a86a]">
                      {index === 0 ? (
                        <Building2 size={20} />
                      ) : (
                        <MapPin size={20} />
                      )}
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-[#55705e] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </div>

                  <h3 className="mt-8 font-display text-2xl text-[#0f2a1d]">
                    {office.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-[#737973]">
                    {office.address}
                  </p>

                </div>

              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#c9a86a] px-6 py-20 md:py-28 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#0f2a1d]/50">
                Crystal Balaji Industries
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Building responsible industry for tomorrow.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="mailto:info@crystalbalaji.com"
              className="inline-flex items-center gap-3 rounded-full bg-[#0f2a1d] px-7 py-4 text-sm text-white transition hover:-translate-y-1"
            >
              Email Us
              <ArrowUpRight size={17} />
            </a>
          </Reveal>

        </div>

      </section>

    </main>
  )
}