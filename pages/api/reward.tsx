import {NextApiRequest, NextApiResponse} from 'next'
import {UserSuccessResponseType, ErrorResponseType} from '../../interfaces/interfaces'
import connect from '../../utils/database';


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | UserSuccessResponseType>
): Promise<void> => {

  if (req.method === 'POST') {
    const {
      title,
      score,
    }: {
      title: string;
      score: number;


    } = req.body;

      if (
        !title ||
        !score

        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }


    const { db } = await connect('rewards');


    const lowerCaseTitle = title.toLowerCase();
    const titleAlreadyExists = await db.findOne({ title: lowerCaseTitle });
    if (titleAlreadyExists) {
      res
        .status(400)
        .json({ error: `Reward ${lowerCaseTitle} already exists` });
      return;
    }

    const response = await db.insertOne({
      title,
      score,
    });

    res.status(200).json(response.ops[0]);

  } else if (req.method === 'GET') {

    const { db } = await connect('rewards');

    const response:any = await db.find().toArray();

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
