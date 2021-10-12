const commentModel = require('../models/comment');
const productModel = require('../models/product');
const userModel = require('../models/user');



const createNewComment = async (content, nameAuthor, idProduct) => {
    const doc = await commentModel.create({content, nameAuthor});
    const {_id} = doc;
    await productModel.findOneAndUpdate({_id: idProduct}, {$push: { comments: _id}}, { new: true});
}

const getAllCommentsForHTML = async (idProduct) => {
    const comments = await productModel.find({_id: idProduct}).comments;
    const commentsForHtml = comments.map(async (comment) => {
        const name = await userModel.find({_id: comment.nameAthor}).name;
        const content = comment.content;

        return {name, content}
    });

    return commentsForHtml; 
}

module.exports = {
    createNewComment,
    getAllCommentsForHTML
}