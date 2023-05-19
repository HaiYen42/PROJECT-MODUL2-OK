import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// const { Option } = Select;
function MyVerticallyCenteredModal(props) {
  // const {invoice}= props
  // console.log("props", props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
     <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Product</th>
          <th>Picture</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Flower 1</td>
          <td>img</td>
          <td>$100</td>
        </tr>
      </tbody>
     </table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const ViewInvoice = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
     <Button variant="primary" onClick={() => setModalShow(true)}>
        View
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
export default ViewInvoice;