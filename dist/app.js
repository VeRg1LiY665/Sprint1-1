"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db/db");
//import {getVideosController} from "./videos/getVideosController";
//import {SETTINGS} from "./settings";
exports.app = (0, express_1.default)(); // создать приложение
exports.app.use(express_1.default.json()); // создание свойств-объектов body и query во всех реквестах
exports.app.use((0, cors_1.default)()); // разрешить любым фронтам делать запросы на наш бэк
exports.app.get('/', (req, res) => {
    res.status(200).json({ version: '1.0' });
});
exports.app.get('/videos', (req, res) => {
    const video = db_1.db.videos;
    res.status(200).json(video);
});
exports.app.get('/videos:id', (req, res) => {
    const FoundVideos = db_1.db.videos.id.find((c) => c === +req.params.id);
    if (!FoundVideos) {
        res.status(404);
        return;
    }
    res.status(200).json(FoundVideos);
});
exports.app.post('/videos', (req, res) => {
    if (!req.body.title) {
        res.status(400);
        return;
    }
    db_1.db.videos.author.push(req.body.author);
    db_1.db.videos.id.push(req.body.id);
    db_1.db.videos.title.push(req.body.title);
    res.status(201);
});
exports.app.delete('/videos:id', (req, res) => {
    const flag = db_1.db.videos.id.find((c) => c === +req.params.id);
    if (!flag) {
        db_1.db.videos = db_1.db.videos.filter((c, i) => c.id !== +req.params.id);
        res.status(204);
        return;
    }
    res.status(404);
});
//app.get(SETTINGS.PATH.VIDEOS, getVideosController)
//app.use(SETTINGS.PATH.VIDEOS, videosRouter)
