import {Request, Response, Router} from 'express'
import {db} from '../db/db'
import {inputValidation} from "../validation/InputVideoModel";

export const videoRouter = Router();

const videoController= {
   getVideos: (req: Request, res: Response) => {
    const videos = db.videos // получаем видео из базы данных
    res.status(200).json(videos) // отдаём видео в качестве ответа
},
    getVideoByID: (req: Request, res: Response) => {
        const FoundVideos = db.videos.id.find((c: any) => c === +req.params.id)
        if (!FoundVideos) {
            res.status(404)
            return
        }
        res.status(200).json(FoundVideos)
    },
    deleteVideo: (req: Request, res: Response) => {
    const flag:boolean = db.videos.id.find((c:any)=>c===+req.params.id)
    if(!flag) {
        db.videos = db.videos.filter((c: any): boolean => c.id !== +req.params.id)
        res.status(204);
        return;
    }
    res.status(404)
},
    createVideo: (req: Request, res: Response) => {
       //const errors  = inputValidation(req.body)
       //if (!errors.errorsMessages.length) {
            const video = {
                ...req.body,
                id: Math.floor(Date.now() / 1000 + Math.random())
            }
            db.videos.push(video)
            res.status(201).json(video);
            return
       // }
     //  res.status(400).json(errors)
    },
    wrongURL:(req: Request, res: Response) => {
       res.status(404)
    }
}


videoRouter.get('/', videoController.wrongURL)
videoRouter.get('/', videoController.getVideos)
videoRouter.get('/:id', videoController.getVideoByID)
videoRouter.post('/', videoController.createVideo)
videoRouter.delete('/:id', videoController.deleteVideo)
