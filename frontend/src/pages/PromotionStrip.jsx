import React from 'react'

const PromotionStrip = () => {
  return (
    <header className="bg-blue-600 px-4 sm:px-6 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center sm:justify-between">
        {/* Left side - Logo and Company Name */}
        <div className="flex items-center gap-3">
          {/* Graduation Cap Icon */}
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <svg 
              className="w-5 h-5 text-blue-600" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 3 3 0 01-3.163 0z" />
            </svg>
          </div>
          
          {/* Company Name */}
          <h1 className="text-white text-lg sm:text-xl font-semibold leading-tight">
            Dynamic World – Career Guidance Experts
          </h1>
        </div>

        {/* Right side - Action Buttons */}
        <div className="flex sm:flex-row flex-col sm:items-center gap-2 sm:gap-3">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917887881060?text=Hi%20Dynamic%20World%2C%20I%20would%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition duration-200 hover:-translate-y-1 w-full sm:w-auto"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Call Now Button */}
          <a
            href="tel:+917887881060"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition duration-200 hover:-translate-y-1 w-full sm:w-auto"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default PromotionStrip
