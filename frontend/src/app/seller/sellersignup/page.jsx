"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

const SignUpSeller = () => {

  const addSellerSchema = Yup.object().shape({});
  const addSellerForm = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword: "",
    },

    onSubmit: async (values, action) => {
      // values.image = selFile;
      console.log(values);
      const res = await fetch("http://localhost:5000/seller/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json" },
      });
      console.log(res.status);
      action.resetForm();
      if (res.status === 200) {
        toast("SignUp successfully");
      } else {
        toast("Something went wrong");
      }
    },
    validationSchema: addSellerSchema,
  });
  return (
    <>
      <div className="max-w-screen-lg mx-auto p-56 justify-center item-center">
        <div className="grid grid-cols-1  bg-purple-50 border h-4/5">
          <div className="text-center font-bold text-3xl p-3">
            <h1>Seller Registration</h1>
          </div>
          <form onSubmit={addSellerForm.handleSubmit}>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  name="fname"
                  type="text"
                  onChange={addSellerForm.handleChange}
                  value={addSellerForm.values.fname}
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  id="grid-last-name"
                  name="lname"
                  type="text"
                  onChange={addSellerForm.handleChange}
                  value={addSellerForm.values.lname}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                name="email"
                type="email"
                onChange={addSellerForm.handleChange}
                value={addSellerForm.values.email}
                placeholder="********@*****.**"
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password"
                name="password"
                type="password"
                onChange={addSellerForm.handleChange}
                value={addSellerForm.values.password}
                placeholder="***************"
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                confirm password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password"
                name="cpassword"
                type="password"
                onChange={addSellerForm.handleChange}
                value={addSellerForm.values.cpassword}
                placeholder="***************"
              />
            </div>
            <div className="mt-5 px-3">
                    <button
                      type="submit"
                      className=" w-full md-3 justify-center item-center rounded-md bg-[#FC9B3C] mt-3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-text-[#D4A056] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpSeller;
