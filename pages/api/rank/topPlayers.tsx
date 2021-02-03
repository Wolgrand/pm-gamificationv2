import {NextApiRequest, NextApiResponse} from 'next'
import {UserSuccessResponseType, ErrorResponseType, PlayerRankPros} from '../../../interfaces/interfaces'
import connect from '../../../utils/database';


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | PlayerRankPros[]>
): Promise<void> => {

  if (req.method === 'GET') {

    const { db } = await connect('users');

    const response:UserSuccessResponseType[] = await db.find( { role: 'Jogador' } ).toArray();

    response.map(async item =>
      await db.findOneAndUpdate({_id:item._id}, {$set:{
        old_position:item.position,
      }}))

    const playerRank:UserSuccessResponseType[] = [];

    if (response) {
      for (let key in response) {
        playerRank.push(response[key]);
      }

      playerRank.sort(function (a:UserSuccessResponseType, b:UserSuccessResponseType) {
        return b.score - a.score;
      });

      let rank = 1;

      for (let i = 0; i < playerRank.length; i++) {
        if (i > 0 && playerRank[i].score < playerRank[i - 1].score) {
          rank++;
        }
        playerRank[i].position = rank;
      }
    }

    const playerRankWithoutPassword:PlayerRankPros[] = playerRank.map(({password,...rest}):PlayerRankPros => rest)

    playerRankWithoutPassword.map(async item =>
      await db.findOneAndUpdate({_id:item._id}, {$set:{
        position:item.position,
      }})

    )

      const top3 = playerRankWithoutPassword.slice(0, 3)
     res.status(200).json(top3);
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
