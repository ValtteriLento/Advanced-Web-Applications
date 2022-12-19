"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let vehicles = [];
const addVehicle = (req, res) => {
    let vehicle;
    if ("bodyType" in req.body && "wheelCount" in req.body) {
        const { model, color, year, power, bodyType, wheelCount } = req.body;
        vehicle = { model, color, year, power, bodyType, wheelCount };
    }
    else if ("draft" in req.body) {
        const { model, color, year, power, draft } = req.body;
        vehicle = { model, color, year, power, draft };
    }
    else if ("wingspan" in req.body) {
        const { model, color, year, power, wingspan } = req.body;
        vehicle = { model, color, year, power, wingspan };
    }
    else {
        const { model, color, year, power } = req.body;
        vehicle = { model, color, year, power };
    }
    vehicles.push(vehicle);
    res.status(201).send("Vehicle added");
};
router.post("/add", addVehicle);
module.exports = router;
