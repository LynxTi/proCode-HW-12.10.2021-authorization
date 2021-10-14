const commentModel = require('../models/comment');
const productModel = require('../models/product');
const userModel = require('../models/user');



const createNewComment = async (content, nameAuthor, idProduct) => {
    const doc = await commentModel.create({content, nameAuthor});
    const {_id} = doc;
    console.log('idProduct: ', idProduct);
    
    const rezat = await productModel.findOneAndUpdate({_id: idProduct}, {$push: { comments: _id}}, { new: true});
    console.log('rezat:  ', rezat);
    return {status: 'comment create'};
}

const getAllCommentsForHTML = async (idProduct) => {
    const product = await productModel.findOne({_id: idProduct});
    const {comments} = product;

    // const commentsForHtml = comments.map(async (commentId) => {
    //     const comment = await commentModel.findOne({_id: commentId});
    //     const user = await userModel.findOne({_id: comment.nameAuthor});;

    //     const name = user.name;
    //     const content = comment.content;
    //     return {name, content}
    // });

    const commentsPromis = comments.map(async (commentId) => {
        const comment = await commentModel.findOne({_id: commentId});
        const user = await userModel.findOne({_id: comment.nameAuthor});;

        const name = user.name;
        const content = comment.content;
        return {name, content}
    });

    const commentsForHtml = await Promise.all(commentsPromis)

    return commentsForHtml; 
}

module.exports = {
    createNewComment,
    getAllCommentsForHTML
}