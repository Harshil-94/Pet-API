"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("./user/controller");
var database_1 = __importDefault(require("./user/database"));
var app = express_1.default();
app.use(express_1.default.json());
app.use("/pet", controller_1.userRoute());
database_1.default()
    .then(function () {
    console.log("database is alive");
    app.listen(5000, function () {
        console.log("the pet store is open");
    });
})
    .catch(function (err) {
    console.log(err);
});
