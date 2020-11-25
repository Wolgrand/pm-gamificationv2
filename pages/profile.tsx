
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
    <div className="bg-gray-700 w-full mt-20">
      <Nav backButton={true} />
       <div className="flex flex-col items-center justify-center -mt-5 mx-auto w-full ">
        <form className="my-5 mx-0 w-full text-center flex flex-col ">
          <div className="relative self-center bg-gray-800 w-full -mt-5 ">
            { image.preview ?
            <img  className={" relative inline-block h-36 w-36 rounded-full ring-2 ring-white -bottom-24"} src={image.preview} alt=""/>
            :
            <img className={" inline-block h-36 w-36 rounded-full ring-2 ring-white"}  src={image.preview} />
            }

            <label className="absolute w-18 h-8 rounded-full right-0 bottom-0 border-0 cursor-pointer flex items-center justify-center" htmlFor="avatar">
              <svg className="w-8 h-8 bg-gray-700 p-1 rounded-full" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <input className="hidden" type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </div>

        </form>
       </div>


    </div>

  )
}


