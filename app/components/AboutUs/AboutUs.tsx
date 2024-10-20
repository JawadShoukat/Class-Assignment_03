import React from 'react'

const AboutUs = () => {
  return (
    <section
    id="about"
    className="p-8 md:p-16 bg-gradient-to-r from-green-600 via-blue-600 to-red-400 text-gray-900"
  >
    <div className="container mx-auto text-center bg-green p-6 shadow-lg rounded-lg transition hover:bg-indigo-50 transform hover:scale-105 max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
        About Us
      </h2>
      <p className="text-lg md:text-xl leading-relaxed">
      The "About" section is a very important part of any website. This section provides detailed information about the brand, business, or individual. Its purpose is to help website visitors understand the mission of the website, its story, and who the people behind the offered service or product are.
      </p>
    </div>
  </section>

  )
}

export default AboutUs