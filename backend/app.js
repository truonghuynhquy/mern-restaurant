import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import restApiRouter from "./routes/restApiRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST", "GET"],
        credentials: true,
    })
);

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/restApi", restApiRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
