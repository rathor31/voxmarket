import React from 'react'

const About = () => {
  const feedbacks = [
    {
      id: 1,
      name: 'John Doe',
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod tellus id justo tristique, a cursus lorem commodo.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      feedback: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec sagittis dui.'
    },
    {
      id: 3,
      name: 'Alice Johnson',
      feedback: 'Nullam et elit eget lectus euismod fermentum in a tellus. Fusce ultrices euismod odio, vel egestas urna commodo in.'
    },
    {
      id: 4,
      name: 'Bob Brown',
      feedback: 'Vestibulum et laoreet elit, vitae iaculis nulla. Morbi eget lobortis dui. In consequat odio at tellus dictum volutpat.'
    }
  ];
  return (<div>
    <div className="min-h-screen flex items-center justify-center bg-white-800 ">
      <div className=" max-w-2xl p-8 bg-green-50 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Voice-activated shopping: making your experience more intuitive and effortless..</h1>
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
        <img src="about.jpg" alt="" class="w-full" />
      </div>
    </div>
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Team</h2>
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 ">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src='download (1).jpeg' className="w-full h-48 object-cover object-center" /> 
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2"></h3>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src='licensed-image.jpeg' className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2"></h3>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src='download.jpeg' className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2"></h3>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 className="text-center text-2xl p-4 font-bold mb-4">Customer Feedback</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-16 gap-4">
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className="bg-white p-6 shadow-md rounded">
          <p className="text-gray-800 mb-4">{feedback.feedback}</p>
          <p className="text-green-600 font-semibold">{feedback.name}</p>
        </div>
      ))}
    </div>
  </div>

  )
}

export default About;