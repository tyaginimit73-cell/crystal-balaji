import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  CalendarDays,
  Search,
  Tag,
} from 'lucide-react'
import { useMemo, useState } from 'react'

const articles = [
  {
    id: 1,
    title: 'Building a Sustainable Bio-Energy Platform',
    slug: 'building-a-sustainable-bio-energy-platform',
    category: 'Sustainability',
    date: 'To be published',
    excerpt:
      'An overview of the role of responsible manufacturing, renewable feedstock and integrated energy systems in modern bio-energy.',
    featured: true,
  },
  {
    id: 2,
    title: 'Understanding Grain-Based Ethanol Manufacturing',
    slug: 'understanding-grain-based-ethanol-manufacturing',
    category: 'Technology',
    date: 'To be published',
    excerpt:
      'Exploring the major stages involved in transforming agricultural feedstock into ethanol and associated co-products.',
    featured: false,
  },
  {
    id: 3,
    title: 'From Feedstock to Value-Added Products',
    slug: 'from-feedstock-to-value-added-products',
    category: 'Manufacturing',
    date: 'To be published',
    excerpt:
      'How integrated manufacturing can create multiple valuable outputs from agricultural raw materials.',
    featured: false,
  },
  {
    id: 4,
    title: 'The Role of DDGS in the Product Ecosystem',
    slug: 'the-role-of-ddgs-in-the-product-ecosystem',
    category: 'Products',
    date: 'To be published',
    excerpt:
      'Understanding DDGS as an important co-product of grain-based ethanol manufacturing.',
    featured: false,
  },
  {
    id: 5,
    title: 'Integrated CO₂ Recovery in Bio-Energy',
    slug: 'integrated-co2-recovery-in-bio-energy',
    category: 'Technology',
    date: 'To be published',
    excerpt:
      'A look at carbon dioxide recovery and its place within an integrated industrial manufacturing system.',
    featured: false,
  },
  {
    id: 6,
    title: 'Scaling Sustainable Manufacturing',
    slug: 'scaling-sustainable-manufacturing',
    category: 'Expansion',
    date: 'To be published',
   excerpt:
  "An overview of the company's proposed future expansion vision and the importance of scalable infrastructure.",
    featured: false,
  },
]

const categories = [
  'All',
  'Sustainability',
  'Technology',
  'Manufacturing',
  'Products',
  'Expansion',
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

function ArticleVisual({ article, large = false }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#0f2a1d] ${
        large ? 'min-h-[420px] md:min-h-[520px]' : 'min-h-[250px]'
      }`}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: large ? '70px 70px' : '55px 55px',
        }}
      />

      <motion.div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="absolute bottom-0 left-0 p-7 md:p-9">

        <p className="text-[10px] uppercase tracking-[0.25em] text-[#c9a86a]">
          Crystal Balaji Industries
        </p>

        <p
          className={`mt-3 max-w-xl font-display leading-tight text-white/80 ${
            large ? 'text-3xl md:text-5xl' : 'text-2xl'
          }`}
        >
          Bio-Energy
          <span className="block text-white/25">
            Industry & Innovation
          </span>
        </p>

      </div>
    </div>
  )
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const featuredArticle = articles.find((article) => article.featured)

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === 'All' ||
        article.category === activeCategory

      const query = search.trim().toLowerCase()

      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

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

        <div className="relative mx-auto max-w-7xl">

          <Reveal>

            <div className="flex items-center gap-4">

              <span className="h-px w-12 bg-[#c9a86a]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a86a]">
                News & Insights
              </span>

            </div>

          </Reveal>

          <Reveal delay={0.08}>

            <h1 className="mt-8 max-w-6xl font-display text-5xl leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Ideas shaping
              <span className="block text-white/40">
                sustainable industry.
              </span>
            </h1>

          </Reveal>

          <Reveal delay={0.16}>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              Explore insights across bio-energy, manufacturing,
              technology, sustainability and the company's growth journey.
            </p>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          FEATURED ARTICLE
      ====================================================== */}

      {featuredArticle && (
        <section className="px-6 py-24 md:py-32 lg:px-10">

          <div className="mx-auto max-w-7xl">

            <Reveal>

              <div className="mb-10 flex items-center gap-4">

                <span className="h-px w-10 bg-[#55705e]" />

                <span className="text-xs uppercase tracking-[0.25em] text-[#55705e]">
                  Featured
                </span>

              </div>

            </Reveal>

            <Reveal delay={0.08}>

              <Link
                to={`/news/${featuredArticle.slug}`}
                className="group grid overflow-hidden border border-[#1a1f1c]/10 bg-[#ece9e2] lg:grid-cols-2"
              >

                <ArticleVisual
                  article={featuredArticle}
                  large
                />

                <div className="flex flex-col justify-between p-8 md:p-12">

                  <div>

                    <div className="flex flex-wrap items-center gap-4">

                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#55705e]">
                        {featuredArticle.category}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#a4aaa4]" />

                      <span className="text-xs text-[#8a8f89]">
                        {featuredArticle.date}
                      </span>

                    </div>

                    <h2 className="mt-7 font-display text-4xl leading-tight text-[#0f2a1d] transition-colors duration-500 group-hover:text-[#55705e] md:text-5xl">
                      {featuredArticle.title}
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-8 text-[#737973]">
                      {featuredArticle.excerpt}
                    </p>

                  </div>

                  <div className="mt-12 flex items-center gap-3 text-sm text-[#0f2a1d]">

                    Read Insight

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </div>

                </div>

              </Link>

            </Reveal>

          </div>

        </section>
      )}

      {/* =====================================================
          FILTERS
      ====================================================== */}

      <section className="border-y border-[#1a1f1c]/10 bg-[#ece9e2] px-6 py-8 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex gap-2 overflow-x-auto pb-1">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs transition ${
                  activeCategory === category
                    ? 'bg-[#0f2a1d] text-white'
                    : 'bg-[#faf8f5] text-[#657066] hover:bg-white'
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          <div className="relative w-full lg:max-w-xs">

            <Search
              size={17}
              strokeWidth={1.4}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7c837d]"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search insights..."
              className="h-11 w-full border border-[#1a1f1c]/10 bg-[#faf8f5] pl-11 pr-4 text-sm outline-none transition focus:border-[#55705e]"
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          ARTICLE GRID
      ====================================================== */}

      <section className="px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex items-end justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-[#55705e]">
                Latest
              </p>

              <h2 className="mt-4 font-display text-4xl text-[#0f2a1d] md:text-5xl">
                Insights & updates
              </h2>

            </div>

            <span className="hidden text-xs text-[#8a8f89] md:block">
              {filteredArticles.length} articles
            </span>

          </div>

          {filteredArticles.length > 0 ? (

            <div className="grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

              {filteredArticles.map((article, index) => (

                <Reveal
                  key={article.id}
                  delay={(index % 3) * 0.07}
                >

                  <Link
                    to={`/news/${article.slug}`}
                    className="group block"
                  >

                    <ArticleVisual article={article} />

                    <div className="pt-6">

                      <div className="flex items-center gap-3">

                        <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[#55705e]">

                          <Tag size={12} />

                          {article.category}

                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#a4aaa4]" />

                        <span className="flex items-center gap-1.5 text-[10px] text-[#8a8f89]">

                          <CalendarDays size={12} />

                          {article.date}

                        </span>

                      </div>

                      <h3 className="mt-4 font-display text-2xl leading-tight text-[#0f2a1d] transition-colors duration-300 group-hover:text-[#55705e]">
                        {article.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#737973]">
                        {article.excerpt}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs text-[#0f2a1d]">

                        Read More

                        <ArrowUpRight
                          size={15}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />

                      </div>

                    </div>

                  </Link>

                </Reveal>

              ))}

            </div>

          ) : (

            <div className="border border-[#1a1f1c]/10 bg-[#ece9e2] px-6 py-20 text-center">

              <p className="font-display text-3xl text-[#0f2a1d]">
                No insights found.
              </p>

              <p className="mt-3 text-sm text-[#737973]">
                Try another search term or category.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#c9a86a] px-6 py-20 md:py-28 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.28em] text-[#0f2a1d]/50">
                Explore Further
              </p>

              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[#0f2a1d] md:text-6xl">
                Discover our technology and sustainability approach.
              </h2>

            </div>

          </Reveal>

          <Reveal delay={0.1}>

            <Link
              to="/technology"
              className="inline-flex items-center gap-3 rounded-full bg-[#0f2a1d] px-7 py-4 text-sm text-white transition hover:-translate-y-1"
            >
              Explore Technology
              <ArrowUpRight size={17} />
            </Link>

          </Reveal>

        </div>

      </section>

    </main>
  )
}

export function ArticleDetail() {
  const slug = window.location.pathname.split('/').pop()

  const article =
    articles.find((item) => item.slug === slug) || articles[0]

  return (
    <main className="overflow-hidden bg-[#faf8f5] text-[#1a1f1c]">

      {/* HERO */}

      <section className="bg-[#0f2a1d] px-6 pb-24 pt-36 text-white md:pb-32 lg:px-10">

        <div className="mx-auto max-w-5xl">

          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/45 transition hover:text-white"
          >
            ← Back to News
          </Link>

          <div className="mt-12 flex flex-wrap items-center gap-4">

            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c9a86a]">
              {article.category}
            </span>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <span className="text-xs text-white/35">
              {article.date}
            </span>

          </div>

          <h1 className="mt-7 font-display text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
            {article.title}
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/50 md:text-lg">
            {article.excerpt}
          </p>

        </div>

      </section>

      {/* ARTICLE */}

      <section className="px-6 py-20 md:py-28 lg:px-10">

        <div className="mx-auto max-w-4xl">

          <ArticleVisual
            article={article}
            large
          />

          <article className="mt-14">

            <p className="text-lg leading-9 text-[#515952]">
              This article section is structured for the future Crystal
              Balaji Industries content management system. Once the backend
              CMS is connected, published article content will be loaded
              dynamically from MongoDB.
            </p>

            <p className="mt-8 text-[15px] leading-8 text-[#737973]">
              Content can include company announcements, manufacturing
              insights, sustainability initiatives, technology updates,
              industry perspectives and verified corporate information.
            </p>

            <div className="my-12 h-px bg-[#1a1f1c]/10" />

            <h2 className="font-display text-3xl text-[#0f2a1d] md:text-4xl">
              Content to be published
            </h2>

            <p className="mt-5 text-[15px] leading-8 text-[#737973]">
              Detailed article content will be added through the secure
              administrator CMS. No unverified company claims are being
              presented as factual information.
            </p>

          </article>

        </div>

      </section>

    </main>
  )
}