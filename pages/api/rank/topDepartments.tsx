import {NextApiRequest, NextApiResponse} from 'next'
import {UserSuccessResponseType, ErrorResponseType, PlayerRankPros, DepartmentProps} from '../../../interfaces/interfaces'
import connect from '../../../utils/database';


interface PlayerRankProsExtends extends PlayerRankPros {
  average?: number,
  department: string,
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | PlayerRankPros[]>
): Promise<void> => {

  if (req.method === 'GET') {

    const { db } = await connect('users');

    const response:UserSuccessResponseType[] = await db.find( { role: 'Jogador' } ).toArray();



    const departmentTotalScore:any = [];




      Array.from(new Set(response.map(x => x.department))).forEach(x => {
        departmentTotalScore.push(
          response
            .filter(y => y.department === x)
            .reduce((item) => {
              const departmentSum = response
                .filter(y => y.department === x)
                .reduce((a, b) => +a + +b.score, 0);
              const countDepartment = response.filter(
                item => item.department === x,
              ).length;
              const average = Math.ceil(departmentSum / countDepartment);
              const data = {
                department: x,
                average: average
              }
              return data;
            }, {}),
        );
      });

      const departmentRank = [];

      if (departmentTotalScore) {
        for (const key in departmentTotalScore) {
          departmentRank.push(departmentTotalScore[key]);
        }

        departmentRank.sort(function (a, b) {
          return b.average - a.average;
        });

        let rank = 1;
        for (let i = 0; i < departmentRank.length; i++) {
          if (
            i > 0 &&
            departmentRank[i].average < departmentRank[i - 1].average
          ) {
            rank++;
          }
          departmentRank[i].position = rank;
        }
      }

      const top3 = departmentTotalScore.slice(0,3)


     res.status(200).json(top3);
  } else {
    res.status(400).json({ error: 'Wrong request method' });
  }
};
