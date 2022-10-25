import type { NextApiRequest, NextApiResponse } from "next";
import type { Post } from "../../../shared/types";
import postSource from "../../../server/posts.json";

export default function postsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const posts = postSource as Post[];
  return res.status(200).json(posts);
}
