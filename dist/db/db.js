"use strict";
// import {VideoDBType} from './video-db-type'
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDB = exports.db = void 0;
exports.db = {
    videos: [{ id: 1, title: 'title1', author: 'author1' }],
};
// функция для быстрой очистки/заполнения базы данных для тестов
const setDB = (dataset) => {
    if (!dataset) {
        exports.db.videos = [];
        return;
    }
    // если что-то передано - то заменяем старые значения новыми
    else {
        exports.db.videos = dataset || exports.db.videos;
    }
};
exports.setDB = setDB;
