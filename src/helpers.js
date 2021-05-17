// const nanoid = require("nanoid");
import { nanoid } from "nanoid";

const getRandomIDArray = () => {
    const a = [];

    for (let i = 0; i <10; i++){
        a.push(nanoid()); ///Добавляет в конец массива аргумент
    }
    return a;
};

const getRandomIDArrayByLenght = (length) => {
    const a = [];

    for (let i = 0; i < length; i++){
        a.push(nanoid()); ///Добавляет в конец массива аргумент
    }
    return a;
}

// module.exports.getRandomIDArray = getArrayOfRandomIDs;
// module.exports = getArrayOfRandomIDs; //Дефолтное экспортирование. Экспортирует объект целиком. Можно не деструктурировать в файле, куда импортируется.  

export {  getRandomIDArray,     getRandomIDArrayByLenght,
};    
