const elForm = document.querySelector('.createProductForm');

elForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData (ev.target);
    console.log(ev.target);
    const {data} = await axios.post('/acp/createNewProduct', formData);

    console.log(data);
})