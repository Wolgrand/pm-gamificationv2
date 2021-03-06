import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { mutate as mutateGlobal } from 'swr';
import {useFetch} from '../../hooks/useFetch';
import Input from '../../components/Input'
import Select from '../../components/Select'
import getValidationsErrors from '../../utils/getValidationsErrors';
import {UserSuccessResponseType} from '../../interfaces/interfaces'
import Router, {useRouter } from 'next/router';
import { useAuth } from '../../hooks/auth';

import axios from 'axios';
import user from '../api/user';


const UserPanel = () => {

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

    if (user.role === 'Jogador'){
      Router.replace("/");
    }
      }, [user]);

  const userData = useFetch<UserSuccessResponseType[]>('/api/user');

  const formRef = useRef<FormHandles>(null);

  const [selectedItem, setSelectedItem] = useState('Jogador')
  const [selectedModalNew, setSelectedModalNew] = useState(false)
  const [selectedModalEdit, setSelectedModalEdit] = useState(false)
  const [passwordReset, setPasswordReset] = useState<String[]>([])

  const [selectedUser, setSelectedUser] = useState<UserSuccessResponseType>()


  const handleAddNewUser = useCallback(
    async (data: UserSuccessResponseType) => {
      try {
        formRef.current?.setErrors({});
         const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          department: Yup.string().required('Departamento obrigatório'),
          company: Yup.string().required('Empresa obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),

        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const newUser = {
          name: data.name,
          department: data.department,
          company: data.company,
          email: data.email,
          role: data.role,
          password: '123456'
        }

        try {
          await axios.post('/api/user',newUser)
          const updateUser = userData.data?.map(item => {

            return { ...item,
              name: data.name,
              department: data.department,
              company: data.company,
              email: data.email,
              role: data.role,
              password: '123456' }

        })

          userData.mutate(updateUser, true)
          mutateGlobal(`api/user/${data._id}`)
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

  const handleUpdateUser = useCallback(
    async (data: UserSuccessResponseType) => {

      console.log(data);

      const {_id} = data;

      try {
        formRef.current?.setErrors({});
         const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          department: Yup.string().required('Departamento obrigatório'),
          company: Yup.string().required('Empresa obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),

        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const updatedUser = {
          name: data.name,
          department: data.department,
          company: data.company,
          email: data.email,
          multiply: data.multiply,
          role: data.role,
        }

        try {
          await axios.put(`/api/user/${_id}`, updatedUser)
          const updateUser = userData.data?.map(item => {
            if (item._id === data._id) {
              return { ...item,
                name: data.name,
                department: data.department,
                company: data.company,
                email: data.email,
                multiply: data.multiply,
                role: data.role, }
            }

            return item;
          })

          userData.mutate(updateUser, true)
          mutateGlobal(`api/user/${data._id}`)
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

  const handleDeleteUser = useCallback(
    async (_id:  string) => {
      try {
        formRef.current?.setErrors({});

        try {

         await axios.delete(`/api/user/${_id}`)
         const updatedUser = userData.data?.map(item => {
          if (item._id !== _id) {
            return { ...item }
          }

          return item;
          })

        userData.mutate(updatedUser, true)
        mutateGlobal(`api/user`)
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

  const groupOptions = [
    { value: 'Jogador', label: 'Jogador' },
    { value: 'PMO', label: 'PMO' },
    { value: 'Manager', label: 'Manager' },
  ]

  const handleEditUser = (data:UserSuccessResponseType) => {
    setSelectedUser(data)
    setSelectedModalEdit(!selectedModalEdit)
  }

  const handleModalNewSelection = () => {
    setSelectedModalNew(!selectedModalNew)
    return;
  }
  const handleModalEdit = () => {
    setSelectedModalEdit(!selectedModalEdit)
    return;
  }

  const handlePasswordReset = async (id:string) => {
    const passwordReseted = '123456'
    await axios.put(`/api/password-reset/${id}`, passwordReseted)
    setPasswordReset([...passwordReset, id])

    return;
  }

  return (
    <div className="h-screen  flex flex-col bg-gray-700 overflow-y-auto">

      <aside className={" p-4 text-gray-100 flex flex-col bg-gray-800 transform top-0 left-0 w-80  fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 " + (selectedModalNew ? 'translate-x-0' : '-translate-x-full')} >
        <div className="flex flex-row justify-between align-middle content-between border-gray-200 border-b-2">
          <p className="py-2 text-2xl">{'Adicionar Usuário'}</p>
          <div onClick={() => handleModalNewSelection()} className="cursor-pointer">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
        </div>

        <Form ref={formRef} className={"sm:w-11/12 mt-8 " + (selectedItem === "Jogador" ? "visible" : "hidden")} onSubmit={handleAddNewUser}>
          <div className="max-w-md mx-auto ">
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around ">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <Input  name="name" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Nome"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <Input  name="department" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Departamento"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <Input name="company" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Empresa"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <Input  name="email" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="E-mail"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2 ">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

              <Select className="bg-transparent text-white inline-block placeholder-gray-700 text-lg focus:bg-transparent w-full" name="role" placeholder="Escolha o grupo:" options={groupOptions}>              </Select>
            </div>

            <button type="submit" data-testid="add-newUser-button" className="bg-gray-500 inline-block text-center items-start w-full mt-5 p-3 rounded-xl text-gray-200 text-xl "><p>Cadastrar</p></button>

          </div>
        </Form>
      </aside>

      <aside className={" p-4 text-gray-100 flex flex-col bg-gray-800 transform top-0 left-0 w-80  fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 " + (selectedModalEdit ? 'translate-x-0' : '-translate-x-full')} >
        <div className="flex flex-row justify-between align-middle content-between border-gray-200 border-b-2">
          <p className="py-2 text-2xl">{'Atualizar Usuário'}</p>
          <div onClick={() => handleModalEdit()} className="cursor-pointer">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
        </div>

        <Form ref={formRef} className={"sm:w-11/12 mt-8 " + (selectedItem === "Jogador" ? "visible" : "hidden")} onSubmit={handleUpdateUser}>
          <div className="max-w-md mx-auto ">
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around ">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <Input  name="_id" value={selectedUser?._id} readOnly className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="ID"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <Input defaultValue={selectedUser?.name} name="name" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Nome"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" /></svg>
              <Input defaultValue={selectedUser?.multiply} name="multiply" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="number" step=".01" min="1" placeholder="Multiplicador"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <Input defaultValue={selectedUser?.department}  name="department" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Departamento"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <Input defaultValue={selectedUser?.company}  name="company" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Empresa"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <Input defaultValue={selectedUser?.email}  name="email" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="E-mail"/>
            </div>
            <div className="bg-gray-900 flex items-center rounded-xl px-4 py-3 justify-around mt-2 ">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

              <Select defaultValue={{ value: selectedUser?.role, label: selectedUser?.role }} className="bg-transparent text-white inline-block placeholder-gray-700 text-lg focus:bg-transparent w-full" name="role" placeholder="Escolha o grupo:" options={groupOptions}>              </Select>
            </div>

            <button type="submit" data-testid="add-newUser-button" className="bg-gray-500 inline-block text-center items-start w-full mt-5 p-3 rounded-xl text-gray-200 text-xl "><p>Atualizar</p></button>

          </div>
        </Form>
      </aside>

      <div onClick={() => handleModalNewSelection()} className="rounded-full flex bg-gray-900 text-gray-100 w-14 h-14 absolute top-3/4 right-16 justify-center content-center p-3 hover:opacity-60 cursor-pointer"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></div>

      <section id="table-jogadores" className={"bg-gray-800 px-6 py-4 mt-6 mx-6 rounded-md flex flex-col flex-shrink-0 w-11/12 md:mt-6 md:mx-12 mb-5"}>
        <table className="table-auto ">
          <thead id="table-jogadores" className="text-gray-300 border-b-2 border-gray-400 font-normal">
            <tr>
              <th className="">#</th>
              <th className="">Nome</th>
              <th className="">Departamento</th>
              <th className="">E-mail</th>
              <th className="">Senha</th>
              <th className="">Multiplicador</th>
              <th className="">Pontuação</th>
              <th className="">Grupo</th>
              <th className="">Ação</th>
            </tr>
          </thead>
          <tbody className="text-center text-white mt-4">
            {userData.data && userData.data.map( (item:UserSuccessResponseType, index:number) => (
              <tr key={item._id} className="table-row leading-10 rounded-3xl bg-gray-900 mb-3 border-b-4 border-gray-800">
                <td className="table-cell bg-gray-900 h-20 items-center w-8">{index + 1}</td>
                <td className="table-cell bg-gray-900 h-20 items-center">{item.name}</td>
                <td className=" bg-gray-900 h-20 items-center hidden sm:table-cell">{item.department}</td>
                <td className=" bg-gray-900 h-20 items-center hidden sm:table-cell">{item.email}</td>
                <td className=" bg-gray-900 h-20 items-center hidden sm:table-cell"><div onClick={() => handlePasswordReset(item._id)} className="bg-gray-700 cursor-pointer focus:border-transparent hover:opacity-80 rounded-lg">{passwordReset.includes(item._id) ? 'Senha resetada'  : 'Resetar Senha'}</div></td>
                <td className=" bg-gray-900 h-20 items-center hidden sm:table-cell">{item.multiply}</td>
                <td className=" bg-gray-900 h-20 items-center hidden sm:table-cell">{item.score ? item.score.toLocaleString('pt-BR', { maximumFractionDigits: 2 }) : item.score}</td>
                <td className=" bg-gray-900 h-20 items-center hidden sm:table-cell">{item.role}</td>
                <td className="table-cell bg-gray-900 h-20 items-center ">
                  <div className="flex flex-row justify-center text-gray-300">
                    <div onClick={()=>handleEditUser(item)}  className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
                      <svg  className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </div>
                    <div onClick={()=>handleDeleteUser(item._id)} className="hover:bg-gray-700 cursor-pointer p-2 rounded-full">
                      <svg  className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
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



export default UserPanel

