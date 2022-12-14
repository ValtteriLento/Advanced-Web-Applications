"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get("/hello", (req, res) => {
    res.send("Hello world");
});
app.use("/vehicle", require("./routes/vehicles"));
app.listen(port, () => {
    console.log("Server is up and running at http://localhost" + port);
});
