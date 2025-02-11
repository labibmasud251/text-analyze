import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import textRoutes from "./routes/textRoutes";

dotenv.config();

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes(): void {
        this.app.get("/", (req, res) => {
            res.json("Hello World!");
        });
        this.app.use("/text", textRoutes);
    }
}
export default new App().app;