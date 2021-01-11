import {NextApiRequest, NextApiResponse} from 'next'
import {UserSuccessResponseType, ErrorResponseType} from '../../../interfaces/interfaces'
import connect from '../../../utils/database';


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | UserSuccessResponseType>
): Promise<void> => {

  if (req.method === 'POST') {
    const {
      image_url,
      title,
      description,
      score,
    }: {
      image_url: string,
      title: string,
      description: string,
      score: number,


    } = req.body;

      if (
        !image_url||
        !title ||
        !description||
        !score

        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }


    const { db } = await connect('achievements');


    const lowerCaseTitle = title.toLowerCase();
    const titleAlreadyExists = await db.findOne({ title: lowerCaseTitle });
    if (titleAlreadyExists) {
      res
        .status(400)
        .json({ error: `Reward ${lowerCaseTitle} already exists` });
      return;
    }

    const response = await db.insertOne({
      image_url,
      title,
      description,
      score,
    });

    res.status(200).json(response.ops[0]);

  } else if (req.method === 'GET') {

    const { db } = await connect('achievements');

    const response:any = await db.find().toArray();

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
