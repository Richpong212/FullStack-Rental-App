"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const index_1 = __importDefault(require("../config/index"));
const sendEmail = (emailData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: index_1.default.app.authEMAIL,
                pass: index_1.default.app.authPASSWORD, // generated ethereal password
            },
        });
        const mailOptions = {
            from: index_1.default.app.authEMAIL,
            to: emailData.email,
            subject: emailData.subject,
            html: emailData.html, // html body
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Message sent: %s", info.response);
            }
        });
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    }
    catch (error) {
        console.log(error);
    }
});
exports.sendEmail = sendEmail;
