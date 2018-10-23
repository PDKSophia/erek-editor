import ErekEditor from './erek-editor.vue'
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('ErekEditor', ErekEditor)
}

export default ErekEditor