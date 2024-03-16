require("module-alias/register");
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const User = require("@models/user");
const Project = require("@models/project");

//users routes
const usersRoutes = require("@routes/users");
//projects routes
const projectsRoutes = require("@routes/projects");

const app = express();

app.use(express.json());
app.use(cors());

require("dotenv").config();
const port = process.env.PORT;
const dbUri = process.env.MONGODB_URI;

mongoose
  .connect(dbUri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

app.use("/api/projects", projectsRoutes)  
app.use("/api/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
