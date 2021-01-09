
import Link from 'next/link';
import { useState } from 'react';
import Logo from './logo';
import Tooltip from './TooltipMenu';

interface Props {
  backButton?: boolean;
  backTitle?:string;
  configMenu?: boolean;
}


const Nav = ({backButton, backTitle, configMenu}:Props) => {


  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);



  const handleShowProfileOptions = () => {
    setShowNotifications(false)
    setShowProfileOptions(!showProfileOptions)
  }

  const handleShowNotifications = () => {
    setShowProfileOptions(false)
    setHasNotifications(false)
    setShowNotifications(!showNotifications)
  }




  return (
    <nav className=" flex flex-row  justify-between flex-nowrap bg-gray-800 px-6 py-3  w-full top-0" style={{minHeight:60}}>

      {backButton ?
        <div className="flex flex-row justify-around align-middle items-center content-center">
          <Link  href="/home">
            <a>
              <svg className=" h-6 mr-3 flex " fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </a>
          </Link>


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
        {configMenu ?
        <div className="flex flex-row">
          <Tooltip title={`Usuários`}>
          <button  id="nav-toggle" className="mr-3 hidden sm:block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
            <Link href="/admin/users">
              <a >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </a>
            </Link>
          </button>
          </Tooltip>

          <Tooltip title={`Conquistas`}>
          <button  id="nav-toggle" className="mr-3 hidden sm:block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
            <Link href="/admin/achievements">
              <a >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </a>
            </Link>
          </button>
          </Tooltip>

          <Tooltip title={`Critérios`}>
          <button  id="nav-toggle" className="mr-3 hidden sm:block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
            <Link href="/admin/criterias">
              <a >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              </a>
            </Link>
          </button>
          </Tooltip>

          <Tooltip title={`Recompensas`}>
            <button  id="nav-toggle" className="mr-3 hidden sm:block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
              <Link href="/admin/rewards">
                <a >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                </a>
              </Link>
            </button>
          </Tooltip>
        </div>



        :
          <button  id="nav-toggle" className="mr-3 hidden sm:block sm:mr-3  items-center px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
            <Link href="/admin/users">
              <a >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </a>
            </Link>

        </button>
        }

          <button  onClick={handleShowNotifications} id="nav-notifications" className="flex mr-3  sm:mr-3  px-3 py-2  rounded text-gray-500  hover:bg-gray-900 hover:text-gray-300 hover:border-gray-300">
            <svg className="w-6 h-6" fill="none" stroke={hasNotifications ? "#e74c3c" : "currentColor"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            <span className={"relative right-3  z-50 flex " + (hasNotifications ? "visible" : "hidden")}>
              <div className="inline-flex items-center h-2 w-2 rounded-full text-xs font-semibold  bg-red-500 text-white" />
            </span>
          </button>
          <div className="flex flex-row items-center">
            <p className="mr-5 ml-3 hidden text-lg text-gray-200 md:block">John Doe</p>
            <div className="cursor-pointer" onClick={handleShowProfileOptions}>
              <img  className={" inline-block h-10 x-14 rounded-full ring-2 ring-white"} src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </div>
            <div>
              <svg className={"absolute top-16 sm:mt-5 mt-1 right-0" + (showProfileOptions ? " visible flex" : " hidden") } height='12' width='200' stroke="none" fill='#202A38'>
                <path d='M150 0 L75 75 L225 75 Z' />
              </svg>
              <div className={"absolute sm:mt-4 mt-0 right-0 z-50 sm:right-0.5 top-20 w-full sm:w-2/12 sm:mr-3 sm:rounded-md  bg-gray-800 bg-opacity-95   transition-all visible flex-col  " + (showProfileOptions ? " visible flex" : " hidden")}>
                <Link href="/profile">
                  <a className="text-gray-500 flex p-3 hover:bg-gray-900 rounded-md" ><svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>Meu perfil</a>
                </Link>
                <Link href="/">
                  <a className="text-gray-500 flex p-3 hover:bg-gray-900 rounded-md" ><svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>Sair</a>
                </Link>

              </div>
            </div>
            <div className={"flex "}>
              <svg className={"absolute top-16 sm:-mt-2 mt-1 right-12 sm:right-40" + (showNotifications ? " visible flex" : " hidden") } height='12' width='200' stroke="none" fill='#202A38'>
                <path d='M150 0 L75 75 L225 75 Z' />
              </svg>
              <div className={"flex absolute sm:mt-3 mt-0 p-4 md:-mt-3 right-0 z-50 sm:right-10 top-20 w-full sm:w-4/12 sm:mr-5 sm:rounded-md h-72  bg-gray-800 bg-opacity-100   transition-all visible flex-col  " + (showNotifications ? " visible flex" : " hidden")}>
                <div className="flex flex-row justify-between">
                  <p className="text-white text-lg pb-2 cursor-pointer hover:bg-gray-900 rounded-lg p-1 px-2">Notificações</p>
                  <p className="text-white text-lg pb-2 cursor-pointer hover:bg-gray-900 rounded-lg p-1 px-2">Ver todas</p>
                </div>

                <ul className="overflow-y-auto ">
                  <li className="rounded-lg bg-gray-700 hover:bg-opacity-70  flex flex-row text-gray-200 justify-around items-center mt-2 p-2">
                      <svg className="md:w-8 md:h-8 h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                      <div className="flex flex-col  ">
                        <p className="font-semibold md:text-lg text-base">Nova pontuação recebida</p>
                        <p className="md:text-sm text-xs">Você recebeu 10pts por ter entregado A no prazo</p>
                      </div>
                  </li>
                  <li className="rounded-lg bg-gray-700 hover:bg-opacity-70  flex flex-row text-gray-200 justify-around items-center mt-2 p-2">
                      <svg className="md:w-8 md:h-8 h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                      <div className="flex flex-col  ">
                        <p className="font-semibold md:text-lg text-base">Nova pontuação recebida</p>
                        <p className="md:text-sm text-xs">Você recebeu 10pts por ter entregado A no prazo</p>
                      </div>
                  </li>
                  <li className="rounded-lg bg-gray-700 hover:bg-opacity-70  flex flex-row text-gray-200 justify-around items-center mt-2 p-2">
                      <svg className="md:w-8 md:h-8 h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                      <div className="flex flex-col  ">
                        <p className="font-semibold md:text-lg text-base">Nova pontuação recebida</p>
                        <p className="md:text-sm text-xs">Você recebeu 10pts por ter entregado A no prazo</p>
                      </div>
                  </li>

                </ul>
              </div>
            </div>

          </div>

      </div>

	</nav>

  );
  }
export default Nav;
