"use client";
import React, { useEffect, useState } from "react";

const productView = () => {
  const [productList, setProductList] = useState([]);

  const fetchProductData = () => {
    fetch("http://localhost:5000/product/getall")
      .then((response) => {
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProductList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
          {
            productList.map((product)=>{
                return <section
                key={productList._id}
                className="p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1"
                  alt=""
                />
                <div className="space-x-1 flex justify-center mt-10">
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                </div>
                <h1 className="text-3xl my-5">{product.pname}</h1>
                <p className="mb-5">{product.pdetail}</p>
                <h2 className="font-semibold mb-5">{product.pprice}</h2>
                <button className="p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                  Add To Cart
                </button>
              </section>
                
            })
          }
        </section>
      </section>
    </div>
  );
};

export default productView;
