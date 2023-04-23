import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import dayjs from 'dayjs';
// 导入 Element Plus 中英文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';
// 导入dayjs语言包
import dayjsEn from 'dayjs/locale/en';
import dayjsZhCn from 'dayjs/locale/zh-cn';
import type { AppStore } from './type';

export const useAppStore = defineStore('appStore', {
	state: (): AppStore => ({
		locale: useStorage('locale', 'zh-CN'), // 默认中文
		size: useStorage('size', 'default'),
		message: {
			max: 3,
		},
	}),
	getters: {
		el_locale(state) {
			if (state.locale === 'en-US') {
				dayjs.locale(dayjsEn);
				return en;
			}
			if (state.locale === 'zh-CN') {
				dayjs.locale(dayjsZhCn);
				return zhCn;
			}
			return zhCn;
		},
	},
	actions: {},
});
