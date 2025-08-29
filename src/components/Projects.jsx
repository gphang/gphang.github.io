import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen w-full flex flex-col gap-20 p-10 md:p-16 xl:p-32'>
      <h1 className='text-center text-5xl font-light'>Projects</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10'>

        <a 
          href="https://github.com/gphang/ar-psychotherapy" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className='text-center space-y-2 rounded-lg bg-white p-8 h-full
          shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
            <h1 className='text-3xl font-semibold'>Psychotherapy Mobile App</h1>
            <h3 className='text-2xl text-gray-700'>Imperial College London, AHD</h3>
            <br /><img
              src="/sat_project.png"
              className="rounded-lg w-60 h-auto mx-auto block"
              alt="Psychotherapy App Screenshot"
            /><br />
            <p className='text-sm text-gray-600'>MSc Individual Research project into recognising and modelling emotions on avatars. Developed for self-administrable Self-Initiated Humour Protocol (SIHP) psychotherapy.</p>
          </div>
        </a>

        <a 
          href="https://github.com/gphang/noko-web" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className='text-center space-y-2 rounded-lg bg-white p-8 h-full
          shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
            <h1 className='text-3xl font-semibold'>Gamified Storytelling App</h1>
            <h3 className='text-2xl text-gray-700'>Amazon Web Services (AWS), UEP</h3>
            <br /><img
              src="/noko_project.png"
              className="rounded-lg w-60 h-auto mx-auto block"
              alt="Noko App Screenshot"
            /><br />
            <p className='text-sm text-gray-600'>Picture book application with animated illustrations, text-to-speech narration, and
    gamified reward system to promote cognitive development in children from disadvantaged communities.</p>
          </div>
        </a>

      </div>
    </div>
  )
}

export default Projects