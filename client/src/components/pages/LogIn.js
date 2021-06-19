import React from 'react'
import {Form,Button} from 'react-bootstrap'
import '../../App.css';
import '../Login.css';
import Footer from '../Footer'
function LogIn() {
    return (
        <div className="containerbox" style={{'background-color': '#212529'}}>
     
<div className="form__box">
    <div className="form__container">
<Form>
  <Form.Group controlId="formBasicEmail" bsPrefix="form__element">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text bsPrefix="form__message">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword" bsPrefix="form__element">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox" bsPrefix="form__element">
    <Form.Check type="checkbox" label="Check me out"  />
  </Form.Group>
  <div className="form__submit">
  <Button variant="dark" type="submit">
    Submit
  </Button>
  </div>
</Form>
</div>
</div>
        ]
</div>
    )
}

export default LogIn
