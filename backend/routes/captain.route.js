const captainController = require('../controllers/captain.controller');
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const  authMiddleware = require("../middlewares/auth.middleware");


try {
  
    router.post("/register", [
        body("email").isEmail().withMessage("Invalid Email"),
        body("fullname.firstname").isLength({ min: 3 }).withMessage("Firstname must be at least 3 characters long"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
        body("vehicle.color").isLength({ min: 3 }).withMessage("Color must be at least 3 characters long"),
        body("vehicle.plate").isLength({ min: 6 }).withMessage("Vehicle plate must be at least 6 characters long"),
        body("vehicle.capacity").isInt({ min: 1 }).withMessage("Capacity must be at least 1"),
        body("vehicle.vehicleType").isIn(["car", "motorcycle", "auto"]).withMessage("Invalid vehicle type"),
      ], captainController.registerCaptain);
} catch (error) {

    console.error(error);
}

try {
    router.post('/login',[
        body('email').isEmail().withMessage("Please enter your email address"),
        body('password').isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    ],
    captainController.loginCaptain
);
} catch (error) {
    console.error(error);

}
router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile)
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptainProfile)

module.exports = router;