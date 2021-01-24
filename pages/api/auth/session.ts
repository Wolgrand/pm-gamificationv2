import {NextApiRequest, NextApiResponse} from 'next'
import { sign } from 'jsonwebtoken';
import {compareHash} from '../../../utils/providers/BCryptHashProvider'
import {UserSuccessResponseType, ErrorResponseType, AuthResponse, UserWithoutPassword} from '../../../interfaces/interfaces'
import connect from '../../../utils/database';
import authConfig from '../../../config/auth';


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | AuthResponse>
): Promise<void> => {

  if (req.method === 'POST') {
    const {
      email,
      password,
    }: {
      email: string;
      password: string;
    } = req.body;

      if (
        !email ||
        !password
        ) {
        res.status(400).json({ error: 'Missing body parameter' });
        return;
      }


    const { db } = await connect('users');


    const user:UserSuccessResponseType | null  = await db.findOne({ email: email });

    if (!user) {
      res
        .status(401)
        .json({ error: 'Incorrect email/password combination.' });
      return;
    }


    const passwordMatched = compareHash(password, user.password);

    if (!passwordMatched) {
      res
        .status(401)
        .json({ error: 'Incorrect email/password combination.' });
    }

    const { secret, expiresIn } = authConfig.jwt;

    const userId = String(user._id);

    const token = sign({}, secret, {
      subject: userId,
      expiresIn,
    });

    const userWithoutPassword:UserWithoutPassword = user;

    delete userWithoutPassword.password

    res.status(200).json({userWithoutPassword, token});

  }  else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
