import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Droplets,
  Factory,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Wind,
  Zap,
} from 'lucide-react'

const pillars = [
  {
    number: '01',
    icon: Leaf,
    title: 'Renewable Feedstock',
    description:
      'Corn and broken rice form the primary agricultural feedstock for the grain-based bio-energy manufacturing pathway.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Biomass Energy',
    description:
      'Energy infrastructure is integrated into the broader manufacturing environment to support responsible industrial operations.',
  },
  {
    number: '03',
    icon: Droplets,
    title: 'Water Management',
    description:
      'Water management is treated as an important part of responsible manufacturing and resource stewardship.',
  },
  {
    number: '04',
    icon: Recycle,
    title: 'Circular Manufacturing',
    description:
      'The production ecosystem is designed around creating multiple value streams from agricultural inputs.',
  },
  {
    number: '05',
    icon: Wind,
    title: 'CO₂ Recovery',
    description:
      'Carbon dioxide recovery forms part of the integrated product ecosystem alongside ethanol and DDGS.',
  },
  {
    number: '06',
    icon: ShieldCheck,
    title: 'Responsible Growth',
    description:
      'Future capacity development is presented alongside a commitment to efficient and responsible industrial growth.',
  },
]

const principles = [
  'Resource utilization',
  'Energy integration',
  'Water stewardship',
  'Product recovery',
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

function MetricCard({ icon: Icon, label, value, description }) {
  return (
    <div className="border border-white/10 bg-white/[0.035] p-7">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center border border-[#c9a86a]/30 text-[#c9a86a]">
          <Icon size={19} strokeWidth={1.3} />
        </div>

        <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
          Metric
        </span>
      </div>

      <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/40">
        {label}
      </p>

      <p className="mt-3 font-display text-2xl text-white">
        {value}
      </p>

      <p className="mt-3 text-sm leading-6 text-white/40">
        {description}
      </p>
    </div>
  )
}

export default function Sustainability() {
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
          className="absolute -right-32 top-24 h-[34rem] w-[34rem] rounded-full border border-white/5"
          animate={{
            rotate: [0, 8, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute right-20 top-48 h-56 w-56 rounded-full border border-[#c9a86a]/10"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#c9a86a]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a]">
                Sustainability
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-6xl font-display text-5xl leading-[0.93] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.3rem]">
              Industrial growth.
              <span className="block text-white/40">
                Responsible by design.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              Building a bio-energy manufacturing ecosystem around renewable
              agricultural feedstock, resource utilization, recovery and
              responsible industrial development.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="/technology"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#0f2a1d] transition hover:-translate-y-1"
              >
                Explore Technology
                <ArrowUpRight size={17} />
              </a>

              <a
                href="/plant"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/75 transition hover:border-white/30 hover:text-white"
              >
                View Our Plant
              </a>
            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#55705e]">
                Our Approach
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Turning agricultural resources into more valuable outputs.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-3xl">

              <p className="text-xl leading-9 text-[#4f5851]">
                Sustainability at Crystal Balaji Industries is connected to
                the way the manufacturing system is designed — from grain
                feedstock and energy infrastructure to ethanol, DDGS and
                recovered CO₂.
              </p>

              <p className="mt-7 text-[15px] leading-8 text-[#747a74]">
                The sustainability information presented on this page is
                intentionally limited to the company information currently
                available. Exact environmental performance figures,
                certification claims and quantified impact metrics are not
                invented where verified data has not been provided.
              </p>

            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          PILLARS
      ====================================================== */}
      <section className="bg-[#ece9e2] px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Sustainability Pillars
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Responsibility built into the manufacturing ecosystem.
              </h2>

            </div>
          </Reveal>

          <div className="mt-16 grid gap-px border-l border-t border-[#1a1f1c]/10 md:grid-cols-2 lg:grid-cols-3">

            {pillars.map((pillar, index) => {
              const Icon = pillar.icon

              return (
                <Reveal key={pillar.title} delay={index * 0.05}>

                  <article className="group min-h-[310px] border-b border-r border-[#1a1f1c]/10 bg-[#ece9e2] p-8 transition hover:bg-[#faf8f5] md:p-10">

                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center border border-[#55705e]/20 text-[#55705e] transition group-hover:border-[#c9a86a]/60 group-hover:text-[#0f2a1d]">
                        <Icon size={20} strokeWidth={1.3} />
                      </div>

                      <span className="font-display text-4xl text-[#1a1f1c]/10">
                        {pillar.number}
                      </span>

                    </div>

                    <h3 className="mt-12 text-lg font-medium text-[#0f2a1d]">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#737973]">
                      {pillar.description}
                    </p>

                  </article>

                </Reveal>
              )
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          CIRCULAR MANUFACTURING
      ====================================================== */}
      <section className="bg-[#0f2a1d] px-6 py-24 text-white md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#c9a86a]">
                Circular Manufacturing
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                One agricultural input. Multiple value streams.
              </h2>

              <p className="mt-7 text-sm leading-8 text-white/45">
                The integrated manufacturing model connects agricultural
                feedstock with ethanol production and associated recovery
                streams.
              </p>

            </div>
          </Reveal>

          <Reveal delay={0.1}>

            <div className="relative mt-20">

              <div className="grid gap-3 md:grid-cols-5 md:items-center">

                <div className="border border-white/10 p-7 text-center">
                  <Leaf
                    size={25}
                    strokeWidth={1.2}
                    className="mx-auto text-[#c9a86a]"
                  />

                  <p className="mt-5 text-sm text-white/70">
                    Agricultural
                    <br />
                    Feedstock
                  </p>
                </div>

                <div className="hidden h-px bg-white/10 md:block" />

                <div className="border border-[#c9a86a]/30 bg-[#c9a86a]/5 p-7 text-center">
                  <Factory
                    size={25}
                    strokeWidth={1.2}
                    className="mx-auto text-[#c9a86a]"
                  />

                  <p className="mt-5 text-sm text-white/70">
                    Bio-Energy
                    <br />
                    Manufacturing
                  </p>
                </div>

                <div className="hidden h-px bg-white/10 md:block" />

                <div className="border border-white/10 p-7 text-center">
                  <Recycle
                    size={25}
                    strokeWidth={1.2}
                    className="mx-auto text-[#c9a86a]"
                  />

                  <p className="mt-5 text-sm text-white/70">
                    Resource
                    <br />
                    Recovery
                  </p>
                </div>

              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">

                <div className="border border-white/10 p-8">

                  <div className="flex items-center gap-4">
                    <Sparkles
                      size={20}
                      strokeWidth={1.2}
                      className="text-[#c9a86a]"
                    />

                    <span className="text-sm text-white/75">
                      Ethanol
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-6 text-white/35">
                    Primary product from the grain-based bio-energy
                    manufacturing pathway.
                  </p>

                </div>

                <div className="border border-white/10 p-8">

                  <div className="flex items-center gap-4">
                    <Wind
                      size={20}
                      strokeWidth={1.2}
                      className="text-[#c9a86a]"
                    />

                    <span className="text-sm text-white/75">
                      DDGS + CO₂
                    </span>
                  </div>

                  <p className="mt-4 text-xs leading-6 text-white/35">
                    Associated product and recovery streams within the
                    integrated manufacturing ecosystem.
                  </p>

                </div>

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          METRICS DASHBOARD
      ====================================================== */}
      <section className="bg-[#0b2117] px-6 py-24 text-white md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#c9a86a]">
                  Sustainability Dashboard
                </p>

                <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
                  Measuring what matters — without manufacturing numbers.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-white/35">
                Verified environmental performance data can be added through
                the corporate CMS when officially published.
              </p>

            </div>
          </Reveal>

          <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">

            <Reveal delay={0}>
              <MetricCard
                icon={Droplets}
                label="Water"
                value="Data to be published"
                description="Quantified water recycling and conservation data can be added when verified."
              />
            </Reveal>

            <Reveal delay={0.05}>
              <MetricCard
                icon={Zap}
                label="Energy"
                value="Integrated infrastructure"
                description="Power infrastructure forms part of the manufacturing ecosystem."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <MetricCard
                icon={Wind}
                label="Carbon"
                value="CO₂ recovery"
                description="CO₂ recovery is identified as an integrated product stream."
              />
            </Reveal>

            <Reveal delay={0.15}>
              <MetricCard
                icon={Recycle}
                label="Circularity"
                value="Multi-stream recovery"
                description="Ethanol, DDGS and CO₂ connect the broader product ecosystem."
              />
            </Reveal>

          </div>

        </div>
      </section>

      {/* =====================================================
          RESPONSIBLE MANUFACTURING
      ====================================================== */}
      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Responsible Manufacturing
              </p>

              <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Sustainability should live inside the process.
              </h2>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#737973]">
                A responsible industrial model considers how resources enter
                the plant, how energy is generated and utilized, and how
                associated product streams are recovered.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#737973]">
                This approach supports the company's broader vision of
                sustainable manufacturing while keeping future environmental
                claims dependent on verified company data.
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="border border-[#1a1f1c]/10 bg-[#ece9e2] p-8 md:p-10">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center border border-[#55705e]/20 text-[#55705e]">
                  <ShieldCheck size={20} strokeWidth={1.3} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#55705e]">
                    Core Principle
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#0f2a1d]">
                    Responsible by Design
                  </p>
                </div>

              </div>

              <div className="mt-10 space-y-0">

                {principles.map((principle, index) => (

                  <div
                    key={principle}
                    className="flex items-center justify-between border-t border-[#1a1f1c]/10 py-5"
                  >
                    <span className="text-sm text-[#424a43]">
                      {principle}
                    </span>

                    <span className="text-xs text-[#a0a59f]">
                      0{index + 1}
                    </span>
                  </div>

                ))}

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          FUTURE EXPANSION
      ====================================================== */}
      <section className="bg-[#ece9e2] px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Future Scale
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Growth designed with sustainability in mind.
              </h2>

              <p className="mt-7 text-[15px] leading-8 text-[#737973]">
                The proposed expansion represents a future vision for
                increased manufacturing capacity and co-generation
                infrastructure. It is not presented here as completed
                operational capacity.
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="mt-16 grid gap-3 md:grid-cols-2">

              <div className="bg-[#0f2a1d] p-8 text-white md:p-10">

                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Current
                </p>

                <p className="mt-7 font-display text-6xl">
                  200
                </p>

                <p className="mt-2 text-sm text-white/45">
                  KLPD distillation capacity
                </p>

              </div>

              <div className="border border-[#1a1f1c]/10 bg-[#faf8f5] p-8 md:p-10">

                <p className="text-xs uppercase tracking-[0.2em] text-[#55705e]">
                  Proposed
                </p>

                <p className="mt-7 font-display text-6xl text-[#0f2a1d]">
                  400
                </p>

                <p className="mt-2 text-sm text-[#737973]">
                  KLPD proposed distillation capacity
                </p>

              </div>

            </div>

          </Reveal>

          <Reveal delay={0.15}>

            <div className="mt-3 grid gap-3 md:grid-cols-2">

              <div className="border border-[#1a1f1c]/10 bg-[#faf8f5] p-8 md:p-10">

                <p className="text-xs uppercase tracking-[0.2em] text-[#55705e]">
                  Current Power
                </p>

                <p className="mt-7 font-display text-5xl text-[#0f2a1d]">
                  4.2–5 MW
                </p>

                <p className="mt-3 text-sm text-[#737973]">
                  Approximate power infrastructure
                </p>

              </div>

              <div className="border border-[#c9a86a]/40 bg-[#c9a86a]/10 p-8 md:p-10">

                <p className="text-xs uppercase tracking-[0.2em] text-[#7c663b]">
                  Proposed
                </p>

                <p className="mt-7 font-display text-5xl text-[#0f2a1d]">
                  12.5 MW
                </p>

                <p className="mt-3 text-sm text-[#737973]">
                  Proposed co-generation capacity
                </p>

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
                Discover the systems behind the sustainability vision.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <a
              href="/expansion"
              className="inline-flex items-center gap-4 rounded-full bg-[#0f2a1d] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-[#173c29]"
            >
              Explore Expansion
              <ArrowUpRight size={18} />
            </a>

          </Reveal>

        </div>

      </section>

    </main>
  )
}