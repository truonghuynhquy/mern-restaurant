import { Quality } from "../models/qualityModel.js";
import { Dish } from "../models/dishModel.js";
import { NavbarLink } from "../models/navbarLinkModel.js";
import { Team } from "../models/teamModel.js";
import { Testimonial } from "../models/testimonialModel.js";
import { Who } from "../models/whoModel.js";

export const get_quality = async (req, res, next) => {
    const quality = await Quality.find();

    try {
        res.status(200).json({
            success: true,
            data: quality,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err,
        });
    }
};

export const get_dish = async (req, res, next) => {
    const dish = await Dish.find();

    try {
        res.status(200).json({
            success: true,
            data: dish,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err,
        });
    }
};

export const get_navbar = async (req, res, next) => {
    const navbar = await NavbarLink.find();

    try {
        res.status(200).json({
            success: true,
            data: navbar,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err,
        });
    }
};

export const get_team = async (req, res, next) => {
    const team = await Team.find();

    try {
        res.status(200).json({
            success: true,
            data: team,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err,
        });
    }
};

export const get_testimonial = async (req, res, next) => {
    const testimonial = await Testimonial.find();

    try {
        res.status(200).json({
            success: true,
            data: testimonial,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err,
        });
    }
};

export const get_who = async (req, res, next) => {
    const who = await Who.find();

    try {
        res.status(200).json({
            success: true,
            data: who,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err,
        });
    }
};
