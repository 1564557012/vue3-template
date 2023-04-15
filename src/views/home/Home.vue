<script setup lang="ts">
import test from '@/components/test.vue';
import { useRouter} from "vue-router"

const router= useRouter();
const buttonClick = () => {
    ElMessage.success("123")
    router.push("/")
}
const a = {
    a: 1
}

</script>
<template>
    <el-button type="primary" @click="buttonClick">123</el-button>
    <test></test>
</template>