import {req} from './test-helpers'
 import {setDB} from '../src/db/db'
 import {dataset1} from './datasets'
import {SETTINGS} from '../src/settings'

describe('/videos', () => {
    beforeAll(async () => { // очистка базы данных перед началом тестирования
         setDB()
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
         expect(Object.values(res.body.videos)[0]).toEqual(dataset1.videos[0])
    })

 it('should create', async () => {
         setDB()
         const newVideo: any /*InputVideoType*/ = {
             title: 'null',
             author: 'null',
             availableResolution: ["P1234" /*Resolutions.P144*/]
             // ...
         }

         const res = await req
             .post(SETTINGS.PATH.VIDEOS)
             .send(newVideo) // отправка данных
             .expect(201)

         console.log(res.body)

         expect(res.body.availableResolution).toEqual(newVideo.availableResolution)
     })

    it('should delete', async () => {
       // setDB()

        const res = await req
            .delete('/videos/543134656')
            .expect(204)

        console.log(res.body)

       // expect(res.body.availableResolution).toEqual(newVideo.availableResolution)
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