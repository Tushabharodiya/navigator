import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PENDING, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PENDING, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_PENDING, UPDATE_PRODUCT_SUCCESS } from "./action";


let initialstate = {
    product: [],
    isLoading: false,
    isError: null,
}

let adminReducer = (state = initialstate, action) => {
    console.log(action, "reducer");

    switch (action.type) {
        case GET_PRODUCT_PENDING: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: action.data,
            }
        }
        case GET_PRODUCT_ERROR: {
            return {
                isLoading: false,
                isError: action.error,
            }
        }
        //post
        case POST_PRODUCT_PENDING: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case POST_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: state.product.concat(action.data)
            }
        }
        case POST_PRODUCT_ERROR: {
            return {
                isLoading: false,
                isError: action.error,
            }
        }
        //remove
        case DELETE_PRODUCT_PENDING: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case DELETE_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: state.product.filter((val) => val.id != action.data.id)
            }
        }
        case DELETE_PRODUCT_ERROR: {
            return {
                isLoading: false,
                isError: action.error,
            }
        }
        //update
        case UPDATE_PRODUCT_PENDING: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case UPDATE_PRODUCT_SUCCESS: {
            return {
                isLoading: false,
                product: state.product.map((val) => val.id == action.data.id ? { ...action.data } : val)
            }
        }
        case UPDATE_PRODUCT_ERROR: {
            return {
                isLoading: false,
                isError: action.error,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }

}

export default adminReducer;