exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: 'First Post',
        content: 'This is the first post',
        imageUrl: 'images/truck.jpg',
        creator: {
          name: 'Stefan'
        },
        createdAt: new Date()
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);

  res.status(201).json({
    message: 'Post created succesfully',
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
