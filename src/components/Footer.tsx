export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Omega Services</h3>
            <p className="text-gray-200">Professional gas station service and compliance experts since 2019.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <p className="text-gray-200">8310 E Hardy Rd</p>
            <p className="text-gray-200">Houston, TX</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-200">Service@OmegaServices.org</p>
            <p className="text-gray-200">(281)-850-1308</p>
          </div>
        </div>
        <div className="border-t border-red-900 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Omega Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
