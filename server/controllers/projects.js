const {
  findAllProjects,
  addAProject,
  removeAProject,
} = require("@managers/projects");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await findAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).send("getAllProjects: Error getting all projects");
  }
};

exports.postAProject = async (req, res) => {
  try {
    const { projectData } = req.body;
    const project = await addAProject(projectData);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).send("postAProject: Error adding project");
  }
}; 

exports.deleteAProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await removeAProject(projectId);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).send("deleteAProject: Error deleting project");
  }
};
