<script setup lang='ts'>
import { computed } from 'vue'
// import '@/assets/iocnfont/images/empty.png'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
})
const isImage = computed(() => {
  return props.name.includes('.')
})
console.log(isImage.value);

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
  <img class="img-icon" :src="getIconName" alt="" v-if="isImage">
  <svg class="svg-icon" aria-hidden="true" v-else="isImage">
    <use :xlink:href="getIconName" />
  </svg>
</template>

<style scoped lang='scss'>
.svg-icon {
  width: 100%;
  height: 100%;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
.img-icon{
  width: 100%;
  height: 100%;
}

</style>