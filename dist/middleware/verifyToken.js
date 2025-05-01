"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase-admin/auth");
const api_errors_1 = __importDefault(require("../utils/api-errors"));
const verifyTokenMiddleware = async (app) => {
    app.use(async (req, res, next) => {
        if (req.path === '/webhook')
            return next();
        if (!req.headers.authorization)
            return api_errors_1.default.unauthorized(res, "Missing authorization header");
        const idToken = req?.headers?.authorization;
        (0, auth_1.getAuth)()
            .verifyIdToken(idToken)
            .then((decodedToken) => {
            const uid = decodedToken.uid;
            req.uid = uid;
            return next();
        })
            .catch(() => {
            return api_errors_1.default.forbidden(res, "Unauthorized");
        });
    });
};
exports.default = verifyTokenMiddleware;
