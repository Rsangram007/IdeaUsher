const Tag = require('../models/Tag');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../utils/httpError');

// Create Tag
const createTag = async (req, res) => {
  const { name } = req.body;

  const tagExists = await Tag.findOne({ name });
  if (tagExists) {
    throw new CustomError.BadRequestError('Tag already exists');
  }

  const tag = await Tag.create({ name });
  res.status(StatusCodes.CREATED).json({ tag });
};

// Get All Tags
const getAllTags = async (req, res) => {
  const tags = await Tag.find();
  res.status(StatusCodes.OK).json({ tags });
};

module.exports = { createTag, getAllTags };
