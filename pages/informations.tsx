import { useFetch } from "../hooks/useFetch";
import { AchievementProps, CriteriosProps, RewardProps, UserSuccessResponseType } from "../interfaces/interfaces";


const Informations = () => {

    const rewards = useFetch<RewardProps[]>('/api/reward');
    const achievements = useFetch<AchievementProps[]>('/api/achievement');
    const criterias = useFetch<CriteriosProps[]>('/api/criteria');


    return (
      <div className="h-auto bg-gray-700 p-10 min-h-screen">
        <main className="flex bg-gray-800 flex-col justify-start rounded-lg">
          <section id="definition" className="mx-auto my-0 mt-4 py-10 px-20">
            <h1 className="text-white text-left text-2xl border-gray-300 border-b-2 mb-5 ">Gamificação</h1>
            <p className="text-gray-300 text-justify mb-2">
              Consiste em usar técnicas, estratégias e o design de games em outros contextos que não sejam necessariamente associadas aos jogos em si.  É trazer o jogo para a realidade e com isso impactar pontos como engajamento, produtividade, foco, determinação e outros, tornando mais simples atingir metas e objetivos em qualquer contexto.
            </p>
            <p className="text-gray-300 text-justify">
            Após o sucesso em 2020, a gamificação volta em 2021 ainda melhor com a contribuição recebida da versão anterior. Trata-se de um game para incentivar e reconhecer a alta performance dos gerentes de projetos.
            </p>
          </section>
          <section id="cycle" className="justify-self-start mx-auto my-0 w-full px-20 mb-10">
            <div className="justify-self-start block w-11/12">
              <h1 className="text-white text-left text-2xl border-gray-300 border-b-2 mb-5 ">Ciclo</h1>
            </div>
            <p className="text-gray-300 text-justify mb-2">O ciclo 2021 da gamificação inicará em 01/03/2021 e finalizará em 31/10/2021</p>
          </section>
          <section id="elements" className="justify-self-start mx-auto my-0 w-full px-20 mb-10">
            <div className="justify-self-start block w-11/12">
              <h1 className="text-white text-left text-2xl border-gray-300 border-b-2 mb-5 ">Elementos</h1>
            </div>
            <p className="text-gray-300 text-justify mb-2">Para o ciclo 2021 utilizaremos os elementos: Jogadores, Conquistas, Entregas e Recompensas;</p>
          </section>
          <section id="players" className="justify-self-start mx-auto my-0 w-full px-20 mb-10">
            <div className="justify-self-start block w-11/12">
              <h1 className="text-white text-left text-2xl border-gray-300 border-b-2 mb-5 ">Jogadores</h1>
            </div>
            <p className="text-gray-300 text-justify mb-2">Os jogadores serão os gerentes de projetos do ano de 2021.</p>
          </section>
          <section id="criterias" className="justify-self-start mx-auto my-0 w-full px-20 mb-10">
            <div className="justify-self-start block w-11/12">
              <h1 className="text-white text-left text-2xl border-gray-300 border-b-2 mb-5 ">Entregas</h1>
            </div>
            <div className="grid grid-cols-3">
             {
               criterias.data ? criterias.data.map(item =>
                <div className="flex-col flex text-gray-50">
                  <h2>{item.description} - {item.score} pts</h2>
                </div>

              ) : null
             }
            </div>
          </section>
          <section id="rewards" className="justify-self-start mx-auto my-0 w-full px-20 mb-10">
            <div className="justify-self-start block w-11/12">
              <h1 className="text-white text-left text-2xl border-gray-300 border-b-2 mb-5 ">Recompensas</h1>
            </div>
            <div className="grid grid-cols-3">
             {
               rewards.data ? rewards.data.map(item =>
                <div className="flex-col flex text-gray-50">
                  <h2>{item.title} - {item.score} pts</h2>
                </div>

              ) : null
             }
            </div>
          </section>
          <section id="achievements" className="justify-self-start mx-auto my-0 w-full px-20 mb-14">
            <div className="justify-self-start block w-11/12">
              <h1 className="text-white text-left text-2xl border-gray-300 border-b-2 mb-5 ">Conquistas</h1>
            </div>
            <div className="grid grid-cols-2 gap-1">
             {
               achievements.data ? achievements.data.map(item =>
                <div className="flex-row flex text-gray-50 bg-gray-900 p-2 ">
                  <img className="w-14 h-14 mr-3" src={item.image_url} alt={item.title}/>
                  <div className="">
                    <h2 className="font-bold">{item.title} - {item.score} pts</h2>
                    <p>{item.description}</p>
                  </div>
                </div>

              ) : null
             }
            </div>
          </section>
        </main>
      </div>
    )
}


export default Informations;
