import express, {Request, Response} from 'express'
import cors from 'cors'
//import {db} from "./db/db";
//import any = jasmine.any;
//import {VideoController} from "./videos/VideoController";
import {SETTINGS} from "./settings";
import {videoRouter} from "./videos/VideoController";
import {db, setDB} from "./db/db";

export const app = express() // создать приложение
app.use(express.json()) // создание свойств-объектов body и query во всех реквестах
app.use(cors()) // разрешить любым фронтам делать запросы на наш бэк


app.get('/', (req, res) => {
    res.status(200).json({version: '1.06'})
})
app.delete('/testing/all-data', (req: Request, res: Response) => {
    db.videos = []
    res.status(204).json('All data is deleted')
})
app.use(SETTINGS.PATH.VIDEOS, videoRouter)