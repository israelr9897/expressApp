let posts = [{ id: 1, title: "Hello" }];

function getAllPosts(req, res){
    res.json(posts);
}

function createPost(req, res){
    posts.push({ id: posts.length + 1, titel: req.body.titel });
  res.send("Post added successfully!");
}

export {
    getAllPosts,
    createPost,
    posts
}