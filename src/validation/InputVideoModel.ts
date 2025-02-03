import {InputVideoType} from "../IO types/InputVideoType";
import {OutputErrorsType} from "../IO types/OutputErrorsType";


const Resolutions = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160']
//enum Resolutions {P144 = 'P144', P240= 'P240', P360='P360', P480='P480', P720='P720', P1080='P1080', P1440='P1440', P2160='P2160'}

export const inputValidation = (video: InputVideoType) => {
    const errors: OutputErrorsType = { // объект для сбора ошибок
        errorsMessages: []
    }
        if (!Array.isArray(video.availableResolution)
        || !video.availableResolution.every(function (p){return Resolutions.indexOf(p) >=0})
    ) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'availableResolution'
        })
    }

    if ((!video.title) || (video.title.length>40)) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'title'
        })
    }

    if ((!video.author) || (video.author.length>20)) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'author'
        })
    }
    return errors
}