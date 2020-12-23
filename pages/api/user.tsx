import {NextApiRequest, NextApiResponse} from 'next'
import {UserSuccessResponseType, ErrorResponseType} from '../../interfaces/interfaces'
import connect from '../../utils/database';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | UserSuccessResponseType>
): Promise<void> => {

  if (req.method === 'POST') {
    const {
      name,
      department,
      email,
      password,
      position,
      score,
      role,
    }: {
      name: string;
      department: string;
      email: string;
      password: string;
      position: number;
      score: number;
      role: string;

    } = req.body;

      if (
        !name ||
        !department ||
        !email ||
        !password ||
        !position ||
        !score ||
        !role
        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }


    const { db } = await connect('users');

    const lowerCaseEmail = email.toLowerCase();
    const emailAlreadyExists = await db.findOne({ email: lowerCaseEmail });
    if (emailAlreadyExists) {
      res
        .status(400)
        .json({ error: `E-mail ${lowerCaseEmail} already exists` });
      return;
    }

    const response = await db.insertOne({
      name,
      department,
      email: lowerCaseEmail,
      password,
      position,
      score,
      role,
      rewards: [],
      criterias: [],
      achievements: [],
    });

    res.status(200).json(response.ops[0]);
  } else if (req.method === 'GET') {

    const { db } = await connect('users');

    const response:any = await db.find().toArray();

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
