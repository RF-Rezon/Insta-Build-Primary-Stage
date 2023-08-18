"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePlusCircle,
  HiOutlineSearch,
  HiOutlineUserGroup,
  HiPaperAirplane,
} from "react-icons/hi";
import { useRecoilState } from "recoil";
import { modalState } from "./../app/atoms/modalAtom";



const Nav = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const session = useSession();
  const userImg = session?.data?.user.image;

  const router = useRouter();
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between items-center sm:max-w-2xl md:max-w-6xl mx-auto ">
        {/* Left  */}
        <div className="relative">
          <div className="hidden lg:inline-block absolute -top-4 h-24 w-24">
            <img src="https://links.papareact.com/ocw" className="object-contain" alt="Img logo Name" />
          </div>
          <div className="relative lg:hidden h-7 w-7 ml-4">
            <img
              onClick={() => router.push("/")}
              src="https://links.papareact.com/jjm"
              className="object-contain"
              alt="Img logo"
            />
          </div>
        </div>
        {/* Middle  */}
        <div className="max-w-xs ">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 w-full pl-10 sm:text-sm border p-2 border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right  */}
        <div className="flex items-center justify-end space-x-5 mr-4 md:mr-0">
          <HiOutlineHome onClick={() => router.push("/")} className="navBtn" />

          {session.status === "authenticated" ? (
            <>
              <HiOutlineMenu className="h-6 w-6 md:hidden cursor-pointer" />

              <div className="relative navBtn bottom-1">
                <HiPaperAirplane className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <HiOutlinePlusCircle onClick={() => setOpen(true)} className="navBtn" />
              <HiOutlineUserGroup className="navBtn" />
              <HiOutlineHeart className="navBtn" />

                <img src={userImg} alt="" className="h-7 w-7 rounded-full cursor-pointer" />

            </>
          ) : (
            <button onClick={() => signIn("google")}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;

// "use client";
// import React, { useEffect, useRef, useState } from "react";

// import { GoHome } from "react-icons/go";
// import { GrSend } from "react-icons/gr";
// import { IoSettingsOutline } from "react-icons/io5";
// import { LuLogOut } from "react-icons/lu";
// import logo from "../../public/swarm.png";


// import {
//   AiOutlineArrowRight,
//   AiOutlineHeart,
//   AiOutlinePlusCircle,
//   AiOutlineProfile,
//   AiOutlineQuestionCircle,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import Container from "./Container";
// // import component 👇
// import Image from "next/image";
// import Drawer from "react-modern-drawer";

// //import styles 👇
// import "react-modern-drawer/dist/index.css";


// const Navbar = () => {
//   //
//  
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   const handleSearch = (query) => {
//     if (query) {
//       const filteredItems = data.filter((item) => item.college_name.toLowerCase().includes(query.toLowerCase()));
//       setFilteredData(filteredItems);
//       setSearchQuery(query);
//     } else {
//       setSearchQuery("");
//     }
//   };
//   //
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setSearchActive(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   const navbarRef = useRef(null);
//   const [searchActive, setSearchActive] = useState(false);
//   const [isOpen, setIsOpen] = React.useState(false);
//   const toggleDrawer = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const navItems = (
//     <>
//       <li>
//         <a className="flex items-center  hover:scale-125 hover:translate-x-1 transform transition-transform ">
//           <GoHome className="text-2xl lg:text-2xl text-white" />
//         </a>
//       </li>
//       <li>
//         <a className="hover:bg-transparent hover:scale-125 transform transition-transform ">
//           <HiOutlineUserGroup className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform  " />
//         </a>
//       </li>
//       <li>
//         <a className="hover:bg-transparent  hover:scale-125 transform transition-transform">
//           <AiOutlinePlusCircle  onClick={() => setOpen(true)} className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform " />
//         </a>
//       </li>
//       <li className="hidden lg:block">
//         <a className="indicator hover:bg-transparent  hover:scale-125 transform transition-transform">
//           <span className="indicator-item badge bg-lime-500 text-white font-bold px-3">5</span>
//           <GrSend className="text-xl lg:text-2xl hover:scale-125 transform transition-transform text-white" />
//         </a>
//       </li>

//       <li>
//         <a className="hover:bg-transparent  hover:scale-125 transform transition-transform">
//           <AiOutlineHeart className="text-2xl lg:text-2xl hover:scale-125 transform transition-transform " />
//         </a>
//       </li>
//       <li>
//         <a className="hover:bg-transparent  ">
//           <AiOutlineUser
//             className="text-2xl lg:text-2xl hover:scale-125 hover:translate-x-1 transform transition-transform"
//             onClick={toggleDrawer}
//           >
//             Show
//           </AiOutlineUser>

//           <Drawer open={isOpen} onClose={toggleDrawer} direction="right" className="bla bla bla ">
//             <div>
//               <div
//                 className="lg:text-lg
//  flex flex-col gap-5 w-4/5 mx-auto mt-12   rounded-xl "
//               >
//                 <p className=" ">
//                   <AiOutlineUser className="inline" /> User Full Name
//                 </p>
//                 <div className="divider"></div>
//                 <p className="  flex items-center group   hover:ml-2 transition-all">
//                   <AiOutlineProfile size={28} className="inline mr-2 rounded-full " />
//                   Profile
//                   {/* profile er vitore change password */}
//                   <AiOutlineArrowRight className="  ml-2 opacity-0 group-hover:opacity-100 inline" />
//                 </p>
//                 <p className=" flex items-center group  hover:ml-2 transition-all">
//                   <IoSettingsOutline size={28} className="inline mr-2" />
//                   Settings
//                   <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
//                 </p>
//                 <p className=" flex items-center group  hover:ml-2 transition-all">
//                   <AiOutlineQuestionCircle size={28} className="inline mr-2" />
//                   Give Feedback
//                   <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
//                 </p>
//                 <p className=" flex items-center group  hover:ml-2 transition-all">
//                   <LuLogOut size={28} className="inline mr-2" />
//                   Log Out
//                   <AiOutlineArrowRight className=" ml-2 opacity-0 group-hover:opacity-100 inline" />
//                 </p>
//                 <div className="divider"></div>
//               </div>
//             </div>
//           </Drawer>
//         </a>
//       </li>
//     </>
//   );

//   return (
//     <div className="shadow-md  shadow-slate-200 mt-3 lg:mt-0 z-50">
//       <Container>
//         <div className="fixed mr-auto left-0 shadow-md shadow-slate-300 w-full lg:navbar myNav bg-base-100  lg:pb-0  items-center">
//           <div className="flex lg:flex lg:gap-64 items-center content-center z-10 w-[100px] mx-auto">
//             <div className="navbar-start">
//               {/* responsive dropdown */}
//               <div className="dropdown"></div>

//               {/* responsive dropdown */}
//               <a className=" logo normal-case text-xl lg:text-3xl hidden lg:block lg:mb-5">
//                 {" "}
//                 <span className="text-5xl">P</span>icxa<span className="  ">bee</span>
//               </a>
//             </div>

//             {/* search box */}

//             <div className="navbar-center relative mx-auto">
//               <input
//                 value={searchQuery}
//                 onChange={(e) => handleSearch(e?.target?.value)}
//                 type="text"
//                 name="search"
//                 id="search"
//                 placeholder="Search"
//                 className="mx-10 hidden  lg:pl-12 pl-2 w-[200px] lg:w-full  lg:block  lg:ml-0 rounded-2xl  pr-2 py-2 shadow-sm shadow-slate-300 hover:shadow-md hover:shadow-slate-400 border focus:border-transparent focus:outline-none"
//               />

//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6 absolute lg:left-5 hidden lg:block top-2 text-gray-500 z-10"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
//                 />
//               </svg>
//             </div>
//             <div className="flex  mr-8"></div>
//           </div>

//           {/* search box */}
//           <div className="navbar-end hidden lg:flex mx-auto ">
//             <ul className="menu menu-horizontal px-1 ">
//               {navItems}
//               {/* <AiOutlineUser  className='text-xl  lg:text-2xl'/> */}
//             </ul>
//           </div>
//         </div>
//       </Container>
//       <ul className="border shadow-lg shadow-slate-300 py-5 z-20 px-1 lg:hidden flex justify-center items-end absolute bottom-8 w-full ">
//         <div className="fixed  bg-slate-200 bottom-0  py-4 px-5  w-11/12 flex gap-14 items-center justify-center content-center">
//           {navItems}
//         </div>
//         {/* <AiOutlineUser className='text-xl lg:text-2xl' /> */}
//       </ul>

//       <div
//         className="fixed py-4 top-0 w-full left-0 bg-slate-100 pb-4 shadow-md shadow-slate-300 flex justify-between px-10 items-center lg:hidden"
//         ref={navbarRef}
//       >
//         {/* Logo */}
//         <div>
//           <Image src={logo} alt="" className="w-12" />
//         </div>
//         <div className={`logo text-xl lg:hidden ${searchActive ? "hidden" : "visible"}`}>
//           <span className="text-2xl pl-5">P</span>icxa<span className="">bee</span>
//         </div>

//         {/* Search and Send Icons */}
//         <div data-aos="fade-left" className="indicator relative flex gap-6 lg:gap-8">
//           <BsSearch
//             size={24}
//             className={`cursor-pointer ${searchActive ? "hidden" : "visible"}`}
//             onClick={() => setSearchActive(true)}
//           />
//           <GrSend size={28} className={`cursor-pointer ${searchActive ? "hidden" : "visible"}`} />
//           <span className={`cursor-pointer ${searchActive ? "hidden" : "visible"}`}>
//             <span className="mr-2 indicator-item badge bg-lime-500 text-white font-bold px-3 py-3">5</span>
//           </span>
//         </div>

//         {/* Search Input */}
//         {searchActive && (
//           <div className="flex py-2">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="pl-3 w-full rounded-2xl py-1 shadow-sm shadow-slate-300 m border focus:border-transparent focus:outline-none"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
