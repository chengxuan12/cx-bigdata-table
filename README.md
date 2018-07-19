# cx-bigdata-table

> 源地址 https://github.com/lison16/vue-bigdata-table
> Powerful, table components optimized for large amounts of data, based on Vue2.0

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run dist
```

## Feature

采用虚拟渲染方案，解决大数据量 DOM 渲染性能瓶颈，原理请看文章[实战 Vue 百万条数据渲染表格组件开发](https://juejin.im/post/5ad876a36fb9a045df1720b9?utm_source=gold_browser_extension)

## API

### props:

|       属性        | 说明                                                                                                                                                                         |       类型     |                         默认值                        |
| :---------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------: | :---------------------------------------------------: |
|     showIndex     | 是否显示序列号列                                                                                                                                                             |     Boolean    |                         false                         |
|       value       |   表格数据，可以使用 v-model 双向绑定                                                                                                                                        |      Array     |                           -                           |
|     rowHeight     | 表格行高                                                                                                                                                                     |     Number     |                           48                          |
|       fixed       |   固定表头，设为 true 后表头不随表格滚动                                                                                                                                     |     Boolean    |                         false                         |
| fixedWrapperWidth | 设为 true 后表格列宽总是平分容器宽度减去 indexWidth 后的宽度                                                                                                                 |     Boolean    |                         false                         |
|   disabledHover   |   是否取消鼠标悬浮高亮效果                                                                                                                                                   |     Boolean    |                          true                         |
|      columns      | 表头数组，元素为单个表头的对象，{title: 'xxx', render: (h) => {}, cellRender: (h, params) => {}},默认只需要 title 属性，render 是表头渲染函数，cellRender 是列单元格渲染函数 |     Array      |                           -                           |
|     colWidth      |   列宽，如果单独列中指定了宽度则按单独列，如果所有宽度加起来比容器宽度小，则平分宽度，否则用 colWidth                                                                        |     Number     |                          100                          |
|   headerHeight    |   表头高度                                                                                                                                                                   |     Number     |                           52                          |
|   headerTrStyle   | 表头 tr 样式                                                                                                                                                                 |     Object     |                           {}                          |
|    indexWidth     |   序列号列宽，如果没有设置，则会根据数据行数自动计算合适的宽度                                                                                                               |     Number     |                           -                           |
|    indexRender    |   序列号渲染 render                                                                                                                                                          |    Function    |      (h, index) => {return h('span', index + 1);}     |
|      stripe       |   是否显示斑马线                                                                                                                                                             |     Boolean    |                         false                         |
|  atLeftCellPosi   |   指定当前鼠标在表头单元格左侧 atLeftCellPosi 像素处                                                                                                                         |     Number     |                           80                          |
|  atRightCellPosi  |   指定当前鼠标在表头单元格右侧 atRightCellPosi 像素处                                                                                                                        |     Number     |                           80                          |
|     fixedCol      |   固定的列的范围，[0, fixedCol]，设为 2 即固定 0，1，2 列，这三列横向不滚动，固定后列横向不随表格滚动                                                                        |     Number     |                           -1                          |
|     appendNum     |   根据表格容器高度计算内置单个表格（1/3）渲染的行数基础上额外渲染的行数，行数越多表格接替渲染效果越好，但越耗性能                                                            |     Number     |                           15                          |
|      canEdit      |   是否可编辑                                                                                                                                                                 |     Boolean    |                         false                         |
|   startEditType   |   触发编辑单元格的方式，目前只支持 dblclick 一种，即鼠标双击单元格                                                                                                           |     String     |                       'dblclick'                      |
|  editCellRender   |   自定义编辑单元格的 render 函数，如果不指定则使用默认内置的 editRender，可参考 components/input-render.js                                                                   |    Funciton    |                       editRender                      |
|    beforeSave     |   保存修改的单元格内容之前的钩子，如果该函数返回 false，则阻止保存                                                                                                           |    Function    |  ({ row, col, value, initRowIndex }) => {return true} |
|    selectable     |   是否可选择单元格，开启后效果就像 excel 点击一个单元格然后拖动选择                                                                                                          |     Boolean    |                         false                         |
|       paste       |   是否可粘贴，设为 true 后可划选要粘贴的位置，然后 ctrl+v 粘贴从其他地方复制的表格数据，设为 true 则 selectable 将开启                                                       |     Boolean    |                         false                         |
|     sortable      |   是否可排序                                                                                                                                                                 |     Boolean    |                         false                         |
|     sortIndex     |   开启排序的列序号数组或序号                                                                                                                                                 |  Array, Number |                           -                           |
|    defaultSort    |   数据默认排序方式，是一个包含一对键值对的对象，键是要按其排序的序号，值是'up'（升序）或'down'（降序）（为方便记忆，并没有使用'asc'和'desc'）                                |     Object     |                           -                           |

### Event:

|       事件名        | 说明                   |                                                                                                     返回值                                                                                                   |
| :-----------------: | ---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   on-success-save   |   编辑保存成功时触发   |                   row(当前行号，指当前在表格中的行号), col(列号，序列号列列号为 0), value(该单元格修改后的值), initRowIndex(初始行号，即改行数据原本在数据二维数组中的索引，不受排序等影响)                  |
|    on-fail-save     |   编辑保存失败时触发   |                                                                                               同 on-success-save                                                                                             |
|     on-click-tr     |   点击行时触发         |                                                                                               index（当前行号）                                                                                              |
|     on-click-td     | 点击单元格时触发       |                                                                                             {row, col}，是个对象                                                                                             |
| on-moving-on-header |   鼠标在表头移动时触发 |   鼠标事件对象，其中还添加了一些属性：colIndex(当前所在的列的索引号), atRightGivenArea(是否在当前单元格右侧 atRightCellPosi 指定的距离内), atLeftGivenArea(是否在当前单元格左侧 atLeftCellPosi 指定的距离内) |
|     on-click-tr     |   点击行时触发         |                                                                                               index（当前行号）                                                                                              |

### Methods:

|     方法      | 说明                                                                                                           |    参数   |
| :-----------: | -------------------------------------------------------------------------------------------------------------- | :-------: |
|    resize     | 涉及到表格容器尺寸变化或数据变化的情况需要调用此方法                                                           |     -     |
| getScrollLeft | 用于获取当前横向滚动的距离                                                                                     |     -     |
|  scrollToRow  | 跳转到指定行号的一行，这里的行号是从 0 开始的                                                                  |   index   |
|   editCell    | canEdit 为 true 时调用此方法使第 row+1 行第 col+1 列变为编辑状态，这里的行列指的是表格显示的行和除序列号列的列 |  row, col |
