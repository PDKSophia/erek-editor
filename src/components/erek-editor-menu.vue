<template>
  <div class='erek-editor-menu'
    :style='{backgroundColor: bgMenu, border: menuBorder, color: menuColor}'>
    <div class='menu-command'>
      <erek-button icon='iconfont icon-heading'></erek-button>
      <erek-button icon='iconfont icon-bold' @click.native='insertTextContent(" ***Blod*** ")'></erek-button>
      <erek-button icon='iconfont icon-italic' @click.native='insertTextContent(" *italic* ")'></erek-button>
      <!-- <erek-button icon='iconfont icon-strikethrough' ></erek-button> -->
      <erek-button icon='iconfont icon-ol' @click.native="insertTextContent('1. Ordered List\n')"></erek-button>
      <erek-button icon='iconfont icon-ul' @click.native="insertTextContent('- Unordered List\n')"></erek-button>
      <erek-button icon='iconfont icon-quote' @click.native="insertTextContent(' > Blockquote\n\n')"></erek-button>
      <erek-button icon='iconfont icon-code' @click.native="insertTextContent('```\nCode\n```\n')"></erek-button>
      <erek-button icon='iconfont icon-table'>
        <erek-table :hoverColor='hoverColor' @textChange='updateTable'></erek-table>
      </erek-button>
      <erek-button icon='iconfont icon-image'></erek-button>
      <erek-button icon='iconfont icon-link' @click.native="insertTextContent('[PDKSophia](https://github.com/PDKSophia)\n')"></erek-button>
      <erek-button icon='iconfont icon-line' @click.native="insertTextContent('\n***\n')"></erek-button>
    </div>
  </div>
</template>

<script>
import ErekButton from './erek-editor-button.vue'
import ErekTable from './erek-editor-table.vue'
import insertText from '../lib/insertText'

export default {
  name: 'ErekEditorMenu',
  components: {
    ErekButton,
    ErekTable
  },
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
  methods: {
    insertTextContent (value) {
      let content = document.querySelector('.erek-editor-textarea')
      insertText(content, value)
      this.$emit('textContentChange', content.value)
    },
    updateTable (textContent) {
      this.$emit('textContentChange', textContent)
    }
  },
  mounted() {
    // console.log(this.bgMenu)
  },
}
</script>

<style scoped lang='less'>
.erek-editor-menu {
  display: flex;
  height: 40px;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 0 15px;
  border-radius: 6px 6px 0px 0px;
  position: relative;

  .menu-command {
    display: flex;
  }
}
</style>
