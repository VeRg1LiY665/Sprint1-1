"use strict";
// import {VideoDBType} from './video-db-type'
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDB = exports.db = void 0;
exports.db = {
    videos: [{ author: 'author1', id: 1, title: 'title1' }],
};
// функция для быстрой очистки/заполнения базы данных для тестов
const setDB = (dataset) => {
    if (!dataset) {
        exports.db.videos = [];
        return;
    }
    // если что-то передано - то заменяем старые значения новыми
    exports.db.videos = dataset || exports.db.videos;
};
exports.setDB = setDB;
