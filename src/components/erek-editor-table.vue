<template>
  <erek-drop-down>
    <ul class='erek-editor-table'></ul>
  </erek-drop-down>
</template>

<script>
import ErekDropDown from './erek-editor-dropdown.vue'
import insertText from '../lib/insertText'

export default {
  name: 'ErekEditorTable',
  components: {
    ErekDropDown
  },
  props: {
    hoverColor: {
      type: String,
      default: '#232323'
    }
  },
  computed: {
    filterColor () {
      if (this.hoverColor === '#fafbfc') {
        return '#232323'
      } else {
        return this.hoverColor
      }
    }
  },
  methods: {
    insertTextContent (string) {
      let content = document.querySelector('.erek-editor-textarea')
      insertText(content, string)
      this.$emit('textContentChange', content.value)
    }
  },
  mounted() {
    let table = document.querySelector('.erek-editor-table')
    let length = 24
    let x = 0, y = 0
    for (let i = 0; i < length; i++) {
      let setX = i % 6 + 1
      let setY = parseInt(i/6) + 1
      let li = document.createElement('li')
      li.setAttribute('data-x', setX)
      li.setAttribute('data-y', setY)
      table.appendChild(li)
    }

    table.addEventListener('mouseover', evt => {
      if (evt.target.tagName === 'LI') {
        x = evt.target.getAttribute('data-x')
        y = evt.target.getAttribute('data-y')
        let lis = table.querySelectorAll('li')
        for (let i = 0; i < lis.length; i++) {
          lis[i].style.backgroundColor = '#e0e0e0'
          if (lis[i].dataset.x <= x && lis[i].dataset.y <= y) {
            lis[i].style.backgroundColor = this.filterColor
          }
        }
      }
    })

    table.addEventListener('click', evt => {
      if (x && y ) {
        let th = '| Head '
        let td = '| Data '
        let tl = '| --- '
        let str = ''
        let ths = '', tds = '', tls = ''

        for (let i = 0; i < x; i++) {
          ths = ths.concat(th)
          tls = tls.concat(tl)
        }

        for (let j = 0; j < y; j++) {
          for (let k = 0; k < x; k++) {
            tds = tds.concat(td)
          }
          tds += ' |\n'
        }

        ths += ' |\n'
        tls += ' |\n'
        str += '\n' + ths + tls + tds
        this.insertTextContent(str)
      }
    })
  },
}
</script>

<style lang='less'>
ul.erek-editor-table {
  margin: 3px;
  width: 160px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;

  li {
    width: 20px;
    height: 20px;
    float: left;
    margin: 3px;
    background: black;
    border-radius: 2px;
    background-color: #e0e0e0;
    &:hover {
      background: #232323;
    }
  }
}
</style>
