import type { NextApiRequest, NextApiResponse } from "next";
import type { Post } from "../../../shared/types";
import postSource from "../../../server/posts.json";

export default function postHanlder(req: NextApiRequest, res: NextApiResponse) {
  const posts = postSource as Post[];
  const wantedId = String(req.query.id);
  const post = posts.find(({ id }: Post) => String(id) === wantedId);

  return res.status(200).json(post);
}
