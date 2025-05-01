"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const geminiController_1 = __importDefault(require("../controller/geminiController"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', geminiController_1.default.generatePrompt);
exports.default = router;
