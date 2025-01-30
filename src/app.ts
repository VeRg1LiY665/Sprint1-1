import express, {Request, Response} from 'express'
import cors from 'cors'
import {db} from "./db/db";
import any = jasmine.any;
//import {getVideosController} from "./videos/getVideosController";
//import {SETTINGS} from "./settings";

export const app = express() // создать приложение
app.use(express.json()) // создание свойств-объектов body и query во всех реквестах
app.use(cors()) // разрешить любым фронтам делать запросы на наш бэк


app.get('/', (req, res) => {
    res.status(200).json({version: '1.0'})
})

app.get('/videos', (req: Request, res: Response) => {
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

app.post('/videos', (req: Request, res: Response) => {
    if(!req.body.title) {
        res.status(400)
        return;
    }
        db.videos.author.push(req.body.author)
        db.videos.id.push(req.body.id)
        db.videos.title.push(req.body.title)
        res.status(201)
})

app.delete('/videos:id', (req: Request, res: Response) => {
    const flag:boolean = db.videos.id.find((c:any)=>c===+req.params.id)
    if(!flag) {
        db.videos = db.videos.filter((c: any, i: any): boolean => c.id !== +req.params.id)
        res.status(204);
        return;
    }
    res.status(404)
})

//app.get(SETTINGS.PATH.VIDEOS, getVideosController)
//app.use(SETTINGS.PATH.VIDEOS, videosRouter)