import instance from "../utils/baseAxios";
const baseURL="listuser";
const getUser= async()=>{
    return await instance.get(`${baseURL}`);
};

const postUser =async(email, password, name)=>{
    console.log(email);
    return await instance.post(`${baseURL}`, {email, password, name})
}

const deleteUser= async(id)=>{
    return await instance.delete(`${baseURL}/${id}`)
}
const getUserId= async(id)=>{
    return await instance.get(`${baseURL}/${id}`)
}
const putUser= async(id, data)=>{
    return await instance.patch(`${baseURL}/${id}`, data)
}

export {getUser, postUser, deleteUser, getUserId, putUser}
