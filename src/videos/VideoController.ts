import {Request, Response, Router} from 'express'
import {db, VideoDBType} from '../db/db'
import {inputValidation} from "../validation/InputVideoModel";

export const videoRouter = Router();

const videoController= {
   getVideos: (req: Request, res: Response) => {
    const videos = db.videos // получаем видео из базы данных
    res.status(200).json(videos) // отдаём видео в качестве ответа
},
    getVideoByID: (req: Request, res: Response) => {
      const FoundVideos = db.videos.find((c: VideoDBType) => c.id === +req.params.id)

        if (!FoundVideos) {
            res.status(404).json('Error: video not found')
            return
        }

        res.status(200).json(FoundVideos)
    },
    deleteVideo: (req: Request, res: Response) => {
    const flag = db.videos.find((c:VideoDBType)=>c.id===+req.params.id)
        console.log(flag)
        if(!flag) {
        res.status(404).json('Error: video not found');
        return;
    }
        db.videos = db.videos.filter((c: VideoDBType)  => c.id !== +req.params.id)
        res.status(204)
},
    createVideo: (req: Request, res: Response) => {
       const errors  = inputValidation(req.body)

       if (!errors.errorsMessages.length) {
            const video = {
                ...req.body,
                id: Math.floor(Date.now() / 1000 + Math.random())
            }
            db.videos.push(video)
            res.status(201).json(video);
            return
        }
       res.status(400).json(errors)
    }
}



videoRouter.get('/', videoController.getVideos)
videoRouter.get('/:id', videoController.getVideoByID)
videoRouter.post('/', videoController.createVideo)
videoRouter.delete('/:id', videoController.deleteVideo)
