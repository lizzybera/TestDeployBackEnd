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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.register = exports.read = void 0;
const studentModel_1 = __importDefault(require("../model/studentModel"));
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield studentModel_1.default.find();
        return res.status(200).json({
            message: "Student Found",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Students not Found"
        });
    }
});
exports.read = read;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, studentClass, dob } = req.body;
        const user = yield studentModel_1.default.create({ name, studentClass, dob });
        return res.status(200).json({
            message: "Student registered",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Students not registered"
        });
    }
});
exports.register = register;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentClass } = req.body;
        const { id } = req.params;
        const user = yield studentModel_1.default.findByIdAndUpdate(id, { studentClass }, { new: true });
        return res.status(200).json({
            message: "Student updated",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Students not updated"
        });
    }
});
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield studentModel_1.default.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Student deleted",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Student not deleted"
        });
    }
});
exports.deleteStudent = deleteStudent;
