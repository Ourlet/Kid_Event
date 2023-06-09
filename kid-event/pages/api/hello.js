// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
import fetchEventsLausanneTourisme from "../../utilities/event_lausanne_tourisme";

// type Data = {
//   name: string,
// };

export default async function handler(
  req, // : NextApiRequest,
  res // : NextApiResponse<Data>
) {
  const response = await fetchEventsLausanneTourisme(
    req.query.startDate,
    req.query.endDate
  );
  res.status(200).end(JSON.stringify(response));
}
