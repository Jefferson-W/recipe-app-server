"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subscription_controller_1 = require("./subscription.controller");
const router = express_1.default.Router();
router.post('/subscribe', async (req, res) => {
    try {
        const authGuardRequest = req;
        await subscription_controller_1.SubscriptionController.createSubscription(authGuardRequest, res);
    }
    catch (error) {
        res.status(500).send({ error: 'An error occurred while creating the subscription.' });
    }
});
exports.default = router;
