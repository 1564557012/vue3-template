<script setup lang="ts">
import{useAppStore} from '@/store/modules/appStore'
const appStore=useAppStore();

</script>
<template>
  <el-config-provider :locale="appStore.el_locale" :size="appStore.size" :message="appStore.message">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped>

</style>
