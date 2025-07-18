const axios = require("axios");
require("dotenv").config();

const UNSPLASH_ACCESS_KEY = "Q7jdTS1DuUXpaoi7kPw0h-tIb4JQKGaKVINWg9iWNb8" ;

async function getPlaceImage(placeName) {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: placeName,
        per_page: 1,
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    return response.data.results?.[0]?.urls?.regular || null;
  } catch (err) {
    console.error(`Image fetch failed for ${placeName}:`, err.message);
    return null;
  }
}

module.exports = { getPlaceImage };
