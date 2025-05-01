"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = async (app) => {
    const errorHandler = async (error, req, res, next) => {
        if (error) {
            return res.status(error.status).json({ message: error.message });
        }
        return res.status(500).json('AN INTERNAL SERVER ERROR HAPPENED!');
    };
    app.use(errorHandler);
};
exports.default = errorMiddleware;
