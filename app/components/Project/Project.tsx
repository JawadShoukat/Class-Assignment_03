import React from 'react'

const Project = () => {
  return (
    <section
    id="portfolio"
    className="p-8 md:p-16 bg-gradient-to-r from-red-600 via-green-400 to-purple-500 text-gray-900"
  >
    <div className="container mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
        Porjects
      </h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
      Jawad Shoukat, a frontend developer, has built several impressive projects. He created a Countdown Timer App using JavaScript, a Personal Portfolio to showcase his skills, and an E-Commerce Website simulating an online store. He also developed a Resume Builder App for creating and downloading custom resumes. These projects demonstrate his growing expertise and passion for web development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-purple-400 transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-purple-600">
            Project_01_CountDownTimer
          </h3>
          <p>
          Jawad Shoukat developed a Countdown Timer App using Next.js. This app efficiently tracks time and offers a sleek, modern design, showcasing his skills in creating dynamic and responsive web applications. It reflects his ability to work with advanced frameworks like Next.js to build interactive and user-friendly tools.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-red-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-purple-600">
            Project_02_E-Commerce_web
          </h3>
          <p>
          Jawad Shoukat created an E-Commerce Website using Next.js. This project features a smooth, interactive shopping experience, demonstrating his ability to handle complex web applications. By using Next.js, Jawad ensured optimal performance, scalability, and a user-friendly interface.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg transition hover:bg-blue-400 transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-purple-600">
            Project_03_Portfolio_web
          </h3>
          <p>
          Jawad Shoukat developed a Portfolio Website using Next.js. This project showcases his skills and experience with a modern, responsive design, emphasizing his ability to create professional and visually appealing web pages. Using Next.js, Jawad ensured fast performance and seamless navigation for visitors.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Project