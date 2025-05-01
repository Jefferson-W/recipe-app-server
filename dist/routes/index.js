"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const teste_1 = __importDefault(require("./teste"));
const gemini_1 = __importDefault(require("./gemini"));
const subscription_route_1 = __importDefault(require("../subscription/subscription.route"));
const webhook_route_1 = __importDefault(require("../webhook/webhook.route"));
const routes = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello, world!');
    });
    (0, verifyToken_1.default)(app);
    app.use('/teste', verifyToken_1.default, teste_1.default);
    app.use('/test', teste_1.default);
    app.use('/gemini', gemini_1.default);
    app.use(subscription_route_1.default);
    app.use(webhook_route_1.default);
};
exports.default = routes;
