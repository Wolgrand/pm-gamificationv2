import Link from 'next/link'
import { useState } from 'react'


export default function Home() {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const handleNavBar = () => {
    setNavbarOpen(!navbarOpen)
    setShowLogo(!showLogo)
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
      <div className="block lg:hidden">
			<button onClick={handleNavBar} id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
				<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		  </div>

      <div className={"flex items-center flex-shrink-0 text-white mr-6"}>
        <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
        <img  className="inline-block mx-0 my-auto h-12 sm:h-16 pl-6 " src="https://pm-gamification.netlify.app/static/media/logoBG.ab72d0c9.png" alt="logo"/>
        </a>
      </div>

		<div className={"w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0" + (navbarOpen ? " flex" : " hidden")} id="nav-content">
			<ul className="list-reset lg:flex justify-end flex-1 items-center">
				<li className="mr-3">
					<a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
				</li>
				<li className="mr-3">
					<a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
				</li>
				<li className="mr-3">
					<a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
				</li>
				<li className="mr-3">
					<a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
				</li>
			</ul>
		</div>
    <img className={" inlin}e-block h-12 x-14 rounded-full ring-2 ring-white"+ (showLogo ? " hidden" : " flex")} src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
	</nav>


  )
}

/* <div className="bg-gray-700 h-screen w-screen">
      <header className="bg-gray-900  flex flex-row justify-between h-28 md:h-28 content-center align-middle ">
        <div className="flex md:p-3">
          <img  className="inline-block mx-0 my-auto h-2/5 sm:h-2/3 pl-6 " src="https://pm-gamification.netlify.app/static/media/logoBG.ab72d0c9.png" alt="logo"/>
        </div>

        <div>
          <div className="mr-3 h-16 w-20 relative p-2 mx-auto my-0 md:h-20">
            <img className=" inline-block max-h-full max-x-full rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          </div>
          <button></button>
        </div>


      </header>
    </div> */
