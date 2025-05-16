const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post("/register", [
    body("fullname.firstname").notEmpty().withMessage("First name is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").notEmpty().withMessage("Color is required"),
    body("vehicle.plate").notEmpty().withMessage("Plate is required"),
    body("vehicle.capacity").isInt({ min: 1 }).withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType").isIn(["car", "bike", "auto"]).withMessage("Invalid vehicle type"),
], captainController.registerCaptain);

module.exports = router;