import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import { v4 as uuid } from 'uuid'
import Router, { useRouter } from "next/router";
import Nav from '../../../components/nav'
import { useFetch } from '../../../hooks/useFetch'
import { AchievementProps, ConquistasProps, CriteriosProps, PlayerRankPros, RewardProps } from '../../../interfaces/interfaces'
import { useAuth } from "../../../hooks/auth";
import axios from 'axios';
import { useToast } from '../../../hooks/toast';
import Avatar from '../../../components/Avatar';

const Icon = React.forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} title="MyLogo" {...props} />
));

const calculateSumScore = (obj:any) => obj
  .map((items:any) => items.score)
  .reduce((prev:number, curr:number) => prev + curr, 0);

const NewScore = () => {

  const { signOut, user } = useAuth();
  const router = useRouter()
  const { addToast } = useToast();
  const { userId } = router.query;
  const [newScore, setNewScore] = useState(0)
  const [loadingNewScoreSubmit, setLoadingNewScoreSubmit] = useState(false)
  const [openCriterias, setOpenCriterias] = useState(false)
  const [openAchievements, setOpenAchievements] = useState(false)
  const [selectedAchievements, setSelectedAchievements] = useState<AchievementProps[]>([])
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerRankPros>()
  const [updatedCriterias, setUpdatedCriterias] = useState<CriteriosProps[]>([])
  const [selectedCriterias, setSelectedCriterias] = useState<any[]>([])
  const playerData = useFetch<PlayerRankPros>(`/api/user/${userId}`);
  const CriteriasList = useFetch<CriteriosProps[]>(`/api/criteria`);
  const achievementData = useFetch<AchievementProps[]>('/api/achievement');

  let criteria: CriteriosProps[] = []
    CriteriasList.data ? CriteriasList.data.map(item =>
      criteria.push({
        _id: item._id,
        description: item.description,
        icon: item.icon,
        score: Math.fround(item.score * (playerData.data ? playerData.data.multiply : 1))
      })
      ): null


  let achievement: AchievementProps[] = []
    achievementData.data ? achievementData.data.map(item =>
      achievement.push({
        _id: item._id,
        image_url: item.image_url,
        title: item.title,
        description: item.description,
        score: Math.fround(item.score * (playerData.data ? playerData.data.multiply : 1))
      })
      ): null



  useEffect(() => {
    if (!user) {
      Router.replace("/");
    }

    if (user.role === 'Jogador'){
      Router.replace("/");
    }
      }, [user]);

  useEffect(() => {
    setSelectedPlayer(playerData.data)
      }, [playerData]);



  const handleOpenCriteriaList = () => {
    setOpenCriterias(!openCriterias)
  }
  const handleOpenAchievementList = () => {
    setOpenAchievements(!openAchievements)
  }

  const handleSelectedAchievements = (selectedAchievement:AchievementProps) => {
    setNewScore(Number(newScore) + selectedAchievement.score)

    const newID = uuid();
    selectedAchievement._id = newID
    setSelectedAchievements([...selectedAchievements, selectedAchievement])
  }

  const handleSelectedCriterias = (selectedCriteria:CriteriosProps) => {
    setNewScore(Number(newScore) + selectedCriteria.score)

    const newID = new Date();
    selectedCriteria._id = String(newID.getMilliseconds())
    setSelectedCriterias([...selectedCriterias, selectedCriteria])
  }

  const deleteAchievement = (achievement:AchievementProps) => {
    setNewScore(Number(newScore) - Number(achievement.score))
    const filteredItems = selectedAchievements.filter((item) => item._id !== achievement._id);
    setSelectedAchievements(filteredItems);
  }
  const deleteCriteria = (criteria:CriteriosProps) => {
    setNewScore(Number(newScore) - Number(criteria.score) )
    const filteredItems = selectedCriterias.filter((item) => item._id !== criteria._id);
    setSelectedCriterias(filteredItems);
  }

  const handleSaveNewScore = async () => {
    const today = new Date;
    console.log(selectedCriterias)
    const sumAchievements = calculateSumScore(selectedAchievements)
    const sumCriterias = calculateSumScore(selectedCriterias)
    const newScore = Number(sumAchievements) + Number(sumCriterias) + Number(playerData.data?.score)

    selectedPlayer ? selectedPlayer.score = newScore : null



    try {
      if (selectedAchievements.length > 0){

        selectedAchievements.map(async item =>{
          await axios.put(`/api/new-score/achievement/${userId}`,{
                id: uuid(),
                month: today.getMonth() + 1 ,
                day: today.getDate(),
                image_url: item.image_url,
                description: item.description,
                title: item.title,
                score: playerData.data ? Number(item.score) * playerData.data.multiply : Number(item.score),
              } ).then(
                addToast({
                  type: 'success',
                  title: 'Conquista salva com sucesso',
                  description: 'A consquista selecionada foi atribuída ao jogador com sucesso!',
                })

              )

      })}
      setSelectedAchievements([])

    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao salvar a conquista!',
        description: 'A consquista não pode ser salva devido a um erro interno!',
      });
    }

    try {
      if (selectedCriterias.length > 0){
        selectedCriterias.map(async item =>{
          await axios.put(`/api/new-score/criteria/${userId}`,{
                id: uuid(),
                month: today.getMonth() + 1 ,
                day: today.getDate(),
                description: item.description,
                score: playerData.data ? Number(item.score) * playerData.data.multiply : Number(item.score) ,
              } )
              addToast({
                type: 'success',
                title: 'Entrega salva com sucesso',
                description: 'A entregas selecionada foi atribuída ao jogador com sucesso!',
              });


      })}


      setSelectedCriterias([])

    } catch (error) {
      addToast({
        type: 'error',
        title: 'Erro ao salvar a entrega!',
        description: 'A consquista não pode ser salva devido a um erro interno!',
      });
    }


    await axios.put(`/api/new-score/score/${userId}`, {
      score:newScore
    })
    await axios.get(`/api/rank/getRank`);
    setNewScore(0)
  }




  return (
    <div className="h-screen w-screen flex flex-col bg-gray-700 overflow-y-auto">
      <Nav userName={user ? user.name : "Jogador"} backButton={true} backTitle={selectedPlayer?.name} backURL={`user/${userId}`} />
      <div className="md:flex-row flex-col flex md:px-10 mb-3 justify-center">
      <aside className=" md:px-3 mt-6 mx-6 rounded-md flex flex-col flex-shrink-0 w-12/12 md:w-4/12 md:mr-2 ">
        <section className="bg-gray-800 p-4 pt-6 mb-4 flex h-auto justify-center sm:flex-row flex-col">
          <div className="flex border-gray-200 mx-0 my-auto rounded-full h-auto md:mr-5 mb-2 justify-center">
            <Avatar name={selectedPlayer ? selectedPlayer.name : 'Jogador'} size={128} fontSize={2.5}/>
          </div>
          <div className="flex flex-col justify-around text-center ">
            <span className="flex flex-row sm:justify-start justify-center">
              <p className="flex text-center font-semibold text-white">Nome:</p>
              <p className="text-gray-400 ml-2">{selectedPlayer?.name}</p>
            </span>
            <span className="flex flex-row sm:justify-start justify-center">
              <p className="flex text-center font-semibold text-white">Departamento:</p>
              <p className="text-gray-400 ml-2">{selectedPlayer?.department}</p>
            </span>
            <span className="flex flex-row sm:justify-start justify-center">
              <p className="flex text-center font-semibold text-white">Pontuação:</p>
              <p className="text-gray-400 ml-2">{selectedPlayer?.score} pts</p>
            </span>
            <span className="flex flex-row sm:justify-start justify-center">
              <p className="flex text-center font-semibold text-white">Posição:</p>
              <p className="text-gray-400 ml-2">{selectedPlayer?.position}º</p>
            </span>
            <span className="flex flex-row sm:justify-start justify-center">
              <p className="flex text-center font-semibold text-white">Multiplicador:</p>
              <p className="text-gray-400 ml-2">{selectedPlayer?.multiply}x</p>
            </span>
          </div>
        </section>
        <section className="bg-gray-800 p-3 mb-4 flex h-auto justify-center flex-col">
          <div className="flex flex-row justify-between align-middle text-center" onClick={()=> handleOpenAchievementList()}>
            <p className="flex text-center font-semibold text-white">Conquistas</p>
            <p className="flex cursor-pointer text-xl text-center font-semibold text-white">{openAchievements ? "-" : "+"}</p>
          </div>
          <div className={"sm:w-11/12 justify-center text-sm text-center p-2 grid grid-cols-2 sm:grid-cols-3 gap-2 " + (openAchievements ? "visible" : "hidden")}>
            {achievement?.map( (item, index) => (
              <div className="flex h-14 text-center justify-center bg-gray-700 align-middle content-center rounded-md w-full">
                <p key={index}  onClick={()=>handleSelectedAchievements(item)} className=" flex mx-0 my-auto align-middle justify-center cursor-pointer text-center  w-full text-white">{item.title}</p>
              </div>
            ))}

          </div>
        </section>
        <section className="bg-gray-800 p-3 mb-4 flex h-auto justify-center flex-col">
          <div className="flex flex-row justify-between align-middle text-center" onClick={()=> handleOpenCriteriaList()}>
            <p className="flex text-center font-semibold text-white">Entregas</p>
            <p className="flex cursor-pointer text-xl text-center font-semibold text-white">{openCriterias ? "-" : "+"}</p>
          </div>
          <div className={"sm:w-11/12 justify-center text-center grid grid-cols-2 p-2 gap-2 text-xs sm:text-sm align-middle justify-items-center  " + (openCriterias ? "visible" : "hidden")}>
            {criteria?.map( (item, index) => (
              <div className="flex h-14 text-center p-2 justify-center bg-gray-700 align-middle content-center rounded-md w-full">
                <p key={index} onClick={()=>handleSelectedCriterias(item)} className="flex mx-0 my-auto align-middle justify-center cursor-pointer text-center  w-full text-white">{item.description}</p>
              </div>
            ))}

          </div>
        </section>

      </aside>
        <main className="bg-gray-800 px-4 mt-2 mx-6 rounded-md flex flex-col mb-6 flex-shrink-0 md:w-6/12 md:mt-6">
          <div className="flex justify-between mt-2 flex-row md:flex-row w-auto border-gray-400 border-b-2 ">
            <p className="md:text-lg text-left font-semibold text-white justify-start mb-2 ">Pontuação: {newScore}</p>
            <div className=" flex flex-row hover:opacity-40 cursor-pointer justify-center align-middle">
              {loadingNewScoreSubmit
                ? <svg className="w-7 h-7 animate-spin" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                : <button onClick={()=> handleSaveNewScore()} className={"md:text-lg text-left font-semibold text-gray-400 justify-start mb-2 " + (selectedAchievements.length>0 || selectedCriterias.length>0 ? '' : 'cursor-not-allowed')}>Salvar +</button>
              }

            </div>
          </div>
          <section className="mt-5">
              <p className="text-left font-semibold text-white justify-start mb-2 ">Conquistas:</p>
              <div>
              {
                selectedAchievements && selectedAchievements.map(item => (
                  <div key={item._id} className="flex flex-row bg-gray-700 rounded-md mb-2 p-1 align-middle">
                    <p className="flex text-center rounded-md w-full px-2  text-white">{item.title} - {item.score} pts</p>
                    <svg onClick={()=>deleteAchievement(item)} className="w-5 h-5 cursor-pointer rounded-full hover:opacity-40" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </div>
                ))
              }
            </div>
          </section>
          <section id="Criterias" className="mt-5">
              <p className="text-left font-semibold text-white justify-start mb-2 ">Entregas:</p>
            <div>
              {
                selectedCriterias && selectedCriterias.map(item => (
                  <div key={item._id} className="flex flex-row bg-gray-700 rounded-md mb-2 p-1 align-middle">
                    <p className="flex text-center rounded-md w-full px-2  text-white">{item.description} - {item.score} pts</p>
                    <svg onClick={()=>deleteCriteria(item)} className="w-5 h-5 cursor-pointer rounded-full hover:opacity-40" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </div>
                ))
              }

            </div>
          </section>
        </main>
      </div>
    </div>


  )
}

export default NewScore
