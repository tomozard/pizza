import api from './api'
import { IProduct } from '../../interfaces'

const getProduct = async (): Promise<IProduct[]> => {
	const url: string = '/products/'

	const { data } = await api.get(url)
	const products: IProduct[] = data

	return products
}

const productApi = {
	getProduct
}

export default productApi
