"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase-admin/app");
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const express = require("express");
const app = express();
app.use((0, cors_1.default)());
app.options("*", (0, cors_1.default)());
app.use(express.json());
(0, app_1.initializeApp)({
    projectId: "recipe-app-1bbdc",
});
(0, routes_1.default)(app);
exports.default = app;
