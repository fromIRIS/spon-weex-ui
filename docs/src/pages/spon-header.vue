<template>
  <div>
    <spon-header border fixed title="我是吸附的标题"></spon-header>

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
  </div>
</template>

<script>
import Header from './header.vue'

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