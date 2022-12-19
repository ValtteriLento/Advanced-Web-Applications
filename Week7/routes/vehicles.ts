import express, {Express, Request, Response, Router} from "express"
const router: Router = express.Router();

interface Vehicle {
    model: string;
    color: string;
    year: number;
    power: number;
}

interface Car {
    model: string;
    color: string;
    year: number;
    power: number;
    bodyType: string;
    wheelCount: number;
}

interface Boat {
    model: string;
    color: string;
    year: number;
    power: number;
    draft: number;
}

interface Plane {
    model: string;
    color: string;
    year: number;
    power: number;
    wingspan: number;
}

let vehicles: Vehicle[] = [];

const addVehicle = (req: Request, res: Response) => {

    let vehicle: Vehicle;

    if ("bodyType" in req.body && "wheelCount" in req.body) {
        const { model, color, year, power, bodyType, wheelCount } = req.body;
        vehicle = { model, color, year, power, bodyType, wheelCount } as Car;
    } else if ("draft" in req.body) {
        const { model, color, year, power, draft } = req.body;
        vehicle = { model, color, year, power, draft } as Boat;
    } else if ("wingspan" in req.body) {
        const { model, color, year, power, wingspan } = req.body;
        vehicle = { model, color, year, power, wingspan } as Plane;
    } else {
        const { model, color, year, power } = req.body;
        vehicle = { model, color, year, power };
    }

    vehicles.push(vehicle);

    res.status(201).send("Vehicle added");
};

router.post("/add", addVehicle);

module.exports = router;