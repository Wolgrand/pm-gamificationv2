import { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image'
import {ConquistasProps, CriteriosProps, AchievementProps, RewardProps, UserSuccessResponseType} from '../interfaces/interfaces'


import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(res => res.json());

const PlayerTable= (selectedItem:any):any => {

  const { data, error } = useSWR(
    "https://pm-gamification.vercel.app/api/user",
    fetcher
  );

  return (
    <section id="table-jogadores" className={"bg-gray-800 px-6 py-4 mt-6 mx-6 rounded-md flex flex-col  flex-shrink-0 w-11/12 md:mt-6 md:mx-12 " + (selectedItem === "Jogador" ? "visible" : "hidden")}>
        <table className="table-auto ">
          <thead id="table-jogadores" className="text-gray-300 border-b-2 border-gray-400 font-normal">
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
            {data && data.map( (item:UserSuccessResponseType, index:number) => (
              <tr id={item._id} className="table-row leading-10 rounded-3xl bg-gray-900 mb-3 border-b-4 border-gray-800">
                <td className="table-cell bg-gray-900 h-20 items-center w-8">{index + 1}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.name}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.department}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.email}</td>
                <td className="table-cell bg-gray-900 h-20 items-center"><div  className="bg-gray-700 cursor-pointer focus:border-transparent hover:opacity-80 rounded-lg">Resetar Senha</div></td>
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
  );
};

export default PlayerTable;
