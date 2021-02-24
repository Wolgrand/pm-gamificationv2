import { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image'
import { AchievementData } from '../interfaces/interfaces';
import Avatar from './Avatar';

interface CardProps {
  title: string;
  key:string;
  position: number;
  score: number;
  oldPosition: number;
  achievements: AchievementData[]
}

const RankCard= ({title, position, score, oldPosition, achievements, key}:CardProps):any => {

  let borderColor = '';

  switch (position) {
    case 1:
      borderColor = "#f1c40f"
      break;
    case 2:
      borderColor = "#95a5a6"
      break;
    case 3:
      borderColor = "#e67e22"
      break;

    default:
      break;
  }

  const positionGap = oldPosition - position;
  const achievementsLength = achievements.length;



  return (
  <div key={key} className={"flex-row flex align-middle  items-center justify-between mr-2 mt-3 w-full lg:w-4/6 px-3 py-5 lg:py-5 bg-gray-900 rounded-lg flex-shrink-0 hover:bg-opacity-80 cursor-pointer shadow-lg"} style={{ borderLeft: borderColor ? `5px solid ${borderColor} ` : "0"}}>
      <div className="flex-row flex align-middle">
      <p className="text-gray-400 lg:mr-5 h-full my-auto mx-0 align-middle inline-block">{position}</p>
      <div className="flex flex-row align-middle justify-around text-center py-1">
        <div className="hidden lg:block">
        <Avatar name={title} fontSize={1}/>
        </div>

        <span className="flex justify-center place-items-center ml-5">
          {positionGap!==0 ? <p className="text-center text-gray-300">{positionGap}</p> : null}
          {positionGap>0 ? <svg className="w-6 h-6" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg> : null}
          {positionGap<0 ? <svg className="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg> : null}
          {positionGap===0 ? <svg className="w-6 h-6" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg> : null}
        </span>

      </div>
      </div>
      <div className="my-auto mx-0 justify-center">
        <p className="my-auto mx-0"><strong className="text-gray-300">{title}</strong></p>
      </div>

      <div className="flex-row justify-self-end hidden lg:flex w-1/4">
        {achievements.length >0 ?
          achievements.slice(0,3).map(item=>(
            <img className="inline-block -ml-5 rounded-full object-fill w-12 " src={item.image_url} alt={item.title}/>
          ))

        : null}
        {achievements.length >0 && achievementsLength-3 >0   ?
          <div className="-ml-5">
            <Avatar fontSize={1} name={`+${achievementsLength-3}`} />
          </div>
        : null}

      </div>

      <span className="text-gray-400">{score} pts</span>
  </div>
  );
};

export default RankCard;
