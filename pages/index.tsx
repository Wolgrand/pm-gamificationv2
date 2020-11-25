import Link from 'next/link'
import Logo from '../components/logo';


export default function Login() {

  return (
    <div className="bg-gray-700 h-screen w-screen flex items-stretch">
      <div className="flex flex-col mx-auto my-0 items-center place-content-center justify-center w-full">
        <Logo width={60}/>
        <form className="" action="">
          <h1 className="text-yellow-500 font-semibold my-12 text-center text-4xl">Faça seu login </h1>
          <div className="max-w-md mx-auto">
            <div className="bg-gray-900 flex items-center rounded-xl p-4 justify-around ">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <input className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="E-mail"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl p-4 justify-around mt-2 ">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <input className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Senha"/>
            </div>
            <Link href="/home">
            <button className="bg-yellow-500 inline-block text-center items-start w-full mt-5 p-3 rounded-xl text-gray-900 text-xl ">Entrar</button>
            </Link>

            <p className="text-yellow-500 text-center mt-4">Esqueceu a senha ?</p>
          </div>


        </form>
      </div>
    </div>
  )
}
