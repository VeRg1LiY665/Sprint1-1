"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidation = void 0;
//enum Resolutions {P144= 'P144', P240='P240', P360='P360', P480='P480', P720='P720', P1080='P1080', P1440='P1440', P2160='P2160'}
const Resolutions = ['P144', 'P240', 'P360', 'P480', 'P720', 'P1080', 'P1440', 'P2160'];
const inputValidation = (video) => {
    const errors = {
        errorsMessages: []
    };
    if ((Array.isArray(video.availableResolution))
        && (!video.availableResolution.find((x) => Resolutions[x]))) {
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
    return errors;
};
exports.inputValidation = inputValidation;
