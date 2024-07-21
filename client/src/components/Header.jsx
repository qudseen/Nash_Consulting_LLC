import {FaSearch} from 'react-icons/fa';
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false);
  return (
  <header className='bg-slate-200 shadow-md w-screen'>
    <div className='flex justify-between items-center p-3 sm:mx-4 '>
    <Link to="/"><h1 className='font-bold rounded-lg text-sm sm:text-2xl flex flex-wrap items-center shadow-md ml-4 p-3'>
        <span className='text-red-500 mx-1 '>Nash</span>
        <span className='text-slate-500 '>Consulting</span>
        <span className='text-red-500 mx-1'>LLC</span>
    </h1>
    </Link>
    <ul className='hidden lg:flex gap-6 items-center font-bold rounded-lg text-sm sm:text-xl text-slate-700 p-4 '>
       <Link to="/about"> <li className=' hover:text-slate-500'>What We Do </li></Link>
        <Link to="/jobseekers"><li className='hover:text-slate-500'>For JobSeekers</li></Link>
        <Link to="/employers"> <li className=' hover:text-slate-500'>For Employers</li></Link>
        <Link to="/contact"><li className=' hover:text-slate-500'>Contact Us</li></Link>
    </ul>
    <form className='bg-slate-100 p-3 rounded-lg flex items-center shadow-md mr-6'>
        <input type='text' placeholder='Search..' className='bg-transparent focus:outline-none w-14 sm:w-64 md:w-44'/>
        <FaSearch className='text-slate-600'/>
    </form>
    <div className="MOBILE-MENU flex lg:hidden " >
    <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className='font-bold rounded-lg text-xl text-slate-700 p-4 '  onClick={() => setIsNavOpen(false)}>
            <Link to="/about"> <li className=' hover:text-slate-500'>What We Do </li></Link>
        <Link to="/jobseekers"><li className='hover:text-slate-500'>For JobSeekers</li></Link>
        <Link to="/employers"> <li className=' hover:text-slate-500'>For Employers</li></Link>
        <Link to="/contact"><li className=' hover:text-slate-500'>Contact Us</li></Link>
    </ul>
    </div>
    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    </div>
   
  </header>

  )
}