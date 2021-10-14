const commentsBlock = document.querySelector('.commentsBlock');
const elForm = document.querySelector('.newCommentForm');

const renderComments = async () => {
    const createCommentsHtml = (comments) => {
        const htmlComments = comments.reduce((html, comment) => {
            html = html + `<div> <span>${comment.name}: ${comment.content}</div>`;

            return html
        }, '');

        return htmlComments;
    }

    const productId = window.location.href.replace('http://localhost:3000/product/', '');
    const {data} = await axios.post('/product/getAllComents', {productId});
    const {allComments} = data;

    commentsBlock.innerHTML = createCommentsHtml(allComments);

}

const run = async () => {
    renderComments();

}

 run();

elForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const comment = new FormData(ev.target).get('comment');
    const productId = window.location.href.replace('http://localhost:3000/product/', '');
    const {data} = await axios.post('/product/createNewComment', {productId, comment}); 

    renderComments();
});