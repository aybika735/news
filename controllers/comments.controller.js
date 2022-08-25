const Comment = require("../models/Comment.model");


module.exports.commentscontroller = {
  createComments: async function (req, res) {
    try{
        await Comment.create({
      username: req.body.username,
      text: req.body.text,
      newsId: req.body.newsId,
    });
    res.json("Комментарий добавлен");
    }catch(error){
        console.log(error);
    }
    
  },
  deleteCommentById: async function (req, res) {
    try{
    const comment = await Comment.findByIdAndRemove(req.params.id);
    res.json("комментарий удален");
    }catch(error){
        console.log(error);
    }
    
  },

  getCommentsByNews: async (req, res) => {
    try {
        let comments = await Comment.find({newsId: req.params.id});
        res.json(comments);
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




