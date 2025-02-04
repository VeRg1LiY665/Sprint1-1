// import {VideoDBType} from './video-db-type'

//import any = jasmine.any;


import {Resolutions} from "../validation/InputVideoModel";

export type DBType = { // типизация базы данных (что мы будем в ней хранить)
    videos: VideoDBType[]; // VideoDBType[]
    }
export type VideoDBType = {
    author: string;
    id: number;
    title: string;
    canBeDownloaded: boolean;
    minAgeRestriction: number | null;
    publicationDate: string;
    createdAt: string;
    availableResolution: typeof Resolutions
}

export const db: DBType = { // создаём базу данных (пока это просто переменная)
    videos: [],
}

// функция для быстрой очистки/заполнения базы данных для тестов
export const setDB = (dataset?: VideoDBType) => {
    if (!dataset) {
        db.videos = []
        return
    }

    // если что-то передано - то заменяем старые значения новыми
    db.videos = [dataset] //|| db.videos
}
