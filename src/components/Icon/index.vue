<script setup lang='ts'>

import { computed } from 'vue'


const props = defineProps({
  name: {
    type: String,
    required: true
  },
  tooltip: {
    type: String,
    required: false
  }
})
const isImage = computed(() => {
  return props.name.includes('.')
})
// 图标在 iconfont 中的名字
const getIconName = computed(() => {
  if (isImage.value) {
    return new URL(`../../assets/iconfont/images/${props.name}`, import.meta.url).href
  } else {
    return `#${props.name}`
  }
})


</script>
<template>
  <template v-if="!props.tooltip">
    <img class="img-icon" :src="getIconName" alt="" v-if="isImage">
    <svg class="svg-icon" aria-hidden="true" v-else="isImage">
      <use :xlink:href="getIconName" />
    </svg>
  </template>
  <el-tooltip :content="tooltip" v-bind="$attrs" v-else>
    <img class="img-icon" :src="getIconName" alt="" v-if="isImage">
    <svg class="svg-icon" aria-hidden="true" v-else="isImage">
      <use :xlink:href="getIconName" />
    </svg>
  </el-tooltip>
</template>

<style scoped lang='scss'>
.svg-icon {
  width: 100%;
  height: 100%;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}

.img-icon {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>