import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [1, "First name must be of at least 3 Characters."],
        maxLength: [30, "First name must be of at most 30 Characters."],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [1, "Last name must be of at least 3 Characters."],
        maxLength: [30, "Last name must be of at most 30 Characters."],
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
        validate: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must be of at least 10 Characters."],
        maxLength: [10, "Phone number must be of at most 10 Characters."],
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
