let text = 
`## Erek Editor
\`\`\`
npm install --save erek-editor
\`\`\`
### Usage
\`\`\`
import ErekEditor from 'erek-editor'
export default {
  ...
  components: {
    ErekEditor
  },
  methods: {
  	showHtml (data) {
      console.log(data)
    }
  },
  data () {
    return {
      width: '1000px',
      height: '500px',
      text: ''
    }
  }
  ...
}
\`\`\`
\`\`\`
<ErekEditor 
  :width=width
  :height=height
  :defaultText=text >

</ErekEditor>
\`\`\`
`
export default text