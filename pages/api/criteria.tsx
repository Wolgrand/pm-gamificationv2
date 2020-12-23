import {NextApiRequest, NextApiResponse} from 'next'
import {UserSuccessResponseType, ErrorResponseType} from '../../interfaces/interfaces'
import connect from '../../utils/database';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | UserSuccessResponseType>
): Promise<void> => {

  if (req.method === 'POST') {
    const {
      icon,
      description,
      score,
    }: {
      icon: string;
      description: string;
      score: string;


    } = req.body;

      if (
        !icon ||
        !description ||
        !score

        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }


    const { db } = await connect('criterias');


    const lowerCaseDescription = description.toLowerCase();
    const criteriaAlreadyExists = await db.findOne({ description: lowerCaseDescription });
    if (criteriaAlreadyExists) {
      res
        .status(400)
        .json({ error: `Criteria ${lowerCaseDescription} already exists` });
      return;
    }

    const response = await db.insertOne({
      icon,
      description,
      score,
    });

    res.status(200).json(response.ops[0]);

  } else if (req.method === 'GET') {

    const { db } = await connect('criterias');

    const response:any = await db.find().toArray();

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
