# header (spon-header)

> APP端顶部导航栏，支持自定义左右按钮，自定义标题，自定义是否吸附顶部。

> 三端统一组件，一般用在app端代替原生header，修改颜色，增加自定义左右按钮。

--------

## 引入

```javascript
const Header = require('components/weex-header/weex-header');

module.exports = {
  components: {
    'spon-header': Header,
  },
}
```

## 代码示例

吸附在页面顶部，底部有1px的线

```html
<spon-header border fixed title="我是吸附的标题"></spon-header>
```

设置左右自定义的操作区块

```html
<spon-header 
  :title="title" 
  :style="{marginTop: '200px'}"
  barBGColor="#F8788B" titleColor="#FFFFFF"
>
  <div 
    slot="right" 
    class="navigation-item" 
    @click="" 
    :style="{height: 88 + 'px'}"
  >
    <image class="navigation-item-right-icon" src="//cdn1.showjoy.com/images/c1/c1c40b7c7afa49dc92b5f377f1637f58.png" resize="contain"></image> 
  </div>
</spon-header>

<script>
import Header from 'components/header.vue'

export default {
  components: {
    'spon-header': Header,
  },
  data() {
    return {
      title: '我是超长的得到的标题题题题题题题题'
    }
  },
}
</script>
<style scoped>
  .navigation-item{
    width: 88px;
    align-items: flex-end;
    justify-content: center;
    flex: 0.5;
  }
  .navigation-item-right-icon{
    width: 40px;
    height: 40px;
  }
</style>
```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 | 说明 |
|------|-------|---------|-------|--------|--------|
| fixed | 吸附在页面顶部 | Boolean | | false |  |
| title | 标题 | String | | 空 |  |
| titleColor | 标题的颜色 | String | 色值 | #1A1210 |  |
| border | 下边栏1pxborder | Boolean |  | false |  |

## SLOT

| name | 描述 |
|------|--------|
| left | 左边显示元素 |
| right | 右边显示元素 |


