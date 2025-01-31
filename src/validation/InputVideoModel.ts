import {InputVideoType} from "../IO types/InputVideoType";
import {OutputErrorsType} from "../IO types/OutputErrorsType";


export const inputValidation = (video: InputVideoType) => {
    const errors: OutputErrorsType = { // объект для сбора ошибок
        errorsMessages: []
    }

    if (!Array.isArray(video.availableResolution)
        || video.availableResolution.find(p => !Resolutions[p])
    ) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'availableResolution'
        })
    }
    return errors
}