"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidation = void 0;
var Resolutions;
(function (Resolutions) {
    Resolutions["P144"] = "P144";
    Resolutions["P240"] = "P240";
    Resolutions["P360"] = "P360";
    Resolutions["P480"] = "P480";
    Resolutions["P720"] = "P720";
    Resolutions["P1080"] = "P1080";
    Resolutions["P1440"] = "P1440";
    Resolutions["P2160"] = "P2160";
})(Resolutions || (Resolutions = {}));
const inputValidation = (video) => {
    const errors = {
        errorsMessages: []
    };
    if (!Array.isArray(video.availableResolution)
        || Object.values(Resolutions).find((x) => x === video.availableResolution)) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'availableResolution'
        });
    }
    if (video.title.length > 40) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'title'
        });
    }
    if (video.author.length > 20) {
        errors.errorsMessages.push({
            message: 'error!!!!', field: 'author'
        });
    }
    return errors;
};
exports.inputValidation = inputValidation;
