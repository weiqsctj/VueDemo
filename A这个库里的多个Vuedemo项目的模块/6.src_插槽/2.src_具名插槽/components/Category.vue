<!--
* @description 
* @fileName App.vue
* @author weiqsctj-薇清时
* @Email weiqsctj@126.com
* @par 修改日志:
* @version 版本:
* @date 2022/02/06 10:35:50
!-->
<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->

    <!-- 具名插槽有name名 -->
    <slot name="center"
      >我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot
    >
  <!-- 具名插槽有name名 -->  
    <slot name="footer"
      >我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot
    >
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title'],
}
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 400px;
}
h3 {
  text-align: center;
  background-color: orange;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>
