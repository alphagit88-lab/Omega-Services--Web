'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Check, Settings, Fuel, Wrench, Phone, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  '/DSC09803.webp',
  '/DSC09804.webp',
  '/DSC09806.webp',
  '/DSC09809.webp',
  '/DSC09810-Edit.webp',
  '/DSC09822.webp',
  '/DSC09822 (1).webp',
  '/DSC09824.webp',
  '/DSC09826.webp',
  '/DSC09827.webp',
  '/DSC09828.webp',
  '/DSC09829.webp',
  '/DSC09831.webp',
  '/DSC09832.webp',
  '/DSC09833.webp',
  '/DSC09834.webp',
  '/DSC09835.webp',
  '/DSC09837.webp',
  '/DSC09838.webp',
  '/DSC09839.webp',
  '/DSC09840.webp',
  '/DSC09841.webp',
  '/DSC09842.webp',
  '/DSC09843.webp',
  '/DSC09844.webp',
  '/DSC09845.webp',
  '/DSC09848.webp',
  '/DSC09849.webp',
  '/DSC09850.webp',
  '/DSC09851.webp',
  '/DSC09853.webp',
  '/DSC09854.webp',
  '/DSC09858.webp',
  '/DSC09860.webp',
  '/DSC09861.webp',
  '/DSC09864.webp',
  '/DSC09866.webp',
  '/DSC09868.webp',
  '/DSC09869.webp',
  '/DSC09870.webp',
  '/DSC09876.webp',
  '/DSC09878.webp',
  '/DSC09881.webp',
  '/DSC09884.webp',
]

export default function WayneAnthemContent() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="bg-white">
      {/* Page Header - Dark Gradient */}
      <section className="bg-gradient-to-br from-secondary via-gray-800 to-primary-dark border-b border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold tracking-wider text-red-300 uppercase mb-2 block">New Product</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">Wayne Anthem</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the future of fueling with the Wayne Anthem dispenser series
          </p>
        </div>
      </section>

      {/* Wayne Anthem Products - White Background */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* AX27 */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-extrabold text-gray-950 mb-4">Wayne Anthem AX27</h2>
                <p className="text-lg font-semibold text-primary mb-6">Pricing available upon request</p>
                <p className="text-gray-600 leading-relaxed">
                  Experience the future of fueling with the Wayne Anthem AX27 dispenser. Its vibrant 27-inch touchscreen and intuitive interface create a seamless and engaging customer experience, offering everything from effortless tap-to-pay and multilingual options to dynamic advertising and in-pump ordering. Drive in-store traffic and boost sales by promoting high-margin items directly at the pump. The Anthem AX27 is more than a dispenser; it's a powerful marketing tool designed to modernize your station and captivate your customers from the moment they arrive.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-tr from-gray-100 to-white border border-gray-200 rounded-3xl p-4 shadow-sm">
                  <Image
                    src="/ax27.jpeg"
                    alt="Wayne Anthem AX27"
                    width={500}
                    height={400}
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* AX12 */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="bg-gradient-to-tr from-gray-100 to-white border border-gray-200 rounded-3xl p-4 shadow-sm">
                  <Image
                    src="/ax12.jpeg"
                    alt="Wayne Anthem AX12"
                    width={500}
                    height={400}
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <h2 className="text-3xl font-extrabold text-gray-950 mb-4">Wayne Anthem AX12</h2>
                <p className="text-lg font-semibold text-primary mb-6">Pricing available upon request</p>
                <p className="text-gray-600 leading-relaxed">
                  Elevate your customers' fueling experience and boost your sales with the advanced Wayne Anthem AX12 dispenser. Its vibrant 12-inch touchscreen captivates customers, providing an intuitive interface for seamless payment and displaying dynamic advertisements. Drive customer engagement and increase profitability with this powerful, media-rich fueling solution.
                </p>
              </div>
            </div>
          </div>

          {/* Common buttons for both models */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setGalleryOpen(true)}
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-500"
            >
              View Installed Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-bold px-8 py-4 rounded-xl shadow-sm transition-all"
            >
              Contact Us For a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Original Wayne Pump Section - Keep as is */}
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

      {/* Common issues list - Keep as is */}
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
                If the dispenser's hybrid card reader displays a "Card Reader Error" or fails to communicate with the indoor Verifone Commander console, we test the communication loop wire connections and mainboard settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section - Keep as is */}
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

      {/* Gallery Popup */}
      {galleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col">
            {/* Main image container with close button */}
            <div className="relative bg-white rounded-lg overflow-hidden flex-grow flex items-center justify-center">
              {/* Close button */}
              <button
                onClick={() => setGalleryOpen(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <Image
                src={galleryImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className="w-full h-full object-contain max-h-[70vh]"
              />

              {/* Previous button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex justify-center gap-3 overflow-x-auto py-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    idx === currentImageIndex ? 'border-primary' : 'border-transparent hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    width={100}
                    height={80}
                    className="w-24 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
