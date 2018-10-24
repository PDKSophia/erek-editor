<template>
  <div class='erek-editor-dropdown'>
    <slot></slot>
    <span class='table-block'></span>
  </div>
</template>

<script>
export default {
  name: 'ErekEditorDropDown'
}
</script>

<style lang='less'>
.erek-editor-dropdown {
  position: absolute;
  background: #fff;
  left: 0;
  top: 35px;
  border: 1px solid #eeeff1;
  box-shadow: 0 0 4px rgba(0,0,0,0.5);
  z-index: 200;
  
  > .table-block {
    width: 100%;
    height: 15px;
    background: red;
    position: absolute;
    left: 0;
    top: -15px;
    opacity: 0;
  }
}
</style>
