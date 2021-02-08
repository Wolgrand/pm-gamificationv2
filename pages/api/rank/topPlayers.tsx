import {NextApiRequest, NextApiResponse} from 'next'
import {UserSuccessResponseType, ErrorResponseType, PlayerRankPros} from '../../../interfaces/interfaces'
import connect from '../../../utils/database';


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | PlayerRankPros[]>
): Promise<void> => {

  if (req.method === 'GET') {

    const { db } = await connect('users');

    const response:UserSuccessResponseType[] = await db.find( { role: 'Jogador' } ).sort({'position':1}).toArray();

    const playerRankWithoutPassword:PlayerRankPros[] = response.map(({password,...rest}):PlayerRankPros => rest)

      const top3 = playerRankWithoutPassword.slice(0, 3)
     res.status(200).json(top3);
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
