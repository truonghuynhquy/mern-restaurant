import mongoose from "mongoose";

const navbarSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    link: String,
});

export const NavbarLink = mongoose.model("NavbarLink", navbarSchema);
