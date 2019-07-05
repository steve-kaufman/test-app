"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth = __importStar(require("./auth"));
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
app.get('/sign-up', (req, res) => {
    res.render('sign_up');
});
app.post('/sign-in/auth', auth.signIn);
app.post('/sign-up/auth', auth.signUp);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
//# sourceMappingURL=index.js.map