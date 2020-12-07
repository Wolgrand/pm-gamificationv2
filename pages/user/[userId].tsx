import { useRouter } from 'next/router'
import Nav from '../../components/nav'
import {Line} from 'rc-progress'
import { useState } from 'react'

const User = () => {
  const router = useRouter()
  const { userId } = router.query
  const [selectedMonth, setSelectedMonth] = useState('Dezembro')

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ]

  const handleMonthSelection = (index:number) => {
    setSelectedMonth(months[index])

    return selectedMonth;
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-700 overflow-y-auto">
      <Nav backButton={true} backTitle="Usuário" />
      <aside className="bg-gray-800 px-3 mt-6 mx-6 rounded-md flex flex-col h-auto ">
        <section className="p-4 mx-auto my-0 pt-6 mb-4 auto">
          <div className="flex mx-auto my-0 border-gray-200 rounded-full ">
            <img  className={" inline-block h-32 w-32 rounded-full ring-2 ring-white border-gray-200 p-1"} src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"/>
          </div>
          <p className="mt-4 text-xl text-center font-semibold text-white">John Doe</p>
          <p className="mt-2 text-3xl text-center font-semibold text-gray-400">2000 pts</p>
        </section>
        <section className="px-2 border-t-2 border-gray-400 border-opacity-20 flex flex-col mb-6">
          <p className="mt-6 text-lg text-left font-semibold text-white justify-start mb-4">Conquistas</p>
          <div className="grid grid-cols-4 gap-2 ">
            <div className="bg-gray-900 w-full place-items-center place-content-center rounded-lg h-14 mx-auto my-0 justify-center content-center align-middle flex" >
              <img className="w-10 h-10 rounded-full " src="https://images.unsplash.com/photo-1517488948216-e473cee81e23?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGljb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="imagem"/>
            </div>
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
            <div className="bg-gray-900 w-full rounded-lg border-4 border-gray-900 h-14 min-w-max" />
          </div>
        </section>
        <section className="px-2 border-t-2 border-gray-400 border-opacity-20 flex flex-col h-auto mb-6">
          <p className="mt-6 text-lg text-left font-semibold text-white justify-start mb-4">Recompensas</p>
          <div className=" flex flex-col bg-gray-900 rounded-t-lg">
            <div className="flex flex-col bg-gray-900 p-2  mb-2 rounded-t-lg">
              <p className="text-white mb-2">Caixa de Chocolate - 1000 pts</p>
              <div className="flex-row flex items-center">
                <Line
                  className="w-11/12"
                  percent={100}
                  strokeWidth={6}
                  trailWidth={5}
                  strokeColor="#27ae60"
                  strokeLinecap="round"
                />
                <p className="flex-row ml-2 text-white">100%</p>
              </div>
            </div>
            <div className="flex flex-col bg-gray-900 p-2 mb-2 rounded-b-lg border-t-2 border-gray-400 border-opacity-20">
              <p className="text-white mb-2">Pen Drive - 2500 pts</p>
              <div className="flex-row flex items-center">
                <Line
                  className="w-11/12"
                  percent={80}
                  strokeWidth={6}
                  trailWidth={5}
                  strokeColor="#ff9000"
                  strokeLinecap="round"
                />
                <p className="flex-row ml-2 text-white">90%</p>
              </div>
            </div>
          </div>
        </section>
      </aside>
      <main className="bg-gray-800 px-4 mt-6 mx-6 rounded-md flex flex-col mb-6 h-auto">
        <p className="mt-6 text-lg text-left font-semibold text-white justify-start mb-4">Histórico</p>
        <section className="px-2 border-t-2 border-gray-400 border-opacity-20 flex flex-col h-auto mb-6">
          <p className="mt-6 text-lg text-left font-semibold text-white justify-start mb-4">Meses</p>
          <div className="grid grid-cols-4 gap-2">
            <div onClick={() => handleMonthSelection(0)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Janeiro" ? "bg-yellow-600" : "bg-gray-900")} >Jan</div>
            <div onClick={() => handleMonthSelection(1)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Fevereiro" ? "bg-yellow-600" : "bg-gray-900")} >Fev</div>
            <div onClick={() => handleMonthSelection(2)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Março" ? "bg-yellow-600" : "bg-gray-900")} >Mar</div>
            <div onClick={() => handleMonthSelection(3)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Abril" ? "bg-yellow-600" : "bg-gray-900")} >Abr</div>
            <div onClick={() => handleMonthSelection(4)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Maio" ? "bg-yellow-600" : "bg-gray-900")} >Mai</div>
            <div onClick={() => handleMonthSelection(5)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Junho" ? "bg-yellow-600" : "bg-gray-900")} >Jun</div>
            <div onClick={() => handleMonthSelection(6)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Julho" ? "bg-yellow-600" : "bg-gray-900")} >Jul</div>
            <div onClick={() => handleMonthSelection(7)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Agosto" ? "bg-yellow-600" : "bg-gray-900")} >Ago</div>
            <div onClick={() => handleMonthSelection(8)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Setembro" ? "bg-yellow-600" : "bg-gray-900")} >Set</div>
            <div onClick={() => handleMonthSelection(9)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Outubro" ? "bg-yellow-600" : "bg-gray-900")} >Out</div>
            <div onClick={() => handleMonthSelection(10)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Novembro" ? "bg-yellow-600" : "bg-gray-900")} >Nov</div>
            <div onClick={() => handleMonthSelection(11)} className={"bg-gray-900 w-full rounded-lg text-center mx-auto p-2 my-0 text-white  " + (selectedMonth==="Dezembro" ? "bg-yellow-600" : "bg-gray-900")} >Dez</div>
          </div>
          <p className="mt-6 text-lg text-left font-semibold text-white justify-start mb-4">Atividades {`${selectedMonth}`}</p>
          <div className={selectedMonth === "Novembro" ? "visible" : "hidden"}>
            <details className="text-white">
              <summary>28/11/2020</summary>
              <p className="text-gray-400 mt-2">Entregar A no prazo- 15pts</p>
              <p className="text-gray-400 mt-2">Interagir no MS Teams- 5pts</p>
              <p className="text-gray-400 mt-2">Entregar A com qualidade- 15pts</p>
            </details>
            <details className="text-white">
              <summary>29/11/2020</summary>
              <p className="text-gray-400 mt-2">Entregar A no prazo- 15pts</p>
              <p className="text-gray-400 mt-2">Interagir no MS Teams- 5pts</p>
              <p className="text-gray-400 mt-2">Entregar A com qualidade- 15pts</p>
            </details>
            <details className="text-white">
              <summary>30/11/2020</summary>
              <p className="text-gray-400 mt-2">Entregar A no prazo- 15pts</p>
              <p className="text-gray-400 mt-2">Interagir no MS Teams- 5pts</p>
              <p className="text-gray-400 mt-2">Entregar A com qualidade- 15pts</p>
            </details>
          </div>
          <div className={selectedMonth === "Dezembro" ? "visible" : "hidden"}>
            <details className="text-white">
              <summary>07/12/2020</summary>
              <p className="text-gray-400 mt-2">Entregar A no prazo- 15pts</p>
              <p className="text-gray-400 mt-2">Interagir no MS Teams- 5pts</p>
              <p className="text-gray-400 mt-2">Entregar A com qualidade- 15pts</p>
            </details>
            <details className="text-white">
              <summary>08/12/2020</summary>
              <p className="text-gray-400 mt-2">Entregar A no prazo- 15pts</p>
              <p className="text-gray-400 mt-2">Interagir no MS Teams- 5pts</p>
              <p className="text-gray-400 mt-2">Entregar A com qualidade- 15pts</p>
            </details>
            <details className="text-white">
              <summary>09/12/2020</summary>
              <p className="text-gray-400 mt-2">Entregar A no prazo- 15pts</p>
              <p className="text-gray-400 mt-2">Interagir no MS Teams- 5pts</p>
              <p className="text-gray-400 mt-2">Entregar A com qualidade- 15pts</p>
            </details>
          </div>
        </section>
      </main>
    </div>


  )
}

export default User
