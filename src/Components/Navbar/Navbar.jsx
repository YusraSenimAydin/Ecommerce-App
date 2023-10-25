// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../../assets/images/logo.png";


const Navbar = () => {

     return (
          <>
               <div className="bg-black p-4 w-full flex justify-center items-center ">
                    <p className="text-white font-inter text-2xl font-bold  ">
                         Redux Toolkit Time
                    </p>
               </div>
               <div className="flex justify-around items-center">
                    <div>
                         <img className="h-28 w-full" src={logo} alt="store"></img>
                    </div>
                    <div className="flex flex-row items-center">
                         <div className="flex flex-row items-center">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   fill="none"
                                   viewBox="0 0 24 24"
                                   strokeWidth="2"
                                   stroke="#000"
                                   className="w-6 h-6"
                              >
                                   <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                   />
                              </svg>
                              <p className=" font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
                                   Whish List
                              </p>
                         </div>
                         <div
                              className="flex flex-row items-center cursor-pointer" >
                              <p className=" font-inter text-base font-medium tracking-normal leading-none text-center ">
                                   Shopping bag
                              </p>
                         </div>

                    </div>
               </div>
               <div className="bg-black p-4 w-full flex items-center justify-center mx-auto">
                    <p className="text-white font-inter text-base font-medium ">50& OFF</p>
                    <p className="text-white font-inter text-base font-medium mx-96">
                         Free shipping and returns
                    </p>
                    <p className="text-white font-inter text-base font-medium ">
                         Diffrent payment methods
                    </p>
               </div>
          </>
     );
};

export default Navbar;
