
const News = require("../models/New.model");
const mongoose = require("mongoose");

module.exports.newscontroller = {
  createNews: async function (req, res) {
    await News.create({
      header: req.body.header,
      text: req.body.text,
      category: req.body.category,
    });
    res.json("Новость добавлена");
  },
  deleteNewsById: async function (req, res) {
    const news = await News.findByIdAndRemove(req.params.id);
    res.json("новость удалена");
  },

  changeNews: async function (req, res) {
    const news = await News.findByIdAndUpdate(req.params.id, {
      header: req.body.header,
      text: req.body.text,
      category: req.body.category,
    });
    res.json("новость  изменена");
  },
  getNewsById: async (req, res) => {
    const news = await News.findById(req.params.id);
    res.json(news);
  },
  getNews: async (req, res) => {
    const news = await News.find().populate("category");
    res.json(news);
  },

  getNewsByCategory: async (req, res) => {
    try {
        let news = await News.find({ category: req.params.id });
        res.json(news);
      } catch (error) {
        res.json(error);
      }
    // try {
       
    //     const cats = await News.aggregate([
    //         {
    //           '$match': {
    //             'category':  mongoose.Types.ObjectId(req.params.id)
    //           }
    //         }
    //       ])
    //       res.json(cats);
      
    // } catch (e) {
    //     res.json(e.toString())
    // }
  },
};




