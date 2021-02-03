import React, { useEffect, useRef, useState } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import { v4 as uuid } from 'uuid'
import Router, { useRouter } from "next/router";
import Nav from '../../../components/nav'
import {Line} from 'rc-progress'
import FloatingButton from '../../../components/floatingButton'
import { useFetch } from '../../../hooks/useFetch'
import { AchievementProps, ConquistasProps, CriteriosProps, PlayerRankPros, RewardProps } from '../../../interfaces/interfaces'
import { useAuth } from "../../../hooks/auth";

const Icon = React.forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} title="MyLogo" {...props} />
));

const NewScore = () => {

  const { signOut, user } = useAuth();
  const icon = useRef<SVGElement>(null);
  const router = useRouter()
  const { userId } = router.query;
  const [newScore, setNewScore] = useState(0)
  const [openCriterias, setOpenCriterias] = useState(false)
  const [openAchievements, setOpenAchievements] = useState(false)
  const [selectedAchievements, setSelectedAchievements] = useState<AchievementProps[]>([])
  const [selectedCriterias, setSelectedCriterias] = useState<any[]>([])
  const playerData = useFetch<PlayerRankPros>(`/api/user/${userId}`);
  const CriteriasList = useFetch<CriteriosProps[]>(`/api/criteria`);
  const achievementData = useFetch<AchievementProps[]>('/api/achievement');

  useEffect(() => {
    if (!user) {
      Router.replace("/");
    }

      }, [user]);

  const handleOpenCriteriaList = () => {
    setOpenCriterias(!openCriterias)
  }
  const handleOpenAchievementList = () => {
    setOpenAchievements(!openAchievements)
  }

  const handleSelectedAchievements = (selectedAchievement:AchievementProps) => {
    setNewScore(Number(newScore) + Number(selectedAchievement.score) )

    const newID = uuid();
    selectedAchievement._id = newID
    setSelectedAchievements([...selectedAchievements, selectedAchievement])
  }

  const handleSelectedCriterias = (selectedCriteria:CriteriosProps) => {
    setNewScore(Number(newScore) + Number(selectedCriteria.score) )

    const newID = new Date();
    selectedCriteria._id = String(newID.getMilliseconds())
    setSelectedCriterias([...selectedCriterias, selectedCriteria])
  }

  const deleteAchievement = (achievement:AchievementProps) => {
    setNewScore(Number(newScore) - Number(achievement.score) )
    const filteredItems = selectedAchievements.filter((item) => item._id !== achievement._id);
    setSelectedAchievements(filteredItems);
  }
  const deleteCriteria = (criteria:CriteriosProps) => {
    setNewScore(Number(newScore) - Number(criteria.score) )
    const filteredItems = selectedCriterias.filter((item) => item._id !== criteria._id);
    setSelectedCriterias(filteredItems);
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-700 overflow-y-auto">
      <Nav backButton={true} backTitle="Usuário" />
      <div className="md:flex-row flex-col flex md:px-10 mb-3 justify-center">
      <aside className=" md:px-3 mt-6 mx-6 rounded-md flex flex-col flex-shrink-0 w-12/12 md:w-4/12 md:mr-2 ">
        <section className="bg-gray-800 p-4 pt-6 mb-4 flex h-auto justify-center sm:flex-row flex-col">
          <div className="flex border-gray-200 mx-0 my-auto rounded-full h-auto md:mr-5 mb-2 justify-center">
            <img  className={" h-24 w-24 mx-0 my-auto flex rounded-full ring-2 ring-white border-gray-200 p-1"} src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"/>
          </div>
          <div className="flex flex-col justify-around">
            <span className="flex flex-row">
              <p className="flex text-center font-semibold text-white">Nome:</p>
              <p className="text-gray-400 ml-2">{playerData.data?.name}</p>
            </span>
            <span className="flex flex-row">
              <p className="flex text-center font-semibold text-white">Departamento:</p>
              <p className="text-gray-400 ml-2">{playerData.data?.department}</p>
            </span>
            <span className="flex flex-row">
              <p className="flex text-center font-semibold text-white">Pontuação:</p>
              <p className="text-gray-400 ml-2">{playerData.data?.score}</p>
            </span>
          </div>
        </section>
        <section className="bg-gray-800 p-3 mb-4 flex h-auto justify-center flex-col">
          <div className="flex flex-row justify-between align-middle text-center" onClick={()=> handleOpenAchievementList()}>
            <p className="flex text-center font-semibold text-white">Conquistas</p>
            <p className="flex cursor-pointer text-xl text-center font-semibold text-white">{openAchievements ? "-" : "+"}</p>
          </div>
          <div className={"sm:w-11/12 p-2  " + (openAchievements ? "visible" : "hidden")}>
            {achievementData && achievementData.data?.map( (item, index) => (
              <p key={index}  onClick={()=>handleSelectedAchievements(item)} className="flex cursor-pointer text-center rounded-md w-full mb-2 px-2 bg-gray-700 text-white">{item.title} - {item.score}pts</p>
            ))}

          </div>
        </section>
        <section className="bg-gray-800 p-3 mb-4 flex h-auto justify-center flex-col">
          <div className="flex flex-row justify-between align-middle text-center" onClick={()=> handleOpenCriteriaList()}>
            <p className="flex text-center font-semibold text-white">Critérios</p>
            <p className="flex cursor-pointer text-xl text-center font-semibold text-white">{openCriterias ? "-" : "+"}</p>
          </div>
          <div className={"sm:w-11/12 p-2  " + (openCriterias ? "visible" : "hidden")}>
            {CriteriasList && CriteriasList.data?.map( (item, index) => (
              <p key={index} onClick={()=>handleSelectedCriterias(item)} className="flex cursor-pointer text-center rounded-md w-full mb-2 px-2 bg-gray-700 text-white">{item.description} - {item.score}pts</p>
            ))}

          </div>
        </section>

      </aside>
        <main className="bg-gray-800 px-4 mt-2 mx-6 rounded-md flex flex-col mb-6 flex-shrink-0 md:w-6/12 md:mt-6">
          <div className="flex justify-between mt-2 flex-row md:flex-row w-auto border-gray-400 border-b-2 ">
            <p className="md:text-lg text-left font-semibold text-white justify-start mb-2 ">Pontuação: {newScore}</p>
            <div className=" flex flex-row hover:opacity-40 cursor-pointer justify-center align-middle">
              <p className="md:text-lg text-left font-semibold text-gray-400 justify-start mb-2 ">Salvar +</p>
            </div>
          </div>
          <section className="mt-5">
              <p className="text-left font-semibold text-white justify-start mb-2 ">Conquistas:</p>
              <div>
              {
                selectedAchievements && selectedAchievements.map(item => (
                  <div key={item._id} className="flex flex-row bg-gray-700 rounded-md mb-2 p-1 align-middle">
                    <p className="flex text-center rounded-md w-full px-2  text-white">{item.title} - {item.score}pts</p>
                    <svg onClick={()=>deleteAchievement(item)} className="w-5 h-5 cursor-pointer rounded-full hover:opacity-40" fill="none" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </div>
                ))
              }
            </div>
          </section>
          <section id="Criterias" className="mt-5">
              <p className="text-left font-semibold text-white justify-start mb-2 ">Critérios:</p>
            <div>
              {
                selectedCriterias && selectedCriterias.map(item => (
                  <div key={item._id} className="flex flex-row bg-gray-700 rounded-md mb-2 p-1 align-middle">
                    <p className="flex text-center rounded-md w-full px-2  text-white">{item.description} - {item.score}pts</p>
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
