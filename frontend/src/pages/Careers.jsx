import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Clock3,
  Users,
  Building2,
} from 'lucide-react'

const jobs = [
  {
    id: 1,
    title: 'Process / Production Engineer',
    department: 'Operations',
    location: 'Muzaffarnagar, Uttar Pradesh',
    type: 'Full-time',
    description:
      'Opportunity for professionals interested in industrial operations, process engineering and bio-energy manufacturing.',
  },
  {
    id: 2,
    title: 'Electrical / Instrumentation Engineer',
    department: 'Engineering',
    location: 'Muzaffarnagar, Uttar Pradesh',
    type: 'Full-time',
    description:
      'Work within an industrial environment focused on electrical systems, instrumentation and plant reliability.',
  },
  {
    id: 3,
    title: 'Quality / Laboratory Professional',
    department: 'Quality',
    location: 'Muzaffarnagar, Uttar Pradesh',
    type: 'Full-time',
    description:
      'Support quality-focused activities across manufacturing, testing and process control environments.',
  },
]

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
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

export default function Careers() {
  return (
    <main className="overflow-hidden bg-[#faf8f5] text-[#1a1f1c]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#0f2a1d] px-6 pb-28 pt-36 text-white md:pb-36 lg:px-10">

        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
        </div>

        <motion.div
          className="absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full border border-white/5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>

            <div className="flex items-center gap-4">

              <span className="h-px w-12 bg-[#c9a86a]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a]">
                Careers
              </span>

            </div>

          </Reveal>

          <Reveal delay={0.08}>

            <h1 className="mt-8 max-w-6xl font-display text-5xl leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.4rem]">
              Build what powers
              <span className="block text-white/40">
                a sustainable future.
              </span>
            </h1>

          </Reveal>

          <Reveal delay={0.16}>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              Join a growing industrial ecosystem working at the intersection
              of bio-energy, manufacturing, engineering and sustainability.
            </p>

          </Reveal>

          <Reveal delay={0.22}>

            <a
              href="#openings"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#c9a86a] px-6 py-3.5 text-sm font-medium text-[#0f2a1d] transition hover:-translate-y-1"
            >
              View Opportunities
              <ArrowUpRight size={17} />
            </a>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Why Join Us
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Work where industry meets purpose.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="max-w-3xl">

              <p className="text-[15px] leading-8 text-[#737973]">
                Building a modern bio-energy operation requires people across
                engineering, production, quality, maintenance, technology and
                business functions.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#737973]">
                We aim to create an environment where technical expertise,
                responsible manufacturing and continuous improvement can work
                together.
              </p>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          CULTURE
      ====================================================== */}

      <section className="bg-[#ece9e2] px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="grid gap-3 md:grid-cols-3">

              <div className="border border-[#1a1f1c]/10 bg-[#faf8f5] p-8">

                <Users
                  size={25}
                  strokeWidth={1.2}
                  className="text-[#55705e]"
                />

                <h3 className="mt-10 font-display text-3xl text-[#0f2a1d]">
                  People
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#737973]">
                  Bring together different disciplines and perspectives to
                  solve complex industrial challenges.
                </p>

              </div>

              <div className="border border-[#1a1f1c]/10 bg-[#faf8f5] p-8">

                <Building2
                  size={25}
                  strokeWidth={1.2}
                  className="text-[#55705e]"
                />

                <h3 className="mt-10 font-display text-3xl text-[#0f2a1d]">
                  Engineering
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#737973]">
                  Work within an environment where process, equipment,
                  reliability and operational excellence matter.
                </p>

              </div>

              <div className="border border-[#1a1f1c]/10 bg-[#faf8f5] p-8">

                <BriefcaseBusiness
                  size={25}
                  strokeWidth={1.2}
                  className="text-[#55705e]"
                />

                <h3 className="mt-10 font-display text-3xl text-[#0f2a1d]">
                  Growth
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#737973]">
                  Contribute to the development of a growing sustainable
                  manufacturing platform.
                </p>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          OPENINGS
      ====================================================== */}

      <section
        id="openings"
        className="px-6 py-24 md:py-32 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>

                <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                  Opportunities
                </p>

                <h2 className="mt-5 font-display text-4xl text-[#0f2a1d] md:text-6xl">
                  Open positions
                </h2>

              </div>

              <p className="max-w-md text-sm leading-7 text-[#737973]">
                Current openings shown here are structured as initial website
                content. The production version can load verified vacancies
                directly from the admin-managed database.
              </p>

            </div>

          </Reveal>

          <div className="mt-14 space-y-3">

            {jobs.map((job, index) => (

              <Reveal
                key={job.id}
                delay={index * 0.07}
              >

                <article className="group border border-[#1a1f1c]/10 bg-[#ece9e2] p-7 transition duration-500 hover:-translate-y-1 hover:bg-[#e7e4dc] md:p-9">

                  <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <span className="rounded-full bg-[#0f2a1d] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white">
                          {job.department}
                        </span>

                        <span className="text-xs text-[#8a8f89]">
                          {job.type}
                        </span>

                      </div>

                      <h3 className="mt-5 font-display text-3xl text-[#0f2a1d] md:text-4xl">
                        {job.title}
                      </h3>

                      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#737973]">
                        {job.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-5">

                        <div className="flex items-center gap-2 text-xs text-[#626961]">

                          <MapPin
                            size={15}
                            strokeWidth={1.3}
                          />

                          {job.location}

                        </div>

                        <div className="flex items-center gap-2 text-xs text-[#626961]">

                          <Clock3
                            size={15}
                            strokeWidth={1.3}
                          />

                          {job.type}

                        </div>

                      </div>

                    </div>

                    <a
                      href="#apply"
                      className="inline-flex w-fit items-center gap-3 rounded-full bg-[#0f2a1d] px-6 py-3.5 text-sm text-white transition hover:-translate-y-1"
                    >
                      Apply Now
                      <ArrowUpRight size={17} />
                    </a>

                  </div>

                </article>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          APPLICATION
      ====================================================== */}

      <section
        id="apply"
        className="bg-[#0f2a1d] px-6 py-24 text-white md:py-32 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#c9a86a]">
                Start a Conversation
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                Interested in joining the team?
              </h2>

              <p className="mt-7 text-sm leading-7 text-white/45">
                Submit your details and the application workflow can be
                connected to the company's recruitment system.
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <form
              className="mt-14 grid gap-4 md:grid-cols-2"
              onSubmit={(event) => event.preventDefault()}
            >

              <input
                type="text"
                placeholder="Full Name"
                className="h-14 border border-white/10 bg-white/[0.04] px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#c9a86a]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-14 border border-white/10 bg-white/[0.04] px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#c9a86a]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="h-14 border border-white/10 bg-white/[0.04] px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#c9a86a]"
              />

              <select
                defaultValue=""
                className="h-14 border border-white/10 bg-[#0f2a1d] px-5 text-sm text-white/70 outline-none focus:border-[#c9a86a]"
              >
                <option value="" disabled>
                  Select Position
                </option>

                {jobs.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}

              </select>

              <textarea
                placeholder="Cover Message"
                rows="6"
                className="resize-none border border-white/10 bg-white/[0.04] p-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#c9a86a] md:col-span-2"
              />

              <div className="flex flex-col justify-between gap-5 md:col-span-2 md:flex-row md:items-center">

                <p className="text-xs leading-6 text-white/30">
                  Resume upload and application storage will be connected to
                  the backend during the API phase.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#c9a86a] px-7 py-4 text-sm font-medium text-[#0f2a1d] transition hover:-translate-y-1"
                >
                  Submit Application
                  <ArrowUpRight size={17} />
                </button>

              </div>

            </form>

          </Reveal>

        </div>

      </section>

    </main>
  )
}