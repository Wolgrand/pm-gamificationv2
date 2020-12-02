import Link from 'next/link'
import {  useState } from 'react';

import Nav from '../components/nav'




export default function Profile() {

  const [image, setImage] = useState({ preview: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', raw: '' })

  const handleAvatarChange = (e: any) => {
    setImage({
     preview: URL.createObjectURL(e.target.files[0]),
     raw: e.target.files[0]
    })
   }


  return (
    <div className="bg-gray-700 w-full">
      <Nav backButton={true} />
       <div className="flex flex-col items-center justify-center -mt-5 mx-auto w-full ">
        <form className="my-5 mx-0 w-full text-center flex flex-col ">
          <div className="h-20 bg-gray-800" ></div>
          <div className="relative self-center bg-gray-700 w-full ">
            { image.preview ?
            <img  className={" inline-block h-40 w-40 rounded-full ring-2 ring-white -mt-20"} src={image.preview} alt=""/>
            :
            <img className={" inline-block h-40 w-40 rounded-full ring-2 ring-white -mt-20"}  src={image.preview} />
            }

            <label className="relative -mt-5 pl-20 h-8 rounded-full right-0 bottom-0 border-0 cursor-pointer flex items-center justify-center" htmlFor="avatar">
              <svg className="w-10 h-10 bg-gray-800 p-2 rounded-full" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <input className="hidden" type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </div>
          <h1 className="text-gray-100 font-semibold my-4 max-w-md mx-auto text-left w-10/12 text-2xl flex-col flex">Meu perfil </h1>
          <div className="max-w-md mx-auto w-10/12">
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around ">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <input className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Seu nome"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2 ">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <input className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="E-mail"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-6 ">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <input className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="password" placeholder="Senha"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2 ">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <input className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="password" placeholder="Nova Senha"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2 ">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <input className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="password" placeholder="Confirmação Senha"/>
            </div>

            <Link href="/home">
              <button className="bg-gray-100 bg-opacity-30 inline-block text-center items-start w-full mt-5 px-4 py-3 rounded-xl text-gray-900 text-xl ">Confirmar</button>
            </Link>

          </div>
        </form>
       </div>


    </div>

  )
}


