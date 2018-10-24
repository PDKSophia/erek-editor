<template>
  <div id='app'>
    <header>
      <h1>Erek Editor - 可爱又简单的富文本编辑器</h1>
      <h3>Cute and Simple rich text editor，Support MarkDown format ...</h3>
    </header>
    <div class='themes' @click='selectTheme'>
      <span data-theme='default' style='width:29px;height:29px'></span>
      <span data-theme='dark'></span>
      <span data-theme='green'></span>
      <span data-theme='gray'></span>
      <span data-theme='princess'></span>
      <span data-theme='purple'></span>
    </div>
    <erek-editor
      :width='width'
      :height='height'
      :defaultText='text'
      :theme='theme'
    >
    </erek-editor>
    <footer>
      <p class='copyright'>Power By <a href='https://github.com/PDKSophia/erek-editror'>彭道宽</a></p>
      <p class='copyright'>Copyright © Erek-Editor</p>
    </footer>
  </div>
</template>
<script>
import ErekEditor from './components/erek-editor.vue'
import text from './lib/text'
import theme from './lib/theme'
export default {
  name: 'App',
  components: {
    ErekEditor
  },
  data () {
    return {
      width: '1000px',
      height: '460px',
      text: text,
      theme: 'default'
    }
  },
  methods: {
    selectTheme (event) {
      if (event.target.tagName.toLowerCase() === 'span') {
        let theme = event.target.dataset.theme
        let spans = event.target.parentNode.querySelectorAll('span')
        for (let i = 0; i < spans.length; i++) {
          spans[i].style = '' // 把所有样式为空
        }
        this.theme = theme
        event.target.style.height = '29px'
        event.target.style.width = '29px'
      }
      // console.log(this.theme)
    }
  }
}
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
html, body{
  height: 100%;
  width: 100%;
}
header{
  background-color: white;
  height: 100px;
  text-align: center;
  color: rgb(39, 41, 44);
  padding-top: 30px;

  > h3 {
    margin-top: 20px;
  }
}
footer {
  margin-top: 50px;
  text-align: center;
  line-height: 30px;

  > .copyright {
    font-size: 13px;
  }
}
a{
  text-decoration: none;
  color: rgb(241, 26, 26);
}
.themes{
  margin-top: 30px;
  justify-content: center;
  width: 100%;
  display: flex;
  align-items: center;
  span{
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: red;
    border-radius: 50%;
    margin: 0 6px;
    border: 2px solid #e0e0e0;
    cursor: pointer;
    color: white;
    &:nth-child(1){
      background-color: #35495e;
    }
    &:nth-child(2){
      background-color: #232323;
    }
    &:nth-child(3){
      background-color: #41b883;
    }
    &:nth-child(4){
      background-color: #fafbfc;
    }
    &:nth-child(5){
      background-color: #f05959;
    }
    &:nth-child(6){
      background-color: #6659bf;
    }
  }
}
</style>

