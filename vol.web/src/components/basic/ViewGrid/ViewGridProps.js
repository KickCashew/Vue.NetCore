//兼容原有jsx代码、同时生成props方法
import ViewGridFilter from './ViewGridFilter.js'
export default function () {
  //生成props方法
  const gridPropsFilter = {}
  Object.keys(ViewGridFilter).forEach((x) => {
    gridPropsFilter[x] = {
      type: Function,
      default: ViewGridFilter[x]
    }
  })
  return {
    ...gridPropsFilter,
    loadTreeChildren: null,
    columns: {
      //当前表的配置信息
      type: Array,
      default: () => {
        return []
      }
    },
    detail: {
      //从表明细配置
      type: Object,
      default: () => {
        return {
          columns: [], //从表列
          sortName: '' //从表排序字段
        }
      }
    },
    details: {
      //从表明细配置
      type: Array,
      default: () => {
        return []
      }
    },
    editFormFields: {
      //新建、编辑字段(key/value)
      type: Object,
      default: () => {
        return {}
      }
    },
    editFormOptions: {
      //新建、编辑配置信息
      type: Array,
      default: () => {
        return []
      }
    },
    searchFormFields: {
      //查询字段(key/value)
      type: Object,
      default: () => {
        return {}
      }
    },
    searchFormOptions: {
      //查询配置信息(key/value)
      type: Array,
      default: () => {
        return []
      }
    },
    table: {
      //表的配置信息：主键、排序等
      type: Object,
      default: () => {
        return { sortName: '', key: '', newTabEdit: false }
      }
    },
    extend: {
      //表的扩展方法与组件都合并到此属性中
      type: Object,
      default: () => {
        return {}
      }
    },
    editTabs: {
      type: Array,
      default: null
    }
  }
}
