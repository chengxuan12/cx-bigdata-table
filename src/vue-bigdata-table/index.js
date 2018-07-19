import vueBigdataTable from './vue-bigdata-table.vue'
const bigdataTable = {
  install(Vue, options) {
    Vue.component(vueBigdataTable.name, vueBigdataTable)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(bigdataTable)
}
export default bigdataTable
