import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
        trim: true,
    },
});

export const Team = mongoose.model("Team", teamSchema);
