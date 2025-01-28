"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testapp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
exports.Testapp = (0, express_1.default)(); // создать приложение
exports.Testapp.use(express_1.default.json()); // создание свойств-объектов body и query во всех реквестах
exports.Testapp.use((0, cors_1.default)()); // разрешить любым фронтам делать запросы на наш бэк
exports.Testapp.get('/', (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({ version: '1.0' });
});
// app.get(SETTINGS.PATH.VIDEOS, getVideosController)
// app.use(SETTINGS.PATH.VIDEOS, videosRouter)
