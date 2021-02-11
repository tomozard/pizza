import { Action, ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import locationApi from '../../services/api/locationApi'
import { ILocation } from '../../interfaces'
import { AxiosError } from 'axios'

// Actions
export interface IFetchLocationAction extends Action<'FETCH_LOCATION'> {}

export interface IFetchLocationSuccessAction
	extends Action<'FETCH_LOCATION_SUCCESS'> {
	location: ILocation
}

export interface IFetchLocationErrorAction
	extends Action<'FETCH_LOCATION_ERROR'> {
	error: AxiosError
}

// Action types
export type locationActions =
	| IFetchLocationAction
	| IFetchLocationSuccessAction
	| IFetchLocationErrorAction

// Action Creator
export const getLocationActionCreator: ActionCreator<
	ThunkAction<
		Promise<IFetchLocationSuccessAction | IFetchLocationErrorAction>,
		ILocation,
		null,
		IFetchLocationSuccessAction
	>
> = () => async (dispatch: Dispatch) => {
	const fetchLocationAction: IFetchLocationAction = {
		type: 'FETCH_LOCATION'
	}
	dispatch(fetchLocationAction)

	try {
		// Try to fetch a random person, and set in state
		const location: ILocation = await locationApi.getLocation()
		const fetchLocationSuccessAction: IFetchLocationSuccessAction = {
			type: 'FETCH_LOCATION_SUCCESS',
			location: location
		}
		return dispatch(fetchLocationSuccessAction)
	} catch (error) {
		// Catch error fetching random person and set in redux
		console.log('error in action creator')
		const axiosError = error as AxiosError
		const fetchLocationErrorAction: IFetchLocationErrorAction = {
			type: 'FETCH_LOCATION_ERROR',
			error: axiosError
		}
		return dispatch(fetchLocationErrorAction)
	}
}