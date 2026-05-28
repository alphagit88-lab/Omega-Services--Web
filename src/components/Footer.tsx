import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/wayne-pump', label: 'Wayne Pump' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
]

const services = [
  { href: '/services#dispenser', label: 'Gas Dispenser Service' },
  { href: '/services#compliance', label: 'State Compliance Inspections' },
  { href: '/services#pos', label: 'POS Register Setup & Support' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white border-t border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Intro */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight flex items-center">
              <span>Omega Services</span>
            </h3>
            <p className="text-sm text-red-100 leading-relaxed mb-6">
              Founded in 2019 by Samir Yousef with over 25 years of hands-on field experience. Providing expert gas pump service, Texas compliance inspections, and POS system solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-red-100 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-white" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-red-100 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-200 mr-2.5 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-transform" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm text-red-100">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-red-200 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  8310 E Hardy Rd<br />
                  Houston, TX 77093
                </span>
              </li>
              <li>
                <a
                  href="tel:2818501308"
                  className="flex items-center hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-red-200 mr-3 flex-shrink-0" />
                  <span>(281)-850-1308</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Service@OmegaServices.org"
                  className="flex items-center hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-red-200 mr-3 flex-shrink-0" />
                  <span className="break-all">Service@OmegaServices.org</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="border-t border-red-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-red-200">
          <p className="mb-4 sm:mb-0">
            &copy; {currentYear} Omega Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors duration-150">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-150">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
