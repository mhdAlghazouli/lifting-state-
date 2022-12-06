import { useState, useEffect } from "react";
import {v4 as uuidv4} from "uuid";
import Projects from "./Projects";
import AddProject from "./AddProject";


const Project = () => {

  const [projects, setProjects] = useState([]);
  console.log(projects)
  useEffect(() => {
    //initial data
    setProjects([
    {
      id: uuidv4(),
      category: "Front-end",
      title: "Javascript"
    },
    {
      id: uuidv4(),
      category: "Back-end",
      title: "Node"
    },
    {
      id: uuidv4(),
      category: "Front-end",
      title: "React"
    }

  ])
  }, []);

  const handleRemoveProject = (id) => {
    let filteredProjects = projects.filter(projectObj => {

      return id !== projectObj.id
    });
    setProjects(filteredProjects);
  }

  const handleAddProject = (newProject) => {
    setProjects([newProject, ...projects])
  }

  return ( 
    <>
      project component
      <AddProject addProjectProp={project => handleAddProject(project)}/>
      <Projects projectsPropsArr={projects} handleRemoveProject={(id) => handleRemoveProject(id)}/>
    </>
   );
}
 
export default Project;