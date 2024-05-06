import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            dbName: "mern-restaurant-app",
        })
        .then(() => {
            console.log("Database connected");
        })
        .catch((err) => {
            console.log(
                `Some error occured while connecting to database: ${err}`
            );
        });
};
