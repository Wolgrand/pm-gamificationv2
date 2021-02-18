import { hash } from 'bcryptjs';
import {NextApiRequest, NextApiResponse} from 'next'
import {UserSuccessResponseType, ErrorResponseType} from '../../../interfaces/interfaces'
import connect from '../../../utils/database';
import { generateHash } from '../../../utils/providers/BCryptHashProvider';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | UserSuccessResponseType>
): Promise<void> => {

  if (req.method === 'POST') {
    const {
      name,
      department,
      company,
      email,
      password,
      role,
    }: {
      name: string;
      department: string;
      company: string;
      email: string;
      password: string;
      role: string;

    } = req.body;

      if (
        !name ||
        !department ||
        !company ||
        !email ||
        !password ||
        !role
        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }

    const hashedPassword = await generateHash(password);

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
      company,
      email: lowerCaseEmail,
      password:hashedPassword,
      position: "",
      score: 0,
      multiply: 1,
      old_position: "",
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
