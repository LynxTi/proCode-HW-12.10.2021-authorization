const userModel = require('../models/user');


const createNewUser = async (name, password) => {
    const doc = await userModel.create({name, password});
}

const login = async (login, password) => {
    const doc = await userModel.findOne({name: login});
    console.log('nameCNTRL: ', login);
    // Проверка на наличия Юзера с таким логином
    if (!doc) {
        return {status: 'Unknow user'};
    }

    const chekPasword = doc.verificationPassword(password);
    
    // Проверка пароля
    if (!chekPasword) {
        return {status: 'invalid password'}
    }

    return {status: 'logged in' , user: doc}
}


module.exports = {
    createNewUser,
    login
};