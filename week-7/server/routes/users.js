const { Router } = require("express");

const router = Router();

router.post("/signup", (req, res) => {
  // logic to sign up user
});

router.post("/login", (req, res) => {
  // logic to log in user
});

router.get("/courses", (req, res) => {
  // logic to list all courses
});

router.post("/courses/:courseId", (req, res) => {
  // logic to purchase a course
});

router.get("/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});

module.exports = router;
