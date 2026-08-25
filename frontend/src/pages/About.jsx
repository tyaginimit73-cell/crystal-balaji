import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Factory,
  Leaf,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'

const values = [
  {
    icon: Leaf,
    title: 'Responsible Growth',
    text: 'We approach industrial growth with a focus on resource efficiency, responsible manufacturing and long-term sustainability.',
  },
  {
    icon: Factory,
    title: 'Industrial Excellence',
    text: 'Our manufacturing vision combines process discipline, integrated operations and technology-driven efficiency.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability',
    text: 'Strong systems, operational discipline and a commitment to quality form the foundation of dependable manufacturing.',
  },
  {
    icon: Users,
    title: 'People & Partnerships',
    text: 'Sustainable industrial development depends on capable people, responsible partners and strong relationships.',
  },
]

const leadership = [
  'Sapna Kumar',
  'Karan Swarup',
  'Akansha Kumar',
  'Kartik Swarup',
  'Shourya Jain',
  'Kanika Swarup',
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

export default function About() {
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
            rotate: [0, 8, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>

            <div className="flex items-center gap-4">

              <span className="h-px w-12 bg-[#c9a86a]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a]">
                About Crystal Balaji
              </span>

            </div>

          </Reveal>

          <Reveal delay={0.08}>

            <h1 className="mt-8 max-w-6xl font-display text-5xl leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.4rem]">
              Engineering energy
              <span className="block text-white/40">
                from what grows.
              </span>
            </h1>

          </Reveal>

          <Reveal delay={0.16}>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              Crystal Balaji Industries Private Limited is a modern Indian
              industrial company focused on bio-energy, ethanol manufacturing
              and integrated sustainable production.
            </p>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          COMPANY INTRO
      ====================================================== */}
      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-center">

          <Reveal>

            <div className="relative min-h-[500px] overflow-hidden bg-[#0f2a1d]">

              <div className="absolute inset-0">

                <div className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full border border-[#c9a86a]/20" />

                <div className="absolute bottom-[10%] right-[10%] h-56 w-56 rounded-full border border-white/10" />

                <div className="absolute left-[20%] top-[25%] h-40 w-40 rounded-full bg-[#c9a86a]/10 blur-3xl" />

              </div>

              <div className="relative flex h-full min-h-[500px] flex-col justify-between p-8 md:p-12">

                <div className="flex items-center justify-between">

                  <span className="text-xs uppercase tracking-[0.25em] text-[#c9a86a]">
                    Company Profile
                  </span>

                  <span className="text-xs text-white/30">
                    EST. 2020
                  </span>

                </div>

                <div>

                  <p className="max-w-md font-display text-4xl leading-tight text-white md:text-5xl">
                    From agricultural feedstock to valuable energy and
                    industrial products.
                  </p>

                  <div className="mt-10 h-px w-full bg-white/10" />

                  <div className="mt-6 flex items-end justify-between">

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                        Location
                      </p>

                      <p className="mt-2 text-sm text-white/70">
                        Muzaffarnagar, Uttar Pradesh
                      </p>
                    </div>

                    <Factory
                      size={38}
                      strokeWidth={1}
                      className="text-[#c9a86a]"
                    />

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Who We Are
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                A bio-energy platform built around responsible industrial
                growth.
              </h2>

              <div className="mt-8 space-y-5 text-[15px] leading-8 text-[#737973]">

                <p>
                  Crystal Balaji Industries Private Limited was incorporated
                  on 3 September 2020 and operates within the bio-energy and
                  sustainable manufacturing space.
                </p>

                <p>
                  Its manufacturing profile is centered around grain-based
                  distillation, with corn and broken rice identified as
                  primary feedstock.
                </p>

                <p>
                  The company's core product ecosystem includes Pure Ethanol,
                  DDGS and Liquid Carbon Dioxide, supported by integrated
                  energy and manufacturing infrastructure.
                </p>

              </div>

              <div className="mt-10 grid grid-cols-2 gap-3">

                <div className="border border-[#1a1f1c]/10 p-6">

                  <p className="font-display text-4xl text-[#0f2a1d]">
                    2020
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#8a8f89]">
                    Incorporated
                  </p>

                </div>

                <div className="border border-[#1a1f1c]/10 p-6">

                  <p className="font-display text-4xl text-[#0f2a1d]">
                    200
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#8a8f89]">
                    KLPD Current Capacity
                  </p>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          MISSION / VISION
      ====================================================== */}
      <section className="bg-[#ece9e2] px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Direction
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Built for a more efficient industrial future.
              </h2>

            </div>

          </Reveal>

          <div className="mt-16 grid gap-3 lg:grid-cols-2">

            <Reveal>

              <article className="min-h-[350px] bg-[#0f2a1d] p-8 text-white md:p-12">

                <Target
                  size={32}
                  strokeWidth={1.2}
                  className="text-[#c9a86a]"
                />

                <p className="mt-12 text-xs uppercase tracking-[0.25em] text-[#c9a86a]">
                  Mission
                </p>

                <h3 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                  Transform resources into responsible industrial value.
                </h3>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/45">
                  Our operating philosophy is centered around efficient
                  manufacturing, responsible resource use and the development
                  of an integrated bio-energy ecosystem.
                </p>

              </article>

            </Reveal>

            <Reveal delay={0.1}>

              <article className="min-h-[350px] border border-[#1a1f1c]/10 bg-[#faf8f5] p-8 md:p-12">

                <ArrowUpRight
                  size={32}
                  strokeWidth={1.2}
                  className="text-[#55705e]"
                />

                <p className="mt-12 text-xs uppercase tracking-[0.25em] text-[#55705e]">
                  Vision
                </p>

                <h3 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-5xl">
                  Grow sustainable manufacturing at meaningful scale.
                </h3>

                <p className="mt-7 max-w-xl text-sm leading-7 text-[#737973]">
                  The proposed expansion toward approximately 400 KLPD
                  distillation and approximately 12.5 MW co-generation
                  represents the company's stated scale-up vision.
                </p>

              </article>

            </Reveal>

          </div>

        </div>

      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Our Values
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Principles that shape the way we build.
              </h2>

            </div>

          </Reveal>

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">

            {values.map((value, index) => {

              const Icon = value.icon

              return (
                <Reveal
                  key={value.title}
                  delay={index * 0.06}
                >

                  <article className="group min-h-[320px] border border-[#1a1f1c]/10 bg-[#ece9e2] p-8 transition duration-500 hover:-translate-y-1 hover:bg-[#f1efe9]">

                    <div className="flex h-12 w-12 items-center justify-center border border-[#55705e]/20 text-[#55705e] transition group-hover:border-[#c9a86a] group-hover:text-[#9b7c47]">

                      <Icon
                        size={20}
                        strokeWidth={1.3}
                      />

                    </div>

                    <h3 className="mt-12 text-lg font-medium text-[#0f2a1d]">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#737973]">
                      {value.text}
                    </p>

                  </article>

                </Reveal>
              )
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          CORPORATE IDENTITY
      ====================================================== */}
      <section className="bg-[#0f2a1d] px-6 py-24 text-white md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-xs uppercase tracking-[0.28em] text-[#c9a86a]">
                  Corporate Identity
                </p>

                <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                  The company at a glance.
                </h2>

              </div>

              <div className="grid border-l border-white/10 sm:grid-cols-2">

                <div className="border-b border-white/10 p-7 sm:border-r">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                    Legal Name
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/75">
                    Crystal Balaji Industries Private Limited
                  </p>
                </div>

                <div className="border-b border-white/10 p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                    CIN
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/75">
                    U15400UP2020PTC133900
                  </p>
                </div>

                <div className="border-b border-white/10 p-7 sm:border-r">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                    Company Type
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/75">
                    Private Limited / Non-Government Company
                  </p>
                </div>

                <div className="border-b border-white/10 p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                    Incorporated
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/75">
                    3 September 2020
                  </p>
                </div>

                <div className="p-7 sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                    Registered Office
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
                    316, Patel Nagar, New Mandi, Muzaffarnagar,
                    Uttar Pradesh – 251002
                  </p>
                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          LEADERSHIP
      ====================================================== */}
      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Leadership
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                The people behind the organisation.
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#737973]">
                The following names are included as initial leadership data.
                Detailed biographies and positions should only be published
                after official verification.
              </p>

            </div>

          </Reveal>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {leadership.map((person, index) => (

              <Reveal
                key={person}
                delay={index * 0.05}
              >

                <article className="group border border-[#1a1f1c]/10 bg-[#ece9e2] p-7 transition duration-500 hover:-translate-y-1">

                  <div className="flex aspect-[4/3] items-center justify-center bg-[#d9d6ce]">

                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#55705e]/20 text-[#55705e]">

                      <Users
                        size={28}
                        strokeWidth={1}
                      />

                    </div>

                  </div>

                  <div className="mt-6 flex items-end justify-between gap-5">

                    <div>

                      <h3 className="text-base font-medium text-[#0f2a1d]">
                        {person}
                      </h3>

                      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#929791]">
                        Leadership Profile
                      </p>

                    </div>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1a1f1c]/10 text-[#55705e] transition group-hover:border-[#c9a86a]">
                      <ArrowUpRight size={15} />
                    </span>

                  </div>

                </article>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          TIMELINE
      ====================================================== */}
      <section className="bg-[#ece9e2] px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Our Timeline
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                A foundation established in 2020.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="mt-16 border-t border-[#1a1f1c]/10">

              <div className="grid gap-8 border-b border-[#1a1f1c]/10 py-10 md:grid-cols-[180px_1fr]">

                <div className="font-display text-4xl text-[#0f2a1d]">
                  2020
                </div>

                <div>

                  <h3 className="text-lg text-[#0f2a1d]">
                    Company Incorporated
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#737973]">
                    Crystal Balaji Industries Private Limited was incorporated
                    on 3 September 2020.
                  </p>

                </div>

              </div>

              <div className="grid gap-8 py-10 md:grid-cols-[180px_1fr]">

                <div className="font-display text-4xl text-[#c9a86a]">
                  NEXT
                </div>

                <div>

                  <h3 className="text-lg text-[#0f2a1d]">
                    Proposed Expansion Vision
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#737973]">
                    The stated expansion vision includes approximately 400 KLPD
                    distillation capacity and approximately 12.5 MW
                    co-generation capacity.
                  </p>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#c9a86a] px-6 py-20 md:py-28 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#0f2a1d]/50">
                Continue Exploring
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Discover how our manufacturing platform works.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <a
              href="/plant"
              className="inline-flex items-center gap-4 rounded-full bg-[#0f2a1d] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-1"
            >
              Explore Our Plant
              <ArrowUpRight size={18} />
            </a>

          </Reveal>

        </div>

      </section>

    </main>
  )
}