import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { mutate as mutateGlobal } from 'swr';
import {useFetch} from '../../hooks/useFetch';
import Nav from '../../components/nav'
import Input from '../../components/Input'
import getValidationsErrors from '../../utils/getValidationsErrors';
import {RewardProps} from '../../interfaces/interfaces'
import Router, { useRouter } from 'next/router';
import { useAuth } from '../../hooks/auth';

import axios from 'axios';


const RewardPanel = () => {

  const router = useRouter()
  const { signOut, user } = useAuth();

  if (typeof window !== 'undefined') {
    if (user === undefined){
      router.push('/');
    }
  }

  useEffect(() => {
    if (!user) {
      Router.replace("/");
    }

    if (user.role === 'jogador')
    Router.replace("/");
      }, [user]);


  const rewardData = useFetch<RewardProps[]>('/api/reward');

  const formRef = useRef<FormHandles>(null);

  const [selectedModalNew, setSelectedModalNew] = useState(false)
  const [selectedModalEdit, setSelectedModalEdit] = useState(false)
  const [selectedReward, setSelectedReward] = useState<RewardProps>()

  const handleEditReward = (data:RewardProps) => {
    setSelectedReward(data)
    setSelectedModalEdit(!selectedModalEdit)
  }

  const handleAddNewReward = useCallback(
    async (data: RewardProps) => {
      try {
        formRef.current?.setErrors({});
         const schema = Yup.object().shape({
          title: Yup.string().required('Nome obrigatório'),
          score: Yup.number().required('Pontuação obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const newReward = {
          title: data.title,
          score: data.score,
        }

        try {
          await axios.post('/api/reward',newReward)

          const updatedRewards = rewardData.data?.map(item => {

              return { ...item, title: data.title, score: data.score }

          })

          rewardData.mutate(updatedRewards, true)
          mutateGlobal(`api/rewards/${data._id}`)

        } catch (error) {
          console.log(error);
        }

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        console.log(err);
      }
    },
    [],
  );

  const handleUpdateReward = useCallback(
    async (data: RewardProps ) => {
      try {

        formRef.current?.setErrors({});
         const schema = Yup.object().shape({
          title: Yup.string().required('Nome obrigatório'),
          score: Yup.number().required('Pontuação obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const updatedReward = {
          title: data.title,
          score: data.score,
        }


          axios.put(`/api/reward/${data._id}`,updatedReward)

          const updatedRewards = rewardData.data?.map(item => {
            if (item._id === data._id) {
              return { ...item, title: data.title, score: data.score }
            }

            return item;
          })

          rewardData.mutate(updatedRewards, true)
          mutateGlobal(`api/rewards/${data._id}`)



      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        console.log(err);
      }
    },
    [rewardData.data, rewardData.mutate],
  );

  const handleDeleteReward = useCallback(
    async (_id:  string) => {
      try {
        formRef.current?.setErrors({});

        try {

         await axios.delete(`/api/reward/${_id}`)
         const updatedRewards = rewardData.data?.map(item => {
          if (item._id !== _id) {
            return { ...item }
          }

          return item;
          })

        rewardData.mutate(updatedRewards, true)
        mutateGlobal(`api/reward`)
        } catch (error) {
          console.log(error);
        }

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        console.log(err);
      }
    },
    [],
  );

  const handleModalNewSelection = () => {
    setSelectedModalNew(!selectedModalNew)
    return;
  }
  const handleModalEdit = () => {
    setSelectedModalEdit(!selectedModalEdit)
    return;
  }


  return (
    <div className="h-screen w-screen flex flex-col bg-gray-700 overflow-hidden">
      <Nav userName={user ? user.name : "jogador"} backURL="home" backButton={true} configMenu={true} backTitle="Painel de Recompensas" />

      <aside className={" p-4 text-gray-100 flex flex-col bg-gray-800 transform top-0 left-0 w-80  fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 " + (selectedModalNew ? 'translate-x-0' : '-translate-x-full')} >
        <div className="flex flex-row justify-between align-middle content-between border-gray-200 border-b-2">
          <p className="py-2 text-2xl">{'Adicionar Recompensa'}</p>
          <div onClick={() => handleModalNewSelection()} className="cursor-pointer">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
        </div>

        <Form ref={formRef} className={"sm:w-11/12 mt-8 "} onSubmit={handleAddNewReward}>
          <div className="max-w-md mx-auto ">
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around ">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              <Input  name="title" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Nome"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
              <Input  name="score" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="number" placeholder="Pontuação"/>
            </div>
            <button type="submit" data-testid="add-newUser-button" className="bg-gray-500 inline-block text-center items-start w-full mt-5 p-3 rounded-xl text-gray-200 text-xl "><p>Cadastrar</p></button>

          </div>
        </Form>
      </aside>


      <aside className={" p-4 text-gray-100 flex flex-col bg-gray-800 transform top-0 left-0 w-80  fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 " + (selectedModalEdit ? 'translate-x-0' : '-translate-x-full')} >
        <div className="flex flex-row justify-between align-middle content-between border-gray-200 border-b-2">
          <p className="py-2 text-2xl">{'Atualizar Recompensa'}</p>
          <div onClick={() => handleModalEdit()} className="cursor-pointer">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
        </div>

        <Form ref={formRef} className={"sm:w-11/12 mt-8 "} onSubmit={handleUpdateReward}>
          <div className="max-w-md mx-auto ">
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around ">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              <Input  name="_id" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="ID" defaultValue={selectedReward?._id}/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              <Input  name="title" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Nome" defaultValue={selectedReward?.title}/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
              <Input  name="score" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="number" placeholder="Pontuação" defaultValue={selectedReward?.score}/>
            </div>
            <button type="submit" data-testid="add-newUser-button" className="bg-gray-500 inline-block text-center items-start w-full mt-5 p-3 rounded-xl text-gray-200 text-xl "><p>Cadastrar</p></button>

          </div>
        </Form>
      </aside>

      <div onClick={() => handleModalNewSelection()} className="rounded-full flex bg-gray-900 text-gray-100 w-14 h-14 absolute top-3/4 right-16 justify-center content-center p-3 hover:opacity-60 cursor-pointer"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></div>
      <section id="table-recompensas" className={"bg-gray-800 px-6 py-4 mt-6 mx-6 rounded-md flex flex-col  flex-shrink-0 w-11/12 md:mt-6 md:mx-12 "}>
        <table>
          <thead className="text-gray-300 border-b-2 border-gray-400 font-normal">
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Pontuação</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody className="text-center text-white">
            {rewardData.data && rewardData.data.map( (item, index) => (
              <tr key={item._id} className="table-row leading-10 rounded-3xl bg-gray-900 mb-3 border-b-4 border-gray-800">
                <td className="table-cell bg-gray-900 h-20 items-center w-8">{index +1}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.title}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.score}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">
                <div className="flex flex-row justify-center text-gray-300">
                    <div onClick={()=> handleEditReward(item)} className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </div>
                    <div onClick={()=> handleDeleteReward(item._id)} className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
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




export default RewardPanel
