import { useEffect, useMemo } from 'react';
import Router from "next/router";
import Link from 'next/link'
import { isToday, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import FloatingButton from '../components/floatingButton';
import RankCard from '../components/rankCard';
import TopCard from '../components/topCard';
import { useFetch } from '../hooks/useFetch';
import { useAuth } from '../hooks/auth';
import { DepartmentProps, PlayerRankPros } from '../interfaces/interfaces';
import { useRouter } from 'next/router'


const Home = () => {

  const router = useRouter()
  const { signOut, user } = useAuth();
  const topPlayersData = useFetch<PlayerRankPros[]>('/api/rank/topPlayers');
  const topDepartmentsData = useFetch<DepartmentProps[]>('/api/rank/topDepartments');
  const playerListData = useFetch<PlayerRankPros[]>('/api/rank/players');


  useEffect(() => {
    if (!user) {
      Router.replace("/");
    }


  }, [user]);

  const getTodayDate = useMemo(() => {
    return format(new Date(), " 'Dia' dd 'de' MMMM", {
      locale: ptBR,
    });
  }, []);

  const getTodayWeekDay = useMemo(() => {
    return format(new Date(), 'cccc', {
      locale: ptBR,
    });
  }, []);

  if(user?.role === 'PMO' ){
    return (
      <div className="h-screen w-auto flex flex-col bg-gray-700">
        <main className="bg-gray-700 h-max flex-col flex my-0 ">
          <div className=" lg:pl-20 pl-5 pt-4">
            <h1 className="text-gray-200 font-medium md:text-4xl text-2xl">Ranking Geral</h1>
            <h3 className="text-yellow-500 mt-1 font-medium">{`Hoje | ${getTodayDate} | ${getTodayWeekDay}`} </h3>
          </div>
          <div className="flex flex-col lg:px-20 pt-4 px-5 mt-3 ">
            <h2 className="text-gray-400 font-medium md:text-2xl text-base border-solid border-b border-gray-600">Top 3 Departamentos</h2>
            <div className="flex-row flex mt-3 overflow-x-auto h-auto flex-nowrap min-h-0 ">
              {topDepartmentsData.data && topDepartmentsData.data.map((item, index) =>
                <TopCard key={index} size={28} title={item.department} score={item.average} position={item.position}  />
              )}
            </div>
          </div>
          <div className="flex flex-col lg:px-20 pt-4 px-5 ">
            <h2 className="text-gray-400 font-medium md:text-2xl text-base border-solid border-b border-gray-600">Top 3 Gerentes de Projetos</h2>
            <div className="flex-row flex mt-3 overflow-x-auto">
              {topPlayersData.data?.map((item, index) =>
                <TopCard key={index} size={28} title={item.name} score={item.score} position={item.position}  />
              )}
            </div>
          </div>
          <div className="flex flex-col lg:pl-20 pt-4 px-5 mt-3 mb-7">
            <h2 className="text-gray-400 font-medium lg:text-2xl text-base border-solid border-b border-gray-600">Ranking Gerentes de Projetos</h2>
            <div className="flex-col flex mt-3 my-auto mx-0 ">
              {playerListData.data?.map(item=>
                <Link key={item._id} href={`/user/${item._id}`}>
                  <a>
                    <RankCard achievements={item.achievements} title={item.name} score={item.score} position={item.position} oldPosition={item.old_position}/>
                  </a>
                </Link>
              )}
              </div>
          </div>

        </main>

      </div>

    )
  } else {

    return (
      <div className="h-screen w-auto flex flex-col bg-gray-700">
        <main className="bg-gray-700 h-max flex-col flex my-0 ">
          <div className=" lg:pl-20 pl-5 pt-4">
            <h1 className="text-gray-200 font-medium md:text-4xl text-2xl">Ranking Geral</h1>
            <h3 className="text-yellow-500 mt-1 font-medium">{`Hoje | ${getTodayDate} | ${getTodayWeekDay}`} </h3>
          </div>


          <h1 className="text-gray-200 font-medium md:text-4xl text-xl text-center">
            ⚠
            Você está tentando acessar a sua pontuação e o ranking de jogadores e departamentos? Para aumentar o suspense o resultado final será apresentado apenas no dia da premiação!
          </h1>


        </main>

      </div>
    );
  }
}


export default Home;
