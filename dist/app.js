"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const getVideosController_1 = require("./videos/getVideosController");
const settings_1 = require("./settings");
exports.app = (0, express_1.default)(); // создать приложение
exports.app.use(express_1.default.json()); // создание свойств-объектов body и query во всех реквестах
exports.app.use((0, cors_1.default)()); // разрешить любым фронтам делать запросы на наш бэк
exports.app.get('/', (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({ version: '1.0' });
});
//app.get('/videos', (req: Request, res: Response) => {
//const videos = db.videos
//    res.status
//})
exports.app.get(settings_1.SETTINGS.PATH.VIDEOS, getVideosController_1.getVideosController);
//app.use(SETTINGS.PATH.VIDEOS, videosRouter)
