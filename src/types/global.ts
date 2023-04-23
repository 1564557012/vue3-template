// 接口返回结构
export interface Result<T> {
	// 请求状态
	code: number;
	// 请求数据
	data?: T;
	// 请求提示
	message?: string;
}
