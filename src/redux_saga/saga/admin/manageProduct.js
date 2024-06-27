import { call, put } from "redux-saga/effects";
import { add_product, delete_product, get_product, update_product } from "../../admin/api";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_SUCCESS } from "../../admin/action";



function* handle_get_product(action) {
    try {
        let { data, status } = yield call(get_product, action)
        if (status == 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data })
        }
    } catch (error) {
        yield put({ type: GET_PRODUCT_ERROR, error })
    }
}

function* handle_add_product(action) {
    try {
        let { data, status } = yield call(add_product, action)
        if (status == 201 || status == 200) {
            yield put({ type: POST_PRODUCT_SUCCESS, data })
        }
    } catch (error) {
        yield put({ type: POST_PRODUCT_ERROR, error })
    }
}

function* handle_delete_product(action) {
    try {
        let { data, status } = yield call(delete_product, action)
        if (status == 200) {
            yield put({ type: DELETE_PRODUCT_SUCCESS, data })
        }
    } catch (error) {
        yield put({ type: DELETE_PRODUCT_ERROR, error })
    }
}

function* handle_update_product(action) {
    try {
        let { data, status } = yield call(update_product, action)
        if (status == 200) {
            yield put({ type: UPDATE_PRODUCT_SUCCESS, data })
        }
    } catch (error) {
        yield put({ type: UPDATE_PRODUCT_ERROR, error })
    }
}

export { handle_get_product, handle_add_product, handle_delete_product,handle_update_product }