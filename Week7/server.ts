import express, {Express, Request, Response} from "express"

const app: Express = express()
const port: number = 5000

app.use(express.json());

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello world")
})

app.use("/vehicle", require("./routes/vehicles"));

app.listen(port, () => {
    console.log("Server is up and running at http://localhost" + port)
})