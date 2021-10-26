import DocModel from "../models/DocModel.js";

export const createPost = async (req, res) => {
  const { name, degree, specialist, picture, area, experience, fee } = req.body;
  const postSave = new DocModel({
    name,
    degree,
    specialist,
    picture,
    area,
    experience,
    fee,
  });

  try {
    await postSave.save();
    res.status(201).json(postSave);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const postData = await DocModel.find();
    res.status(201).json(postData);
  } catch (error) {
    res.status(404).json({ message: error.messsage });
  }
};
