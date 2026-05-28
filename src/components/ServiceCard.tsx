import { Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  href: string
  imageUrl?: string
}

export default function ServiceCard({ title, description, features, href, imageUrl }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {imageUrl && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-8">
          <div className="h-1.5 w-12 bg-primary rounded-full mb-6 group-hover:w-20 transition-all duration-300" />
          <h3 className="text-2xl font-bold text-gray-950 mb-4 group-hover:text-primary transition-colors duration-200">{title}</h3>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">{description}</p>
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-8 pb-8">
        <Link
          href={href}
          className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark transition-colors"
        >
          <span>Learn More</span>
          <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>
    </div>
  )
}
