"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("./User"));
const saltRounds = 10;
function signIn(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { email, password } = req.body;
        let user = yield User_1.default.findOne({ where: { email } });
        if (!user) {
            res.json({ success: false });
            return;
        }
        let success = yield bcrypt_1.default.compare(password, user.password);
        res.json({ success });
    });
}
exports.signIn = signIn;
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { username, email, password } = req.body;
        if (yield User_1.default.findOne({ where: { email } })) {
            res.json({ success: false });
            return;
        }
        let hash = yield bcrypt_1.default.hash(password, saltRounds);
        User_1.default.create({ username, email, password: hash });
        res.json({ success: true });
    });
}
exports.signUp = signUp;
//# sourceMappingURL=auth.js.map