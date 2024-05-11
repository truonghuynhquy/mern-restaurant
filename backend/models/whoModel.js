import mongoose from "mongoose";

const whoSchema = new mongoose.Schema({
    number: {
        type: Number,
        default: 0,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
});

export const Who = mongoose.model("Who", whoSchema);
