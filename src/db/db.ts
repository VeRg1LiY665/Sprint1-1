// import {VideoDBType} from './video-db-type'

//import any = jasmine.any;

export type VideoDBType = {
    author: string;
    id: number;
    title: string;
}
export type DBType = { // типизация базы данных (что мы будем в ней хранить)
    videos: VideoDBType[]; // VideoDBType[]
    }
export const db: DBType|any = { // создаём базу данных (пока это просто переменная)
    videos: [{id:1, title:'title1',author:'author1'}],
}

// функция для быстрой очистки/заполнения базы данных для тестов
export const setDB = (dataset?: Partial<VideoDBType>) => {
    if (!dataset) {
        db.videos = []
        return
    }

    // если что-то передано - то заменяем старые значения новыми
    else {db.videos = dataset || db.videos}
}
