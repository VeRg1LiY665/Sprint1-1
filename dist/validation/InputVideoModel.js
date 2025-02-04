"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidation = exports.Resolutions = void 0;
/*export type resolutions = {
    'P144':'P144', 'P240':'P240', 'P360':'P360', 'P480':'P480', 'P720':'P720', 'P1080':'P1080', 'P1440':'P1440', 'P2160':'P2160'
}

export const Resolutions: resolutions = {'P144':'P144', 'P240':'P240', 'P360':'P360', 'P480':'P480', 'P720':'P720', 'P1080':'P1080', 'P1440':'P1440', 'P2160':'P2160'};*/
exports.Resolutions = ["P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160"];
const inputValidation = (video) => {
    const errors = {
        errorsMessages: []
    };
    if (!Array.isArray(video.availableResolutions)
        || !video.availableResolutions.every(function (p) { return exports.Resolutions.indexOf(p) >= 0; })) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'availableResolutions'
        });
    }
    if ((!video.title) || (video.title.length > 40)) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'title'
        });
    }
    if ((!video.author) || (video.author.length > 20)) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'author'
        });
    }
    if (video.canBeDownloaded && typeof video.canBeDownloaded !== 'boolean') {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'canBeDownloaded'
        });
    }
    if (video.minAgeRestriction > 18) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'minAgeRestriction'
        });
    }
    if ((video.publicationDate && typeof video.publicationDate !== 'string') || (video.publicationDate && !video.publicationDate.match(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+/))) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'publicationDate'
        });
    }
    return errors;
};
exports.inputValidation = inputValidation;
