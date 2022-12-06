import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {v4 as uuidv4} from "uuid"; 

const AddProject = ({addProjectProp}) => {
  const [category, setCategory] = useState("Front-End");
  const [title, setTitle ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newProject = {
      id: uuidv4(),
      category,
      title 
    }

    addProjectProp(newProject)
  }

  return ( 
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Select aria-label="Default select example" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="Font-End">Front End</option>
          <option value="Back-End">Back End</option>
        </Form.Select>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
      </Form.Group>
    
      <Button variant="primary" type="submit">
          Submit
      </Button>
    </Form>
  </>
  );
}
 
export default AddProject;
;