import express, {Express, Request, Response, Router} from "express"
const router: Router = express.Router();

interface Vehicle {
    model: string;
    color: string;
    year: number;
    power: number;
}

let vehicles: Vehicle[] = [];

const addVehicle = (req: Request, res: Response) => {

    const { model, color, year, power } = req.body;
    let vehicle: Vehicle = { model, color, year, power };

    vehicles.push(vehicle);

    res.status(201).send("Vehicle added");
};

router.post("/add", addVehicle);

module.exports = router;