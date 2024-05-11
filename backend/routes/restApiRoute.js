import express from "express";
import {
    get_quality,
    get_dish,
    get_navbar,
    get_testimonial,
    get_who,
    get_team,
} from "../controller/restApiController.js";

const router = express.Router();

router.get("/getQuality", get_quality);
router.get("/getDish", get_dish);
router.get("/getNavbar", get_navbar);
router.get("/getTeam", get_team);
router.get("/getTestimonial", get_testimonial);
router.get("/getWho", get_who);

export default router;
