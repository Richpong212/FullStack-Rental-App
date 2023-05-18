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
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const connectDb_1 = require("./config/connectDb");
const user_route_1 = __importDefault(require("./routes/user.route"));
const index_1 = __importDefault(require("./config/index"));
const category_route_1 = __importDefault(require("./routes/category.route"));
const property_route_1 = __importDefault(require("./routes/property.route"));
(0, dotenv_1.config)();
const app = (0, express_1.default)(); // app isntance of express
const port = index_1.default.dev.port; // port number from config
// middlewares
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// base route of the app
app.get("/", (_req, res) => {
    return res.json("Welcome to rental service API");
});
// routes
app.use("/api/users", user_route_1.default);
app.use("/api/categories", category_route_1.default);
app.use("/api/properties", property_route_1.default);
// connect to database
const db = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connectDb_1.connectDb)();
});
db();
// start the server
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    return console.log(`Server is listening on ${port}`);
}));
// not found handler
app.use((_req, res) => {
    return res.status(404).json({ message: "Route Not found" });
});
// error handler
app.use((err, _req, res, _next) => {
    return res.status(500).json({ message: err.message });
});
