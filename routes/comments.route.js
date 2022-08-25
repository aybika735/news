const {Router} = require('express');
const {commentscontroller} = require('../controllers/comments.controller')
const router = Router();



router.post('/comments', commentscontroller.createComments);

router.delete('/comments/:id', commentscontroller.deleteCommentById);

router.get('/comments/news/:id', commentscontroller.getCommentsByNews);




module.exports = router;