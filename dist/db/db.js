"use strict";
// import {VideoDBType} from './video-db-type'
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDB = exports.db = void 0;
exports.db = {
    author: [],
    id: [],
    title: []
};
//export const db: {videos: VidType} ={videos}
// функция для быстрой очистки/заполнения базы данных для тестов
const setDB = (dataset) => {
    if (!dataset) { // если в функцию ничего не передано - то очищаем базу данных
        exports.db.author = [];
        exports.db.id = [];
        exports.db.title = [];
        return;
    }
    // если что-то передано - то заменяем старые значения новыми
    exports.db.author = dataset.author || exports.db.author;
    exports.db.id = dataset.id || exports.db.id;
    exports.db.title = dataset.title || exports.db.title;
};
exports.setDB = setDB;
