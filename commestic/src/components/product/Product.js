import React from 'react'
import { getProduct, patchProduct } from '../../services/productService'
import { useEffect, useState } from 'react'
import { getCart, patchCart, postCart } from '../../services/cartService'
import { images } from '../../assets/img/imgManager'
import {HeartOutlined } from '@ant-design/icons'
import {toast,ToastContainer } from 'react-toastify';


export default function Product() {
  const [listProduct, setListProduct]= useState([]);
  let user = JSON.parse(localStorage.getItem("user"));

  if(user){
    var userId=user.userId
   
  }
  console.log("user", user);
   //Render sản phẩm
   useEffect(()=>{
    getProduct().then((res)=>setListProduct(res.data))
    ;
  },[])

  const handleBuy = (product) => {
    if (user==null) {
      toast.error(" vui lòng đăng nhập để mua hàng")
    } else{
      toast.success("Sản phẩm đã được thêm vào giỏ")
    }
   
   getCart().then((res) => {
    let cartProduct = product;
      let arr = res.data;
        let checkUser=arr.find((e) => e.userID === userId);
        if(checkUser){
          let arrCart=checkUser.listProduct;
          arrCart.push(cartProduct);
          // console.log(arrCart);
          patchCart(checkUser.id,{listProduct:arrCart})
        }else{
          // console.log("checkUser", checkUser);
          let listCart = [];
          listCart.push(cartProduct)
            let cart = {
              "id": userId,
              "userID":userId,
              "listProduct":listCart
            }
            console.log("cart", cart);
            postCart(cart);
        }
   })
  
   
  }
  
  const element= listProduct.map((product)=>{
    let imageUrl= images[product.image]
    return (
      <div key={product.id} className="col-lg-3 col-sm-6">
      <div className="product_box">
        <h4 className="bursh_text">{product.name}</h4>
        <p className="lorem_text">
          {product.title}{" "}
        </p>
        <img src= {imageUrl} className="image_1" style={{height:"350px"}} />
        <div className="btn_main">
          <div className="buy_bt">
            <ul>
              <li className="active">
                <a href="#" onClick={() =>handleBuy(product)} id="btnbuy">Buy Now</a>
              </li>
              <li>
                <a href="#" id="btnbuy" ><HeartOutlined className='heart'/></a>
              </li>
            </ul>
          </div>
          <h3 className="price_text"> $ {product.price}</h3>
        </div>
      </div>
    </div>
    )
  })

  return (
    <>
     <ToastContainer />
       <div className="product_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="product_taital">Our Products</h1>
              <p className="product_text">
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation
              </p>
            </div>
          </div>
          <div className="product_section_2 layout_padding">
            <div className="row">
             
              {element}
            </div>
         
            <div className="seemore_bt">
              <a href="#">See More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


