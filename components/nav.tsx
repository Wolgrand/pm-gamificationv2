
import { useState } from 'react';
import Logo from './logo';

interface Props {
  backButton?: boolean;
  backTitle?:string;
}


const Nav = ({backButton, backTitle}:Props) => {


  const [showProfileOptions, setShowProfileOptions] = useState(false);


  const handleShowProfileOptions = () => {
    console.log(showProfileOptions)
    setShowProfileOptions(!showProfileOptions)
  }


  return (
    <nav className=" flex flex-row  justify-between flex-nowrap bg-gray-800 px-6 py-3  w-full top-0 flex-shrink-0">

      {backButton ?
        <div className="flex flex-row justify-around align-middle items-center content-center">
          <a href="/home">
            <svg className=" h-6 mr-3 flex " fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </a>

          <p className="text-white mx-0 text-xl flex my-auto ">{backTitle}</p>
        </div>
      :
      <div className={"flex items-center flex-shrink-0 text-white mr-6 align-middle h-auto w-20 "}>
      <a className="text-white flex no-underline hover:text-white hover:no-underline" href="/">
        <Logo />
      </a>
    </div>
      }

      <div className="flex justify-end items-center">
          <button  id="nav-toggle" className="mr-3 hidden sm:block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </button>
          <button  id="nav-toggle" className="mr-3 block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          </button>
          <div className="flex flex-row items-center">
            <p className="mr-5 ml-3 hidden text-lg text-gray-200 md:block">John Doe</p>
            <div className="cursor-pointer" onClick={handleShowProfileOptions}>
            <img  className={" inline-block h-10 x-14 rounded-full ring-2 ring-white"} src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </div>
            <svg className={"absolute top-16 sm:mt-5 mt-1 right-0" + (showProfileOptions ? " visible flex" : " hidden") } height='12' width='200' stroke="none" fill='#202A38'>
              <path d='M150 0 L75 75 L225 75 Z' />
            </svg>
            <div className={"absolute sm:mt-4 mt-0 right-0 z-50 sm:right-0.5 top-20 w-full sm:w-2/12 sm:mr-3 sm:rounded-md  bg-gray-800 bg-opacity-95   transition-all visible flex-col  " + (showProfileOptions ? " visible flex" : " hidden")}>
              <a className="text-gray-500 flex p-3 hover:bg-gray-900 rounded-md" href="/profile"><svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>Meu perfil</a>
              <a className="text-gray-500 flex p-3 hover:bg-gray-900 rounded-md" href="/"><svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>Sair</a>
            </div>
          </div>

      </div>

	</nav>

  );
  }
export default Nav;
