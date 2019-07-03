"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const port = 3000;
const app = express_1.default();
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('layout');
});
app.get('/sign-in', (req, res) => {
    res.render('sign_in');
});
app.post('/sign-in/auth', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//# sourceMappingURL=index.js.map