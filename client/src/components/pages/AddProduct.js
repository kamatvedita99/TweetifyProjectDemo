import React from 'react'
import {Form,Button, Jumbotron} from 'react-bootstrap'
import '../../App.css';
import '../Login.css';
function AddProduct() {
    return (
        <div className="containerbox" style={{'background-color': '#212529'}}>
            <div className="form__box" style={{'background-color':'#212529'}}>
    
<Jumbotron style={{'background':'rgb(25,32,37)','color':'#fff',width:'570px',height:'450px',margin:'20px'}}>
<Form>
  <Form.Group controlId="formProductName" bsPrefix="form__element">
    <Form.Label>Product Name:</Form.Label>
    <Form.Control type="email" placeholder="Enter product name" />
  </Form.Group>

  <Form.Group controlId="formKeyword" className="forms">
    <Form.Label>Keywords:</Form.Label>
   

  
  
   <div className="forms-check">
    <Form.Check  type="checkbox" label="All"  defaultChecked/>
    <Form.Check type="checkbox" label="Battery" />
    <Form.Check type="checkbox" label="Screen" />
    <Form.Check type="checkbox" label="Memory" />
    <Form.Check type="checkbox" label="Heat" />
    <Form.Check type="checkbox" label="Cost" />
    </div>
  </Form.Group>
  <div className="form__submit">
  <Button variant="dark" type="submit">
    Submit
  </Button>
  </div>
</Form>
</Jumbotron>

</div>
        <div></div>
        </div>
    )
}

export default AddProduct
