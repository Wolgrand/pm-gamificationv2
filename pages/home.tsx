

import FloatingButton from '../components/floatingButton';
import Nav from '../components/nav'
import RankCard from '../components/rankCard';
import TopCard from '../components/topCard';


export default function Home() {


  return (
    <div className="h-screen w-screen flex flex-col">
      <Nav backButton={false} />
      <main className="bg-gray-700 h-max w-auto flex-col flex  overflow-y-auto">
        <div className="pl-5 sm:pl-20 pt-4">
          <h1 className="text-gray-200 font-medium sm:text-4xl text-2xl">Ranking Geral</h1>
          <h3 className="text-yellow-500 mt-1 font-medium">Hoje | Dia 22 de novembro | domingo </h3>
        </div>
        <div className="flex flex-col sm:pl-20 pt-4 px-5 mt-3 h-80 text-">
          <h2 className="text-gray-400 font-medium sm:text-2xl text-base border-solid border-b border-gray-600">Top 3 Departamentos</h2>
          <div className="flex-row flex mt-3 overflow-x-auto h-auto flex-nowrap min-h-0 ">
            <TopCard title="Departamento A" color="#f1c40f" borderColor="yellow-500"/>
            <TopCard title="Departamento B" color="#95a5a6" borderColor="gray-400"/>
            <TopCard title="Departamento C" color="#e67e22" borderColor="yellow-700"/>
          </div>
        </div>
        <div className="flex flex-col sm:pl-20 pt-4 px-5 mt-3 h-80">
          <h2 className="text-gray-400 font-medium sm:text-2xl text-base border-solid border-b border-gray-600">Top 3 Gerentes de Projetos</h2>
          <div className="flex-row flex mt-3 overflow-x-scroll">
            <TopCard title="Gerente A" color="#f1c40f"/>
            <TopCard title="Gerente B" color="#95a5a6"/>
            <TopCard title="Gerente C" color="#e67e22"/>
          </div>
        </div>
        <div className="flex flex-col sm:pl-20 pt-4 px-5 mt-3">
          <h2 className="text-gray-400 font-medium sm:text-2xl text-base border-solid border-b border-gray-600">Ranking Gerentes de Projetos</h2>
          <div className="flex-col flex mt-3 ">
            <RankCard title="Gerente de Projeto A" position="1º" borderColor="yellow-500"/>
            <RankCard title="Gerente de Projeto B" position="2º" borderColor="gray-400"/>
            <RankCard title="Gerente de Projeto C" position="3º" borderColor="yellow-700"/>
            <RankCard title="Gerente de Projeto D" position="4º"/>
            <RankCard title="Gerente de Projeto E" position="5º"/>
          </div>
        </div>
        <FloatingButton />
      </main>

    </div>

  )
}


