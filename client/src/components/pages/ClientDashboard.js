import React from 'react'
import {Table,Button,Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../App.css';
import '../ClientDashboard.css';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function ClientDashboard() {
  const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="dashboard__container">
          <Link to="/addproduct"><Button variant="primary" size="lg" style={{position:'relative',bottom:'70'}}>
      Add Product
    </Button></Link>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Product</th>
      <th>Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Oneplus 6</td>
      <td>
          
          <Link to="/mainpage"><Button variant="success">View</Button></Link>
          <Link to="/compare"><Button variant="primary">Compare</Button></Link>
          <Button variant="danger" onClick={() => setModalShow(true)}>Delete</Button>
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /></td>
    </tr>
    <tr>
      <td>Oneplus 7</td>
      <td>
          
          <Button variant="success">View</Button>
          <Button variant="primary">Compare</Button>
          <Button variant="danger" onClick={() => setModalShow(true)}>Delete</Button>
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          
  
      </td>
      
    </tr>
    
  </tbody>
</Table>
        </div>
    )
}

export default ClientDashboard
