import React from "react";
import ViewInvoice from "./ViewInvoice";
import { Button, Space } from "antd";
import { useEffect, useState  } from "react";
import {images} from '../../../assets/img/imgManager'
import {getInvoice, patchInvoice} from '../../../services/invoiceService'

export default function Invoice() {
  const [invoice, setInvoice]= useState([]);
  const [update, setUpdate] = useState("")
  let user = JSON.parse(localStorage.getItem("user"))
  useEffect(()=>{
    getInvoice().then((res)=>{
      setInvoice(res.data)
    })
  },[update]);

  const handleCancer=(invoice)=>{
    patchInvoice(invoice.id, {status: "cancel"}).then(()=>{
      setUpdate(invoice);
    })
  }
  const handleApprove=(invoice)=>{
    patchInvoice(invoice.id, {status: "finish"}).then(()=>{
      setUpdate(invoice);
    })
  }

  const elementInvoice= invoice.map((invoice, index)=>{
    return(
      <tr key={invoice.id}>
      <td>{index+1}</td>
      <td>{invoice.userName} </td>
      <td>{invoice.phone}</td>
      <td>{invoice.address}</td>
      <td>${invoice.totalAmount}</td>
      <td>{invoice.status}</td>
      <td>
        <Space>
          <ViewInvoice invoice={invoice.listProduct}/>
          <Button type="primary" onClick={()=>handleApprove(invoice)}>Approve</Button>
          <Button type="primary" danger onClick={()=>handleCancer(invoice)}> Cancel </Button>
        </Space>
      </td>
    </tr>
    )
   
  })

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Phone number</th>
            <th>Address</th>
            <th>Total</th>
            <th>Status </th>
            <th>Acions</th>
          </tr>
        </thead>
        <tbody>
          {elementInvoice}
  
        </tbody>
      </table>
    </>
  );
}
