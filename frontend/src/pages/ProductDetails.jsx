import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  Beaker,
  Check,
  Factory,
  Leaf,
  Recycle,
  ShieldCheck,
} from 'lucide-react'

const productData = {
  ethanol: {
    number: '01',
    title: 'Pure Ethanol',
    category: 'BIO-FUEL / INDUSTRIAL PRODUCT',
    icon: Beaker,

    intro:
      'Ethanol is the primary product within Crystal Balaji Industries’ grain-based bio-energy manufacturing ecosystem.',

    description:
      'Produced through grain-based fermentation, distillation and dehydration, ethanol represents the core output of the integrated manufacturing process.',

    applications: [
      'Fuel blending',
      'Industrial applications',
      'Chemical processing',
      'Energy and mobility ecosystem',
    ],

    process: [
      'Grain preparation',
      'Milling',
      'Fermentation',
      'Distillation',
      'Dehydration',
    ],

    highlights: [
      'Grain-based production',
      'Integrated distillation process',
      'Dehydration stage',
      'Part of a circular product ecosystem',
    ],

    note:
      'Exact purity specifications, grades, certifications and commercial specifications should be published only after verification and approval.',
  },

  ddgs: {
    number: '02',
    title: 'DDGS',
    category: 'GRAIN-BASED CO-PRODUCT',
    icon: Leaf,

    intro:
      'DDGS is a valuable co-product generated through the integrated grain-based ethanol production process.',

    description:
      'Distillers Dried Grains with Solubles can provide an important pathway for utilizing nutritional components remaining after ethanol production.',

    applications: [
      'Animal feed',
      'Livestock nutrition',
      'Feed formulation',
      'Agricultural value chain',
    ],

    process: [
      'Grain preparation',
      'Fermentation',
      'Distillation',
      'Solids recovery',
      'Drying and processing',
    ],

    highlights: [
      'Integrated co-product recovery',
      'Grain-based origin',
      'Feed-industry relevance',
      'Resource utilization',
    ],

    note:
      'Specific protein, moisture, ash, fibre or nutritional values should not be published until verified laboratory data is available.',
  },

  'liquid-co2': {
    number: '03',
    title: 'Liquid CO₂',
    category: 'RECOVERED INDUSTRIAL PRODUCT',
    icon: Recycle,

    intro:
      'Liquid CO₂ forms part of the integrated recovery ecosystem associated with grain-based fermentation and ethanol production.',

    description:
      'Carbon dioxide generated during fermentation can be recovered as a valuable industrial output rather than treated solely as a process stream.',

    applications: [
      'Industrial processes',
      'Food and beverage applications',
      'Cold-chain applications',
      'Specialized industrial uses',
    ],

    process: [
      'Fermentation',
      'CO₂ capture',
      'Purification',
      'Compression',
      'Liquefaction',
    ],

    highlights: [
      'Integrated recovery concept',
      'Resource utilization',
      'Industrial applications',
      'Part of the circular manufacturing model',
    ],

    note:
      'Purity, pressure, storage, certification and application-specific specifications should be added only from verified technical documentation.',
  },
}

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
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

export default function ProductDetails() {
  const { slug } = useParams()

  const product = productData[slug]

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf8f5] px-6">
        <div className="text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#55705e]">
            Product Not Found
          </p>

          <h1 className="mt-5 font-display text-6xl text-[#0f2a1d]">
            404
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#737973]">
            The product you're looking for is not available.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0f2a1d] px-6 py-3.5 text-sm text-white"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>

        </div>
      </main>
    )
  }

  const Icon = product.icon

  return (
    <main className="overflow-hidden bg-[#faf8f5] text-[#1a1f1c]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#0f2a1d] px-6 pb-24 pt-32 text-white md:pb-32 md:pt-40 lg:px-10">

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
          className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full border border-white/5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>

            <Link
              to="/products"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/45 transition hover:text-white"
            >
              <ArrowLeft size={15} />
              All Products
            </Link>

          </Reveal>

          <Reveal delay={0.08}>

            <div className="mt-12 flex items-center gap-4">

              <span className="font-display text-5xl text-white/20">
                {product.number}
              </span>

              <span className="h-px w-12 bg-[#c9a86a]" />

              <span className="text-xs uppercase tracking-[0.28em] text-[#c9a86a]">
                {product.category}
              </span>

            </div>

          </Reveal>

          <Reveal delay={0.14}>

            <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

              <div>

                <h1 className="max-w-5xl font-display text-6xl leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
                  {product.title}
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 md:text-lg">
                  {product.intro}
                </p>

              </div>

              <div className="flex h-24 w-24 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] text-[#c9a86a] md:h-32 md:w-32">

                <Icon
                  size={42}
                  strokeWidth={1}
                />

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ====================================================== */}

      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.75fr_1.25fr]">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Product Overview
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Built into an integrated manufacturing ecosystem.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div>

              <p className="text-[15px] leading-8 text-[#737973]">
                {product.description}
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">

                {product.highlights.map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4 border border-[#1a1f1c]/10 bg-[#ece9e2] p-5"
                  >

                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0f2a1d] text-[#c9a86a]">

                      <Check
                        size={14}
                        strokeWidth={2}
                      />

                    </div>

                    <p className="text-sm leading-6 text-[#4f5751]">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="bg-[#ece9e2] px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Production Flow
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                From process input to product output.
              </h2>

            </div>

          </Reveal>

          <div className="mt-16 grid gap-3 md:grid-cols-5">

            {product.process.map((step, index) => (

              <Reveal
                key={step}
                delay={index * 0.07}
              >

                <div className="relative h-full border border-[#1a1f1c]/10 bg-[#faf8f5] p-6">

                  <p className="font-display text-3xl text-[#c9a86a]">
                    {String(index + 1).padStart(2, '0')}
                  </p>

                  <div className="mt-10 h-px bg-[#1a1f1c]/10" />

                  <p className="mt-5 text-sm leading-6 text-[#0f2a1d]">
                    {step}
                  </p>

                  {index !== product.process.length - 1 && (
                    <ArrowUpRight
                      size={15}
                      className="absolute right-5 top-7 text-[#55705e]/40"
                    />
                  )}

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          APPLICATIONS
      ====================================================== */}

      <section className="bg-[#0f2a1d] px-6 py-24 text-white md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#c9a86a]">
                Applications
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                Designed for real-world industrial value.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">

              {product.applications.map((application, index) => (

                <div
                  key={application}
                  className="bg-[#0f2a1d] p-7"
                >

                  <span className="font-display text-3xl text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p className="mt-8 text-lg text-white/80">
                    {application}
                  </p>

                </div>

              ))}

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          QUALITY / VERIFICATION
      ====================================================== */}

      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="grid gap-8 border border-[#1a1f1c]/10 bg-[#ece9e2] p-8 md:p-12 lg:grid-cols-[auto_1fr] lg:items-start">

              <div className="flex h-16 w-16 items-center justify-center bg-[#0f2a1d] text-[#c9a86a]">

                <ShieldCheck
                  size={28}
                  strokeWidth={1.2}
                />

              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.25em] text-[#55705e]">
                  Verified Information
                </p>

                <h2 className="mt-4 font-display text-3xl text-[#0f2a1d] md:text-4xl">
                  Technical accuracy comes first.
                </h2>

                <p className="mt-5 max-w-4xl text-sm leading-7 text-[#737973]">
                  {product.note}
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
                Crystal Balaji Industries
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Explore the technology behind our manufacturing platform.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <Link
              to="/technology"
              className="inline-flex items-center gap-4 rounded-full bg-[#0f2a1d] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-1"
            >
              Explore Technology
              <ArrowUpRight size={18} />
            </Link>

          </Reveal>

        </div>

      </section>

    </main>
  )
}