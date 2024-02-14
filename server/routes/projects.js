const express = require("express");
const router = express.Router();

const {
  getAllProjects,
  postAProject,
  deleteAProject,
} = require("@controllers/projects");

router.get("/", getAllProjects);

router.post("/", postAProject);

router.delete("/:projectId", deleteAProject);

module.exports = router;
