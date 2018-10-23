<template>
  <div class='erek-editor' :style='{width: width}'>
    <erek-menu
      :bgMenu="selectTheme.bgMenu" 
      :menuBorder="selectTheme.menuBorder"
      :menuColor="selectTheme.menuColor"
      :hoverColor="selectTheme.hoverColor"
    ></erek-menu>
    <div class='content'>
      <div class='erek-editor-edit' :style='{height: height, backgroundColor: selectTheme.bgLeft}'>
        <textarea
          class='erek-editor-textarea'
          placeholder="say something ..."
          v-model='markdString'
          :style='{height: height, backgroundColor: selectTheme.bgLeft}'
        ></textarea>
      </div>
      <div class='erek-editor-html' v-html='htmlString' :style='{height: height, backgroundColor: selectTheme.bgRight}'>
      </div>
    </div>
  </div>
</template>
<script>
import ErekMenu from './erek-editor-menu.vue'
import marked from 'marked'
import theme from '../lib/theme'
export default {
  name: 'ErekEditor',
  components: {
    ErekMenu
  },
  props: {
    width: {
      type: String,
      default: '900px'
    },
    height: {
      type: String,
      default: '480px'
    },
    defaultText:{
      type: String,
      default: ''
    },
    theme: {
      type: Object,
      default: 'default' 
    }
  },
  data () {
    return {
      markdString: '',
      htmlString: ''
    }
  },
  computed: {
    selectTheme () { // 主题的改变
      if (theme.hasOwnProperty(this.theme)) {
        return theme[this.theme]
      } else {
        return theme.default
      }
    }
  },
  watch: {
    markdString (value) {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      })
      this.htmlString = marked(value)
    }
  },
  mounted() {
    this.markdString = this.defaultText
  },
}
</script>

<style scoped lang='less'>
.erek-editor {
  background-color: white;
  border-radius: 4px;
  min-width: 700px;
  min-height: 400px;
  overflow: hidden;
  margin: 30px auto;

  .content {
    display: flex;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    height: calcc(100%-40%);
    width: 100%;
    text-align: left;
    font-size: 16px;
    border: 1px solid #eeeff1;
    border-top: none;

    > .erek-editor-edit {
      padding: 15px 0 15px 10px;
      width: 50%;
      overflow: auto;
      word-wrap: break-word;

      > .erek-editor-textarea {
        width: 100%;
        border: none;
        font-size: 13px;
        resize:none;
        padding: 15px;
        outline:none;
        line-height: 20px;
      }
    }

    > .erek-editor-html {
      padding: 15px 0 15px 15px;
      overflow-y:scroll;
      width: 50%;
      font-size: 13px;
      line-height: 26px;
    }
  }
}
</style>

