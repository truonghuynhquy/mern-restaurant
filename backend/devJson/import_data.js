import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Quality } from "../models/qualityModel.js";
import { dbConnection } from "../database/dbConnection.js";
import { Dish } from "../models/dishModel.js";
import { NavbarLink } from "../models/navbarLinkModel.js";
import { Team } from "../models/teamModel.js";
import { Testimonial } from "../models/testimonialModel.js";
import { Who } from "../models/whoModel.js";

dotenv.config({ path: "./config/config.env" });
dbConnection();

// READ JSON FILE

const currentDir = new URL(".", import.meta.url).pathname;
// Quality
const filePath = path.resolve(currentDir, "restQualityApi.json");
const quality = JSON.parse(fs.readFileSync(filePath, "utf-8"));
// Dish
const filePath1 = path.resolve(currentDir, "restDishApi.json");
const dish = JSON.parse(fs.readFileSync(filePath1, "utf-8"));
// Navbar
const filePath2 = path.resolve(currentDir, "restNavbarLink.json");
const navbar = JSON.parse(fs.readFileSync(filePath2, "utf-8"));
// Team
const filePath3 = path.resolve(currentDir, "restTeamApi.json");
const team = JSON.parse(fs.readFileSync(filePath3, "utf-8"));
// Testimonial
const filePath4 = path.resolve(currentDir, "restTestimonialApi.json");
const testimonial = JSON.parse(fs.readFileSync(filePath4, "utf-8"));
// Who
const filePath5 = path.resolve(currentDir, "restWhoApi.json");
const who = JSON.parse(fs.readFileSync(filePath5, "utf-8"));

// IMPORT DATA INTO DB

const importData = async () => {
    try {
        await Quality.create(quality);
        await Dish.create(dish);
        await NavbarLink.create(navbar);
        await Team.create(team);
        await Testimonial.create(testimonial);
        await Who.create(who);
        console.log("Data imported successfully");
    } catch (err) {
        console.log(err);
    }

    process.exit();
};

// DELETE ALL DATA INTO DB

const deleteData = async () => {
    try {
        await Quality.deleteMany(quality);
        await Dish.deleteMany(dish);
        await NavbarLink.deleteMany(navbar);
        await Team.deleteMany(team);
        await Testimonial.deleteMany(testimonial);
        await Who.deleteMany(who);
        console.log("Data deleted successfully");
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === "--import") importData();
else if (process.argv[2] === "--delete") deleteData();
