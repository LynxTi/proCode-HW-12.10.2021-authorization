const signInForm = document.querySelector('.singInForm');
const createUserForm = document.querySelector('.createUserForm');
const btnCreateNewUser = document.querySelector('.createNewUser');
const productBlock = document.querySelector('.productsBlock');

const createHtmlProduct = (products) => {
    const htmlProducts = products.reduce((html, product) => {
        const {nameProduct, discription, price, _id} = product;
        html += `<a href="/product/${_id}" class="productLink">
            <div calss="productBlock" data-id="${_id}" > 
                <div class="nameProduct">${nameProduct}</div>
                <div class="nameProduct">Цена: ${price} грн</div>
                <div class="nameProduct">Описание: ${discription}</div>
            </div>
            <a/>`;
        return html;
    }, '');

    return htmlProducts;
};

const run = async () => {
    const {data} = await axios.post('/getAllProducts');
    const {products} = data;
    const htmlProducts = createHtmlProduct(products);
    productBlock.innerHTML = htmlProducts;
}

run();

signInForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const {data} = await axios.post('/signIn', formData);

    console.log(data);
});

createUserForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const {data} = await axios.post('/createNewUser', formData);
});
