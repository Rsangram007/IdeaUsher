const Post = require('../models/Post');
const Tag = require('../models/Tag');
const { StatusCodes } = require('http-status-codes');
const { storage } = require('../config/cloudinaryConfig');
const multer = require('multer');
const upload = multer({ storage });
const CustomError = require('../utils/httpError');

// Create Post
const createPost = async (req, res) => {
  const { title, desc, tags } = req.body;
  const image = req.file.path;

  const post = await Post.create({
    title, desc, image, tags,
  });
  const populatedPost = await Post.findById(post._id).populate('tags');
  res.status(StatusCodes.CREATED).json({ populatedPost });
};

// Get All Posts with pagination, sorting, filtering
const getAllPosts = async (req, res) => {
  const { keyword, tag, sort, page = 1, limit = 10 } = req.query;

  let queryObject = {};
  if (keyword) {
    queryObject.$or = [
      { title: { $regex: keyword, $options: 'i' } },
      { desc: { $regex: keyword, $options: 'i' } },
    ];
  }
  if (tag) {
    const tagDoc = await Tag.findOne({ name: tag });
    if (!tagDoc) {
      throw new CustomError.BadRequestError('Invalid Tag');
    }
    queryObject.tags = tagDoc._id;
  }

  let result = Post.find(queryObject).populate('tags');
  if (sort) {
    result = result.sort(sort);
  }

  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const posts = await result;
  res.status(StatusCodes.OK).json({ "Count":posts.length,"ALLPOSt":posts });
};

module.exports = { createPost, getAllPosts, upload };
