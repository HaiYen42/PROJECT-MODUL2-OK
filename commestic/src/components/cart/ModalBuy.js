import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { postInvoice } from '../../services/invoiceService';
import {deleteCart} from '../../services/cartService';

export default function ModalBuy(props) {

  let {carts}= props;
  let {user}= props;
  let {totalAmount}= props;
  // console.log("user", user);
  // console.log("carts", carts);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [paymentInfor, setPaymentInfor]= useState({
      phone: "",
      address: "",
      note:""
    });
    const getPaymentInfor=(e)=>{
      let name= e.target.name;
      let value= e.target.value;
      setPaymentInfor({...paymentInfor, [name]: value})
    }
    // console.log("paymentInfor", paymentInfor);
    const handlePay=()=>{
      
      if (paymentInfor.phone===""||paymentInfor.address==="") {
        alert("Vui lòng nhập đầy đủ thông tin")
        
        return
      }
      let newOrder ={
        userName: user.name,
        userID: user.userId,
        listProduct: carts,
        status: "pending",
        phone: paymentInfor.phone,
        address: paymentInfor.address,
        note: paymentInfor.note,
        totalAmount: totalAmount
      }
      console.log("NewOrder", newOrder);
      postInvoice(newOrder).then(()=>{
        deleteCart(user.userId)
       alert("Mua hàng thành công")
      });
      setShow(false)
    }

  return (
    <>
   
    <Button variant="primary" onClick={handleShow}>
      Mua hàng
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='modalBuy'>Thông tin mua hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='modalBuy'>Số điện thoại</Form.Label>
            <Form.Control
              type="phone"
              placeholder="please enter your phone"
              autoFocus
              name='phone'
              value={paymentInfor.phone}
              onChange={(e)=>getPaymentInfor(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='modalBuy'>Địa chỉ giao hàng</Form.Label>
            <Form.Control
              type="address"
              placeholder="please enter your address"
              autoFocus
              name='address'
              value={paymentInfor.address}
              onChange={(e)=>getPaymentInfor(e)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className='modalBuy'>Ghi chú</Form.Label>
            <Form.Control as="textarea" rows={3}
             name='note'
             value={paymentInfor.note}
             onChange={(e)=>getPaymentInfor(e)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Hủy
        </Button>
        <Button variant="primary" onClick={handlePay}>
          Mua
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}
