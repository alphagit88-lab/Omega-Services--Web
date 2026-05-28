'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/wayne-anthem', label: 'Wayne Anthem' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3'
        : 'bg-white border-b border-gray-100 py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo1.jpeg"
                alt="Omega Services Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-gray-950 flex items-center">
                <span className="text-primary mr-1">Omega</span>
                <span className="text-gray-800">Services</span>
              </div>
              <p className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
                Gas Pump & Compliance Experts
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 py-2 ${isActive
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full animate-fade-in" />
                  )}
                </Link>
              )
            })}
            <a
              href="https://book.servicem8.com/request_service_booking?strVendorUUID=d700bf0c-2ac0-478e-9268-223a5d852fab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-sm transition-all duration-500"
            >
              Book Service
            </a>
          </nav>



          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 focus:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 border-t border-gray-100 mt-3' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-gray-50/50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-semibold transition-colors ${isActive
                  ? 'bg-primary/5 text-primary'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                  }`}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="pt-4 border-t border-gray-200/60 flex flex-col space-y-3 px-3">
            <a
              href="tel:2818501308"
              className="flex items-center text-base font-bold text-gray-800"
            >
              <Phone className="w-5 h-5 mr-3 text-primary" />
              (281)-850-1308
            </a>
            <a
              href="https://book.servicem8.com/request_service_booking?strVendorUUID=d700bf0c-2ac0-478e-9268-223a5d852fab"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white text-sm font-bold uppercase tracking-wider py-3 rounded-lg shadow-sm transition-all duration-500"
            >
              Book Service
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 text-sm font-bold uppercase tracking-wider py-3 rounded-lg shadow-sm transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
