import { NextComponentType, NextPageContext } from 'next';

interface CardProps {
  title: string;
  position: string;
}

const RankCard= ({title, position}:CardProps):any => {


  return (
  <div className="flex-row flex items-center justify-between mr-2 mt-3 w-full sm:w-4/6 px-3 py-6 bg-gray-900 rounded-md flex-shrink-0">
      <span className="text-gray-400">{position}</span>
      <strong className="text-gray-300 mx-2">{title}</strong>
      <span className="text-gray-400">3679 pts</span>
  </div>
  );
};

export default RankCard;