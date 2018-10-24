<template>
  <div class='erek-editor-button' @click='showIconSlot' @mouseleave='hideIconSlot'>
    <i :class='icon' :data-layout='layout'></i>
    <slot v-if='slot'></slot>
  </div>
</template>

<script>
export default {
  name: 'ErekEditorButton',
  props: {
    icon: {
      type: String,
      default: 'iconfont icon-heading'
    },
    layout: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      slot: false
    }
  },
  methods: {
    showIconSlot () {
      this.slot === false ? this.slot = true : this.slot = false
    },
    hideIconSlot () {
      this.slot = false
    }
  },
  mounted() {
  },
}
</script>

<style lang='less'>
.erek-editor-button {
//   width: 24px;
//   height: 24px;
  position: relative;
  outline: 0;
  cursor: pointer;
  margin-left: 20px;
  border-radius: 4px;
  display: flex;
  border: 0;
  background-color: transparent;
  justify-content: center;
  color: inherit;

  &:first-child {
    margin-left: 0;
  }

  i {
    display: inline-block;
    line-height: 24px;
    width: 24px;
    font-size: 18px;
    color: inherit;
    text-align: center;
  }
}
</style>
