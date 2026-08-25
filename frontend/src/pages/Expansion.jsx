import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Factory,
  Gauge,
  IndianRupee,
  Leaf,
  Zap,
} from 'lucide-react'

const roadmap = [
  {
    year: '2020',
    title: 'Company Established',
    text: 'Crystal Balaji Industries Private Limited was incorporated on 3 September 2020.',
  },
  {
    year: 'CURRENT',
    title: 'Current Operations',
    text: 'The current company profile includes approximately 200 KLPD distillation capacity and approximately 4.2–5 MW power infrastructure.',
  },
  {
    year: 'PLANNING',
    title: 'Expansion Planning',
    text: 'The company has a proposed expansion vision focused on increasing distillation and co-generation capacity.',
  },
  {
    year: 'VISION',
    title: '400 KLPD',
    text: 'Proposed expansion toward approximately 400 KLPD distillation capacity.',
  },
  {
    year: 'VISION',
    title: '12.5 MW',
    text: 'Proposed co-generation capacity of approximately 12.5 MW.',
  },
]

const benefits = [
  {
    icon: Factory,
    title: 'Greater Manufacturing Scale',
    text: 'The proposed expansion would increase the planned distillation scale from approximately 200 KLPD to approximately 400 KLPD.',
  },
  {
    icon: Zap,
    title: 'Expanded Energy Infrastructure',
    text: 'The proposed vision includes increasing co-generation capacity toward approximately 12.5 MW.',
  },
  {
    icon: Leaf,
    title: 'Bio-Energy Growth',
    text: 'Additional capacity is aligned with the broader vision of sustainable grain-based bio-energy manufacturing.',
  },
  {
    icon: Gauge,
    title: 'Integrated Ecosystem',
    text: 'The expansion vision can support the broader ethanol, DDGS, CO₂ and energy ecosystem.',
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

export default function Expansion() {
  return (
    <main className="overflow-hidden bg-[#faf8f5] text-[#1a1f1c]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0b2117] px-6 pb-28 pt-36 text-white md:pb-36 lg:px-10">

        <div className="absolute inset-0 opacity-[0.045]">
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
          className="absolute -right-40 top-20 h-[36rem] w-[36rem] rounded-full border border-white/5"
          animate={{
            rotate: [0, 6, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#c9a86a]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a]">
                Proposed Expansion
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-6xl font-display text-5xl leading-[0.93] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.3rem]">
              Building the next scale
              <span className="block text-white/40">
                of sustainable manufacturing.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              A proposed expansion vision focused on increasing distillation
              capacity and developing a larger co-generation infrastructure.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-12 inline-flex items-center gap-3 border border-[#c9a86a]/30 bg-[#c9a86a]/5 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#c9a86a]">
              <CalendarDays size={16} />
              Planned / Proposed — Not Completed
            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          CURRENT VS PROPOSED
      ====================================================== */}
      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Capacity Vision
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Scaling the platform without losing the purpose.
              </h2>

            </div>
          </Reveal>

          <div className="mt-16 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">

            {/* CURRENT */}
            <Reveal>

              <div className="h-full border border-[#1a1f1c]/10 bg-[#ece9e2] p-8 md:p-12">

                <p className="text-xs uppercase tracking-[0.22em] text-[#55705e]">
                  Current
                </p>

                <p className="mt-10 font-display text-7xl leading-none text-[#0f2a1d] md:text-8xl">
                  200
                </p>

                <p className="mt-3 text-sm text-[#737973]">
                  KLPD distillation capacity
                </p>

                <div className="mt-12 border-t border-[#1a1f1c]/10 pt-6">

                  <p className="text-xs uppercase tracking-[0.18em] text-[#9a9f99]">
                    Power Infrastructure
                  </p>

                  <p className="mt-3 font-display text-3xl text-[#0f2a1d]">
                    4.2–5 MW
                  </p>

                </div>

              </div>

            </Reveal>

            {/* ARROW */}
            <div className="flex items-center justify-center py-4 md:px-2 md:py-0">

              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a86a] text-[#a98b53]"
              >
                <ArrowUpRight size={20} />
              </motion.div>

            </div>

            {/* PROPOSED */}
            <Reveal delay={0.1}>

              <div className="relative h-full overflow-hidden border border-[#c9a86a]/40 bg-[#0f2a1d] p-8 text-white md:p-12">

                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#c9a86a]/5 blur-3xl" />

                <p className="relative text-xs uppercase tracking-[0.22em] text-[#c9a86a]">
                  Proposed
                </p>

                <p className="relative mt-10 font-display text-7xl leading-none md:text-8xl">
                  400
                </p>

                <p className="relative mt-3 text-sm text-white/45">
                  KLPD proposed distillation capacity
                </p>

                <div className="relative mt-12 border-t border-white/10 pt-6">

                  <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                    Proposed Power Infrastructure
                  </p>

                  <p className="mt-3 font-display text-3xl text-[#c9a86a]">
                    12.5 MW
                  </p>

                </div>

              </div>

            </Reveal>

          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT VALUE
      ====================================================== */}
      <section className="bg-[#c9a86a] px-6 py-24 md:py-28 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <Reveal>

            <div>

              <div className="flex h-14 w-14 items-center justify-center border border-[#0f2a1d]/20 text-[#0f2a1d]">
                <IndianRupee size={24} strokeWidth={1.3} />
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#0f2a1d]/50">
                Proposed Project Value
              </p>

              <p className="mt-4 font-display text-6xl leading-none text-[#0f2a1d] md:text-8xl">
                ₹383.14 Cr
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="max-w-2xl">

              <div className="border-l border-[#0f2a1d]/20 pl-6">

                <p className="text-lg leading-8 text-[#0f2a1d]/70">
                  The ₹383.14 Crore figure is presented as the proposed
                  expansion project value provided in the company brief.
                </p>

                <p className="mt-5 text-sm leading-7 text-[#0f2a1d]/50">
                  This page does not interpret the figure as completed
                  investment, realized expenditure, revenue, valuation or
                  financial performance.
                </p>

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          EXPANSION ROADMAP
      ====================================================== */}
      <section className="bg-[#0f2a1d] px-6 py-24 text-white md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#c9a86a]">
                Expansion Roadmap
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                From establishment to the next capacity horizon.
              </h2>

            </div>

          </Reveal>

          <div className="mt-20">

            {roadmap.map((item, index) => (

              <Reveal key={`${item.year}-${item.title}`} delay={index * 0.06}>

                <div className="group grid gap-5 border-t border-white/10 py-8 md:grid-cols-[150px_1fr_auto] md:items-center">

                  <div className="font-display text-3xl text-[#c9a86a]">
                    {item.year}
                  </div>

                  <div>

                    <h3 className="text-lg text-white/85">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/35">
                      {item.text}
                    </p>

                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/30 transition group-hover:border-[#c9a86a]/40 group-hover:text-[#c9a86a] md:flex">
                    {index < roadmap.length - 1 ? (
                      <ArrowDown size={16} />
                    ) : (
                      <ArrowUpRight size={16} />
                    )}
                  </div>

                </div>

              </Reveal>

            ))}

            <div className="border-t border-white/10" />

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY THE EXPANSION
      ====================================================== */}
      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Strategic Direction
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                What the proposed expansion is designed to enable.
              </h2>

            </div>

          </Reveal>

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon

              return (
                <Reveal key={benefit.title} delay={index * 0.06}>

                  <article className="min-h-[300px] border border-[#1a1f1c]/10 bg-[#ece9e2] p-8 transition hover:bg-[#f1efe9] md:p-9">

                    <div className="flex h-11 w-11 items-center justify-center border border-[#55705e]/20 text-[#55705e]">
                      <Icon size={19} strokeWidth={1.3} />
                    </div>

                    <h3 className="mt-12 text-lg font-medium text-[#0f2a1d]">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#737973]">
                      {benefit.text}
                    </p>

                  </article>

                </Reveal>
              )
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          CURRENT / PROPOSED POWER
      ====================================================== */}
      <section className="bg-[#ece9e2] px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <div>

                <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                  Infrastructure Vision
                </p>

                <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                  Capacity and energy infrastructure moving together.
                </h2>

              </div>

              <p className="max-w-sm text-sm leading-7 text-[#737973]">
                Current and proposed figures are deliberately separated to
                avoid presenting future plans as operational facts.
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="mt-16 overflow-hidden border border-[#1a1f1c]/10 bg-[#faf8f5]">

              <div className="grid md:grid-cols-2">

                <div className="border-b border-[#1a1f1c]/10 p-8 md:border-b-0 md:border-r md:p-12">

                  <p className="text-xs uppercase tracking-[0.2em] text-[#55705e]">
                    Current Infrastructure
                  </p>

                  <div className="mt-10 space-y-7">

                    <div className="flex items-end justify-between border-b border-[#1a1f1c]/10 pb-5">
                      <span className="text-sm text-[#737973]">
                        Distillation
                      </span>

                      <span className="font-display text-3xl text-[#0f2a1d]">
                        200 KLPD
                      </span>
                    </div>

                    <div className="flex items-end justify-between border-b border-[#1a1f1c]/10 pb-5">
                      <span className="text-sm text-[#737973]">
                        Power
                      </span>

                      <span className="font-display text-3xl text-[#0f2a1d]">
                        4.2–5 MW
                      </span>
                    </div>

                    <div className="flex items-end justify-between">
                      <span className="text-sm text-[#737973]">
                        Boiler
                      </span>

                      <span className="font-display text-3xl text-[#0f2a1d]">
                        ~40 TPH
                      </span>
                    </div>

                  </div>

                </div>

                <div className="bg-[#0f2a1d] p-8 text-white md:p-12">

                  <p className="text-xs uppercase tracking-[0.2em] text-[#c9a86a]">
                    Proposed Infrastructure
                  </p>

                  <div className="mt-10 space-y-7">

                    <div className="flex items-end justify-between border-b border-white/10 pb-5">
                      <span className="text-sm text-white/45">
                        Distillation
                      </span>

                      <span className="font-display text-3xl text-white">
                        400 KLPD
                      </span>
                    </div>

                    <div className="flex items-end justify-between border-b border-white/10 pb-5">
                      <span className="text-sm text-white/45">
                        Co-generation
                      </span>

                      <span className="font-display text-3xl text-[#c9a86a]">
                        12.5 MW
                      </span>
                    </div>

                    <div className="flex items-end justify-between">
                      <span className="text-sm text-white/45">
                        Status
                      </span>

                      <span className="text-sm text-[#c9a86a]">
                        Proposed
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          IMPORTANT CORPORATE NOTE
      ====================================================== */}
      <section className="px-6 py-24 md:py-28 lg:px-10">

        <div className="mx-auto max-w-5xl">

          <Reveal>

            <div className="border-l-2 border-[#c9a86a] pl-7 md:pl-10">

              <p className="text-xs uppercase tracking-[0.25em] text-[#55705e]">
                Corporate Information Note
              </p>

              <h2 className="mt-5 font-display text-3xl leading-tight text-[#0f2a1d] md:text-5xl">
                Proposed capacity is not operational capacity.
              </h2>

              <p className="mt-6 text-[15px] leading-8 text-[#737973]">
                The 400 KLPD distillation and 12.5 MW co-generation figures
                shown on this page represent the proposed expansion vision
                provided for the project. They must not be interpreted as
                completed, commissioned or currently operational facilities.
              </p>

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
                Explore The Platform
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Understand the technology behind the expansion vision.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="flex flex-wrap gap-3">

              <a
                href="/technology"
                className="inline-flex items-center gap-4 rounded-full bg-[#0f2a1d] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-1"
              >
                Explore Technology
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-4 rounded-full border border-[#0f2a1d]/20 px-7 py-4 text-sm font-medium text-[#0f2a1d] transition hover:-translate-y-1 hover:bg-[#0f2a1d]/5"
              >
                Contact Us
              </a>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  )
}