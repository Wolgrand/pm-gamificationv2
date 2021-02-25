import Link from 'next/link'
import { useRouter } from 'next/router'
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import Router from "next/router";
import { useAuth } from '../hooks/auth';
import { useToast } from '../hooks/toast';
import Logo from '../components/logo';
import getValidationsErrors from '../utils/getValidationsErrors';
import { SignInFormatData } from '../interfaces/interfaces';
import Input from '../components/Input'


export default function Login() {

  const formRef = useRef<FormHandles>(null);
  const { signIn, user } = useAuth();
  const { addToast } = useToast();
  const history = useRouter();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) {
      Router.replace("/home");
    }


  }, [user]);


  const handleSubmit = useCallback(
    async (data: SignInFormatData) => {
      setLoading(true)
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
        setLoading(false)
        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);
          setLoading(false)

          return;
        }
        setLoading(false)
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, check as credenciais.',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <div className="bg-gray-700 h-screen w-screen w- flex items-stretch p-11">
      <div className="flex flex-col mx-auto my-0 items-center place-content-center justify-center w-20rem sm:w-11/12">
        <div className="flex w-4/5 sm:w-3/5 md:w-3/5 max-w-md">
          <Logo />
        </div>

        <Form ref={formRef} onSubmit={handleSubmit} className="sm:w-11/12">
          <h1 className="text-yellow-500 font-semibold my-12 text-center text-4xl flex-col flex">Faça seu login </h1>
          <div className="max-w-md mx-auto ">
            <div className="bg-gray-900 flex rounded-xl px-4 py-3 justify-self-end align-middle items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <Input  name="email" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="text" placeholder="E-mail"/>
            </div>
            <div className="bg-gray-900 flex rounded-xl px-4 py-3 justify-self-end align-middle items-center mt-2 ">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="#D69E3A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <Input  name="password" className="bg-transparent text-white inline-block placeholder-white text-lg focus:bg-transparent w-full" type="password" placeholder="Senha"/>
            </div>
            <button type="submit" className="bg-yellow-500 inline-block justify-center text-center items-start w-full mt-5 p-3 rounded-xl text-gray-900 text-xl ">
              <p>
              {loading
                ? <svg className="w-7 text-center h-7 animate-spin my-0 mx-auto" fill="none" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                : "Entrar"
              }
              </p>

            </button>
            <p className="text-yellow-500 text-center mt-4">Esqueceu a senha ?</p>
          </div>
        </Form>
      </div>
    </div>
  )
}
