import express from 'express'
import cors from 'cors'

export const Testapp = express() // создать приложение
Testapp.use(express.json()) // создание свойств-объектов body и query во всех реквестах
Testapp.use(cors()) // разрешить любым фронтам делать запросы на наш бэк

Testapp.get('/', (req, res) => {
    // эндпоинт, который будет показывать на верселе какая версия бэкэнда сейчас залита
    res.status(200).json({version: '1.0'})
})
// app.get(SETTINGS.PATH.VIDEOS, getVideosController)
// app.use(SETTINGS.PATH.VIDEOS, videosRouter)