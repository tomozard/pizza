import axios from 'axios'

const baseAxios = axios.create({
	baseURL: 'https://test.pizzahut1150.com/api/'
})

const api = (() => {
	const post = (url: any, data: any, config: any) => baseAxios.post(url, data, config)

	const get = (url: any, config?: any) => baseAxios.get(url, config)

	return {
		post,
		get
	}
})()

export default api
