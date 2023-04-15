<script setup lang="ts">
import { useRouter} from "vue-router"
const router= useRouter();
const buttonClick = () => {
    router.push("/home")
}
</script>
<template>
    <div>
        <el-button type="primary" @click="buttonClick">123</el-button>
    </div>
</template>

<style scoped lang='sass'>
</style>