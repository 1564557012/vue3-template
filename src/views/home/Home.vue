<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onBeforeMount } from 'vue';

import { useDateFormat, useNow } from '@vueuse/core';
import dayjs from 'dayjs';

import { Expand, Fold } from '@element-plus/icons-vue';
import { useAppStore } from '@/store/modules/appStore';
import { useUserStore } from '@/store/modules/user';
import test from '@/components/test.vue';
import { getVerification, login } from '@/api/auth';

const router = useRouter();
const buttonClick = () => {
	ElMessage.success('123');
	router.push('/');
};
const a = {
	a: 1,
};
const userStore = useUserStore();
const appStore = useAppStore();
onBeforeMount(() => {
	console.log(userStore.userName);
	console.log(userStore.getUserNameStr);
	console.log(appStore.locale);
});
const localeChange = () => {
	if (appStore.locale === 'zh-CN') {
		appStore.locale = 'en-US';
	} else {
		appStore.locale = 'zh-CN';
	}
	document.location.reload();
};
const open = () => {
	ElMessageBox.confirm('确认？', {
		type: 'success',
	})
		.then(() => {
			ElMessage({
				type: 'success',
				message: 'Delete completed',
			});
		})
		.catch(() => {
			ElMessage({
				type: 'info',
				message: 'Delete canceled',
			});
		});
};
const sizeChange = () => {
	if (appStore.size === 'default') {
		appStore.size = 'small';
	} else {
		appStore.size = 'default';
	}
};
const messageClick = () => {
	ElMessage({
		type: 'success',
		message: 'sss',
	});
};
// 当前时间
const NowTime = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss ');
const get = () => {
	getVerification().then((res) => {
		console.log(res.data?.id);
	});
};
const getError = () => {
	login({ username: 'Root', password: '!Bcs#123' }).then((res) => {
		console.log(res);
	});
};
console.log(import.meta.env.VITE_BASE_URL);
</script>
<template>
	<el-button type="primary" @click="buttonClick">123</el-button>
	<el-button type="success" @click="buttonClick">123</el-button>
	<el-button type="info" @click="buttonClick">123</el-button>
	<el-button type="danger" @click="buttonClick">123</el-button>
	<el-button @click="buttonClick">123</el-button>
	<el-button @click="buttonClick" link>123</el-button>
	{{ userStore.userName }}
	{{ userStore.getUserNameStr }}
	<p>语言：{{ $t('home.title') }}</p>
	<test></test>
	<p>
		点击切换语言
		<el-button type="success" @click="localeChange">{{
			appStore.locale
		}}</el-button>
		<el-button type="success" @click="open">element国际化</el-button>
	</p>

	<p>
		<el-button type="success" @click="sizeChange">{{
			appStore.size
		}}</el-button>
	</p>
	<p>
		<el-button type="success" @click="messageClick">最多三次message</el-button>
	</p>
	<p>{{ NowTime }}</p>
	<p>{{ dayjs().format('YYYY MMMM DD A HH:mm:ss') }}</p>
	<p>
		<el-icon>
			<Expand />
		</el-icon>
		<el-icon>
			<Fold />
		</el-icon>
	</p>
	<p>
		2222
		<el-icon>
			<component :is="Expand"></component>
		</el-icon>
		<el-icon>
			<expand />
		</el-icon>
	</p>
	<p>
		<el-icon :size="40" color="green">
			<icon name="bcs-renwu" />
		</el-icon>
		<el-icon :size="60">
			<icon name="empty.png" tooltip="这是提示文字" effect="light" />
		</el-icon>
		<el-icon :size="22">
			<icon name="speed.png" tooltip="121212" />
		</el-icon>
	</p>
	<p>
		<img src="@/assets/iconfont/images/empty.png" alt="" />
	</p>
	<p>
		<el-button type="primary" @click="get"> 请求 </el-button>
		<el-button type="primary" @click="getError"> 错误请求 </el-button>
	</p>
</template>
