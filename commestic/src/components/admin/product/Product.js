import React from "react";
import { useEffect, useState } from "react";
import { deleteProduct, getProduct, getProductId } from "../../../services/productService";
import { Button, Space } from "antd";
import {images} from '../../../assets/img/imgManager'
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import EditProduct from "./EditProduct";
import {toast,ToastContainer } from 'react-toastify';


export default function Product() {
  const [listProduct, setListProduct] = useState("");
  const [lock, setLock]= useState("")

  useEffect(() => {
    getProduct().then((res) => {
      setListProduct(res.data);
    });
  }, [lock]);
 

  const handleDelete=(id)=>{
    let check =window.confirm("Bạn có muốn xóa không ?")
    if(check){
      deleteProduct(id).then(()=>{
        getProduct();
        setLock(id)
        toast.success("Delete successful !")
      })
    }
    
  }

  // upload ảnh

  
  const renderComponent=(data) => {
      setLock(data)
  }
  console.log(renderComponent);
  const handleRender= (data)=>{
    setLock(data)
  }

  let element;
  if (listProduct != "") {
    element = listProduct.map((product, index) => {
      let imageUrl = images[product.image]
      return (
        <tbody key={product.id}>
          <tr>
            <td>{index + 1}</td>
            <td>
              <img src={imageUrl} style={{ height: "100px" }} alt="Product Picture" />
            </td>
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.stocks}</td>
            <td>
              <Space>
                <ViewProduct id= {product.id}/>
                <EditProduct id= {product.id} render={handleRender}/>
                <Button type="primary" danger onClick={()=>{handleDelete(product.id)}}>
                  {" "}
                  Xóa{" "}
                </Button>
              </Space>
            </td>
          </tr>
        </tbody>
      );
    });
  }

  return (
    <>
           <ToastContainer />
    <AddProduct render={renderComponent} />
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Hình ảnh</th>
            <th>Mã sản phẩm</th>
            <th>Tên Sản phẩm</th>
            <th>Đơn giá</th>
            <th>Tồn kho</th>
            <th>Hành động</th>
          </tr>
        </thead>
        {element}
      </table>
    </>
  );
}
