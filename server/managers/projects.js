const Project = require("@models/project");

exports.findAllProjects = async () => {
  try {
    const projects = await Project.find().populate('user', 'name -_id');
    return projects;
  } catch (error) {
    throw new Error("findAllProjects: Error fetching projects", error);
  }
};

exports.addAProject = async (projectData) => {
    try {
        const project = new Project(projectData);
        await project.save();
        return project;
    } catch (error) {
        throw new Error("addProject: Error adding project", error);
    }
};

exports.removeAProject = async (projectId) => {
    try {
        const project = await Project.findByIdAndDelete(projectId);
        return project;
    } catch (error) {
        throw new Error("deleteAProject: Error removing a project", error);
    } 
};

exports.addAnImage = async (req, es) => {
  try {
  } catch (error) {
    res.status(500).send("deleteAProject: Error deleting project");
  }
};