import { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image'

interface CardProps {
  title: string;
  position: number;
  score: number;
  oldPosition: number;
}

const RankCard= ({title, position, score, oldPosition}:CardProps):any => {

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



  return (
  <div className={"flex-row flex flex-initial  items-center justify-between mr-2 mt-3 w-full lg:w-5/6 px-3 py-5 lg:py-5 bg-gray-900 rounded-lg flex-shrink-0 hover:bg-opacity-80 cursor-pointer shadow-lg"} style={{ borderLeft: borderColor ? `5px solid ${borderColor} ` : "0"}}>
      <div className="flex flex-row align-middle justify-start text-center py-1">
        <p className="flex text-gray-400 lg:mr-5 text-center place-content-center align-middle">{position}</p>
        <img  className={"  h-12 x-14 rounded-full ring-2 ring-white hidden lg:inline-block"} src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
        <span className="flex justify-center place-items-center ml-5">
          {positionGap!==0 ? <p className="text-center text-gray-300">{positionGap}</p> : null}
          {positionGap>0 ? <svg className="w-6 h-6" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg> : null}
          {positionGap<0 ? <svg className="w-6 h-6" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg> : null}
          {positionGap===0 ? <svg className="w-6 h-6" fill="none" stroke="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg> : null}
        </span>
      </div>
      <div className="justify-start flex">
        <strong className="text-gray-300 mx-2 ">{title}</strong>
      </div>

      <span className="text-gray-400">{score} pts</span>
  </div>
  );
};

export default RankCard;
