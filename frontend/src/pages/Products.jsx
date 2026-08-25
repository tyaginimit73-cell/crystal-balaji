import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Beaker,
  Leaf,
  Package,
  Recycle,
} from 'lucide-react'

const products = [
  {
    number: '01',
    slug: 'ethanol',
    title: 'Pure Ethanol',
    category: 'BIO-FUEL / INDUSTRIAL PRODUCT',
    description:
      'Ethanol produced through a grain-based distillation and dehydration process, forming the primary product within the manufacturing ecosystem.',
    icon: Beaker,
    highlights: [
      'Grain-based production',
      'Distillation & dehydration',
      'Fuel and industrial applications',
    ],
  },
  {
    number: '02',
    slug: 'ddgs',
    title: 'DDGS',
    category: 'GRAIN-BASED CO-PRODUCT',
    description:
      'Distillers Dried Grains with Solubles, a valuable co-product generated through the integrated grain-based ethanol manufacturing process.',
    icon: Leaf,
    highlights: [
      'Protein-rich feed ingredient',
      'Integrated recovery',
      'Animal nutrition applications',
    ],
  },
  {
    number: '03',
    slug: 'liquid-co2',
    title: 'Liquid CO₂',
    category: 'RECOVERED INDUSTRIAL PRODUCT',
    description:
      'Recovered carbon dioxide forming part of the integrated product ecosystem and supporting the efficient use of process outputs.',
    icon: Recycle,
    highlights: [
      'Integrated CO₂ recovery',
      'Industrial applications',
      'Resource utilization',
    ],
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

function ProductVisual({ product }) {
  const Icon = product.icon

  return (
    <div className="relative aspect-[16/11] overflow-hidden bg-[#0f2a1d]">

      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <motion.div
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#c9a86a]/20"
        whileHover={{ rotate: 15, scale: 1.08 }}
        transition={{ duration: 0.8 }}
      />

      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#c9a86a]/10 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between p-7 md:p-9">

        <div className="flex items-start justify-between">

          <span className="font-display text-5xl text-white/20">
            {product.number}
          </span>

          <div className="flex h-12 w-12 items-center justify-center border border-white/10 text-[#c9a86a]">
            <Icon
              size={22}
              strokeWidth={1.2}
            />
          </div>

        </div>

        <div>

          <p className="text-[10px] uppercase tracking-[0.22em] text-[#c9a86a]">
            {product.category}
          </p>

          <h3 className="mt-3 font-display text-4xl text-white md:text-5xl">
            {product.title}
          </h3>

        </div>

      </div>
    </div>
  )
}

export default function Products() {
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
            rotate: [0, 10, 0],
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
                Our Products
              </span>

            </div>

          </Reveal>

          <Reveal delay={0.08}>

            <h1 className="mt-8 max-w-6xl font-display text-5xl leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.4rem]">
              Turning resources into
              <span className="block text-white/40">
                products that matter.
              </span>
            </h1>

          </Reveal>

          <Reveal delay={0.16}>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              Our product ecosystem connects grain-based bio-energy
              manufacturing with valuable co-products and resource recovery.
            </p>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#55705e]">
                Product Ecosystem
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                One integrated process. Multiple valuable outputs.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="max-w-3xl">

              <p className="text-[15px] leading-8 text-[#737973]">
                Crystal Balaji's manufacturing ecosystem is centered around
                grain-based ethanol production. Alongside ethanol, integrated
                processing supports the recovery and utilization of DDGS and
                Liquid CO₂.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[#737973]">
                Product-specific technical specifications should be published
                only after they have been verified and approved for public
                disclosure.
              </p>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section className="px-6 pb-24 md:pb-32 lg:px-10">

        <div className="mx-auto max-w-7xl space-y-4">

          {products.map((product, index) => (

            <Reveal
              key={product.slug}
              delay={index * 0.08}
            >

              <article className="group overflow-hidden border border-[#1a1f1c]/10 bg-[#ece9e2]">

                <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                  <ProductVisual product={product} />

                  <div className="flex flex-col justify-between p-8 md:p-12">

                    <div>

                      <div className="flex items-center justify-between">

                        <p className="text-xs uppercase tracking-[0.22em] text-[#55705e]">
                          {product.category}
                        </p>

                        <Package
                          size={18}
                          strokeWidth={1.2}
                          className="text-[#9b9f99]"
                        />

                      </div>

                      <h2 className="mt-8 font-display text-4xl text-[#0f2a1d] md:text-5xl">
                        {product.title}
                      </h2>

                      <p className="mt-6 max-w-xl text-sm leading-7 text-[#737973]">
                        {product.description}
                      </p>

                      <div className="mt-8 space-y-3">

                        {product.highlights.map((highlight) => (

                          <div
                            key={highlight}
                            className="flex items-center gap-3"
                          >

                            <span className="h-1.5 w-1.5 rounded-full bg-[#c9a86a]" />

                            <span className="text-sm text-[#555c56]">
                              {highlight}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>

                    <div className="mt-12">

                      <a
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-3 rounded-full bg-[#0f2a1d] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1"
                      >
                        Explore Product
                        <ArrowUpRight size={17} />
                      </a>

                    </div>

                  </div>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </section>

      {/* =====================================================
          PRODUCT FLOW
      ====================================================== */}

      <section className="bg-[#0f2a1d] px-6 py-24 text-white md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.28em] text-[#c9a86a]">
                From Feedstock to Value
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                An interconnected product ecosystem.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <div className="mt-16 overflow-x-auto pb-5">

              <div className="flex min-w-[850px] items-center">

                <div className="border border-white/10 bg-white/[0.03] p-7">

                  <Leaf
                    size={22}
                    strokeWidth={1.2}
                    className="text-[#c9a86a]"
                  />

                  <p className="mt-6 text-lg">
                    Grain Feedstock
                  </p>

                  <p className="mt-2 text-xs text-white/35">
                    Corn / Broken Rice
                  </p>

                </div>

                <div className="mx-5 h-px w-20 bg-white/15" />

                <div className="border border-white/10 bg-white/[0.03] p-7">

                  <Beaker
                    size={22}
                    strokeWidth={1.2}
                    className="text-[#c9a86a]"
                  />

                  <p className="mt-6 text-lg">
                    Distillation
                  </p>

                  <p className="mt-2 text-xs text-white/35">
                    Core production process
                  </p>

                </div>

                <div className="mx-5 h-px w-20 bg-white/15" />

                <div className="grid grid-cols-3 gap-2">

                  <div className="border border-white/10 bg-white/[0.03] p-6">

                    <p className="font-display text-xl">
                      Ethanol
                    </p>

                    <p className="mt-2 text-xs text-white/35">
                      Primary product
                    </p>

                  </div>

                  <div className="border border-white/10 bg-white/[0.03] p-6">

                    <p className="font-display text-xl">
                      DDGS
                    </p>

                    <p className="mt-2 text-xs text-white/35">
                      Co-product
                    </p>

                  </div>

                  <div className="border border-white/10 bg-white/[0.03] p-6">

                    <p className="font-display text-xl">
                      CO₂
                    </p>

                    <p className="mt-2 text-xs text-white/35">
                      Recovered output
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          PRODUCT DETAILS NOTE
      ====================================================== */}

      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="border-l-2 border-[#c9a86a] pl-7 md:pl-10">

              <p className="text-xs uppercase tracking-[0.25em] text-[#55705e]">
                Technical Information
              </p>

              <h2 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-[#0f2a1d] md:text-5xl">
                Product specifications should be verified before publication.
              </h2>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-[#737973]">
                This website intentionally avoids publishing unverified
                purity, quality, laboratory, packaging, storage, pricing or
                certification claims. Verified technical documents can be
                added through the corporate document management system.
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
                Next
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Understand the technology behind the process.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <a
              href="/technology"
              className="inline-flex items-center gap-4 rounded-full bg-[#0f2a1d] px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-1"
            >
              Explore Technology
              <ArrowUpRight size={18} />
            </a>

          </Reveal>

        </div>

      </section>

    </main>
  )
}