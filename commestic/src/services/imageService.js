import instance from "../utils/baseAxios";
const baseURL="image";

const postImage = async(image) => {
    return await instance.post(`${baseURL}`,image)
}

const getImage = async (id) => {
    return await instance.get(`${baseURL}/${id}`)
}

export {postImage,getImage}