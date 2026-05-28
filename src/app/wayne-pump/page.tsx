import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Settings, Fuel, Wrench, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wayne Pump Service | Omega Services',
  description: 'Expert Wayne fuel dispenser repair and maintenance services in Houston, TX. Certified troubleshooting for Ovation, Helix, Vista and older series.',
}

export default function WaynePump() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 border-b border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold tracking-wider text-primary uppercase mb-2 block">Specialization</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight mb-4">Wayne Fuel Dispenser Service</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Troubleshooting and repair for all Wayne fuel pump models to ensure exact flow and processing.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold text-gray-950 mb-6">Expert Wayne Fuel Pump Mechanics</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wayne Fueling Systems is an industry leader in manufacturing retail fuel dispensers. The high-performance Wayne Ovation and Helix series are standard fixtures at modern convenience stores. However, their sophisticated electronics, advanced hydraulic meters, and secure card terminals require specialized technical repair when failures occur.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Omega Services brings years of experience working directly on Wayne hydraulics, pulser electronics, and communications wiring. We isolate faults rapidly and carry common replacements in our service trucks, minimizing nozzle downtime.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Wayne Ovation & Helix servicing',
                  'Intelligent Pulser configuration',
                  'Wayne iMeter calibration & testing',
                  'Bezel & keypad replacements',
                  'Secure card reader (SRED) repairs',
                  'Hydraulic leak repairs & seal swaps'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm font-semibold text-gray-800">
                    <Check className="w-5 h-5 text-primary mr-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-gradient-to-tr from-gray-50 to-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-950 mb-6">Wayne Dispenser Anatomy We Service</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4 mt-0.5">
                    <Fuel className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-sm">iMeter & Flow Hydraulics</h4>
                    <p className="text-xs text-gray-500">We calibrate, repair, or swap flow meters to resolve slow pumping and ensure accuracy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4 mt-0.5">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-sm">Intelligent Pulsers (WIP)</h4>
                    <p className="text-xs text-gray-500">Repairing communication errors between the physical meter turns and dispenser computer board.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4 mt-0.5">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950 text-sm">Physical Hardware Swaps</h4>
                    <p className="text-xs text-gray-500">Replacing nozzles, safety breakaway couplers, hoses, and receipt printer gears.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common issues list */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-950 mb-4">Common Wayne Dispenser Failures We Fix</h2>
            <p className="text-gray-600">
              Is your station experiencing any of the following issues? We can troubleshoot them quickly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">Error Code Support</span>
              <h3 className="text-lg font-bold text-gray-950 mb-3">Pulser Faults</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Wayne Intelligent Pulsers prevent fuel theft. If you get a pulser error or mismatch code, the nozzle shuts down automatically. We test wiring and replace faulty pulser units to restore operation.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">Flow Optimization</span>
              <h3 className="text-lg font-bold text-gray-950 mb-3">Slow Fuel Pumping</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Slow fuel flow at the nozzle is often caused by clogged fuel filters, a failing submersible pump, or internal meter wear. We test pressure and clear issues to get the dispenser back to full speed.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">Card Reader Terminals</span>
              <h3 className="text-lg font-bold text-gray-950 mb-3">Payment Loop Errors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                If the dispenser&apos;s hybrid card reader displays a &ldquo;Card Reader Error&rdquo; or fails to communicate with the indoor Verifone Commander console, we test the communication loop wire connections and mainboard settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-950 mb-6">Need Immediate Wayne Pump Repairs?</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Get your dispensers active and pumping fuel. Our technicians carry standard parts for rapid response.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:2818501308"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (281)-850-1308
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-bold px-8 py-4 rounded-xl shadow-sm transition-all w-full sm:w-auto"
            >
              Submit Online Inquiry
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
