
import { BASE_URL } from "./base_url";
import { commonRequest } from "./commonRequest";

//to upload videos
export const addVideos= async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/videos`,body)
}

//to get all videos
export const getVideos=async()=>{
    return await commonRequest("GET",`${BASE_URL}/videos`,'')
}

//to delete video
export const deletevideo=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
}

//to add catagory
export const addCatagory= async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/categories`,body)
}

//to get catagories
export const getCatagories=async()=>{
    return await commonRequest("GET",`${BASE_URL}/categories`,'')
}

//to Delete catagories
export const deleteCatagories=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})
}

//to get all history
export const getHistory=async()=>{
    return await commonRequest("GET",`${BASE_URL}/watchistory`,{})
}

//to add history
export const addHistory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/watchistory`,body)
}

//to get specific video
export const getSpecificVideos=async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/videos/${id}`,'')
}
//to update catagory
export const updatecatagory=async(id,body)=>{
    return await commonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
}


export const deleteHistory=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/watchistory/${id}`,'')
}