
const ProjectItem = (props) => {
  console.log(props)
  return ( 
    <>
      <li>
        <div className="row">
          <div className="col-8">
            {props.projectObjProp.title}
            &nbsp; &nbsp;

            {props.projectObjProp.category}
          </div>
          <div className="col-4">
            <a href="#" onClick={() => props.handleRemoveProject(props.projectObjProp.id) }>X</a>
          </div>
        </div>
      </li>
    </>
   );
}
 
export default ProjectItem;