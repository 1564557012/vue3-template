import request from '@/utils/request';
import { MethodEnum } from '@/enums/http-enum';
import { VerificationRes, LoginParams, LoginRes } from './type';

export const getVerification = () =>
	request<VerificationRes>(MethodEnum.GET, '/chore/verification');
export const login = (params: LoginParams) =>
	request<LoginRes>(MethodEnum.POST, '/user/login', params);
