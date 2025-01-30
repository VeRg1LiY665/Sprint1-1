// import {VideoDBType} from './video-db-type'

export type VidType = {
    author: string[],
    id: number[],
    title: string[]
}

export const db: VidType = { // создаём базу данных (пока это просто переменная)
    author: [],
    id: [],
    title: []
}
//export const db: {videos: VidType} ={videos}
// функция для быстрой очистки/заполнения базы данных для тестов
export const setDB = (dataset?: Partial<VidType>) => {
    if (!dataset) { // если в функцию ничего не передано - то очищаем базу данных
        db.author = []
        db.id = []
        db.title = []
        return
    }

    // если что-то передано - то заменяем старые значения новыми
    db.author = dataset.author || db.author
    db.id = dataset.id || db.id
    db.title = dataset.title || db.title
}