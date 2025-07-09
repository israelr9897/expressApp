import {posts} from "../ctrl/postsCtrl.js";

export default function isExists(req, res, next) {
  const resulet = posts.find((post) => post.id === Number(req.params.id));
  if (resulet) {
    next();
  }
  res.send({ msg: "Id not find" });
}
