<template>
  <div class='erek-editor' :style='{width: width}'>
    <erek-menu
      :bgMenu="selectTheme.bgMenu" 
      :menuBorder="selectTheme.menuBorder"
      :menuColor="selectTheme.menuColor"
      :hoverColor="selectTheme.hoverColor"
      @textContentChange='updateMarkdownString'
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

      setTimeout(() => {
        this.parseHtml()
      })
    }
  },
  methods: {
    handleLayoutControl () {
      let erekLayout = document.querySelector('.erek-editor-layout')
    },
    updateMarkdownString (data) {
      this.markdString = data
    },
    parseHtml () {
      let style = {
        ul: `
              margin: 10px 20px;
              list-style-type: square;
              padding: 0;
            `,
        ol: `
              margin: 10px 20px;
              list-style-type: decimal;
              padding: 0;
            `,
        li: `
              display: list-item;
              padding: 0;
            `,
        hr: `
              margin: 15px 0;
              border-top: 1px solid #eeeff1;
            `,
        pre: `
              display: block;
              margin: 10px 0;
              padding: 8px;
              border-radius: 4px;
              background-color: #f2f2f2;
              color: #656565;
              font-size: 14px;
             `,
        blockquote: `
              display: block;
              border-left: 4px solid #ddd;
              margin: 15px 0;
              padding: 0 15px;
            `,
        img: `
               margin: 20px 0;
             `,
        a: `
            color: #41b883;
           `,
        table: `
            border: 1px solid #eee;
            border-collapse: collapse;
          `,
        tr: `
            border: 1px solid #eee;
          `,
        th: `
            padding: 8px 30px;
            border-right: 1px solid #eee;
            background-color: #f2f2f2;
          `,
        td: `
            padding: 8px 30px;
            border-right: 1px solid #eee;
          `
      }
      let html = document.getElementsByClassName('erek-editor-html')[0]
      let tagNames = Object.keys(style)
      for (let i = 0; i < tagNames.length; i++) {
        let _tagNames = html.getElementsByTagName(tagNames[i])
        if (_tagNames.length > 0) {
          for (let j = 0; j < _tagNames.length; j++) {
            _tagNames[j].style.cssText = style[tagNames[i]]
          }
        }
      }
    }
  },
  mounted() {
    this.markdString = this.defaultText
    this.handleLayoutControl()
  },
}
</script>

<style lang='less'>
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
      padding: 15px 15px 15px 10px;
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
      padding: 15px 15px 15px 15px;
      overflow-y:scroll;
      width: 50%;
      font-size: 13px;
      line-height: 26px;

      ul {
        margin: 10px 20px;
        list-style-type: square;
        padding: 0;
      }

      ol {
        margin: 10px 20px;
        list-style-type: decimal;
        padding: 0;
      }

      li {
        display: list-item;
        padding: 0;
      }

      hr {
        margin: 15px 0;
        border-top: 1px solid #eeeff1;
      }

      pre {
        display: block;
        margin: 10px 0;
        padding: 8px;
        border-radius: 4px;
        background-color: #f2f2f2;
        color: #656565;
        font-size: 14px;
      }

      blockquote {
        display: block;
        border-left: 4px solid #ddd;
        margin: 15px 0;
        padding: 0 15px;
      }

      img {
        margin: 20px 0;
      }

      a {
        color: #41b883;
      }
      
      table {
        border: 1px solid #eee;
        border-collapse: collapse;
      }

      tr {
        border: 1px solid #eee;
      }

      th {
        padding: 8px 30px;
        border-right: 1px solid #eee;
        background: #f2f2f2;
      }
      
      td {
        padding: 8px 30px;
        border-right: 1px solid #eee;
      }
    }
  }
}
</style>

