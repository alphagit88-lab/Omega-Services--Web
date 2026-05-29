import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import HeroSlider from '@/components/HeroSlider'
import { ArrowRight, Phone, Mail, MapPin, Award, Shield, Clock, Send } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (HOME) */}
      <HeroSlider />

      {/* 2. SERVICES SECTION */}
      <section id="services" className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-bold tracking-wider text-primary uppercase mb-2 block">Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
              Our Professional Services
            </h2>
            <p className="text-gray-600">
              We specialize in the installation, repair, and compliance auditing of critical gas station systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Gas Dispenser Service"
              description="Reliable troubleshooting and repair for Gilbarco, Wayne, and other major fuel dispenser systems."
              features={[
                'Meter testing & calibrations',
                'Nozzle, hose, and break-away replacements',
                'Card reader & keypad repairs',
                'Electronic diagnostics & board replacements'
              ]}
              href="/services#dispenser"
              imageUrl="/gas dis service.jpg"
            />
            <ServiceCard
              title="State of Texas Compliance"
              description="Comprehensive compliance inspections to align your facility with Texas TCEQ regulations."
              features={[
                'Monthly visual inspections',
                'Leak detection equipment verification',
                'Spill bucket and sump testing checkups',
                'Official record-keeping & documentation'
              ]}
              href="/services#compliance"
              imageUrl="/texas compliance.webp"
            />
            <ServiceCard
              title="POS Register Service"
              description="Full setup, hardware troubleshooting, and software integration for Verifone Commander & Passport POS."
              features={[
                'Register installation and setup',
                'Network switch and dispenser wiring support',
                'Card processing peripheral integration',
                'Software and rate troubleshooting'
              ]}
              href="/services#pos"
              imageUrl="/pos-image.jpeg"
            />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 font-bold px-8 py-3.5 rounded-xl border border-gray-200 shadow-sm transition-all"
            >
              Explore Detailed Services List
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WAYNE PUMP SECTION */}
      <section id="wayne-pump" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-sm font-bold tracking-wider text-primary uppercase mb-2 block">Specialized Dispenser Support</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-6 tracking-tight">
                Wayne Fuel Dispenser Service & Repair
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wayne fuel dispensers are the heart of many retail fuel sites. As certified professionals, we offer tailored servicing for both older model Wayne systems and the latest Wayne Helix & Ovation series.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From simple nozzle or hose replacements to complex repairs of the main computer, pulser, and flow meter systems, we restore your dispensers to factory performance standards rapidly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-sm font-bold text-gray-800">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Wayne Ovation & Helix Series
                </div>
                <div className="flex items-center text-sm font-bold text-gray-800">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Pulser Calibration & Meter Swap
                </div>
                <div className="flex items-center text-sm font-bold text-gray-800">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Bezel & Keypad Replacements
                </div>
                <div className="flex items-center text-sm font-bold text-gray-800">
                  <CheckIcon className="w-5 h-5 text-primary mr-2" />
                  Wayne Loop Wiring Repairs
                </div>
              </div>
              <Link
                href="/wayne-pump"
                className="inline-flex items-center text-primary font-bold hover:text-primary-light transition-colors group"
              >
                <span>Learn More About Wayne Pump Service</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-150 bg-black w-full aspect-video md:aspect-[4/3] flex items-center justify-center">
                <video
                  src="/Omega Pumping Service.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT US SECTION */}
      <section id="about" className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/5 rounded-3xl -z-10" />
              <div className="border border-gray-100 bg-white p-10 rounded-3xl shadow-sm">
                <div className="text-6xl font-extrabold text-primary mb-4">2019</div>
                <div className="text-lg font-bold text-gray-950 mb-2">Established Omega Services</div>
                <p className="text-gray-600 leading-relaxed">
                  Founded by Samir Yousef to provide top-tier troubleshooting and customer-focused repair for independent gas station owners.
                </p>
                <div className="mt-8 border-t border-gray-200 pt-8 flex items-center gap-4">
                  <div>
                    <p className="text-sm font-bold text-gray-950">Samir Yousef</p>
                    <p className="text-xs text-gray-500">Founder & Lead Technician</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm font-bold tracking-wider text-primary uppercase mb-2 block">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-6 tracking-tight">
                Over 25 Years of Dedicated Gas Pump Experience
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Omega Services brings a deep wealth of troubleshooting expertise right to your facility. Samir Yousef founded the company with a vision to deliver unmatched customer service, addressing dispenser failures, compliance needs, and POS errors where others struggle.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We make it our primary mission to perform fast, durable repairs so your business doesn&apos;t skip a beat. We pride ourselves on transparent communication and getting the job done right the first time.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-bold hover:text-primary-light transition-colors group"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT US SECTION */}
      <section id="contact" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Info Grid */}
            <div className="lg:col-span-5">
              <span className="text-sm font-bold tracking-wider text-primary uppercase mb-2 block">Connect With Us</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-6 tracking-tight">
                Request Service or a Compliance Quote
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Contact Omega Services today for regular maintenance, urgent repair needs, or monthly compliance inspections. Fill out the contact form, and our lead technician will review details and follow up with you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-primary mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950">Office Address</h4>
                    <p className="text-sm text-gray-600">8310 E Hardy Rd, Houston, TX 77093</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-primary mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950">Phone Number</h4>
                    <a href="tel:2818501308" className="text-sm text-gray-600 hover:text-primary transition-colors">
                      (281)-850-1308
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-primary mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-950">Email Address</h4>
                    <a href="mailto:Service@OmegaServices.org" className="text-sm text-gray-600 hover:text-primary transition-colors">
                      Service@OmegaServices.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
                <h3 className="text-xl font-extrabold text-gray-950 mb-6">Send an Inquiry</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-white border border-gray-200 focus:border-primary rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full bg-white border border-gray-200 focus:border-primary rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-white border border-gray-200 focus:border-primary rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      placeholder="service@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Service Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full bg-white border border-gray-200 focus:border-primary rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                      placeholder="Please describe dispenser model, compliance needs, or POS errors you're encountering..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Submit Request</span>
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
    </svg>
  )
}
