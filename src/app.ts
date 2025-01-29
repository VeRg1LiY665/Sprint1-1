import express from 'express'
import cors from 'cors'
import {db} from "./db/db";
import {getVideosController} from "./videos/getVideosController";
import {SETTINGS} from "./settings";

export const app = express() // создать приложение
app.use(express.json()) // создание свойств-объектов body и query во всех реквестах
app.use(cors()) // разрешить любым фронтам делать запросы на наш бэк

app.get('/', (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({version: '1.0'})
})

//app.get('/videos', (req: Request, res: Response) => {
//const videos = db.videos
//    res.status
//})
app.get(SETTINGS.PATH.VIDEOS, getVideosController)
//app.use(SETTINGS.PATH.VIDEOS, videosRouter)