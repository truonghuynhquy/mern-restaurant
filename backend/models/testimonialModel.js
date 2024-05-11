import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    userName: {
        type: String,
        required: true,
    },
});

export const Testimonial = mongoose.model("Testimonial", testimonialSchema);
