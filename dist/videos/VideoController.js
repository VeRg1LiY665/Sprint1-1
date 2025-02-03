"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db/db");
const InputVideoModel_1 = require("../validation/InputVideoModel");
exports.videoRouter = (0, express_1.Router)();
const videoController = {
    getVideos: (req, res) => {
        const videos = db_1.db.videos; // получаем видео из базы данных
        res.status(200).json(videos); // отдаём видео в качестве ответа
    },
    getVideoByID: (req, res) => {
        const FoundVideos = db_1.db.videos.find((c) => c.id === +req.params.id);
        if (!FoundVideos) {
            res.status(404).json('Error: video not found');
            return;
        }
        res.status(200).json(FoundVideos);
    },
    deleteVideo: (req, res) => {
        const flag = db_1.db.videos.find((c) => c.id === +req.params.id);
        console.log(flag);
        if (!flag) {
            res.status(404).json('Error: video not found');
            return;
        }
        db_1.db.videos = db_1.db.videos.filter((c) => c.id !== +req.params.id);
        res.sendStatus(204);
    },
    createVideo: (req, res) => {
        const errors = (0, InputVideoModel_1.inputValidation)(req.body);
        if (!errors.errorsMessages.length) {
            const video = Object.assign(Object.assign({}, req.body), { id: Math.floor(Date.now() / 1000 + Math.random()), createdAt: new Date().toISOString(), publicationDate: new Date(new Date().getTime() + 86400000).toISOString() });
            if (!video.canBeDownloaded) {
                video.canBeDownloaded = false;
            }
            if (!video.minAgeRestriction) {
                video.minAgeRestriction = null;
            }
            db_1.db.videos.push(video);
            res.status(201).json(video);
            return;
        }
        res.status(400).json(errors);
    },
    updateVideo: (req, res) => {
        const FoundVideos = db_1.db.videos.find((c) => c.id === +req.params.id);
        if (!FoundVideos) {
            res.status(404).json('Error: video not found');
            return;
        }
        const errors = (0, InputVideoModel_1.inputValidation)(req.body);
        if (!errors.errorsMessages.length) {
            const video = Object.assign(Object.assign({}, req.body), { id: req.params.id, createdAt: (db_1.db.videos.filter((c) => c.id !== +req.params.id)).createdAt });
            db_1.db.videos = db_1.db.videos.filter((c) => c.id !== +req.params.id);
            db_1.db.videos.push(video);
            res.status(204).json(video);
            return;
        }
        res.status(400).json(errors);
    }
};
exports.videoRouter.get('/', videoController.getVideos);
exports.videoRouter.get('/:id', videoController.getVideoByID);
exports.videoRouter.post('/', videoController.createVideo);
exports.videoRouter.delete('/:id', videoController.deleteVideo);
exports.videoRouter.put('/:id', videoController.updateVideo);
