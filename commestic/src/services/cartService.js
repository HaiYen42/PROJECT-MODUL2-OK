import instance from "../utils/baseAxios";

const baseURL="listCart";
const postCart= async(product)=>{
    return await instance.post(`${baseURL}`,product);
};
const getCart= async()=>{
    return await instance.get(`${baseURL}`);
};
const patchCart = async(id, data)=>{
    return await instance.patch(`${baseURL}/${id}`,data)
}
const deleteCart= async(id)=>{
    return await instance.delete(`${baseURL}/${id}`)
}


export {getCart, postCart, patchCart, deleteCart}