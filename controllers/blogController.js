const Post = require('../models/postModel');
const cacheService = require('../services/cacheService');

module.exports = {
  getPostById(req, res) {
    const postId = req.params.id;
    const cacheKey = `post_${postId}`;

    const cachedPost = cacheService.get(cacheKey);
    if (cachedPost) {
      res.json({
        "data": cachedPost,
        "Info": "Fetched From Cache"
      });
    } else {
      Post.getById(postId, (post) => {
        if (post) {
          cacheService.set(cacheKey, post, 60); // Cache for 60 seconds

          res.json({
            "data": post,
            "Info": "Fetched From DataBase"
          });
        } else {
          res.status(404).json({ error: 'Post not found' });
        }
      });
    }
  },
};
