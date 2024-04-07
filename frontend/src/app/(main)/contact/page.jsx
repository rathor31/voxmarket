import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[url('/image1.jpg')] bg-cover bg-center h-screen flex items-center justify-center py-20 ">
      
    <section className="bg-red-300 border-4 rounded-br-[15px] rounded-tl-[15px]">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 p-5">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-sm text-gray-500">Have a question? Reach out to us!</p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-md font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  )
}

export default Contact