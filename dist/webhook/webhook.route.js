"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const webhook_controller_1 = require("./webhook.controller");
const body_parser_1 = __importDefault(require("body-parser"));
const router = (0, express_1.default)();
// Middleware to parse the raw body for Stripe webhook
router.post('/webhook', body_parser_1.default.raw({ type: 'application/json' }), webhook_controller_1.WebhookController.listenToWebhook);
exports.default = router;
