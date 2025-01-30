import express, {Request, Response} from 'express'
import cors from 'cors'
import {db} from "./db/db";
//import {getVideosController} from "./videos/getVideosController";
//import {SETTINGS} from "./settings";

export const app = express() // создать приложение
app.use(express.json()) // создание свойств-объектов body и query во всех реквестах
app.use(cors()) // разрешить любым фронтам делать запросы на наш бэк

app.get('/', (req, res) => {
    res.status(200).json({version: '1.0'})
})

app.get('/videos', (req: Request, res: Response) => {
const result = db.title
    res.status(200).json(result)
})

app.get('/videos:id', (req: Request, res: Response) => {
    for (const i of db.id) {
        const FoundVideos = db.id.find(c=>c===+req.params.id)
        if (!FoundVideos){
        res.status(200).json(FoundVideos)
        return}
    }
})


//app.get(SETTINGS.PATH.VIDEOS, getVideosController)
//app.use(SETTINGS.PATH.VIDEOS, videosRouter)