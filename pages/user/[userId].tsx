import Router, { useRouter } from "next/router";
import {Line} from 'rc-progress'
import { useEffect, useState } from 'react'
import FloatingButton from '../../components/floatingButton'
import { useFetch } from '../../hooks/useFetch'
import { AchievementData, AchievementProps, ConquistasProps, CriteriaData, PlayerRankPros, RewardProps } from '../../interfaces/interfaces'
import { useAuth } from "../../hooks/auth";
import axios from "axios";
import Avatar from "../../components/Avatar";
import Tooltip from "../../components/Tooltip";
import ModalConfirmation from "../../components/ModalConfirmation";
import { useToast } from "../../hooks/toast";


const User = () => {

  const months = [
    "Janeiro",
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

  const { signOut, user } = useAuth();
  const router = useRouter()
  const { addToast } = useToast();
  const { userId } = router.query;
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerRankPros>()
  const [selectedPlayerAchievements, setPlayerAchievements] = useState<AchievementData[]>([])
  const [selectedMonth, setSelectedMonth] = useState('Janeiro')
  const [selectedCriteria, setSelectedCriteria] = useState<CriteriaData | undefined>()
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementData | undefined>()
  const [modalCriteriaOpen, setModalCriteriaOpen] = useState(false);
  const [modalAchievementOpen, setModalAchievementOpen] = useState(false);
  const [loadingDeleteItem, setLoadingDeleteItem] = useState(false)
  const [selectedMonthRewards, setSelectedMonthRewards] = useState(0)
  const playerData = useFetch<PlayerRankPros>(`/api/user/${userId}`);
  const rewardsList = useFetch<RewardProps[]>(`/api/reward`);
  const achievementData = useFetch<AchievementProps[]>('/api/achievement');



  useEffect(() => {
      const today = new Date
      const thisMonth = today.getMonth() + 1
      handleMonthSelection(thisMonth)
      setSelectedMonth(months[thisMonth])
      }, []);

  useEffect(()=>{
    setSelectedPlayer(playerData.data)

  }, [playerData])



  const handleDeleteAchievement = async (id:string | undefined) => {
    setLoadingDeleteItem(true)
    if (id === undefined){ return;}
    try {

      const achievement = {achievementId:id}
      await axios.delete(`/api/new-score/achievement/${userId}`, {
        data: achievement
      }).then(res=> handleStopLoadingAchievement())

    } catch (error) {
      console.log(error);
      setLoadingDeleteItem(false)
    }
    await axios.get(`/api/rank/getRank`);
  }

  function handleStopLoadingAchievement () {
    selectedPlayer && selectedAchievement ? selectedPlayer.score = selectedPlayer.score - selectedAchievement.score : null
    const filteredItems = selectedPlayer?.achievements.filter((item) => item.id !== selectedAchievement?.id);
    if(playerData.data && filteredItems){
      playerData.data.achievements = filteredItems
    }
    setLoadingDeleteItem(false)
    toggleModalAchievement()
    addToast({
      type: 'success',
      title: 'Conquista excluída com sucesso',
    })
  }

  function handleStopLoadingCriteria () {
    selectedPlayer && selectedCriteria ? selectedPlayer.score = selectedPlayer.score - selectedCriteria?.score : null
    const filteredItems = selectedPlayer?.criterias.filter((item) => item.id !== selectedCriteria?.id);
    if(playerData.data && filteredItems){
      playerData.data.criterias = filteredItems
    }
    setLoadingDeleteItem(false)
    toggleModalCriteria()
    addToast({
      type: 'success',
      title: 'Entrega excluída com sucesso',
    })
  }

  const handleDeleteCriteria = async (id:string | undefined) => {
    try {
      setLoadingDeleteItem(true)

      const criteria = {id}
       await axios.delete(`/api/new-score/criteria/${userId}`, {
        data: criteria
      }).then(res=> handleStopLoadingCriteria())
    } catch (error) {
      console.log(error);
    }
    await axios.get(`/api/rank/getRank`);
  }

  function handleSelectedCriteria(item: CriteriaData ) {
    toggleModalCriteria()
    setSelectedCriteria(item)

  }
  function handleSelectedAchievement(item: AchievementData ) {
    toggleModalAchievement()
    setSelectedAchievement(item)

  }

  function toggleModalCriteria(): void {
    setModalCriteriaOpen(!modalCriteriaOpen);
  }
  function toggleModalAchievement(): void {
    setModalAchievementOpen(!modalAchievementOpen);
  }

  const handleMonthSelection = (index:number) => {
    setSelectedMonth(months[index])

    if(playerData.data) {
      const MonthRewards = playerData.data?.achievements.filter(item => {
        item.month !== index
      })
      setSelectedMonthRewards(index);
    }


    return selectedMonth;
  }

  return (
    <div className="h-auto w-auto flex flex-col bg-gray-700">
      <ModalConfirmation
            isOpen={modalAchievementOpen}
            setIsOpen={toggleModalAchievement}
          >
            <div className="flex justify-center flex-col">
              <p className="text-white mx-auto text-justify text-xl my-0">Você deseja realmente excluir a conquista abaixo? Esta ação não poderá ser desfeita.</p>
              <p className="text-gray-200 mx-auto text-base p-2 text-center my-0">{selectedAchievement?.day}/{selectedAchievement?.month} - {selectedAchievement?.title}</p>
            <div className="flex flex-row">
              <button onClick={()=>handleDeleteAchievement(selectedAchievement?.id)} className="rounded-lg h-10 hover:opacity-80 mx-auto my-0 mt-10 w-2/6 bg-green-500 text-white text-center content-center justify-center">
                {
                  loadingDeleteItem ?
                  <svg className="w-6 h-6 animate-spin inline-block mx-0 my-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                  : "Confirmar"
                }
              </button>
              <button onClick={()=>toggleModalAchievement()} className="rounded-lg h-10 hover:opacity-80 mx-auto my-0 mt-10 w-2/6 bg-red-500 text-white">Cancelar</button>

            </div>
            </div>
          </ModalConfirmation>
      <ModalConfirmation
            isOpen={modalCriteriaOpen}
            setIsOpen={toggleModalCriteria}
          >
            <div className="flex justify-center flex-col">
              <p className="text-white mx-auto text-justify text-xl my-0">Você deseja realmente excluir a entrega abaixo? Esta ação não poderá ser desfeita.</p>
              <p className="text-gray-200 mx-auto text-base p-2 text-center my-0">{selectedCriteria?.day}/{selectedCriteria?.month} - {selectedCriteria?.description}</p>
            <div className="flex flex-row">
              <button onClick={()=>handleDeleteCriteria(selectedCriteria?.id)} className="rounded-lg h-10 hover:opacity-80 mx-auto my-0 mt-10 w-2/6 bg-green-500 text-white">
              {
                  loadingDeleteItem ?
                  <svg className="w-6 h-6 animate-spin inline-block mx-0 my-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                  : "Confirmar"
                }
              </button>
              <button onClick={()=>toggleModalCriteria()} className="rounded-lg h-10 hover:opacity-80 mx-auto my-0 mt-10 w-2/6 bg-red-500 text-white">Cancelar</button>

            </div>
            </div>
          </ModalConfirmation>
      <div className="md:flex-row flex-col flex md:px-10 mb-3">
      <aside className="bg-gray-800 px-3 mt-6 mx-6 rounded-md flex flex-col flex-shrink-0 md:w-80 md:mr-2 ">
        <section className="p-4 mx-auto my-0 pt-6 mb-4  h-auto justify-center">
            <div className="relative flex mx-auto my-0 justify-center border-gray-200">
              <Avatar name={playerData.data ? playerData.data.name : "Player Name"} size={128} fontSize={4} />
              <div className="text-center left-24 absolute top-24 w-7 h-7 bg-gray-200 rounded-full">
                <p className="mx-auto my-0 text-xl text-center text-gray-800">{playerData.data?.position}</p>
              </div>
            </div>

            <div className="flex flex-row justify-center mt-4">
                <p className="text-xl text-center font-semibold text-white">{playerData.data?.name}</p>
            </div>

            <div className="flex flex-row">
              <p className="mt-2 text-3xl text-center font-semibold text-gray-400">{selectedPlayer?.score.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} pts</p>
            </div>


        </section>
        <section className="fle px-2 border-t-2 border-gray-400 border-opacity-20 flex flex-col mb-6 " >
          <p className="mt-6 text-lg text-left font-semibold text-white justify-start mb-4">Conquistas</p>
          <div className="grid grid-cols-4 gap-2 h-auto md:grid-cols-3">
            {
              achievementData.data?.map(item =>(

                <div key={item._id} className={"bg-gray-900 w-full relative place-items-center place-content-center rounded-lg h-14 mx-auto my-0 justify-center content-center align-middle flex " } >
                  <Tooltip key={item._id} className="text-center" title={String(item.title) + "-" + String(item.score)+"pts"}>
                    <div className={"absolute w-10 rounded-full opacity-80 h-10 " + (playerData.data?.achievements.find((a) => a.title === item.title) ? "" : "bg-gray-900")}></div>
                      <img className="w-10 h-10 rounded-full " src={item.image_url} alt={item.title}/>
                    </Tooltip>
               </div>
              ))
            }

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
            <div onClick={() => handleMonthSelection(1)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Janeiro" ? "bg-yellow-600" : "bg-gray-900")} >Jan</div>
            <div onClick={() => handleMonthSelection(2)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Fevereiro" ? "bg-yellow-600" : "bg-gray-900")} >Fev</div>
            <div onClick={() => handleMonthSelection(3)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Março" ? "bg-yellow-600" : "bg-gray-900")} >Mar</div>
            <div onClick={() => handleMonthSelection(4)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Abril" ? "bg-yellow-600" : "bg-gray-900")} >Abr</div>
            <div onClick={() => handleMonthSelection(5)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Maio" ? "bg-yellow-600" : "bg-gray-900")} >Mai</div>
            <div onClick={() => handleMonthSelection(6)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Junho" ? "bg-yellow-600" : "bg-gray-900")} >Jun</div>
            <div onClick={() => handleMonthSelection(7)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Julho" ? "bg-yellow-600" : "bg-gray-900")} >Jul</div>
            <div onClick={() => handleMonthSelection(8)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Agosto" ? "bg-yellow-600" : "bg-gray-900")} >Ago</div>
            <div onClick={() => handleMonthSelection(9)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Setembro" ? "bg-yellow-600" : "bg-gray-900")} >Set</div>
            <div onClick={() => handleMonthSelection(10)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Outubro" ? "bg-yellow-600" : "bg-gray-900")} >Out</div>
            <div onClick={() => handleMonthSelection(11)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Novembro" ? "bg-yellow-600" : "bg-gray-900")} >Nov</div>
            <div onClick={() => handleMonthSelection(12)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedMonth==="Dezembro" ? "bg-yellow-600" : "bg-gray-900")} >Dez</div>
          </div>

          <p className="mt-6 text-lg text-left font-semibold text-gray-200 justify-start mb-4 border-gray-400 border-b-2">Conquistas:</p>
            { playerData.data && playerData.data.achievements.filter(item=>item.month === selectedMonthRewards).length > 0
              ? playerData.data.achievements.filter(item=>item.month === selectedMonthRewards).map(achievement => achievement.day).filter((value, index, self) => self.indexOf(value) === index).map((item,index)=>(
              <div key={index}>
                <details className="text-white flex flex-row mb-5">
                <summary className="">{item}/{selectedMonthRewards}/2021</summary>
                {
                  playerData.data && playerData.data.achievements.filter(achievement=> achievement.day === item).map((item, index) => (
                    <p key={index} className="flex text-gray-400 mt-2">{item.title} - {item.score.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}pts

                      <svg onClick={()=>handleSelectedAchievement(item)} className={"w-5 h-5 ml-5 cursor-pointer " + (user.role !== 'PMO' ? "hidden" : "visible")} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </p>
                  ))
                }
                </details>
              </div>
            ))
            :
            <p className="text-white">Não foram registradas conquistas no período</p>
            }

          <p className="mt-6 text-lg text-left font-semibold text-gray-200 justify-start  mb-4 border-gray-400 border-b-2">Entregas:</p>
            { playerData.data && playerData.data?.criterias.filter(item=>item.month === selectedMonthRewards).length > 0 ?

            playerData.data?.criterias.filter(item=>item.month === selectedMonthRewards).map(criteria => criteria.day).filter((value, index, self) => self.indexOf(value) === index).map((item,index)=>(
              <div key={index}>
                <details className="text-white flex flex-row mb-5">

                <summary className="">{item}/{selectedMonthRewards}/2021</summary>
                {
                  playerData.data?.criterias.filter(criteria=> criteria.day === item).map((item, index) => (
                    <p key={index} className="flex text-gray-400 mt-2">{item.description} - {item.score.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}pts
                      <svg onClick={()=>handleSelectedCriteria(item)} className={"w-5 h-5 ml-5 cursor-pointer " + (user.role !== 'PMO' ? "hidden" : "visible")} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </p>
                  ))
                }
                </details>
              </div>
            ))
          :
            <p className="text-white">Não foram registradas entregas no período</p>
          }
        </section>
        {
          user && user.role === 'PMO' ? <FloatingButton usage='newActivity' link={`/user/new-score/${userId}`}/> : null
        }

      </main>
      </div>
    </div>


  )
}

export default User
