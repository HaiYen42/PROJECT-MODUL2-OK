import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { getCart, patchCart } from "../../services/cartService";
import { Button, Space } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { images } from "../../assets/img/imgManager";
import ModalBuy from "../cart/ModalBuy";

export default function Cart() {
  let totalAmount = 0;
  const [size, setSize] = useState("large"); // default is 'middle'
  const [carts, setCarts] = useState([]);
  const [update, setUpdate] = useState();
  let user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    var userId = user.userId;
  }

  useEffect(() => {
    if (userId) {
      getCart().then((res) => {
        const listCart = res.data;
        let checkUser = listCart.find((e) => e.id == userId);
        setCarts(checkUser.listProduct);
      });
    }
  }, [update]);

  const handleDeleteCart = (userId, cart) => {
    let newCart = carts.filter((item) => {
      return item.id != cart.id;
    });
    patchCart(userId, { listProduct: newCart }).then((res) => {
      setUpdate(res.data);
    });
    toast.success("Delete Successful !")
  };
  let element = "";
  if (carts) {
    element = carts.map((cart, index) => {
      console.log("cart", cart);
      let imageUrl = images[cart.image];
      totalAmount += parseInt(cart.price);
      return (
        <tr>
          <td className="table_data">{index + 1}</td>
          <td className="table_data">
            <img src={imageUrl} style={{ height: 100 }} />
          </td>
          <td className="table_data">{cart.name}</td>
          <td className="table_data">${cart.price}</td>
          <td className="table_data">
            <AiFillDelete
              id="iconDelete"
              onClick={() => {
                handleDeleteCart(userId, cart);
              }}
            />
          </td>
        </tr>
      );
    });
  } else {
    element = "Không có sản phẩm";
  }

  return (
    <div>
      <ToastContainer />
      <table className="tablecart">
        <thead>
          <tr>
            <th className="table_header">No</th>
            <th className="table_header">Image</th>
            <th className="table_header">Name Product</th>
            <th className="table_header">Price</th>
            <th className="table_header">Action</th>
          </tr>
        </thead>
        <tbody>{element}</tbody>
      </table>
      <div>
        <Space>
          <div id="totalPrice">
            <div>Total Price: $ {totalAmount}</div>
            <div>
              <ModalBuy id="modalBuy" carts={carts} user={user} totalAmount={totalAmount} />
            </div>
          </div>
        </Space>
      </div>
    </div>
  );
}
