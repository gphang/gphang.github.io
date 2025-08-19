import React from 'react'

const Education = () => {
  return (
    <div id='education' className='min-h-screen w-full flex flex-col gap-20 p-10 md:p-16 xl:p-32 '>
      <h1 className='text-center text-5xl font-light'>Education</h1>
      
      <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>
        <div className='hidden md:block flex-shrink-0'>
          <img 
            src="/icl_logo.png"
            className='w-[100px] h-[100px]
            rounded-full object-cover shadow-lg' 
          />
        </div>
        <div className='text-left space-y-2'>
          <h1 className='text-3xl font-semibold'>Imperial College London</h1>
          <h3 className='text-xl text-gray-700'>MSc Computing (2024-2025)</h3>
          <ul className='text-sm text-gray-600 list-disc pl-5 space-y-1'>
            <li>Software Systems Engineering: Azure app containerisation, deploying Docker containers, PostgreSQL databases</li>
            <li>Machine Learning: Implement decision tree classifiers, artificial NN for regression (PyTorch)</li>
            <li>Databases: Concurrency control, recovery, functional dependencies & normalisation, Datalog, ER modelling</li>
            <li>Graphics: ShaderLabWeb (framework built on OpenGL) for raytracing, texture, illumination rendering</li>
            <li>Vision: Image filtering & edge detection (2D Gaussian, Sobel), brain image segmentation (U-Net)</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>
        <div className='hidden md:block flex-shrink-0'>
          <img 
            src="/umich_logo.jpeg"
            className='w-[100px] h-[100px]
            rounded-full object-cover shadow-lg' 
          />
        </div>
        <div className='text-left space-y-2'>
          <h1 className='text-3xl font-semibold'>University of Michigan</h1>
          <h3 className='text-xl text-gray-700'>B.S. Biopsychology, Cognition, and Neuroscience (2022-2024)</h3>
          <p className='text-m text-gray-600'>GPA: 3.9/4.0 (Distinction, James B. Angell Scholar, University Honors)</p>
          <ul className='text-sm text-gray-600 list-disc pl-5'>
            <li>Statistical Modelling & Data Visualization (R): normal distributions, Poisson, AIC</li>
            <li>Developmental Psychology: independent research, bivariate correlation tests on data (IBM SPSS)</li>
            <li>Computer Science Minor: Software Engineering, Data Structures & Algorithms</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Education