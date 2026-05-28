import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Send, ShieldAlert } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Omega Services',
  description: 'Reach out to Omega Services for fuel pump repairs, compliance inspections, and POS support in Houston. Phone (281)-850-1308 or service@omegaservices.org.',
}

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 border-b border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold tracking-wider text-primary uppercase mb-2 block">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-950 tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to schedule a service technician? Reach out via phone, email, or use our request form.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Contact Details & Hours */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-950 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-primary mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-950 text-sm">Call Direct</h4>
                      <a href="tel:2818501308" className="text-base text-gray-700 hover:text-primary transition-colors font-semibold">
                        (281)-850-1308
                      </a>
                      <p className="text-xs text-gray-500 mt-1">Available for emergency technician dispatch.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-primary mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-950 text-sm">Email Address</h4>
                      <a href="mailto:Service@OmegaServices.org" className="text-base text-gray-700 hover:text-primary transition-colors font-semibold break-all">
                        Service@OmegaServices.org
                      </a>
                      <p className="text-xs text-gray-500 mt-1">For quotes, invoicing questions, and scheduling.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl text-primary mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-950 text-sm">Mailing / Shop Address</h4>
                      <p className="text-base text-gray-700 font-semibold leading-relaxed">
                        8310 E Hardy Rd<br />
                        Houston, TX 77093
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours of Operation */}
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-lg font-bold text-gray-950 mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  Business Hours
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex justify-between pb-1 border-b border-gray-100">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-gray-900">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between pb-1 border-b border-gray-100">
                    <span>Saturday</span>
                    <span className="font-semibold text-gray-900">8:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-primary font-bold">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form Container */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
                <h3 className="text-xl font-bold text-gray-950 mb-6">Service Request Form</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact_name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Contact Name
                      </label>
                      <input
                        type="text"
                        id="contact_name"
                        required
                        className="w-full bg-white border border-gray-200 focus:border-primary rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact_phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="contact_phone"
                        required
                        className="w-full bg-white border border-gray-200 focus:border-primary rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        placeholder="(281) 555-1234"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact_email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact_email"
                        required
                        className="w-full bg-white border border-gray-200 focus:border-primary rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        placeholder="owner@station.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="station_name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Station / Brand Name
                      </label>
                      <input
                        type="text"
                        id="station_name"
                        className="w-full bg-white border border-gray-200 focus:border-primary rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        placeholder="Shell / Texaco / Ind."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact_message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Outage or Service details
                    </label>
                    <textarea
                      id="contact_message"
                      rows={5}
                      required
                      className="w-full bg-white border border-gray-200 focus:border-primary rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                      placeholder="Please details what requires servicing (e.g. Wayne dispenser card reader, TCEQ sump alert, Passport POS rate updates)..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Send Request</span>
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
