<template>
  <div id='app'>
    <header>
      <h1>Erek Editor - 可爱又简单的富文本编辑器</h1>
      <h3>Cute and Simple rich text editor，Support MarkDown format ...</h3>
    </header>
    <erek-editor
      :width=width
      :height=height
      :defaultText=text
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
import text from './defaultText/text'
export default {
  name: 'App',
  components: {
    ErekEditor
  },
  data () {
    return {
      width: '1000px',
      height: '520px',
      text: text
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
</style>

