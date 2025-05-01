"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testeController_1 = __importDefault(require("../controller/testeController"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/post', testeController_1.default.teste);
router.get('/', testeController_1.default.test);
exports.default = router;
