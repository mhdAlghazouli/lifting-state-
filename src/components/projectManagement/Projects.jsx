import ProjectItem from "./ProjectItem";
const Projects = (props) => {
  console.log(props.projectsPropsArr)
  return ( 
    <>
      
      {props.projectsPropsArr.map(projectObj => {
        return <ProjectItem handleRemoveProject={props.handleRemoveProject} projectObjProp={projectObj} />
      })}
    </>
   );
}
 
export default Projects;