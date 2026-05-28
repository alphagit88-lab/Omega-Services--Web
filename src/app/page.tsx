import ServiceCard from '@/components/ServiceCard'

export default function Home() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white py-24 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Gas Station Services</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Reliable service for Gilbarco & Wayne dispensers, Texas compliance inspections, and POS systems
            </p>
            <a 
              href="#" 
              className="inline-block bg-accent hover:bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Learn More About Wayne Anthem
            </a>
          </div>
          </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Gas Dispenser Service"
              description="Prompt, reliable, and expert repair services for Gilbarco and Wayne fuel dispensers throughout the Houston area."
              features={[
                'Meter inaccuracies',
                'Card reader malfunctions',
                'Nozzle and hose replacements',
                'Electronic and mechanical failures',
                'Communication errors'
              ]}
            />
            <ServiceCard
              title="State of Texas Compliance"
              description="Comprehensive monthly compliance inspections to ensure your facility meets all Texas state requirements."
              features={[
                'Leak detection systems',
                'Spill prevention equipment',
                'Proper signage and labeling',
                'Dispenser calibration checks'
              ]}
            />
            <ServiceCard
              title="POS Register Service"
              description="Expert service for your Passport POS system to keep it running smoothly and efficiently."
              features={[
                'Installation and Setup',
                'Software Updates and Configuration',
                'Troubleshooting and Repair',
                'Peripheral Integration',
                'Training and Support'
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">About Omega Services</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2019 by Samir Yousef, Omega Services brings over 25 years of hands-on field experience in gas pump and point-of-sale systems.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is simple: to deliver reliable, efficient, and knowledgeable service that ensures your operations run smoothly and comply with all regulations.
              </p>
              <p className="text-gray-700">
                We pride ourselves on our commitment to doing the job right the first time, leveraging decades of expertise to provide solutions where others might fall short.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
