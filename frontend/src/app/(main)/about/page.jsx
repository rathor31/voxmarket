import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-800 ">
      <div className=" max-w-2xl p-8 bg-green-50 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <h1 className="text-1xl font-bold mb-4">we're a passionate group of people working from around the world to build the future of ecommerce.</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          turpis vel dui pretium vehicula. Nam nec dapibus elit. Curabitur
          sodales neque in lorem ultricies, id ullamcorper tortor pretium.
        </p>
        <p>
          Fusce eget arcu vestibulum, vehicula nisi nec, consequat neque. Duis
          pharetra auctor est, nec bibendum lacus.
        </p>
      </div>
      <div className="basis-[40%] py-10 px-10 ">
        <img src="images.jpeg" alt="" class="w-full" />
      </div>
      


    </div>

  )
}

export default About;