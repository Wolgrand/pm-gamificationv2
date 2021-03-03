import Link from 'next/link'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import {  useCallback, useRef, useState } from 'react';
import { useAuth } from '../hooks/auth';
import { useToast } from '../hooks/toast';
import { SignInFormatData } from '../interfaces/interfaces';
import getValidationsErrors from '../utils/getValidationsErrors';
import Input from '../components/Input'
import axios from 'axios';


interface ProfileFormData {
  name: string;
  email: string;
  department: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}


export default function Profile() {


  const router = useRouter()
  const { addToast } = useToast();
  const { signOut, user, updateUser } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false)

  if (typeof window !== 'undefined') {
    if (user === undefined){
      router.push('/');
    }
  }



   const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        setLoading(true)
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val: string | any[]) => !!val.length,
            then: Yup.string().min(6).required('Campo obrigatório'),
            otherwise: Yup.string().min(0),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: (val: string | any[]) => !!val.length,
              then: Yup.string().min(6).required('Campo obrigatório'),
              otherwise: Yup.string().min(0),
            })
            .oneOf([Yup.ref('password'), null], 'Senhas diferentes'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          department,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          department,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };



        const response = await axios.put(`/api/update-profile/${user._id}`, formData);

        updateUser(response.data.value);

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description:
            'Suas informações do perfil foram atualizadas com sucesso.',
        });
        setLoading(false)
      } catch (err) {
        setLoading(false)
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na atualização do perfil!',
          description:
            'Ocorreu um erro ao atualizar seu perfil, tente novamente.',
        });
      }
    },
    [addToast, history, updateUser],
  );

  return (
    <div className="bg-gray-700 min-h-screen h-screen sm:overflow-hidden flex flex-col justify-items-center justify-center items-stretch p-11">

        <Form ref={formRef} onSubmit={handleSubmit} className="mx-auto my-0 w-10/12">
        <h1 className="text-gray-100 font-semibold my-4 max-w-md mx-auto text-left w-10/12 text-2xl flex-col flex">Meu perfil </h1>
          <div className="max-w-md mx-auto ">
            <div className="bg-gray-900 flex rounded-xl px-4 py-3 mb-2 justify-self-end align-middle items-center">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <Input readOnly name="name" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Nome" defaultValue={user.name}/>
            </div>
            <div className="bg-gray-900 flex rounded-xl px-4 py-3 mb-2 justify-self-end align-middle items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <Input readOnly name="email" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="E-mail" defaultValue={user.email}/>
            </div>
            <div className="bg-gray-900 flex rounded-xl px-4 py-3 mb-6 justify-self-end align-middle items-center">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <Input readOnly name="department" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="Department" defaultValue={user.department}/>
            </div>
            <div className="bg-gray-900 flex rounded-xl px-4 py-3 justify-self-end align-middle items-center mt-2 ">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <Input  name="old_password" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="password" placeholder="Senha"/>
            </div>
            <div className="bg-gray-900 flex rounded-xl px-4 py-3 justify-self-end align-middle items-center mt-2 ">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <Input  name="password" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="password" placeholder="Nova Senha"/>
            </div>
            <div className="bg-gray-900 flex rounded-xl px-4 py-3 justify-self-end align-middle items-center mt-2 ">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <Input  name="password_confirmation" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="password" placeholder="Confirmação Senha"/>
            </div>
            <button type="submit" className="bg-gray-500 inline-block justify-center text-center items-start w-full mt-5 p-3 rounded-xl text-gray-900 text-xl ">
              <p>
              {loading
                ? <svg className="w-7 text-center h-7 animate-spin my-0 mx-auto" fill="none" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                : "Atualizar"
              }
              </p>

            </button>
          </div>
        </Form>
       </div>




  )
}


