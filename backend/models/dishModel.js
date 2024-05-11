import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
});

export const Dish = mongoose.model("Dish", dishSchema);
