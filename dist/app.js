"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//import {db} from "./db/db";
//import any = jasmine.any;
//import {VideoController} from "./videos/VideoController";
const settings_1 = require("./settings");
const VideoController_1 = require("./videos/VideoController");
const db_1 = require("./db/db");
exports.app = (0, express_1.default)(); // создать приложение
exports.app.use(express_1.default.json()); // создание свойств-объектов body и query во всех реквестах
exports.app.use((0, cors_1.default)()); // разрешить любым фронтам делать запросы на наш бэк
exports.app.get('/', (req, res) => {
    res.status(200).json({ version: '1.01' });
});
exports.app.delete('/testing/all-data', (req, res) => {
    db_1.db.videos = [];
    res.status(204).json('All data is deleted');
});
exports.app.use(settings_1.SETTINGS.PATH.VIDEOS, VideoController_1.videoRouter);
