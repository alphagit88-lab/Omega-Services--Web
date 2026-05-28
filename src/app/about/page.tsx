import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Shield, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Omega Services',
  description: "Founded in 2019 by Samir Yousef with over 25 years of hands-on field experience. Learn about Omega Services' dedication to gas pump maintenance, compliance, and POS repairs.",
}

export default function About() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 border-b border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold tracking-wider text-primary uppercase mb-2 block">Who We Are</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight mb-4">About Omega Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Decades of technical troubleshooting experience helping fuel station operations run reliably.
          </p>
        </div>
      </section>

      {/* Founders & History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-950 mb-6">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Omega Services was officially established in 2019 by Samir Yousef. After spending more than 25 years in the field repairing mechanical dispenser parts, dealing with wiring layouts, and debugging point-of-sale registers, Samir saw an opportunity to provide a more reliable, technical service for retail gas stations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Independent retail operators often struggle with finding experienced technicians who can diagnose both old analog dispensers and state-of-the-art digital terminals. Omega Services bridges this gap by bringing direct expertise right to your driveway.
              </p>
              <div className="border-l-4 border-primary pl-6 my-6 italic text-gray-800 font-medium">
                &ldquo;We don&apos;t guess at problems. We use structured electrical and hydraulic diagnostics to identify the exact cause of system failure on our first visit.&rdquo;
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
              <h3 className="text-xl font-bold text-gray-950 mb-6">Omega Services at a Glance</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="p-1 bg-primary/10 rounded-lg text-primary mr-4 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950">Houston Base</h4>
                    <p className="text-sm text-gray-600">Headquartered in Houston, TX, covering stations throughout Harris County and surrounding areas.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-primary/10 rounded-lg text-primary mr-4 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950">Expert Troubleshooting</h4>
                    <p className="text-sm text-gray-600">Capable of diagnosing Gilbarco, Wayne, Verifone, and Passport POS systems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="p-1 bg-primary/10 rounded-lg text-primary mr-4 mt-1">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950">Safety & Certification First</h4>
                    <p className="text-sm text-gray-600">Equipped with proper tools and safety protocols to ensure compliance checkups are hazard-free.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-950 mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              The values that dictate how we service our clients and handle critical infrastructure repairs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">Honesty & Integrity</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We provide clear diagnostic assessments and transparent invoices. If a pump or card reader doesn&apos;t need to be replaced, we repair it to save you unnecessary capital expense.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">Expert Knowledge</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                With 25+ years of active field practice, we keep up with electrical code updates, dispenser tech changes, and software configurations for POS terminals.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mb-6">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">Operational Safety</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Handling fuel infrastructure carries risks. We execute all maintenance, checks, and part updates in strict compliance with safety norms and TCEQ requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-950 mb-6">Need Technical Help at Your Station?</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Get in touch with Samir Yousef today for expert dispenser repairs, monthly compliance documentation, or Passport register setups.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
