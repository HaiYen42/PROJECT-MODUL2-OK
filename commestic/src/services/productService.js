import instance from "../utils/baseAxios";
const baseURL="listProduct";
const getProduct= async()=>{
    return await instance.get(`${baseURL}`);
};
const deleteProduct = async(id)=>{
    return await instance.delete(`${baseURL}/${id}`)
}
const getProductId = async(id)=>{
    return await instance.get(`${baseURL}/${id}`)
}
const postProduct = async(data)=>{
    return await instance.post(`${baseURL}`, data)
}
const patchProduct = async(id, data)=>{
    return await instance.patch(`${baseURL}/${id}`,data)
}

export {getProduct, deleteProduct, getProductId, postProduct, patchProduct}