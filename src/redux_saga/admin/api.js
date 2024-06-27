import axios from "axios"
import { BASE_URL, DELETE_PRODUCT, GET_PRODUCT, POST_PRODUCT, UPDATE_PRODUCT } from "../constnt"



let get_product = async (action) => {
    let { data, status } = await axios.get(BASE_URL + GET_PRODUCT)
    return { data, status }
}

let add_product = async (action) => {
    let { data, status } = await axios.post(BASE_URL + POST_PRODUCT, action.payload)
    return { data, status }
}

let delete_product = async (action) => {
    let { data, status } = await axios.delete(BASE_URL + DELETE_PRODUCT + `${action.payload}`)
    console.log(data);
    return { data, status }
}

let update_product = async (action) => {
    let { data, status } = await axios.put(BASE_URL + UPDATE_PRODUCT + `${action.payload.id}`, action.payload);
    return { data, status }
}

export { get_product, add_product, delete_product,update_product }