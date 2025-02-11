import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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
    }
}
export default new App().app;