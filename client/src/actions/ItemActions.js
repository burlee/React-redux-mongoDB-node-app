import axios from 'axios'
import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM, ITEM_LOADING} from './types'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/items')
        .then(response => {
            dispatch({
                type: GET_ITEMS,
                payload: response.data
            })
        })
}

export const removeItem = (id) => dispatch => {
    axios.delete(`/api/items/${id}`)
        .then( response => {
            dispatch({
                type: REMOVE_ITEM,
                payload: id
            })
        })
}


export const addItem = (item) => dispatch => {
    axios.post('/api/items', item)
        .then(response => {
            dispatch({
                type: ADD_ITEM,
                payload: item
            })
        })
}

export const setItemsLoading = () => {
    return{
        type: ITEM_LOADING
    }
}