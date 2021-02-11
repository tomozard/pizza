import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import productApi from '../../services/api/productApi'
import { IProduct } from '../../interfaces'
import { AxiosError } from 'axios'

// Actions
export interface IFetchProductAction extends Action<'FETCH_PRODUCT'> {}

export interface IFetchProductSucessAction
	extends Action<'FETCH_PRODUCT_SUCCESS'> {
	products: IProduct[]
}

export interface IFetchProductErrorAction
	extends Action<'FETCH_PRODUCT_ERROR'> {
	error: AxiosError
}

// Action types
export type productActions =
	| IFetchProductAction
	| IFetchProductSucessAction
	| IFetchProductErrorAction

// Action Creator
export const getProductActionCreator: ActionCreator<
	ThunkAction<
		Promise<IFetchProductSucessAction | IFetchProductErrorAction>,
		IProduct,
		null,
		IFetchProductSucessAction
	>
> = () => async (dispatch: Dispatch) => {
	const fetchProductAction: IFetchProductAction = {
		type: 'FETCH_PRODUCT'
	}
	dispatch(fetchProductAction)

	try {
		// Try to fetch a random person, and set in state
		const products: IProduct[] = await productApi.getProduct()
		const fetchProductSuccessAction: IFetchProductSucessAction = {
			type: 'FETCH_PRODUCT_SUCCESS',
			products: products
		}
		return dispatch(fetchProductSuccessAction)
	} catch (error) {
		// Catch error fetching random person and set in redux
		console.log('error in action creator')
		const axiosError = error as AxiosError
		const fetchProductErrorAction: IFetchProductErrorAction = {
			type: 'FETCH_PRODUCT_ERROR',
			error: axiosError
		}
		return dispatch(fetchProductErrorAction)
	}
}