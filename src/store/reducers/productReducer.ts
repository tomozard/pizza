import { Reducer } from 'react'
import { productActions } from '../actions/productActions'
import { IProduct } from '../../interfaces'
import { AxiosError } from 'axios'

interface IProductState {
	fetching: boolean
	products?: IProduct[] | null
	error?: AxiosError| null
}

const initialProductState = {
	fetching: false,
	products: null
}

const productReducer: Reducer<IProductState, productActions> = (
	state = initialProductState,
	action
) => {
	switch (action.type) {
		case 'FETCH_PRODUCT':
			return {
				...state,
				fetching: true,
				error: null
			} as IProductState
		case 'FETCH_PRODUCT_SUCCESS':
			return {
				...state,
				fetching: false,
				products: action.products
			} as IProductState
		case 'FETCH_PRODUCT_ERROR':
			return {
				...state,
				fetching: false,
				error: action.error
			} as IProductState
		default:
			return state
	}
}

export default productReducer
