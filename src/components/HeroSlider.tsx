'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    headline: 'Your Dedicated Partner in Fuel Station Services',
    subHeadline: 'Keeping Houston-area stations running smoothly, efficiently, and fully compliant since 2019.',
    buttonText: 'Learn More',
    buttonLink: '#about',
    bgImage: '/image-1.jpg',
  },
  {
    headline: 'Backed by 25+ Years of Industry Expertise',
    subHeadline: 'Highly skilled maintenance and support for Gilbarco and Wayne fuel dispensers, and advanced POS systems.',
    buttonText: 'Explore Our Services',
    buttonLink: '#services',
    bgImage: '/image-2.jpg',
  },
  {
    headline: 'Minimizing Downtime. Maximizing Compliance.',
    subHeadline: 'Fast, reliable response times to keep your station operational and strictly up-to-date with Texas state regulations.',
    buttonText: 'Get Support',
    buttonLink: '#contact',
    bgImage: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    headline: "Focused on Your Station's Success",
    subHeadline: "We don't just fix equipment we help your business thrive. Experience the Omega Pump Services difference.",
    buttonText: 'Contact Us Today',
    buttonLink: '#contact',
    bgImage: '/image-3.jpg',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 800)
  }

  const setSlide = (idx: number) => {
    if (isAnimating || idx === current) return
    setIsAnimating(true)
    setCurrent(idx)
    setTimeout(() => setIsAnimating(false), 800)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden bg-black">
      {/* Background Images */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40 z-10" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              transform: idx === current ? 'scale(1.02)' : 'scale(1.1)',
              transition: 'transform 8s ease-out, opacity 1s ease-in-out',
            }}
          />
        </div>
      ))}

      {/* Slide Contents */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-20">
        <div className="max-w-3xl text-left">
          {slides.map((slide, idx) => {
            const isActive = idx === current
            return (
              <div
                key={idx}
                className={`${isActive ? 'block' : 'hidden'} transition-all duration-700`}
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-red-200 border border-primary/30 mb-6 animate-fade-in">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Houston & Surrounding Areas
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-6 drop-shadow-md transform translate-y-4 animate-slide-up">
                  {slide.headline.split('. ').map((part, i, arr) => (
                    <span key={i} className="block">
                      {part}{i < arr.length - 1 ? '.' : ''}
                    </span>
                  ))}
                </h1>

                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl transform translate-y-4 animate-slide-up delay-150">
                  {slide.subHeadline}
                </p>

                <div className="transform translate-y-4 animate-slide-up delay-300">
                  <Link
                    href={slide.buttonLink}
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>{slide.buttonText}</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 hidden sm:flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 hidden sm:flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${idx === current ? 'w-8 bg-primary' : 'w-2.5 bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
