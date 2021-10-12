const commentsBlock = document.querySelector('.commentsBlock');
const elForm = document.querySelector('.newCommentForm');
const run = async () => {
    const {data} = await axios.post('/product/comments', id)
    const {comments} = data;

}

elForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const {data} = await axios.post('/product/createNewComment', formData); 
    // коментарий ид товара, ид автора
})