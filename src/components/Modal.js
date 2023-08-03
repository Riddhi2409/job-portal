import React from 'react'
import { ImCross } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Modal({setShowModal}) {
    const home=["For Company","Login","Signup"];
    const Company=["Job Seeker","Login","Signup"];
    const location=useLocation();
  return (
    <div className=' flex flex-col gap-4 text-xl font-semibold text-sky-600 bg-white fixed top-4 items-center w-screen justify-start lg:hidden'>
        <div className="flex flex-col items-center sm:w-[80%] w-[100%] justify-center  border-b-2 ">
        {location.pathname==="/company" ? Company.map((list)=>(
          <NavLink to={`${list ==="Job Seeker" ? "/jobseeker" : list.includes(" ")? list.split(" ")[1] : list}`} className={`${list==="Login" || list==="Signup" ? "hover:bg-blue-600 hover:text-white p-2 rounded-xl" : "hover:border-4 hover:border-b-blue-600 border-transparent"}`} key={`/${list.includes(" ") ? list.split(" ")[1].toLowerCase() : list.toLowerCase()}`} onClick={()=>setShowModal(false)}>
            {list}
          </NavLink>
        )) : home.map((list)=>(
          <NavLink to={`/${list.includes(" ") ? list.split(" ")[1].toLowerCase() : list.toLowerCase()}`} className={`${list==="Login" || list==="Signup" ? "hover:bg-blue-600 hover:text-white p-2 rounded-xl" : "hover:border-4 hover:border-b-blue-600 border-transparent"}`} key={`/${list.includes(" ") ? list.split(" ")[1].toLowerCase() : list.toLowerCase()}`} onClick={()=>setShowModal(false)}>
            {list}
          </NavLink>
        ))}
        </div>
        <div className='fixed right-8 top-4 text-xl cursor-pointer' onClick={()=>{setShowModal(false)}}>
              <ImCross />
        </div>
      
    </div>
  )
}

export default Modal
