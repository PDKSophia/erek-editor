<template>
  <div :style='{backgroundColor: bgMenu, border: menuBorder, color: menuColor}'>
    <p class="erek-editor-btn-menu">我是按钮栏, 开发中...</p>
  </div>
</template>

<script>
export default {
  name: 'ErekEditorMenu',
  props: {
    bgMenu: {
      type: String,
      default: ''
    },
    menuBorder: {
      type: String,
      default: ''
    },
    menuColor: {
      type: String,
      defalut: ''
    },
    hoverColor: {
      type: String,
      defalut: ''
    }
  },
  mounted() {
    console.log(this.bgMenu)
  },
}
</script>

<style scoped lang='less'>
.erek-editor-btn-menu {
  text-align: center;
  padding: 10px;
}
</style>
