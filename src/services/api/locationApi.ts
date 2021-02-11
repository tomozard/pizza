import api from './api'
import { ILocation } from '../../interfaces'

const getLocation = async (): Promise<ILocation> => {
	const url: string = '/address/location'

	const { data } = await api.get(url)
	const location: ILocation = data

	return location
}

const productApi = {
	getLocation
}

export default productApi
