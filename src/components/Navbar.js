import React, {useState} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Modal from './Modal';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
    const home=["For Company","Login","Signup"];
    const Company=["Job Seeker","Login","Signup"];
    const [showModal,setShowModal]=useState(false);
    const location=useLocation();
  return (
    <div className={`${(location.pathname==="/signup" || location.pathname==="/login" ) ? "lg:hidden" : "fixed" } top-0 w-full h-[8vh] bg-white flex flex-row  items-center  ${showModal ? "justify-center": "justify-between" } gap-10 px-12 lg:px-32 pt-2 z-50`}>
      <div className='flex flex-row text-3xl font-bold'>
        <div>TalentList</div>
        <div>:</div>
      </div>
      <div className='max-lg:hidden flex flex-row gap-4 text-xl font-semibold text-sky-600 items-center'>
        {location.pathname==="/company" ? Company.map((list)=>(
          <NavLink 
            to={`${list ==="Job Seeker" ? "/jobseeker" : list.includes(" ")? list.split(" ")[1].toLowerCase() : list.toLowerCase()}`}  
            className={`${list==="Login" || list==="Signup" ? "hover:bg-blue-600 hover:text-white p-2 rounded-xl" : "hover:border-4 hover:border-b-blue-600 border-transparent"}`} key={`/${list.includes(" ") ? list.split(" ")[1].toLowerCase() : list.toLowerCase()}`}
          >
            {list}
          </NavLink>
        )) : home.map((list)=>(
          <NavLink 
            to={`/${list.includes(" ") ? list.split(" ")[1].toLowerCase() : list.toLowerCase()}`} 
            className={`${list==="Login" || list==="Signup" ? "hover:bg-blue-600 hover:text-white p-2 rounded-xl" : "hover:border-4 hover:border-b-blue-600 border-transparent"}`} key={`/${list.includes(" ") ? list.split(" ")[1].toLowerCase() : list.toLowerCase()}`}
          >
            {list}
          </NavLink>
        ))}
      </div>
      <div className='lg:hidden text-xl cursor-pointer' onClick={()=>setShowModal(!showModal)}><AiOutlineMenu/></div>
      {showModal && <Modal setShowModal={setShowModal}/>}
    </div>
  )
}

export default Navbar
