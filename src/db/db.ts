// import {VideoDBType} from './video-db-type'

import any = jasmine.any;

type VideoDBType = {
    author: string;
    id: number;
    title: string;
}
export type DBType = { // типизация базы данных (что мы будем в ней хранить)
    videos: VideoDBType[]; // VideoDBType[]
    // some: any[]
}
export const db: DBType|any = { // создаём базу данных (пока это просто переменная)
    videos: []
}

// функция для быстрой очистки/заполнения базы данных для тестов
export const setDB = (dataset?: Partial<DBType>) => {
    if (!dataset) { // если в функцию ничего не передано - то очищаем базу данных
        db.videos = []
        return
    }

    // если что-то передано - то заменяем старые значения новыми
    db.videos = dataset || db.videos
}
