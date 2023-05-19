import React from 'react'
import { getProduct } from '../../services/productService'
import { useEffect, useState } from 'react'
import anh1 from '../../assets/img/product/flower1.jpg'
import { postCart } from '../../services/cartService'

export default function Product2() {
    const [listProduct, setListProduct]= useState([]);




    //Render sản phẩm
    useEffect(()=>{
        getProduct().then((res)=>setListProduct(res.data))
    },[]);
    console.log("listProduct", listProduct);
    const element= listProduct.map((product)=>{
        return (
            <div className="col-lg-3 col-sm-6">
            <div className="product_box">
              <h4 className="bursh_text">{product.name}</h4>
              <p className="lorem_text">
               {product.title}{" "}
              </p>
              <img src={anh1} className="image_1" />
              <div className="btn_main">
                <div className="buy_bt">
                  <ul>
                    <li className="active">
                      <a href="#">Buy Now</a>
                    </li>
                    <li>
                      <a href="#">Cart</a>
                    </li>
                  </ul>
                </div>
                <h3 className="price_text">${product.price}</h3>
              </div>
            </div>
          </div>
        )
    })

  return (
    <>
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


