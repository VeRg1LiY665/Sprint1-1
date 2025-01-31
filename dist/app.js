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
exports.app = (0, express_1.default)(); // создать приложение
exports.app.use(express_1.default.json()); // создание свойств-объектов body и query во всех реквестах
exports.app.use((0, cors_1.default)()); // разрешить любым фронтам делать запросы на наш бэк
exports.app.get('/', (req, res) => {
    res.status(200).json({ version: '1.0' });
});
/*
app.get(SETTINGS.PATH.VIDEOS, (req: Request, res: Response) => {
    const video = db.videos
    res.status(200).json(video)
})

app.get('/videos:id', (req: Request, res: Response) => {
        const FoundVideos = db.videos.id.find((c:any)=>c===+req.params.id)
        if (!FoundVideos){
        res.status(404)
        return
        }
        res.status(200).json(FoundVideos)
})

app.post(SETTINGS.PATH.VIDEOS, (req: Request, res: Response) => {
    if(!req.body.title) {
        res.status(400)
        return;
    }
        db.videos.author.push(req.body.author)
        db.videos.id.push(db.videos.id.length+1)
        db.videos.title.push(req.body.title)
        res.status(201)
})

app.delete('/videos:id', (req: Request, res: Response) => {
    const flag:boolean = db.videos.id.find((c:any)=>c===+req.params.id)
    if(!flag) {
        db.videos = db.videos.filter((c: any): boolean => c.id !== +req.params.id)
        res.status(204);
        return;
    }
    res.status(404)
})
*/
//app.get(SETTINGS.PATH.VIDEOS, getVideosController)
exports.app.use(settings_1.SETTINGS.PATH.VIDEOS, VideoController_1.videoRouter);
