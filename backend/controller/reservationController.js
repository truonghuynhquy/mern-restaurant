import { Reservation } from "../models/reservationModel.js";
import ErrorHandler from "../middlewares/error.js";

const send_reservation = async (req, res, next) => {
    const { firstName, lastName, date, time, email, phone } = req.body;
    if (!firstName || !lastName || !date || !time || !email || !phone) {
        return next(
            new ErrorHandler("Please fill full Reservation Form!", 400)
        );
    }
    try {
        await Reservation.create({
            firstName,
            lastName,
            date,
            time,
            email,
            phone,
        });
        res.status(201).json({
            success: true,
            message: "Reservation Sent Successfully!",
        });
    } catch (error) {
        // Handle Mongoose Validation errors
        console.log(error.name);
        if (error.name === "ValidationError") {
            const validationError = Object.values(error.errors).map(
                (err) => err.message
            );
            const message = `Invalid input data. ${validationError.join(", ")}`;
            return next(new ErrorHandler(message, 400));
        }

        // Handle other errors
        return next(error);
    }
};

export default send_reservation;
