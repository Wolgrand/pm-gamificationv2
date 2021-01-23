import { NextComponentType, NextPageContext } from 'next';
import Image from 'next/image'

interface CardProps {
  title: string;
  position: number;
  score: number;
}

const RankCard= ({title, position, score}:CardProps):any => {

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

  return (
  <div className={"flex-row flex flex-initial  items-center justify-between mr-2 mt-3 w-full lg:w-5/6 px-3 py-5 lg:py-5 bg-gray-900 rounded-lg flex-shrink-0 hover:bg-opacity-80 cursor-pointer shadow-lg"} style={{ borderLeft: borderColor ? `5px solid ${borderColor} ` : "0"}}>
      <div>
        <span className="text-gray-400 lg:mr-5">{position}</span>
        <img  className={"  h-12 x-14 rounded-full ring-2 ring-white hidden lg:inline-block"} src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
      </div>
      <div className="justify-start flex">
        <strong className="text-gray-300 mx-2 ">{title}</strong>
      </div>

      <span className="text-gray-400">{score} pts</span>
  </div>
  );
};

export default RankCard;
