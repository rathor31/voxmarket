"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from 'react'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useSellerContext from "@/context/SellerContext";

const Sellerlogin = () => {

  const addSellerSchema = Yup.object().shape({});
  const router = useRouter()

  const { setSellerLoggedIn } = useSellerContext();

  const addSellerForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);

      const res = await fetch("http://localhost:5000/seller/authenticate", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      
      if (res.status === 200) {
        toast.success("Login Successfull");
        const data = await res.json();
        console.log(data);
        sessionStorage.setItem('seller', JSON.stringify(data))
        setSellerLoggedIn(true);
        action.resetForm();
        router.push("/seller/sellerdashboard");
      } else if (res.status === 400) {
        toast.error("Some error occured");
      }
    },

    validationSchema: addSellerSchema,
  });

  return (

    <>
    {/* component */}
    {/* Container */}
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        
    
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
        px-6 py-10 sm:px-10 sm:py-6 
        bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          {/* Card Title */}
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Seller Login
          </h2>
          <form className="mt-10" method="POST"
            onSubmit={addSellerForm.handleSubmit}
          >
            {/* Email Input */}
            <label
              htmlFor="email"
              className="block text-xs font-bold text-gray-600 uppercase"
            >
              E-mail 
            </label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={addSellerForm.handleChange}
                        value={addSellerForm.values.email}
              placeholder="e-mail address"
              autoComplete="email"
              className="block w-full py-3 px-1 mt-2 
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required=""
            />
            {/* Password Input */}
            <label
              htmlFor="password"
              className="block mt-2 text-xs font-bold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              
              type="password"
              name="password"
              onChange={addSellerForm.handleChange}
              value={addSellerForm.values.password}
              
              
              className="block w-full py-3 px-1 mt-2 mb-4
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required=""
            />
            {/* Auth Buttton */}
            <button
              type="submit"
              className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                font-medium text-white uppercase
                focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Login
            </button>
            {/* Another Auth Routes */}
            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <a href="#" className="flex-2 underline">
                Forgot password?
              </a>
              <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                or
              </p>
              <a href="/seller/sellersignup" className="flex-2 underline">
                Create an Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Sellerlogin