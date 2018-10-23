<template>
  <div class='erek-editor' :style='{width: width, height: height}'>
    <erek-menu></erek-menu>
    <div class='content'>
      <div class='erek-editor-edit' style='backgroundColor: #eceae8' :style='{height: height}'>
        <textarea
          class='erek-editor-textarea'
          placeholder="say something ..."
          v-model='markdString'
          :style='{height: height}'
        ></textarea>
      </div>
      <div class='erek-editor-html' style='backgroundColor: #f5f5f5' v-html='htmlString' :style='{height: height}'>
      </div>
    </div>
  </div>
</template>
<script>
import ErekMenu from './erek-editor-menu.vue'
import marked from 'marked'
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
      default: '500px'
    },
    defaultText:{
      type: String,
      default: ''
    }
  },
  data () {
    return {
      markdString: '',
      htmlString: ''
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
      width: 50%;
      overflow: auto;
      word-wrap: break-word;

      > .erek-editor-textarea {
        width: 100%;
        border: none;
        font-size: 13px;
        resize:none;
        padding: 15px;
        line-height: 30px;
        outline:none;
        background: #eceae8
      }
    }

    > .erek-editor-html {
      overflow-y:scroll;
      width: 50%;
      padding: 15px;
      font-size: 13px;
      line-height: 30px;
    }
  }
}
</style>

