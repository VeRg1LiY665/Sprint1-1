"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidation = void 0;
const Resolutions = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'];
const inputValidation = (video) => {
    const errors = {
        errorsMessages: []
    };
    if ((Array.isArray(video.availableResolution))
        && !video.availableResolution.every(v => Resolutions.includes(v))) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'availableResolution'
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
    if (typeof (video.canBeDownloaded) !== "boolean") {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'canBeDownloaded'
        });
    }
    return errors;
};
exports.inputValidation = inputValidation;
