import React from 'react'
import {Form,Button} from 'react-bootstrap'
import '../../App.css';
import '../Login.css';
function SignUp() {
    return (
      <div className="containerbox" style={{'background-color': '#212529'}}>      
<div className="form__box">
<div className="form__container">
<Form>

<Form.Group controlId="formName">
    <Form.Label style={{'color':'white'}}>Your Name</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formCompanyName">
    <Form.Label style={{'color':'white'}}>Company/Institution</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail" bsPrefix="form__element">
    <Form.Label style={{'color':'white','text-align':'left'}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text bsPrefix="form__message">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword" bsPrefix="form__element">
    <Form.Label style={{'color':'white'}}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  {/* <Form.Group controlId="formBasicCheckbox" bsPrefix="form__element">
    <Form.Check type="checkbox" label="Check me out"  />
  </Form.Group> */}
  <div className="form__submit">
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
</Form>
        </div></div></div>
    )
}

export default SignUp
