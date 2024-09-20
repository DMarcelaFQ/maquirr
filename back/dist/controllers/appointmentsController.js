"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneAppointmentController = exports.cancelAppointmentController = exports.getAppointmentController = exports.createAppointmentController = void 0;
const createAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(201).send("shift successfully scheduled");
    }
    catch (error) {
        res.status(500).send("Could not schedule, something went wrong");
    }
});
exports.createAppointmentController = createAppointmentController;
const getAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send("Shifts");
    }
    catch (error) {
        res.status(500).send("can not show the shifts, something went wrong");
    }
});
exports.getAppointmentController = getAppointmentController;
const cancelAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send("Shift deleted");
    }
    catch (error) {
        res.status(500).send("couldn delete the shift, something went wrong");
    }
});
exports.cancelAppointmentController = cancelAppointmentController;
const getOneAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send("Shifts");
    }
    catch (error) {
        res.status(500).send("can not show the shifts, something went wrong");
    }
});
exports.getOneAppointmentController = getOneAppointmentController;
