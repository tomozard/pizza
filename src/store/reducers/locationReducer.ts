import { Reducer } from 'react'
import { locationActions } from '../actions/locationActions'
import { ILocation } from '../../interfaces'
import { AxiosError } from 'axios'

interface ILocationState {
	fetching: boolean
	location?: ILocation | null
	error?: AxiosError| null
}

const initialLocationState = {
	fetching: false,
	location: null
}

const locationReducer: Reducer<ILocationState, locationActions> = (
	state = initialLocationState,
	action
) => {
	switch (action.type) {
		case 'FETCH_LOCATION':
			return {
				...state,
				fetching: true,
				error: null
			} as ILocationState
		case 'FETCH_LOCATION_SUCCESS':
			return {
				...state,
				fetching: false,
				location: action.location
			} as ILocationState
		case 'FETCH_LOCATION_ERROR':
			return {
				...state,
				fetching: false,
				error: action.error
			} as ILocationState
		default:
			return state
	}
}

export default locationReducer
