import React from "react";
import { Space, Table, Button } from "antd";
import { useEffect, useState } from "react";
import { getUser } from "../../../services/userService";
import { deleteUser } from "../../../services/userService";
import {toast,ToastContainer } from 'react-toastify';
import Modal from "./Modal";

const Customer = () => {
  const [listuser, setListUser] = useState([]);
  const [lock, setLock] = useState("")

  useEffect(() => {
    getListUser();
  }, [lock]);
  function getListUser() {
    getUser().then((res) => {
        setListUser(res.data);
      });
  }
  const handleRender = (data)=> {
      setLock(data);
    }
    
  
  const element = listuser.map((data, index) => {
    return data.id != 1 ? (
      <tbody key={data.id}>
        <tr>
          <td>{index + 1}</td>
          <td>{data.name}</td>
          <td>{data.age}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.phone}</td>
          <td>
            {/* <Button type="primary" onClick={() =>handleEdit(data.id)}>Edit</Button>{" "} */}
            <Modal id={data.id} render={handleRender}/>
            <Button type="primary" danger onClick={()=>handleDeleteUser(data.id)}>
              Delete
            </Button>{" "}
          </td> 
        </tr>
      </tbody>
    ) : <tbody key={data.id}>
    <tr>
      <td>{index + 1}</td>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.email}</td>
      <td>{data.address}</td>
      <td>{data.phone}</td>
      <td>
        {/* <Button type="primary" onClick={() =>handleEdit(data.id)}>Edit</Button>{" "} */}
        {/* <Modal id={data.id} render={handleRender}/>
        <Button type="primary" danger onClick={()=>handleDeleteUser(data.id)}>
          Delete
        </Button>{" "} */}
      </td> 
    </tr>
  </tbody>
  });

  const handleDeleteUser = (index) => {
    let check =window.confirm("Bạn có muốn xóa không ?")
    if(check){
      deleteUser(index).then(() => {
        getListUser();
        toast.success("Delete successful!")
    }).catch((err) => {
       console.log(err);
    });
    }
  };

  return (
    <>
<ToastContainer />
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Name </th>
          <th>Age</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      {element}
    </table>
    </>
    
  );
};
export default Customer;
