 //import {VideoDBType} from '../src/db/video-db-type'
 import {Resolutions} from '../src/validation/InputVideoModel'
import {DBType, VideoDBType} from '../src/db/db'

// готовые данные для переиспользования в тестах

export const dataset1: VideoDBType = {
    id: 543134656,//Date.now() + Math.random(),
    title: 't' + Date.now() + Math.random(),
    author: 'a' + Date.now() + Math.random(),
     canBeDownloaded: true,
     minAgeRestriction: 13,
     createdAt: new Date().toISOString(),
     publicationDate: new Date().toISOString(),
     availableResolution: ['P144']
}
