import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.jpg" 
              alt="Omega Services Logo" 
              width={60} 
              height={60} 
              className="mr-4"
            />
            <div className="text-2xl font-bold text-primary">Omega Services</div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
            <Link href="/wayne-anthem" className="text-gray-700 hover:text-primary font-medium">Wayne Anthem</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
