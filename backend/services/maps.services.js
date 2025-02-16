const axios = require("axios");
const captainModel = require("../models/captain.model");

// Use Nominatim API to convert address to coordinates
const getAddressCoordinate = async (address) => {
  if (!address || typeof address !== "string") {
    throw new Error("Invalid address");
  }

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    address
  )}&format=json&limit=1`;

  try {
    const response = await axios.get(url);
    if (response.data.length === 0) {
      throw new Error("Unable to fetch coordinates");
    }
    const location = response.data[0];
    return { lat: location.lat, lng: location.lon }; // lat/lng format
  } catch (error) {
    throw new Error(`Failed to get address coordinates: ${error.message}`);
  }
};

// Your OpenRouteService API key

const DISTANCEMATRIX_API_KEY = process.env.DISTANCEMATRIX_API_KEY;

async function getDistanceTime(origin, destination) {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required");
  }

  const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(
    destination
  )}&key=${DISTANCEMATRIX_API_KEY}`;

  try {
    const response = await axios.get(url);

    if (response.data.status !== "OK") {
      throw new Error(`API Error: ${response.data.status}`);
    }

    const element = response.data.rows[0].elements[0];

    if (element.status !== "OK") {
      throw new Error(`Error fetching distance: ${element.status}`);
    }

    return {
      distance: element.distance.text, // Example: "4502.3 km"
      duration: element.duration.text, // Example: "1 day 17 hours 3 mins"
    };
  } catch (error) {
    throw new Error(`Failed to get distance and time: ${error.message}`);
  }
}

const NOMINATIM_API_URL = process.env.NOMINATIM_API_URL;

async function getAutocompleteSuggestions(input) {
  if (!input) {
    throw new Error("Query is required for autocomplete suggestions.");
  }

  const url = `${NOMINATIM_API_URL}/search?format=json&q=${encodeURIComponent(
    input
  )}&addressdetails=1&limit=5`;

  try {
    const response = await axios.get(url);

    if (!response.data || response.data.length === 0) {
      throw new Error("No suggestions found.");
    }

    // Extract place suggestions
    const suggestions = response.data.map((place) => ({
      name: place.display_name,
      lat: place.lat,
      lon: place.lon,
    }));

    return suggestions;
  } catch (error) {
    throw new Error(
      `Failed to fetch autocomplete suggestions: ${error.message}`
    );
  }
}

 async function  getCaptainsInTheRadius  (ltd, lng, radius)  {
  // radius in km
  
  const captains = await captainModel.find({
    location: {
      $geoWithin: {
        $centerSphere: [[ltd, lng], radius / 6371],
      },
    },
  });

  return captains;
};
module.exports = {
  getAddressCoordinate,
  getDistanceTime,
  getAutocompleteSuggestions,
  getCaptainsInTheRadius
};
