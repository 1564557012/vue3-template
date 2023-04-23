import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { MethodEnum } from '@/enums/http-enum';
import { Result } from '@/types/global';

interface HiAxiosRequestConfig extends AxiosRequestConfig {
	useCustomErrorHandler?: boolean;
}

const service: AxiosInstance = axios.create({
	baseURL: '/api',
	timeout: 0,
});
// 请求之前拦截
service.interceptors.request.use(
	(config) => config,
	(error) => Promise.reject(error)
);
// 请求之后拦截
service.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
);
const request = <T>(
	method: MethodEnum,
	url: string,
	params?: object,
	options?: HiAxiosRequestConfig
): Promise<Result<T>> =>
	new Promise((resolve) => {
		const config = { method, url, ...options };
		if (method === MethodEnum.GET || method === MethodEnum.DELETE) {
			config.params = params;
		} else {
			config.data = params;
		}
		service
			.request(config)
			.then((res) => {
				resolve({ code: 0, data: res.data, message: '' });
			})
			.catch((err) => {
				resolve({ code: -1, data: err.response, message: '' });
			});
	});

export default request;
