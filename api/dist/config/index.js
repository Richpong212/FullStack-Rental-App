"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    dev: {
        port: process.env.SERVERPORT,
    },
    app: {
        authEMAIL: String(process.env.AUTH_EMAIL) || "",
        authPASSWORD: String(process.env.AUTH_EMAIL_PASSWORD) || "",
        clientURL: String(process.env.CLIENT_URL),
    },
};
