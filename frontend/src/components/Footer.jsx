import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from 'lucide-react'

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Plant', to: '/plant' },
  { label: 'Technology', to: '/technology' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Expansion', to: '/expansion' },
]

const productLinks = [
  { label: 'Pure Ethanol', to: '/products/ethanol' },
  { label: 'DDGS', to: '/products/ddgs' },
  { label: 'Liquid CO₂', to: '/products/liquid-co2' },
]

const corporateLinks = [
  { label: 'Corporate Information', to: '/corporate' },
  { label: 'Careers', to: '/careers' },
  { label: 'News & Insights', to: '/news' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f1a14] text-white">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-8 lg:py-20">

        {/* ===================================================
            TOP BRAND / CTA
        ==================================================== */}

        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1.5fr_0.7fr] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center bg-[#c9a86a] font-display text-lg font-bold text-[#0f2a1d]">
                CB
              </div>

              <div>
                <div className="font-display text-sm font-bold tracking-[0.16em]">
                  CRYSTAL BALAJI
                </div>

                <div className="mt-1 text-[8px] tracking-[0.2em] text-white/40">
                  BIO-ENERGY • SUSTAINABILITY • INDUSTRIAL EXCELLENCE
                </div>
              </div>

            </div>

            <p className="max-w-3xl font-display text-3xl leading-tight tracking-[-0.02em] text-white md:text-4xl lg:text-5xl">
              Building a more sustainable
              <span className="block text-white/35">
                industrial future.
              </span>
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55">
              Advanced grain-based bio-energy manufacturing built around
              efficiency, innovation and responsible industrial growth.
            </p>
          </div>

          <div className="lg:justify-self-end">

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-[#c9a86a] px-7 py-4 text-sm font-medium text-[#0f2a1d] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d4b87c]"
            >
              Start a Conversation

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

        </div>

        {/* ===================================================
            FOOTER NAVIGATION
        ==================================================== */}

        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4 lg:grid-cols-5">

          {/* Company */}
          <div>
            <h4 className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-[#c9a86a]">
              COMPANY
            </h4>

            <ul className="space-y-3">

              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={12}
                      className="ml-1 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-[#c9a86a]">
              PRODUCTS
            </h4>

            <ul className="space-y-3">

              {productLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={12}
                      className="ml-1 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-[#c9a86a]">
              CORPORATE
            </h4>

            <ul className="space-y-3">

              {corporateLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={12}
                      className="ml-1 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Corporate Details */}
          <div className="col-span-2 md:col-span-1">

            <h4 className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-[#c9a86a]">
              CORPORATE DETAILS
            </h4>

            <div className="space-y-4 text-xs leading-6 text-white/50">

              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-white/30">
                  CIN
                </span>

                <span className="mt-1 block">
                  U15400UP2020PTC133900
                </span>
              </div>

              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Incorporated
                </span>

                <span className="mt-1 block">
                  3 September 2020
                </span>
              </div>

              <div>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Company Type
                </span>

                <span className="mt-1 block">
                  Private Limited / Non-Government Company
                </span>
              </div>

            </div>

          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">

            <h4 className="mb-5 text-[10px] font-semibold tracking-[0.25em] text-[#c9a86a]">
              CONTACT
            </h4>

            <div className="space-y-6">

              {/* Registered Office */}
              <div className="flex gap-3">

                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#c9a86a]"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Registered Office
                  </p>

                  <p className="mt-2 text-xs leading-6 text-white/55">
                    316, Patel Nagar,
                    <br />
                    New Mandi,
                    <br />
                    Muzaffarnagar,
                    <br />
                    Uttar Pradesh – 251002
                  </p>
                </div>

              </div>

              {/* Manufacturing Facility */}
              <div className="flex gap-3">

                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#c9a86a]"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Manufacturing Facility
                  </p>

                  <p className="mt-2 text-xs leading-6 text-white/55">
                    Begrajpur,
                    <br />
                    Tehsil Khatauli,
                    <br />
                    Muzaffarnagar,
                    <br />
                    Uttar Pradesh
                  </p>
                </div>

              </div>

              {/* Email */}
              <div className="flex gap-3">

                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#c9a86a]"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                    Email
                  </p>

                  <span className="mt-2 block text-xs text-white/55">
                    info@crystalbalaji.com
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ===================================================
            COMPANY STATEMENT
        ==================================================== */}

        <div className="border-y border-white/10 py-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <p className="max-w-3xl text-xs leading-6 text-white/35">
              Crystal Balaji Industries Private Limited operates in the
              bio-energy and sustainable manufacturing sector, with a focus
              on grain-based ethanol production and integrated industrial
              processes.
            </p>

            <Link
              to="/corporate"
              className="group inline-flex shrink-0 items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/50 transition hover:text-[#c9a86a]"
            >
              Corporate Information

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

        </div>

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}

        <div className="flex flex-col gap-5 pt-7 text-xs text-white/35 md:flex-row md:items-center md:justify-between">

          <span>
            © {new Date().getFullYear()} Crystal Balaji Industries Private Limited.
            All rights reserved.
          </span>

          <div className="flex flex-wrap items-center gap-5">

            <Link
              to="/corporate"
              className="transition-colors hover:text-white"
            >
              Corporate Information
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <span className="cursor-default">
              Privacy Policy
            </span>

            <span className="h-3 w-px bg-white/10" />

            <span className="cursor-default">
              Terms
            </span>

            <span className="h-3 w-px bg-white/10" />

            <span className="cursor-default">
              Cookie Policy
            </span>

          </div>

        </div>

      </div>

    </footer>
  )
}