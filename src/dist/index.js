"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainApp_1 = __importDefault(require("./mainApp"));
const dataBase_1 = __importDefault(require("./config/dataBase"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const real = parseInt(process.env.DB_PORT);
const port = real;
const app = (0, express_1.default)();
(0, mainApp_1.default)(app);
const server = app.listen(process.env.PORT || port, () => {
    console.log("");
    (0, dataBase_1.default)();
    console.log("Hello");
});
process.on("uncaughtException", (error) => {
    console.log("app is creashing due to uncaughtException");
    console.log(error);
    process.exit(1);
});
process.on("unhandleRejection", (reason) => {
    console.log("app is creashing due to unhandleRejection");
    console.log(reason);
    server.close(() => {
        process.exit(1);
    });
});
