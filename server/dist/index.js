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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const surrealdb_1 = require("./utils/surrealdb");
const cors = require("cors");
dotenv_1.default.config();
(0, surrealdb_1.initDB)();
const app = (0, express_1.default)();
const port = process.env.PORT || 7777;
app.use(body_parser_1.default.json()); // * Parsing JSON data
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(cors()); // * Middleware for CORS errors
// * Get routes
app.get('/', (req, res) => {
    res.send('Express + TS server');
});
// * Post routes
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let showName = req.body.show;
    let email = req.body.email;
    let username = req.body.user;
    let password = req.body.pass;
    console.log(showName);
    console.log(email);
    console.log(username);
    console.log(password);
    const result = yield (0, surrealdb_1.registerUser)(showName, username, password, email);
    res.send(result);
}));
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);
});
