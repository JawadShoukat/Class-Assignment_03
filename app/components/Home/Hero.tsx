import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-red-500 to-indigo-600 py-16 flex justify-center items-center">
    <div className="bg-indigo-300 rounded-lg shadow-lg p-8 max-w-2xl text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-900 animate-fadeIn">
        Welcome to Our Hero Section
      </h2>
      <p className="mt-4 text-gray-900 animate-fadeIn delay-500">
      The hero section is the first and most impactful part of any website. It is the area that users see immediately upon landing on the website, so its design and content must be top-notch. The purpose of the hero section is to capture the user’s attention and create a strong first impression of the website.
      </p>
    </div>
  </section>
  )
}

export default Hero