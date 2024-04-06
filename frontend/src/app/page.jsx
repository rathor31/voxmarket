import React from "react";
import Navbar from "./(main)/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <>
        <section>
          <div
            id="animation-carousel"
            className="relative w-full"
            data-carousel="static"
          >
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* Item 1 */}
              <div
                className="hidden duration-200 ease-linear"
                data-carousel-item=""
              >
                <img
                  src="https://ecommerceguide.com/wp-content/uploads/2015/11/ecommerce-start.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 2 */}
              <div
                className="hidden duration-200 ease-linear"
                data-carousel-item=""
              >
                <img
                  src="https://ecommerceguide.com/wp-content/uploads/2015/11/ecommerce-start.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 3 */}
              <div
                className="hidden duration-200 ease-linear"
                data-carousel-item="active"
              >
                <img
                  src="https://ecommerceguide.com/wp-content/uploads/2015/11/ecommerce-start.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 4 */}
              <div
                className="hidden duration-200 ease-linear"
                data-carousel-item=""
              >
                <img
                  src="https://ecommerceguide.com/wp-content/uploads/2015/11/ecommerce-start.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 5 */}
              <div
                className="hidden duration-200 ease-linear"
                data-carousel-item=""
              >
                <img
                  src="https://ecommerceguide.com/wp-content/uploads/2015/11/ecommerce-start.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev=""
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next=""
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </section>

        <section>
          <div className="w-[1200] grid lg:grid-cols-6 bg-[#1E2852] mx-auto text-white text-center py-5">
            <div>VOX-MARKET</div>
            <div>VOX-MARKET</div>
            <div>VOX-MARKET</div>
            <div>VOX-MARKET</div>
            <div>VOX-MARKET</div>
            <div>VOX-MARKET</div>
          </div>
        </section>

        <section>
          <div className="container justify-center items-center h-100vh  px-14 py-5">
            <div className="text-center ">
              <h1> Big Brand Party</h1>
            </div>
            <div className="grid lg:grid-rows-4 mt-3">
              <div className="w-[1200] grid lg:grid-cols-6 items-center justify-center mt-3 ">
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
              </div>
              <div className="w-[1200] grid lg:grid-cols-6 items-center justify-center mt-3">
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
              </div>
              <div className="w-[1200] grid lg:grid-cols-6 items-center justify-center mt-3">
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
              </div>
              <div className="w-[1200] grid lg:grid-cols-6 items-center justify-center mt-3">
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover bg-[url('https://imgmedia.lbb.in/media/2019/04/5caf784d6e20a824c4cd7526_1555003469154.jpg')]"></div>
                <div className="card w-56 h-60 me-3 bg-cover  bg-[url('https://lh3.googleusercontent.com/-w-vj8zhs9sk/WtsrbrEnwUI/AAAAAAAAdXU/BcxGl8WGWr04BgPpJzzrrjNnBveAWOOVQCHMYCw/s0/african-women-fashion-styles0951.jpg')]"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
