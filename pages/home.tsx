
import Link from 'next/link'
import FloatingButton from '../components/floatingButton';
import Nav from '../components/nav'
import RankCard from '../components/rankCard';
import TopCard from '../components/topCard';


export default function Home() {


  return (
    <div className="h-screen w-screen flex flex-col bg-gray-700">
      <Nav backButton={false} />
      <main className="bg-gray-700 h-max w-auto flex-col flex  overflow-y-auto my-0 md:px-3.5">
        <div className="pl-5 md:pl-20 pt-4">
          <h1 className="text-gray-200 font-medium md:text-4xl text-2xl">Ranking Geral</h1>
          <h3 className="text-yellow-500 mt-1 font-medium">Hoje | Dia 22 de novembro | domingo </h3>
        </div>
        <div className="flex flex-col md:pl-20 pt-4 px-5 mt-3 h-96 text-">
          <h2 className="text-gray-400 font-medium md:text-2xl text-base border-solid border-b border-gray-600">Top 3 Departamentos</h2>
          <div className="flex-row flex mt-3 overflow-x-auto h-auto flex-nowrap min-h-0 ">
            <TopCard size={28} title="DCMD" color="#f1c40f" />
            <TopCard size={28} title="GAT" color="#95a5a6" />
            <TopCard size={28} title="DECP" color="#e67e22" />
          </div>
        </div>
        <div className="flex flex-col md:pl-20 pt-4 px-5 mt-3 h-96">
          <h2 className="text-gray-400 font-medium md:text-2xl text-base border-solid border-b border-gray-600">Top 3 Gerentes de Projetos</h2>
          <div className="flex-row flex mt-3 overflow-x-auto">
            <TopCard size={28} title="Gerente A" color="#f1c40f"  />
            <TopCard size={28} title="Gerente B" color="#95a5a6"  />
            <TopCard size={28} title="Gerente C" color="#e67e22"  />
          </div>
        </div>
        <div className="flex flex-col lg:pl-20 pt-4 px-5 mt-3 mb-7">
          <h2 className="text-gray-400 font-medium lg:text-2xl text-base border-solid border-b border-gray-600">Ranking Gerentes de Projetos</h2>
          <div className="flex-col flex mt-3 my-auto mx-0 ">
            <a href="/user/12345">
              <RankCard title="Gerente de Projeto A" position="1º" borderColor="#f1c40f" />
            </a>
            <a href="/user/12346">
              <RankCard title="Gerente de Projeto B" position="2º" borderColor="#95a5a6"/>
            </a>
            <a href="/user/12347">
              <RankCard title="Gerente de Projeto C" position="3º" borderColor="#e67e22"/>
            </a>
            <a href="/user/12348">
              <RankCard title="Gerente de Projeto D" position="4º"/>
            </a>
            <a href="/user/12349">
              <RankCard title="Gerente de Projeto E" position="5º"/>
          </a></
          div>
        </div>
        <FloatingButton />
      </main>

    </div>

  )
}


