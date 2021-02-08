import {NextApiRequest, NextApiResponse} from 'next'
import { ObjectID } from 'mongodb';
import {UserSuccessResponseType, ErrorResponseType, AchievementData} from '../../../../interfaces/interfaces'
import connect from '../../../../utils/database';


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | UserSuccessResponseType>
): Promise<void> => {

  if (req.method === 'PUT') {

    const {
      id,
      month,
      day,
      image_url,
      title,
      description,
      score,
    }: {
      id: string,
      month: number,
      day: number,
      image_url: string,
      title: string,
      description: string,
      score: number,
    } = req.body;


       if (
        !id ||
        !month ||
        !day ||
        !image_url ||
        !title ||
        !description ||
        !score
        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }

    const userId = req.query.id as string;

    const _id = new ObjectID(userId);

    const { db } = await connect('users');

    const checkIfUserExist = await db.findOne({ _id });
    if (!checkIfUserExist) {
      res
        .status(400)
        .json({ error: `User not find` });
      return;
    }



    try {


      const response:any = await db.findOneAndUpdate({_id}, {$push:{
        achievements:{
          id,
          month,
          day,
          image_url,
          title,
          description,
          score
        }
      }});

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }


  }if (req.method === 'DELETE') {

    const {
      achievementId
    }: {
      achievementId: string,
    } = req.body;

    const userId = req.query.id as string;

    const _id = new ObjectID(userId);

    const { db } = await connect('users');

    const checkIfUserExist = await db.findOne({ _id });
    if (!checkIfUserExist) {
      res
        .status(400)
        .json({ error: `User not find` });
      return;
    }

    const filterAchievements = checkIfUserExist.achievements.filter((item:any)=>{
     return item.id !== achievementId
    })

     const response:any = await db.findOneAndUpdate({_id}, {$set:{
      achievements: filterAchievements
    }});

    const filterAchievement = checkIfUserExist.achievements.filter((item:any)=>{
      return item.id === achievementId
     })


     filterAchievement.map(async (item: AchievementData) => {
      await db.findOneAndUpdate({_id}, {$set :{
        score: checkIfUserExist.score - item.score
      }})
     })



    res.status(200).json(response);
  }else if (req.method === 'GET') {

    const id = req.query.id as string;

    const _id = new ObjectID(id);

    const { db } = await connect('users');

    const response:any = await db.findOne({ _id });

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
