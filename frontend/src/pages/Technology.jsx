import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Beaker,
  Droplets,
  Factory,
  Flame,
  Gauge,
  Leaf,
  Settings2,
  Waves,
  Wind,
  Zap,
} from 'lucide-react'
import { useState } from 'react'

const processStages = [
  {
    id: 'feedstock',
    number: '01',
    title: 'Feedstock',
    icon: Leaf,
    description:
      'Corn and broken rice provide the primary agricultural feedstock for the grain-based manufacturing platform.',
    detail:
      'The process begins with agricultural raw materials that enter the integrated production system.',
  },
  {
    id: 'milling',
    number: '02',
    title: 'Milling',
    icon: Settings2,
    description:
      'Feedstock preparation creates the appropriate material characteristics for downstream processing.',
    detail:
      'Prepared grain moves into the subsequent stages of the manufacturing process.',
  },
  {
    id: 'fermentation',
    number: '03',
    title: 'Fermentation',
    icon: Beaker,
    description:
      'Prepared feedstock enters the fermentation stage as part of the ethanol production pathway.',
    detail:
      'Fermentation forms a critical stage between feedstock preparation and distillation.',
  },
  {
    id: 'distillation',
    number: '04',
    title: 'Distillation',
    icon: Factory,
    description:
      'The fermented stream is processed through the distillation system to separate and concentrate ethanol.',
    detail:
      'Distillation is central to the grain-based ethanol manufacturing process.',
  },
  {
    id: 'dehydration',
    number: '05',
    title: 'Dehydration',
    icon: Droplets,
    description:
      'Dehydration forms part of the downstream ethanol purification process.',
    detail:
      'The dehydration stage supports production of the final ethanol product.',
  },
  {
    id: 'recovery',
    number: '06',
    title: 'Recovery',
    icon: Wind,
    description:
      'Associated product streams such as DDGS and recovered CO₂ form part of the integrated ecosystem.',
    detail:
      'Recovery creates additional value streams from the broader manufacturing process.',
  },
]

const technologySystems = [
  {
    icon: Factory,
    title: 'Grain-Based Distillation',
    text:
      'An integrated grain-based platform designed around ethanol production and connected recovery streams.',
  },
  {
    icon: Beaker,
    title: 'Fermentation',
    text:
      'Fermentation serves as a key biological stage connecting prepared feedstock with downstream ethanol processing.',
  },
  {
    icon: Gauge,
    title: 'Dehydration',
    text:
      'Downstream dehydration supports the production pathway for the final ethanol product.',
  },
  {
    icon: Flame,
    title: 'Energy Integration',
    text:
      'Power and thermal infrastructure form part of the integrated manufacturing environment.',
  },
  {
    icon: Waves,
    title: 'Water Management',
    text:
      'Responsible water management is an important component of the manufacturing philosophy.',
  },
  {
    icon: Wind,
    title: 'CO₂ Recovery',
    text:
      'Carbon dioxide recovery creates an additional product stream within the integrated system.',
  },
]

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
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

export default function Technology() {
  const [activeStage, setActiveStage] = useState('feedstock')

  const active =
    processStages.find((stage) => stage.id === activeStage) ||
    processStages[0]

  const ActiveIcon = active.icon

  return (
    <main className="overflow-hidden bg-[#faf8f5] text-[#1a1f1c]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0b2117] px-6 pb-24 pt-36 text-white md:pb-32 lg:px-10">

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

        <div className="absolute -right-40 top-16 h-[34rem] w-[34rem] rounded-full border border-white/5" />
        <div className="absolute -right-12 top-36 h-80 w-80 rounded-full border border-[#c9a86a]/10" />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#c9a86a]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a]">
                Technology
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-6xl font-display text-5xl leading-[0.93] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.3rem]">
              Technology that
              <span className="block text-white/40">
                connects every stage.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              An integrated manufacturing approach connecting agricultural
              feedstock, fermentation, distillation, dehydration and recovery
              into one bio-energy ecosystem.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-12 grid max-w-3xl border-l border-t border-white/10 sm:grid-cols-3">

              <div className="border-b border-r border-white/10 p-6">
                <p className="font-display text-3xl">200</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
                  KLPD Capacity
                </p>
              </div>

              <div className="border-b border-r border-white/10 p-6">
                <p className="font-display text-3xl">~40</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
                  TPH Boiler
                </p>
              </div>

              <div className="border-b border-r border-white/10 p-6">
                <p className="font-display text-3xl">4.2–5</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
                  MW Power
                </p>
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">

          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#55705e]">
                Integrated Engineering
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                From agricultural feedstock to engineered energy.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-3xl">

              <p className="text-xl leading-9 text-[#4f5851]">
                Crystal Balaji Industries operates around a grain-based
                bio-energy manufacturing model where multiple process stages
                work together to create ethanol and associated value streams.
              </p>

              <p className="mt-7 text-[15px] leading-8 text-[#747a74]">
                The technology architecture described here represents the
                manufacturing pathway provided for the company. Detailed
                equipment specifications, manufacturers and proprietary
                process parameters are not assumed where verified information
                is unavailable.
              </p>

            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          PROCESS ARCHITECTURE
      ====================================================== */}
      <section className="bg-[#ece9e2] px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#55705e]">
                Process Architecture
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Six stages. One connected manufacturing system.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* PROCESS NAVIGATION */}
            <Reveal>

              <div className="border-l border-[#1a1f1c]/10">

                {processStages.map((stage) => {
                  const Icon = stage.icon
                  const isActive = activeStage === stage.id

                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => setActiveStage(stage.id)}
                      className={`group relative flex w-full items-center gap-5 border-b border-[#1a1f1c]/10 px-6 py-6 text-left transition ${
                        isActive
                          ? 'bg-[#0f2a1d] text-white'
                          : 'bg-transparent text-[#0f2a1d] hover:bg-[#faf8f5]'
                      }`}
                    >

                      {isActive && (
                        <motion.span
                          layoutId="active-process"
                          className="absolute -left-px top-0 h-full w-1 bg-[#c9a86a]"
                        />
                      )}

                      <span
                        className={`text-xs ${
                          isActive
                            ? 'text-[#c9a86a]'
                            : 'text-[#9da29d]'
                        }`}
                      >
                        {stage.number}
                      </span>

                      <Icon
                        size={19}
                        strokeWidth={1.4}
                        className={
                          isActive
                            ? 'text-[#c9a86a]'
                            : 'text-[#55705e]'
                        }
                      />

                      <span className="text-sm font-medium">
                        {stage.title}
                      </span>

                      <ArrowUpRight
                        size={16}
                        className={`ml-auto transition ${
                          isActive
                            ? 'text-[#c9a86a]'
                            : 'text-[#9da29d] group-hover:-translate-y-1 group-hover:translate-x-1'
                        }`}
                      />

                    </button>
                  )
                })}

              </div>

            </Reveal>

            {/* ACTIVE PROCESS DETAIL */}
            <Reveal delay={0.1}>

              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="min-h-[430px] bg-[#0f2a1d] p-8 text-white md:p-12"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center border border-[#c9a86a]/30 text-[#c9a86a]">
                    <ActiveIcon size={25} strokeWidth={1.3} />
                  </div>

                  <span className="font-display text-6xl text-white/10">
                    {active.number}
                  </span>

                </div>

                <p className="mt-20 text-xs uppercase tracking-[0.25em] text-[#c9a86a]">
                  Process Stage
                </p>

                <h3 className="mt-4 font-display text-5xl md:text-6xl">
                  {active.title}
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-8 text-white/55">
                  {active.description}
                </p>

                <div className="mt-10 border-t border-white/10 pt-6">
                  <p className="text-xs leading-6 text-white/35">
                    {active.detail}
                  </p>
                </div>

              </motion.div>

            </Reveal>

          </div>
        </div>
      </section>

      {/* =====================================================
          FLOW VISUALIZATION
      ====================================================== */}
      <section className="bg-[#0b2117] px-6 py-24 text-white md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#c9a86a]">
                Manufacturing Flow
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                A continuous journey from grain to value.
              </h2>

            </div>
          </Reveal>

          <Reveal delay={0.1}>

            <div className="mt-16">

              <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">

                {processStages.map((stage, index) => {
                  const Icon = stage.icon

                  return (
                    <div key={stage.id} className="relative">

                      <div className="min-h-[190px] border border-white/10 p-6 transition hover:border-[#c9a86a]/30">

                        <span className="text-xs text-white/25">
                          {stage.number}
                        </span>

                        <Icon
                          size={21}
                          strokeWidth={1.3}
                          className="mt-9 text-[#c9a86a]"
                        />

                        <p className="mt-5 text-sm text-white/75">
                          {stage.title}
                        </p>

                      </div>

                      {index < processStages.length - 1 && (
                        <ArrowDown
                          size={16}
                          className="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 text-[#c9a86a] md:hidden"
                        />
                      )}

                    </div>
                  )
                })}

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY SYSTEMS
      ====================================================== */}
      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                  Technology Systems
                </p>

                <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                  Engineering around integration, efficiency and recovery.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#7b817b]">
                The following systems reflect the technology areas described
                in the current company brief.
              </p>

            </div>
          </Reveal>

          <div className="mt-16 grid gap-px border-l border-t border-[#1a1f1c]/10 md:grid-cols-2 lg:grid-cols-3">

            {technologySystems.map((system, index) => {
              const Icon = system.icon

              return (
                <Reveal key={system.title} delay={index * 0.05}>

                  <article className="group min-h-[285px] border-b border-r border-[#1a1f1c]/10 p-8 transition hover:bg-[#f0eee8] md:p-10">

                    <div className="flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center border border-[#55705e]/20 text-[#55705e] transition group-hover:border-[#c9a86a]/60 group-hover:text-[#0f2a1d]">
                        <Icon size={19} strokeWidth={1.3} />
                      </div>

                      <span className="text-xs text-[#b1b5b0]">
                        0{index + 1}
                      </span>

                    </div>

                    <h3 className="mt-12 text-lg font-medium text-[#0f2a1d]">
                      {system.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#737973]">
                      {system.text}
                    </p>

                  </article>

                </Reveal>
              )
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          ENERGY + RESOURCE INTEGRATION
      ====================================================== */}
      <section className="bg-[#ece9e2] px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Integrated Infrastructure
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Technology is more than the production line.
              </h2>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#6e756f]">
                The broader plant architecture also includes energy
                infrastructure, water management and recovery systems that
                support responsible industrial manufacturing.
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="space-y-3">

              <div className="flex items-center justify-between border border-[#1a1f1c]/10 bg-[#faf8f5] p-6">
                <div className="flex items-center gap-4">
                  <Zap className="text-[#55705e]" size={20} />
                  <span className="text-sm text-[#0f2a1d]">
                    Power Infrastructure
                  </span>
                </div>

                <span className="text-xs text-[#7d837d]">
                  ~4.2–5 MW
                </span>
              </div>

              <div className="flex items-center justify-between border border-[#1a1f1c]/10 bg-[#faf8f5] p-6">
                <div className="flex items-center gap-4">
                  <Flame className="text-[#55705e]" size={20} />
                  <span className="text-sm text-[#0f2a1d]">
                    Boiler Infrastructure
                  </span>
                </div>

                <span className="text-xs text-[#7d837d]">
                  ~40 TPH
                </span>
              </div>

              <div className="flex items-center justify-between border border-[#1a1f1c]/10 bg-[#faf8f5] p-6">
                <div className="flex items-center gap-4">
                  <Waves className="text-[#55705e]" size={20} />
                  <span className="text-sm text-[#0f2a1d]">
                    Water Management
                  </span>
                </div>

                <span className="text-xs text-[#7d837d]">
                  Integrated
                </span>
              </div>

              <div className="flex items-center justify-between border border-[#1a1f1c]/10 bg-[#faf8f5] p-6">
                <div className="flex items-center gap-4">
                  <Wind className="text-[#55705e]" size={20} />
                  <span className="text-sm text-[#0f2a1d]">
                    CO₂ Recovery
                  </span>
                </div>

                <span className="text-xs text-[#7d837d]">
                  Integrated
                </span>
              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          ENGINEERING PRINCIPLES
      ====================================================== */}
      <section className="bg-[#0f2a1d] px-6 py-24 text-white md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[#c9a86a]">
              Engineering Philosophy
            </p>

            <h2 className="mt-5 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
              Building systems where efficiency and responsibility work together.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            {[
              'Integration',
              'Resource Utilization',
              'Energy Efficiency',
              'Responsible Manufacturing',
            ].map((item, index) => (

              <Reveal key={item} delay={index * 0.07}>

                <div className="min-h-[190px] border border-white/10 p-7 transition hover:border-[#c9a86a]/30">

                  <span className="font-display text-4xl text-[#c9a86a]/50">
                    0{index + 1}
                  </span>

                  <p className="mt-12 text-sm text-white/70">
                    {item}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

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
                Explore Further
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                See how technology connects with sustainability.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <a
              href="/sustainability"
              className="inline-flex items-center gap-4 rounded-full bg-[#0f2a1d] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-[#173c29]"
            >
              Explore Sustainability
              <ArrowUpRight size={18} />
            </a>

          </Reveal>

        </div>

      </section>

    </main>
  )
}