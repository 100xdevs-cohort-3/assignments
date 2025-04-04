//  Implement an authentication middleware that checks for a valid API key in the request headers.

const express = require("express");
const app = express();
const VALID_API_KEY = "100xdevs_cohort3_super_secret_valid_api_key"; // key is 100xdevs-api-key use that API key for authenticate user

// Middleware to check for a valid API key
function authenticateAPIKey(req, res, next) {
  //  authenticate APIKey here
  const isValidAPIKey = req.headers["100xdevs-api-key"];
  if (VALID_API_KEY === isValidAPIKey) {
    next(); //if authentication is valid then move to the next operation
  } else {
    //if not then send not access message then and there
    res.status(401).json({ message: "Invalid or missing API key" });
  }
}

app.use(authenticateAPIKey);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Access granted" });
});

module.exports = app;
