import {req} from './test-helpers'
 import {db, setDB} from '../src/db/db'
 import {dataset1} from './datasets'
import {SETTINGS} from '../src/settings'
import {InputVideoType} from "../src/IO types/InputVideoType";

describe('/videos', () => {
    beforeAll(async () => { // очистка базы данных перед началом тестирования
         //setDB()
     })

    it('should get empty array', async () => {
         setDB() // очистка базы данных если нужно

        const res = await req
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200) // проверяем наличие эндпоинта

        console.log(res.body) // можно посмотреть ответ эндпоинта

         expect(res.body.length).toBe(0) // проверяем ответ эндпоинта
    })
    it('should get not empty array', async () => {
         
        setDB(dataset1) // заполнение базы данных начальными данными если нужно

        const res = await req
            .get(SETTINGS.PATH.VIDEOS)
            .expect(200)

        console.log(Object.values(res.body)[0])

         expect(Object.values(res.body.videos).length).toBe(1)
         expect(Object.values(res.body.videos)[0]).toEqual(dataset1)
    })

 it('should create', async () => {
         setDB()
         const newVideo: InputVideoType = {
             title: 'null',
             author: 'null',
             availableResolutions: ["P144", 'P1080'],
             canBeDownloaded: true,
             minAgeRestriction: null,
             publicationDate: new Date().toISOString(),

         }

         const res = await req
             .post(SETTINGS.PATH.VIDEOS)
             .send(newVideo) // отправка данных
             .expect(201)

         console.log(res.body)

         expect(res.body.availableResolutions).toEqual(newVideo.availableResolutions)
     })

    it('should delete', async () => {
        setDB(dataset1)
console.log(db.videos)
        const res = await req
            .delete(SETTINGS.PATH.VIDEOS+'/543134656')
            .expect(204)

        console.log(res.body)
    })

     it('shouldn\'t find', async () => {
        //setDB(dataset1)
         //console.log(dataset1)
         const res = await req
             .get(SETTINGS.PATH.VIDEOS + '/1')
             .expect(404)
          console.log(res.body)

     })
})