import { useRouter } from 'next/router'
import Nav from '../components/nav'
import {Line} from 'rc-progress'
import { useState } from 'react'
import FloatingButton from '../components/floatingButton'

import {ConquistasProps, CriteriosProps} from '../interfaces/interfaces'

interface Props {
  width?: number;
  usage: 'config' | 'newActivity';
}

interface UserProps {
  id: string,
  nome: string,
  departamento: string,
  email: string,
  senha: string,
  position: string,
  score: string,
  role: 'jogador' | 'pmo',

}


const AdminPanel = () => {

  const [selectedItem, setSelectedItem] = useState('jogadores')
  const [tablePlayers, setTablePlayers] = useState<UserProps[]>([
    {"nome": "Jogador A", "id":"1", "departamento":"Departamento A", "email":"alguem@endereço.com", "senha":"12345", "position":"1º", "score":"1000", "role":"jogador" },
    {"nome": "Jogador B", "id":"2", "departamento":"Departamento A", "email":"alguem@endereço.com", "senha":"12345", "position":"1º", "score":"1000", "role":"jogador" },

  ])

  const [tableConquista, setTableConquista] = useState<ConquistasProps[]>([
    {"url": "https://images.unsplash.com/photo-1607385140315-a64f0236f8fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80", "id":"1", "description":"Descrição da conquista A", "score":"1000", "nome": "Conquista A" },
    {"url": "https://images.unsplash.com/photo-1607400638996-2924519e297e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80", "id":"2", "description":"Descrição do conquista B", "score":"1000", "nome": "Conquista B" },

  ])

  const [tableCriteria, setTableCriteria] = useState<CriteriosProps[]>([
    {"icone": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>, "id":"1", "description":"Critério A", "score":"1000", "nome": "Critério A" },
    {"icone": <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>, "id":"2", "description":"Critério B", "score":"1000", "nome": "Critério B" },

  ])

  const handleItemSelection = (item:string) => {
    setSelectedItem(item)

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
            {tablePlayers.map( item => (
              <tr className="table-row leading-10 rounded-3xl bg-gray-900 mb-3 border-b-4 border-gray-800">
                <td className="table-cell bg-gray-900 h-20 items-center w-8">{item.id}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.nome}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.departamento}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.email}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.senha}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.score}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.position}</td>
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
              <tr className="table-row leading-10 rounded-3xl bg-gray-900 mb-3 border-b-4 border-gray-800">
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
          <thead className="text-gray-300 border-b-2 border-gray-400 font-normal">
            <th>#</th>
            <th>Icone</th>
            <th>Descrição</th>
            <th>Pontuação</th>
            <th>Ação</th>
          </thead>
          <tbody className="text-center text-white">
            {tableCriteria.map( item => (
              <tr className="table-row leading-10 rounded-3xl bg-gray-900 mb-3 border-b-4 border-gray-800">
                <td className="table-cell bg-gray-900 h-20 items-center w-8">{item.id}</td>
                <td className="table-cell bg-gray-900 h-20 items-center"><svg className="w-6 h-6 my-0 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></td>
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

      <section id="table-recompensas" className={"bg-gray-800 px-6 py-4 mt-6 mx-6 rounded-md flex flex-col  flex-shrink-0 w-11/12 md:mt-6 md:mx-12 " + (selectedItem === "recompensas" ? "visible" : "hidden")}>
        <table>
          <thead className="text-gray-300 border-b-2 border-gray-400 font-normal">
            <th>#</th>
            <th>Nome</th>
            <th>Pontuação</th>
            <th>Ação</th>
          </thead>
        </table>
      </section>
      </div>



  )
}

export default AdminPanel
