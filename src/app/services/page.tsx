import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Shield, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | Omega Services',
  description: 'Detailed services including fuel dispenser repair, monthly Texas TCEQ compliance inspections, and point-of-sale register maintenance.',
}

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-secondary via-gray-800 to-primary-dark border-b border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold tracking-wider text-red-300 uppercase mb-2 block">What We Offer</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From physical nozzle replacements to complex digital network wiring, we provide full support.
          </p>
        </div>
      </section>

      {/* 1. Gas Dispenser Service */}
      <section id="dispenser" className="py-24 scroll-mt-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                Mechanical & Electrical
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
                Gas Dispenser Service & Repair
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                When a gas pump is out of order, you&apos;re losing customers. We provide diagnostic testing and prompt repairs for fuel dispensers, including Gilbarco Encore (300, 500, 700S series) and Wayne Ovation and Helix dispensers.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our technicians are equipped to isolate issues rapidly, whether they stem from hydraulic flow issues, broken pulsers, faulty communication loops, or payment card reader terminals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'Flow meter testing & recalibration',
                  'Pulser repairs & board swaps',
                  'Hose, nozzle, and break-away swaps',
                  'Card reader & keypad repairs',
                  'LCD display repair & replacements',
                  'Submersible pump diagnostics'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start text-xs text-gray-700 font-semibold">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Unified Card Column */}
            <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/gas dis service.jpg"
                  alt="Gas Dispenser Repair"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-950 mb-4">Dispenser Brands Supported</h3>
                <p className="text-xs text-gray-500 mb-6">We service a wide variety of dispenser and retail fueling hardware, including:</p>
                <ul className="space-y-3.5">
                  <li className="flex justify-between border-b border-gray-200/60 pb-2 text-sm text-gray-750">
                    <span className="font-semibold text-gray-900">Gilbarco Veeder-Root</span>
                    <span>Encore Series</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200/60 pb-2 text-sm text-gray-750">
                    <span className="font-semibold text-gray-900">Wayne Fueling Systems</span>
                    <span>Ovation & Helix</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Compliance Section */}
      <section id="compliance" className="py-24 scroll-mt-24 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Unified Card Column */}
            <div className="lg:col-span-5 order-last lg:order-first bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/texas compliance.webp"
                  alt="State Compliance Inspections"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-950 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">TCEQ Compliance is Critical</h3>
                </div>
                <p className="text-xs text-gray-350 leading-relaxed mb-6">
                  Texas Commission on Environmental Quality (TCEQ) regularly audits gas stations. Failing checks for spill containment, sump leak sensors, or line tightness leads to major fines and shut-down notices.
                </p>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs">
                  <span className="font-semibold text-white block mb-1">Recommended Action</span>
                  Monthly visual audits and sensor checks keep your compliance logs ready.
                </div>
              </div>
            </div>
            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                Regulations & Inspections
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
                State of Texas Compliance Checks
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Avoid heavy state environmental fines with professional inspection services. We assist operators by conducting thorough monthly walkthroughs and component checkups matching Texas environmental standards.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We review your spill buckets, containment sumps, shear valves, leak detector systems, and automatic tank gauge logs, making sure everything is operational and documented correctly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'Monthly compliance walkthrough logs',
                  'Spill bucket inspections',
                  'Sump liquid and debris removal',
                  'Leak sensor testing support',
                  'Shear valve operation tests',
                  'Dispenser decal & signage checks'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POS Register Section */}
      <section id="pos" className="py-24 scroll-mt-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                POS Registers & Networking
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
                POS Register Service & Setup
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your point-of-sale system manages your store transactions, fuel processing, and card security. We help install, configure, and troubleshoot Verifone Commander and Gilbarco Passport POS systems.
              </p>
              <p className="text-gray-650 text-sm leading-relaxed">
                If your register loses link communication with the pumps, card processors go offline, or printers fail, we identify the exact network, wiring, or device settings causing the failure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  'Passport & Commander installation',
                  'Dispenser interface box (D-Box) wiring',
                  'Network router & switch configuration',
                  'Receipt printer & scanner setups',
                  'Dispenser card reader issues/errors',
                  'Troubleshooting processing errors'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700 font-medium">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Unified Card Column */}
            <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/pos-image.jpeg"
                  alt="POS Register Setup"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-950 mb-4">POS Hardware Setup</h3>
                <p className="text-xs text-gray-500 mb-6">We support setting up and wiring key components:</p>
                <ul className="space-y-3.5">
                  <li className="flex justify-between border-b border-gray-200/60 pb-2 text-sm text-gray-750">
                    <span className="font-semibold text-gray-900">Console Registers</span>
                    <span className="text-right">Passport & Commander</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200/60 pb-2 text-sm text-gray-750">
                    <span className="font-semibold text-gray-900">PIN Pads</span>
                    <span className="text-right">Verifone MX915 / M400</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200/60 pb-2 text-sm text-gray-750">
                    <span className="font-semibold text-gray-900">Pumps Interface</span>
                    <span className="text-right">D-Box, BRCM, Wired Switch / Wireless Switch</span>
                  </li>
                  <li className="flex justify-between pb-1 text-sm text-gray-750">
                    <span className="font-semibold text-gray-900">Thermal Printers</span>
                    <span className="text-right">Epson & Star Micronics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-3xl p-10 md:p-12 shadow-lg text-center md:text-left md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Have an Urgent Technical Issue?</h2>
              <p className="text-red-100 text-sm leading-relaxed">
                Call our direct phone line to schedule emergency technician dispatch. We understand that downtime equals lost revenue.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4 flex-shrink-0">
              <a
                href="tel:2818501308"
                className="inline-flex items-center justify-center bg-white text-gray-900 font-bold px-6 py-3.5 rounded-xl shadow-md hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-5 h-5 text-primary mr-2" />
                (281)-850-1308
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-black/30 hover:bg-black/40 text-white border border-white/20 font-bold px-6 py-3.5 rounded-xl transition-all"
              >
                Request Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
