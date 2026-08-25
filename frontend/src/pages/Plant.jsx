import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Factory,
  Flame,
  Gauge,
  Leaf,
  Droplets,
  Wind,
  Zap,
} from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: 'Feedstock',
    description:
      'Corn and broken rice serve as the primary grain-based feedstock for the manufacturing process.',
    icon: Leaf,
  },
  {
    number: '02',
    title: 'Milling',
    description:
      'Prepared grain is processed to create a suitable feed stream for downstream conversion.',
    icon: Factory,
  },
  {
    number: '03',
    title: 'Fermentation',
    description:
      'Processed feedstock moves through fermentation to convert available starch into fermentable material.',
    icon: Gauge,
  },
  {
    number: '04',
    title: 'Distillation',
    description:
      'The fermented stream enters distillation, forming the core of the ethanol production process.',
    icon: Flame,
  },
  {
    number: '05',
    title: 'Dehydration',
    description:
      'Further processing removes remaining water to produce high-purity ethanol.',
    icon: Droplets,
  },
  {
    number: '06',
    title: 'Integrated Recovery',
    description:
      'The process ecosystem supports recovery of DDGS and Liquid CO₂ alongside ethanol production.',
    icon: Wind,
  },
  {
    number: '07',
    title: 'Power Generation',
    description:
      'Integrated energy infrastructure supports the manufacturing operation.',
    icon: Zap,
  },
  {
    number: '08',
    title: 'Water Management',
    description:
      'The plant is designed around responsible water management and a Zero Liquid Discharge focus.',
    icon: Droplets,
  },
]

const infrastructure = [
  {
    value: '200',
    unit: 'KLPD',
    label: 'Current distillation capacity',
  },
  {
    value: '40',
    unit: 'TPH',
    label: 'Approximate boiler infrastructure',
  },
  {
    value: '4.2–5',
    unit: 'MW',
    label: 'Approximate power infrastructure',
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

export default function Plant() {
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
          className="absolute -right-48 top-20 h-[34rem] w-[34rem] rounded-full border border-white/5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>

            <div className="flex items-center gap-4">

              <span className="h-px w-12 bg-[#c9a86a]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a]">
                Our Plant
              </span>

            </div>

          </Reveal>

          <Reveal delay={0.08}>

            <h1 className="mt-8 max-w-6xl font-display text-5xl leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.4rem]">
              Where grain becomes
              <span className="block text-white/40">
                industrial energy.
              </span>
            </h1>

          </Reveal>

          <Reveal delay={0.16}>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              An integrated grain-based bio-energy manufacturing platform
              located in Begrajpur, Tehsil Khatauli, Muzaffarnagar, Uttar
              Pradesh.
            </p>

          </Reveal>

          <Reveal delay={0.22}>

            <div className="mt-12 flex flex-wrap gap-3">

              <a
                href="#process"
                className="inline-flex items-center gap-3 rounded-full bg-[#c9a86a] px-6 py-3.5 text-sm font-medium text-[#0f2a1d] transition hover:-translate-y-1"
              >
                Explore Process
                <ArrowDown size={17} />
              </a>

              <a
                href="/technology"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/5"
              >
                Technology
                <ArrowUpRight size={17} />
              </a>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          PLANT LOCATION
      ====================================================== */}

      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Manufacturing Facility
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Integrated manufacturing at Begrajpur.
              </h2>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-[#737973]">
                The manufacturing facility is located at Begrajpur, Tehsil
                Khatauli, Muzaffarnagar, Uttar Pradesh. Its manufacturing
                profile is centered around grain-based distillation and
                integrated recovery systems.
              </p>

              <div className="mt-10 flex items-start gap-5 border-l-2 border-[#c9a86a] pl-6">

                <Factory
                  size={26}
                  strokeWidth={1.2}
                  className="mt-1 shrink-0 text-[#55705e]"
                />

                <div>

                  <p className="text-xs uppercase tracking-[0.18em] text-[#8a8f89]">
                    Facility Location
                  </p>

                  <p className="mt-2 text-sm leading-7 text-[#0f2a1d]">
                    Begrajpur, Tehsil Khatauli,
                    <br />
                    Muzaffarnagar, Uttar Pradesh
                  </p>

                </div>

              </div>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="relative min-h-[430px] overflow-hidden bg-[#0f2a1d]">

              <div className="absolute inset-0">

                <div className="absolute left-[15%] top-[15%] h-72 w-72 rounded-full border border-[#c9a86a]/20" />

                <div className="absolute bottom-[8%] right-[8%] h-48 w-48 rounded-full border border-white/10" />

                <div className="absolute left-[35%] top-[30%] h-40 w-40 rounded-full bg-[#c9a86a]/10 blur-3xl" />

              </div>

              <div className="relative flex min-h-[430px] flex-col justify-between p-8 md:p-10">

                <div className="flex justify-between">

                  <span className="text-xs uppercase tracking-[0.25em] text-[#c9a86a]">
                    Plant Profile
                  </span>

                  <Factory
                    size={22}
                    strokeWidth={1}
                    className="text-white/30"
                  />

                </div>

                <div>

                  <p className="font-display text-5xl text-white md:text-6xl">
                    200
                    <span className="ml-2 text-2xl text-white/40">
                      KLPD
                    </span>
                  </p>

                  <p className="mt-3 text-sm text-white/40">
                    Current distillation capacity
                  </p>

                  <div className="mt-8 h-px bg-white/10" />

                  <p className="mt-6 text-xs leading-6 text-white/35">
                    Current operational figures are presented separately from
                    proposed future expansion.
                  </p>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          INFRASTRUCTURE
      ====================================================== */}

      <section className="bg-[#ece9e2] px-6 py-20 md:py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="grid gap-3 md:grid-cols-3">

              {infrastructure.map((item, index) => (

                <motion.article
                  key={item.label}
                  className="border border-[#1a1f1c]/10 bg-[#faf8f5] p-8"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                >

                  <p className="font-display text-5xl text-[#0f2a1d]">
                    {item.value}
                    <span className="ml-2 text-lg text-[#55705e]">
                      {item.unit}
                    </span>
                  </p>

                  <div className="mt-7 h-px bg-[#1a1f1c]/10" />

                  <p className="mt-5 text-sm leading-7 text-[#737973]">
                    {item.label}
                  </p>

                </motion.article>

              ))}

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        id="process"
        className="px-6 py-24 md:py-32 lg:px-10"
      >

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Manufacturing Process
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                A connected process from feedstock to finished products.
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#737973]">
                The following represents the high-level manufacturing flow.
                Detailed operating parameters and proprietary engineering
                information are not presented as verified plant specifications.
              </p>

            </div>

          </Reveal>

          <div className="relative mt-16">

            <div className="absolute bottom-0 left-[23px] top-0 hidden w-px bg-[#1a1f1c]/10 md:block" />

            <div className="space-y-3">

              {processSteps.map((step, index) => {

                const Icon = step.icon

                return (
                  <Reveal
                    key={step.number}
                    delay={index * 0.04}
                  >

                    <article className="group relative grid gap-6 border border-[#1a1f1c]/10 bg-[#ece9e2] p-7 transition duration-500 hover:-translate-y-1 hover:bg-[#e6e3db] md:grid-cols-[100px_70px_1fr] md:items-center">

                      <div className="font-display text-3xl text-[#c9a86a]">
                        {step.number}
                      </div>

                      <div className="flex h-14 w-14 items-center justify-center border border-[#55705e]/20 bg-[#faf8f5] text-[#55705e]">

                        <Icon
                          size={21}
                          strokeWidth={1.2}
                        />

                      </div>

                      <div>

                        <h3 className="text-lg font-medium text-[#0f2a1d]">
                          {step.title}
                        </h3>

                        <p className="mt-2 max-w-3xl text-sm leading-7 text-[#737973]">
                          {step.description}
                        </p>

                      </div>

                    </article>

                  </Reveal>
                )
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS OUTPUTS
      ====================================================== */}

      <section className="bg-[#0f2a1d] px-6 py-24 text-white md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-xs uppercase tracking-[0.28em] text-[#c9a86a]">
                  Integrated Outputs
                </p>

                <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                  More value from the same production ecosystem.
                </h2>

              </div>

              <div className="grid gap-px bg-white/10 sm:grid-cols-3">

                <div className="bg-[#0f2a1d] p-7">

                  <p className="font-display text-3xl">
                    Ethanol
                  </p>

                  <p className="mt-5 text-sm leading-7 text-white/40">
                    Primary product from the grain-based distillation
                    process.
                  </p>

                </div>

                <div className="bg-[#0f2a1d] p-7">

                  <p className="font-display text-3xl">
                    DDGS
                  </p>

                  <p className="mt-5 text-sm leading-7 text-white/40">
                    Valuable grain-based co-product generated through
                    integrated processing.
                  </p>

                </div>

                <div className="bg-[#0f2a1d] p-7">

                  <p className="font-display text-3xl">
                    Liquid CO₂
                  </p>

                  <p className="mt-5 text-sm leading-7 text-white/40">
                    Recovered carbon dioxide forming part of the integrated
                    product ecosystem.
                  </p>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          SUSTAINABILITY
      ====================================================== */}

      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Responsible Manufacturing
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Designed around resource efficiency.
              </h2>

              <p className="mt-7 text-[15px] leading-8 text-[#737973]">
                Sustainability at the plant level is approached through
                integrated manufacturing, energy management, recovery systems
                and water-management practices.
              </p>

              <a
                href="/sustainability"
                className="mt-9 inline-flex items-center gap-3 text-sm font-medium text-[#0f2a1d]"
              >
                Explore Sustainability
                <ArrowUpRight size={17} />
              </a>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="grid gap-3 sm:grid-cols-2">

              <div className="border border-[#1a1f1c]/10 bg-[#ece9e2] p-8">

                <Droplets
                  size={24}
                  strokeWidth={1.2}
                  className="text-[#55705e]"
                />

                <h3 className="mt-10 text-lg text-[#0f2a1d]">
                  Water Management
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#737973]">
                  Water efficiency and Zero Liquid Discharge are part of the
                  plant's sustainability focus.
                </p>

              </div>

              <div className="border border-[#1a1f1c]/10 bg-[#ece9e2] p-8">

                <Zap
                  size={24}
                  strokeWidth={1.2}
                  className="text-[#55705e]"
                />

                <h3 className="mt-10 text-lg text-[#0f2a1d]">
                  Energy Integration
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#737973]">
                  Power infrastructure supports the integrated manufacturing
                  operation.
                </p>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          EXPANSION CTA
      ====================================================== */}

      <section className="bg-[#c9a86a] px-6 py-20 md:py-28 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#0f2a1d]/50">
                Looking Ahead
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Explore the proposed next scale of manufacturing.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <a
              href="/expansion"
              className="inline-flex items-center gap-4 rounded-full bg-[#0f2a1d] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-1"
            >
              View Expansion
              <ArrowUpRight size={18} />
            </a>

          </Reveal>

        </div>

      </section>

    </main>
  )
}