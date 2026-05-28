interface ServiceCardProps {
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({ title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-primary">
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
