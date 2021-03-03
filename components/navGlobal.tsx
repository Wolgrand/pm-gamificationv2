
import { sign } from 'jsonwebtoken';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {FaPowerOff} from 'react-icons/fa'
import { useAuth } from '../hooks/auth';
import Avatar from './Avatar';
import Logo from './logo';
import Tooltip from './TooltipMenu';




const Nav = () => {

  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const { signOut, user } = useAuth();
  const router = useRouter()


  const handleShowProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions)
  }

  const handleSignOut = () => {
    signOut()
  }


  return (


    <header className={" flex flex-row  justify-between bg-gray-800 px-6 py-3  top-0 " + (router.pathname !== "/" ? 'visible' : 'hidden')} style={{maxHeight:50}}>
      <div className="flex flex-row">
        <div className={"flex items-center flex-shrink-0 text-white mr-6 align-middle h-auto w-20"}>
          <a className="text-white flex no-underline hover:text-white hover:no-underline" href="/">
            <Logo />
          </a>
        </div>

        {router.pathname !== "/home" && (
          <button onClick={() => router.back()} id="nav-toggle" className="mr-3 sm:block sm:mr-3  items-center  rounded text-white  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300 w-10">
            <svg className="w-6 h-6 my-0 mx-auto " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
        )}

      </div>


      <div className="flex justify-end items-center">



        { user && user.role === 'PMO' ?
        <div className="md:flex flex-row hidden">
            <button  className="mr-3 hidden sm:block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
          <Tooltip key={'users'} title={`Usuários`}>
              <Link href="/admin/users">
                <a >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </a>
              </Link>
          </Tooltip>
            </button>

          <button  className="mr-3 hidden sm:block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
          <Tooltip key={'achievements'} title={`Conquistas`}>
            <Link href="/admin/achievements">
              <a >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </a>
            </Link>
          </Tooltip>
          </button>

          <button  className="mr-3 hidden sm:block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
          <Tooltip key={'criterias'} title={`Entregas`}>
            <Link href="/admin/criterias">
              <a >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              </a>
            </Link>
          </Tooltip>
          </button>

            <button  className="mr-3 hidden sm:block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
          <Tooltip key={'rewards'} title={`Recompensas`}>
              <Link href="/admin/rewards">
                <a >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                </a>
              </Link>
          </Tooltip>
            </button>
            <button  className="mr-3 hidden sm:block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
          <Tooltip key={'details'} title={`Informações`}>
              <Link href="/informations">
                <a >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </a>
              </Link>
          </Tooltip>
            </button>
        </div>


          : null
        }

          <div className="flex flex-row items-center">
            <p className="mr-5 ml-3 hidden text-lg text-gray-200 md:block">{user ? user.name : null}</p>

            <Avatar name={user ? user.name : "null"} fontSize={1} size={36}/>


            <button onClick={()=>handleSignOut()} className="z-10 cursor-pointer ml-3 px-3 py-3 rounded-md text-gray-500 bg-gray-800 hover:bg-gray-900">
              <FaPowerOff/>
            </button>

            <div>
              <svg className={"absolute top-16 sm:mt-5 mt-1 right-0" + (showProfileOptions ? " visible flex" : " hidden") } height='12' width='200' stroke="none" fill='#202A38'>
                <path d='M150 0 L75 75 L225 75 Z' />
              </svg>
              <div className={"absolute sm:mt-4 mt-0 right-0 z-50 sm:right-0.5 top-20 w-full sm:w-2/12 sm:mr-3 sm:rounded-md  bg-gray-800 bg-opacity-95   transition-all visible flex-col  " + (showProfileOptions ? " visible flex" : " hidden")}>
                <Link href="/profile">
                  <a className="text-gray-500 flex p-3 hover:bg-gray-900 rounded-md" ><svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>Meu perfil</a>
                </Link>

                  <a  className="text-gray-500 flex p-3 hover:bg-gray-900 rounded-md cursor-pointer" ><svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>Sair</a>


              </div>
            </div>


          </div>

      </div>

	</header>

  );
  }
export default Nav;
