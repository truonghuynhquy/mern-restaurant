import mongoose from "mongoose";

const qualitySchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
});

export const Quality = mongoose.model("Quality", qualitySchema);
