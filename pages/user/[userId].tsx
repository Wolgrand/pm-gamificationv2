import Router, { useRouter } from "next/router";
import Nav from '../../components/nav'
import {Line} from 'rc-progress'
import { useEffect, useState } from 'react'
import FloatingButton from '../../components/floatingButton'
import { useFetch } from '../../hooks/useFetch'
import { AchievementProps, ConquistasProps, PlayerRankPros, RewardProps } from '../../interfaces/interfaces'
import { useAuth } from "../../hooks/auth";

const User = () => {

  const { signOut, user } = useAuth();
  const router = useRouter()
  const { userId } = router.query;
  const [selectedMonth, setSelectedMonth] = useState('Dezembro')
  const [achievementGridArray, setAchievementGridArray] = useState<Number[]>([])
  const playerData = useFetch<PlayerRankPros>(`/api/user/${userId}`);
  const rewardsList = useFetch<RewardProps[]>(`/api/reward`);
  const achievementData = useFetch<AchievementProps[]>('/api/achievement');

  useEffect(() => {
    if (!user) {
      Router.replace("/");
    }
    const totalAchievements = achievementData.data ? achievementData.data.length : 0
    const totalPlayerAchievements = playerData.data ? playerData.data.achievements.length:0
    const totalEmptyGrid = totalAchievements - totalPlayerAchievements
    const emptyAchievementsArray =  Array.from(Array(totalEmptyGrid).keys())
    setAchievementGridArray(emptyAchievementsArray)
    console.log(achievementGridArray);

      }, [user]);

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ]

  const handleMonthSelection = (index:number) => {
    setSelectedMonth(months[index])

    return selectedMonth;
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-700 overflow-y-auto">
      <Nav backButton={true} backTitle="Usuário" />
      <div className="md:flex-row flex-col flex md:px-10 mb-3">
      <aside className="bg-gray-800 px-3 mt-6 mx-6 rounded-md flex flex-col flex-shrink-0 md:w-80 md:mr-2 ">
        <section className="p-4 mx-auto my-0 pt-6 mb-4  h-auto">
          <div className="flex mx-auto my-0 border-gray-200 rounded-full h-auto ">
            <img  className={" inline-block h-32 w-32 rounded-full ring-2 ring-white border-gray-200 p-1"} src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"/>
          </div>
          <p className="mt-4 text-xl text-center font-semibold text-white">{playerData.data?.name}</p>
          <p className="mt-2 text-3xl text-center font-semibold text-gray-400">{playerData.data?.score} pts</p>
        </section>
        <section className="fle px-2 border-t-2 border-gray-400 border-opacity-20 flex flex-col mb-6 " >
          <p className="mt-6 text-lg text-left font-semibold text-white justify-start mb-4">Conquistas</p>
          <div className="grid grid-cols-4 gap-2 h-auto md:grid-cols-3">
            { playerData.data?.achievements.map(item => (
              <div key={item._id} className="bg-gray-900 w-full place-items-center place-content-center rounded-lg h-14 mx-auto my-0 justify-center content-center align-middle flex" >
               <img className="w-10 h-10 rounded-full " src={item.url} alt={item.nome}/>
              </div>
            ))}


            { achievementGridArray.map((item, index)=>(
              <div key={index} className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            ))}

          </div>
        </section>
        <section className="px-2 border-t-2 border-gray-400 border-opacity-20 flex flex-col h-auto mb-6">
          <p className="mt-6 text-lg text-left font-semibold text-white justify-start mb-4">Recompensas</p>
            {rewardsList.data && rewardsList.data.map(item =>(
              <div key={item._id} className=" flex flex-col bg-gray-900 rounded-lg h-auto mb-1">
                <div className="flex flex-col bg-gray-900 p-2  rounded-lg h-auto">
                  <p className="text-white mb-2">{item.title} - {item.score} pts</p>
                  <div className="flex-row flex items-center h-auto">
                  <Line
                      className="w-11/12"
                      percent={playerData.data && playerData.data?.score/item.score >= 1 ? 100 : ((playerData.data ? playerData.data?.score : 100)/item.score)*100}
                      strokeWidth={6}
                      trailWidth={5}
                      strokeColor={playerData.data && playerData.data?.score/item.score >= 1 ? "#27ae60" : "#ff9000"}
                      strokeLinecap="round"
                    />
                  <p className="flex-row ml-2 text-white">{playerData.data && playerData.data?.score/item.score >= 1 ? 100 : Math.ceil(((playerData.data ? playerData.data?.score : 100)/item.score)*100)}%</p>
                  </div>
                </div>
              </div>
            ))}



        </section>
      </aside>
      <main className="bg-gray-800 px-4 mt-2 mx-6 rounded-md flex flex-col mb-6 flex-shrink-0 md:w-8/12 md:mt-6">
        <p className="mt-6 text-lg text-left font-semibold text-white justify-start mb-4">Histórico</p>
        <section className="px-2 border-t-2 border-gray-400 border-opacity-20 flex flex-col h-auto mb-6">
          <p className="mt-6 text-lg text-left font-semibold text-white justify-start mb-4">Meses</p>
          <div className="grid grid-cols-4 gap-2 h-auto md:grid-cols-12">
            <div onClick={() => handleMonthSelection(0)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Janeiro" ? "bg-yellow-600" : "bg-gray-900")} >Jan</div>
            <div onClick={() => handleMonthSelection(1)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Fevereiro" ? "bg-yellow-600" : "bg-gray-900")} >Fev</div>
            <div onClick={() => handleMonthSelection(2)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Março" ? "bg-yellow-600" : "bg-gray-900")} >Mar</div>
            <div onClick={() => handleMonthSelection(3)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Abril" ? "bg-yellow-600" : "bg-gray-900")} >Abr</div>
            <div onClick={() => handleMonthSelection(4)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Maio" ? "bg-yellow-600" : "bg-gray-900")} >Mai</div>
            <div onClick={() => handleMonthSelection(5)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Junho" ? "bg-yellow-600" : "bg-gray-900")} >Jun</div>
            <div onClick={() => handleMonthSelection(6)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Julho" ? "bg-yellow-600" : "bg-gray-900")} >Jul</div>
            <div onClick={() => handleMonthSelection(7)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Agosto" ? "bg-yellow-600" : "bg-gray-900")} >Ago</div>
            <div onClick={() => handleMonthSelection(8)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Setembro" ? "bg-yellow-600" : "bg-gray-900")} >Set</div>
            <div onClick={() => handleMonthSelection(9)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Outubro" ? "bg-yellow-600" : "bg-gray-900")} >Out</div>
            <div onClick={() => handleMonthSelection(10)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Novembro" ? "bg-yellow-600" : "bg-gray-900")} >Nov</div>
            <div onClick={() => handleMonthSelection(11)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Dezembro" ? "bg-yellow-600" : "bg-gray-900")} >Dez</div>
          </div>
          <p className="mt-6 text-lg text-left font-semibold text-white justify-start mb-4">Atividades {`${selectedMonth}`}</p>
          <div className={selectedMonth === "Novembro" ? "visible" : "hidden"}>
            <details className="text-white">
              <summary>28/11/2020</summary>
              <p className="text-gray-400 mt-2">Entregar A no prazo- 15pts</p>
              <p className="text-gray-400 mt-2">Interagir no MS Teams- 5pts</p>
              <p className="text-gray-400 mt-2">Entregar A com qualidade- 15pts</p>
            </details>
            <details className="text-white">
              <summary>29/11/2020</summary>
              <p className="text-gray-400 mt-2">Entregar A no prazo- 15pts</p>
              <p className="text-gray-400 mt-2">Interagir no MS Teams- 5pts</p>
              <p className="text-gray-400 mt-2">Entregar A com qualidade- 15pts</p>
            </details>
            <details className="text-white">
              <summary>30/11/2020</summary>
              <p className="text-gray-400 mt-2">Entregar A no prazo- 15pts</p>
              <p className="text-gray-400 mt-2">Interagir no MS Teams- 5pts</p>
              <p className="text-gray-400 mt-2">Entregar A com qualidade- 15pts</p>
            </details>
          </div>
          <div className={selectedMonth === "Dezembro" ? "visible" : "hidden"}>
            <details className="text-white">
              <summary>07/12/2020</summary>
              <p className="text-gray-400 mt-2">Entregar A no prazo- 15pts</p>
              <p className="text-gray-400 mt-2">Interagir no MS Teams- 5pts</p>
              <p className="text-gray-400 mt-2">Entregar A com qualidade- 15pts</p>
            </details>
            <details className="text-white">
              <summary>08/12/2020</summary>
              <p className="text-gray-400 mt-2">Entregar A no prazo- 15pts</p>
              <p className="text-gray-400 mt-2">Interagir no MS Teams- 5pts</p>
              <p className="text-gray-400 mt-2">Entregar A com qualidade- 15pts</p>
            </details>

          </div>
        </section>
        <FloatingButton usage='newActivity' link={`/user/new-score/${userId}`}/>
      </main>
      </div>
    </div>


  )
}

export default User
