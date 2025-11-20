import React from 'react'

const CareerPageHero01 = () => {
  return (
    <section 
      className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#FFC067]/80"></div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              Career At Dynamic World
            </h1>
            <p className="text-base sm:text-lg text-blue-100 mb-6">
              Unlock Your Potential and Join Our Team
            </p>
            
            {/* Email Section */}
            <div className="space-y-3">
              <p className="text-gray-900 font-medium text-base">Mail Us At:</p>
              <a 
                href="mailto:hire@dynamicworld.in"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                hire@dynamicworld.in
              </a>
            </div>
          </div>
          
          {/* Right Side - Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dtaitsw4r/image/upload/v1761211160/Career-Page-Design-Dynamic-World_mnanej.svg" 
                alt="Career at Dynamic World illustration"
                className="w-full max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default CareerPageHero01