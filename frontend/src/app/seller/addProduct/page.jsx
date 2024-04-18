"use client";
// import { useRouter } from 'next/navigation';
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useState } from 'react';
const addProductSchema = Yup.object().shape({});

import toast from "react-hot-toast";
import { useState } from "react";
import useSellerContext from "@/context/SellerContext";

const Addproduct = () => {
  // const router = useRouter();
  // const [selFile, setSelFile] = useState("");

  const { currentSeller } = useSellerContext();

  const [features, setFeatures] = useState([
    {
      name: "Feature name",
      value: "feature value",
    },
  ]);

  const addProductForm = useFormik({
    initialValues: {
      pname: "",
      pdetail: "",
      pprice: "",
      pcategory: "",
      images: [],
      createdAt: "",
    },

    onSubmit: async (values, action) => {
      values.features = features;
      console.log(values);
      const res = await fetch("http://localhost:5000/product/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { 
          "Content-type": "application/json",
          "x-auth-token" : currentSeller.token
          },
      });
      console.log(res.status);
      action.resetForm();
      if (res.status === 200) {
        toast("Item uploaded successfully");
        // router.push('/admin/manageProduct');
      } else {
        toast("Something went wrong");
      }
    },
    validationSchema: addProductSchema,
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    console.log(file);

    const fd = new FormData();
    fd.append("myfile", file);

    fetch("http://localhost:5000/util/uploadfile", { method: "POST", body: fd })
      .then((response) => {
        if (response.status === 200) {
          toast.success("file Uploaded");
          response.json().then((data) => {
            addProductForm.values.images[0] = data.savedFile;
          });
        } else {
          toast.success("some error occured");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("some error occured");
      });
  };

  const updateFeatures = (index, key, value) => {
    let temp = features;
    temp[index][key] = value;
    setFeatures([...temp]);
  };

  const addFeature = () => {
    setFeatures([...features, { name: "", value: "" }]);
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto p-5 h-screen">
        <div className="flex items-center justify-center">
          <form
            onSubmit={addProductForm.handleSubmit}
            className="mb-2 w-50 m-auto mt-5 p-10 bg-purple-50 "
          >
            <div className="form-group">
              <label htmlFor="pname" className="mt-5 mb-2">
                Name
              </label>
              <input
                type="text"
                name="pname"
                onChange={addProductForm.handleChange}
                value={addProductForm.values.pname}
                className="w-full bg-gray-300 py-1 rounded mb-3"
                required=""
              />
            </div>

            <div className="form-group">
              <label htmlFor="pdetail" className="mb-2">
                Detail
              </label>
              <textarea
                name="pdetail"
                onChange={addProductForm.handleChange}
                value={addProductForm.values.pdetail}
                className="w-full bg-gray-300 py-1 rounded mb-3"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="pprice" className="mb-2">
                price
              </label>
              <textarea
                name="pprice"
                onChange={addProductForm.handleChange}
                value={addProductForm.values.pprice}
                className="w-full bg-gray-300 py-1 rounded mb-3"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="pcategory" className="mb-2">
                pcategory
              </label>
              <input
                name="pcategory"
                onChange={addProductForm.handleChange}
                value={addProductForm.values.pcategory}
                className="w-full bg-gray-300 py-1 rounded mb-3"
                required=""
              />
            </div>

            {features.map(({ name, value }, index) => (
              <div className="grid grid-cols-2">
                <input
                  onChange={(e) => {
                    updateFeatures(index, "name", e.target.value);
                  }}
                  value={name}
                  className="w-1/2 bg-gray-300 pe-2 rounded mb-3"
                />
                <input
                  onChange={(e) => {
                    updateFeatures(index, "value", e.target.value);
                  }}
                  value={value}
                  className="w-1/2 bg-gray-300  rounded mb-3"
                />
              </div>
            ))}

            <button type="button" onClick={addFeature}>Add New Feature</button>

            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-58 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  onChange={uploadFile}
                  className="hidden"
                />
              </label>
            </div>

            <div className="mt-3">
              <button
                type="submit"
                className="bg-red-500 text-white  mb-5 w-full py-1 rounded-lg"
              >
                {" "}
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
