import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router'
import axios from "axios";
import Link from 'next/link';
import useSWR from 'swr';
import SVG, { Props as SVGProps } from 'react-inlinesvg';
import Nav from '../components/nav'
import {ConquistasProps, CriteriosProps, RewardProps, UserSuccessResponseType} from '../interfaces/interfaces'

import api from '../utils/api';
import { GetServerSideProps, GetStaticProps } from 'next';

interface DataProps {
  playerList: UserSuccessResponseType[]
  criteriaList: CriteriosProps[]
}



const Icon = React.forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} title="MyLogo" {...props} />
));


const AdminPanel = ({playerList, criteriaList}:DataProps) => {
  const icon = useRef<SVGElement>(null);


  const [selectedItem, setSelectedItem] = useState('jogadores')
  const [passwordReset, setPasswordReset] = useState<String[]>([])
  const [tablePlayers, setTablePlayers] = useState<UserSuccessResponseType[]>([])

  const [tableConquista, setTableConquista] = useState<ConquistasProps[]>([
    {"url": "https://images.unsplash.com/photo-1607385140315-a64f0236f8fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80", "id":"1", "description":"Descrição da conquista A", "score":"1000", "nome": "Conquista A" },
    {"url": "https://images.unsplash.com/photo-1607400638996-2924519e297e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80", "id":"2", "description":"Descrição do conquista B", "score":"1000", "nome": "Conquista B" },

  ])

  const [tableCriteria, setTableCriteria] = useState<CriteriosProps[]>([
    {"icone": "archive", "id":"1", "description":"Critério A", "score":"1000" },
    {"icone": "backspace", "id":"2", "description":"Critério B", "score":"1000" },

  ])

  const [tableReward, setTableReward] = useState<RewardProps[]>([
    {"id":"1", "nome":"Recompensa A", "score":"1000" },
    {"id":"2", "nome":"Recompensa B", "score":"1000" },

  ])







  const handleItemSelection = (item:string) => {
    setSelectedItem(item)

    return;
  }

  const handlePasswordReset = (item:string) => {
    console.log(item);
    setPasswordReset([...passwordReset, item])

    return;
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-700 overflow-hidden">
      <Nav backButton={true} backTitle="Painel de Administração" />

      <section className="bg-gray-800 px-6 py-4 mt-6 mx-6 rounded-md flex flex-col  flex-shrink-0 w-11/12 md:mt-6 md:mx-12">
      <div className="flex flex-row justify-between">
          <div onClick={() => handleItemSelection('jogadores')} className={"bg-gray-900 w-auto flex-1 rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedItem ==="jogadores" ? "bg-yellow-600" : "bg-gray-900")} >jogadores</div>
          <div onClick={() => handleItemSelection('conquistas')} className={"bg-gray-900 w-auto flex-1 ml-3 rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedItem ==="conquistas" ? "bg-yellow-600" : "bg-gray-900")} >conquistas</div>
          <div onClick={() => handleItemSelection('criterios')} className={"bg-gray-900 w-auto flex-1 ml-3 rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedItem ==="criterios" ? "bg-yellow-600" : "bg-gray-900")} >criterios</div>
          <div onClick={() => handleItemSelection('recompensas')} className={"bg-gray-900 w-auto flex-1 ml-3 rounded-lg text-center mx-auto p-2 my-0 text-white cursor-pointer  " + (selectedItem ==="recompensas" ? "bg-yellow-600" : "bg-gray-900")} >recompensas</div>
        </div>

      </section>

      <section id="table-jogadores" className={"bg-gray-800 px-6 py-4 mt-6 mx-6 rounded-md flex flex-col  flex-shrink-0 w-11/12 md:mt-6 md:mx-12 " + (selectedItem === "jogadores" ? "visible" : "hidden")}>
        <table className="table-auto ">
          <thead className="text-gray-300 border-b-2 border-gray-400 font-normal">
            <th>#</th>
            <th>Nome</th>
            <th>Departamento</th>
            <th>E-mail</th>
            <th>Senha</th>
            <th>Posição</th>
            <th>Pontuação</th>
            <th>Grupo</th>
            <th>Ação</th>
          </thead>
          <tbody className="text-center text-white mt-4">
            {playerList && playerList.map( (item:UserSuccessResponseType, index:number) => (
              <tr id={item._id} className="table-row leading-10 rounded-3xl bg-gray-900 mb-3 border-b-4 border-gray-800">
                <td className="table-cell bg-gray-900 h-20 items-center w-8">{index + 1}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.name}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.department}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.email}</td>
                <td className="table-cell bg-gray-900 h-20 items-center"><div onClick={() => handlePasswordReset(item.name)} className="bg-gray-700 cursor-pointer focus:border-transparent hover:opacity-80 rounded-lg">{passwordReset.includes(item.name) ? 'Senha resetada'  : 'Resetar Senha'}</div></td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.position}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.score}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.role}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">
                  <div className="flex flex-row justify-center  text-gray-300">
                    <div className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </div>
                    <div className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="table-conquistas" className={"bg-gray-800 px-6 py-4 mt-6 mx-6 rounded-md flex flex-col  flex-shrink-0 w-11/12 md:mt-6 md:mx-12 " + (selectedItem === "conquistas" ? "visible" : "hidden")}>
        <table>
          <thead className="text-gray-300 border-b-2 border-gray-400 font-normal">
            <th>#</th>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Pontuação</th>
            <th>Ação</th>
          </thead>
          <tbody className="text-center text-white">
            {tableConquista.map( item => (
              <tr id={item.url} className="table-row leading-10 rounded-3xl bg-gray-900 mb-3 border-b-4 border-gray-800">
                <td className="table-cell bg-gray-900 h-20 items-center w-8">{item.id}</td>
                <td className="table-cell bg-gray-900 h-20 items-center"><img className="rounded-full h-14 w-14 my-0 mx-auto" src={item.url} alt="url"/></td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.nome}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.description}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.score}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">
                <div className="flex flex-row justify-center text-gray-300">
                    <div className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </div>
                    <div className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="table-criterios" className={"bg-gray-800 px-6 py-4 mt-6 mx-6 rounded-md flex flex-col  flex-shrink-0 w-11/12 md:mt-6 md:mx-12 " + (selectedItem === "criterios" ? "visible" : "hidden")}>
        <table>
          <thead className="text-white border-b-2 border-gray-400 font-normal">
            <th>#</th>
            <th>Icone</th>
            <th>Descrição</th>
            <th>Pontuação</th>
            <th>Ação</th>
          </thead>
          <tbody className="text-center text-white">
            {criteriaList && criteriaList.map( (item:any, index:number) => (
              <tr id={item._id} className="table-row leading-10 rounded-3xl bg-gray-900 mb-3 border-b-4 border-gray-800 text-white">
                <td className="table-cell bg-gray-900 h-20 items-center  w-8">{index}</td>
                <td className="table-cell bg-gray-900 h-20 items-center "><div className="text-white flex justify-center"><Icon  ref={icon} stroke="#fff" src={`http://localhost:3000/icons/${item.icon}.svg` } /></div></td>
                <td className="table-cell bg-gray-900 h-20 items-center ">{item.description}</td>
                <td className="table-cell bg-gray-900 h-20 items-center ">{item.score}</td>
                <td className="table-cell bg-gray-900 h-20 items-center ">
                <div className="flex flex-row justify-center text-gray-300">
                    <div className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </div>
                    <div className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="table-recompensas" className={"bg-gray-800 px-6 py-4 mt-6 mx-6 rounded-md flex flex-col  flex-shrink-0 w-11/12 md:mt-6 md:mx-12 " + (selectedItem === "recompensas" ? "visible" : "hidden")}>
        <table>
          <thead className="text-gray-300 border-b-2 border-gray-400 font-normal">
            <th>#</th>
            <th>Nome</th>
            <th>Pontuação</th>
            <th>Ação</th>
          </thead>
          <tbody className="text-center text-white">
            {tableConquista.map( item => (
              <tr id={item.nome} className="table-row leading-10 rounded-3xl bg-gray-900 mb-3 border-b-4 border-gray-800">
                <td className="table-cell bg-gray-900 h-20 items-center w-8">{item.id}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.nome}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.score}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">
                <div className="flex flex-row justify-center text-gray-300">
                    <div className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </div>
                    <div className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      </div>



  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const getPlayer = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/user`)
  const playerList:UserSuccessResponseType[] = await getPlayer.json()

  const getCriteria = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/criteria`)
  const criteriaList:CriteriosProps[] = await getCriteria.json()

  return {
    props: {
      playerList,
      criteriaList,
    },

  }
};



export default AdminPanel
