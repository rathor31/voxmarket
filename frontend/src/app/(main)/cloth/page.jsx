'use client';
import  { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { IoSearch } from "react-icons/io5";

import toast from "react-hot-toast";
import useCartContext from "@/context/CartContext";


const Showpiece = () => {
  
  const [productList, setProductList] = useState([]);
  const {isInCart,addItemToCart} = useCartContext();

  const [product, setProduct] = useState([]);


  const { category } = useParams();

  const fetchShowpieceproduct = async () => {
    const res = await fetch("http://localhost:5000/product/getbycategory/cloth");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if (category) {
      setProduct(data.filter((ser) => ser.category === category));
    } else {
      setProduct(data);
    }
  };

  useEffect(() => {
    fetchShowpieceproduct();
  }, []);

  const displayproductData = () => {
    if (product.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return product.map((product) => (
      <>
        <div className='grid grid-cols-3 mt-4 mx-12 '>
          <div className=" bg-transparent " style={{ border: "none" }}>
            <img src={'http://localhost:5000/' + product.images} alt="" className="card-img-top img-fluid" style={{ objectFit: "cover", height: 250 }} />
           
            <div className="card-footer" style={{ border: "none", height: "200px" }}>
              <h2 className=' fw-semibold fs-5 mt-3 mb-3' style={{ fontFamily: "serif" }}>{product.pname}</h2>
              <p className='text-red-700' style={{ fontFamily: "cursive" }}>{product.pprice}</p>

              <p className='text-black  mb-3' style={{ fontFamily: "cursive" }}>{product.pcategory}</p>
              <button disabled={isInCart(product)} onClick={e => addItemToCart(product)} className='mt-2 mb-2 bg-green-600 hover:bg-green-700 py-1 px-3 text-white mx-auto  block rounded' >
            {isInCart(product) ? 'Already Added' : 'Add to Cart'}
          </button>

            </div>
          </div>
        </div>
      </>
    ))

  };


  const filterProducts = (e) => {
      const value = e.target.value;
      setProductList(productList.filter((cat) => {
          return cat.pname.toLowerCase().includes(value.toLowerCase()),
          cat.category.toLowerCase().includes(value.toLowerCase())
      })
      );
  };

  return (
    <div className="pt-16 ">

<div
  className="relative flex"
  data-twe-input-wrapper-init=""
  data-twe-input-group-ref=""
>
  <input
    type="search"
    className="peer   min-h-[auto] w-1/2  rounded border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
    placeholder="Search"
    aria-label="Search"
    onChange={filterProducts}
    id="exampleFormControlInput"
    aria-describedby="basic-addon1"
  />
  <label
    htmlFor="exampleFormControlInput"
    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
  >
    Search
  </label>
  <button
    className="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
    id="button-addon1"
    data-twe-ripple-init=""
    data-twe-ripple-color="light"
  >
    <span className="[&>svg]:h-5 [&>svg]:w-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </span>
  </button>
</div>


    <div className="container-fluid ">
      <div className="container">
        <div className="row  ">
          {displayproductData()}
        </div>
      </div>
    </div>





  </div>
  );
};

export default Showpiece;