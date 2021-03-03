import {NextApiRequest, NextApiResponse} from 'next'
import { ObjectID } from 'mongodb';
import {UserSuccessResponseType, ErrorResponseType} from '../../../interfaces/interfaces'
import connect from '../../../utils/database';
import { compareHash, generateHash } from '../../../utils/providers/BCryptHashProvider';


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | UserSuccessResponseType>
): Promise<void> => {

  if (req.method === 'PUT') {

    const {
      name,
      email,
      department,
      old_password,
      password,
      password_confirmation,
    }: {
      name: string;
      email: string;
      department: string;
      old_password: string;
      password: string;
      password_confirmation: string;

    } = req.body;



      if (
        !name ||
        !email ||
        !department ||
        !old_password ||
        !password ||
        !password_confirmation
        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }

    const id = req.query.id as string;

    const _id = new ObjectID(id);

    const { db } = await connect('users');

    const checkIfUserExist:UserSuccessResponseType = await db.findOne({ _id });
    if (!checkIfUserExist) {
      res
        .status(400)
        .json({ error: `User not find` });
      return;
    }

    const checkPassword = await compareHash(old_password, checkIfUserExist.password)


    if(!checkPassword){
      res
        .status(400)
        .json({ error: `Wrong Password` });
      return;
    }

    const hashedPassword = await generateHash(password);

    try {
      const response:any = await db.findOneAndUpdate({_id}, {$set:{
        password: hashedPassword
      }});

      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }


  }else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
