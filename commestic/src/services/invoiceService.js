import instance from "../utils/baseAxios";

const baseURL="invoice";
const postInvoice = async(order)=>{
    return await instance.post(`${baseURL}`, order)
};
const getInvoice= async()=>{
    return await instance.get(`${baseURL}`)
};
const patchInvoice= async(id, data)=>{
    return await instance.patch(`${baseURL}/${id}`, data)
}
export {postInvoice,getInvoice, patchInvoice }