
import { useState } from 'react'
import FloatingButton from '../components/floatingButton';
import Nav from '../components/nav'


export default function Home() {


  return (
    <>
      <Nav />
      <main className="bg-gray-700 h-screen w-screen">
        <FloatingButton />
      </main>
    </>
  )
}


