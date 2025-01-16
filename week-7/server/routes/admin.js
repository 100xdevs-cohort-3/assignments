const { Router } = require("express");

const router = Router();

router.post("/signup", (req, res) => {
  // logic to sign up admin
});

router.post("/login", (req, res) => {
  // logic to log in admin
});

router.post("/courses", (req, res) => {
  // logic to create a course
});

router.put("/courses/:courseId", (req, res) => {
  // logic to edit a course
});

router.get("/courses", (req, res) => {
  // logic to get all courses
});

module.exports = router;
