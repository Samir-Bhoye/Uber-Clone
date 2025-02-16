const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const mapController = require("../controllers/map.controller");
const { query } = require("express-validator");
// const { getAutoCompleteSuggestions} = require("../controllers/map.controller");

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

router.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getCoordinates
);

router.get(
  "/get-distance-time",
  query("origin").isString().isLength({ min: 3 }),
  query("destination").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getDistanceTime
);

router.get(
  "/get-suggestions",
  query("input")
    .isString()
    .withMessage("Input must be a string")
    .isLength({ min: 3 })
    .withMessage("Input must be at least 3 characters long"),
  authMiddleware.authUser, // Ensure the user is authenticated
  mapController.getAutocompleteSuggestions // The function that handles the request
);

module.exports = router;
