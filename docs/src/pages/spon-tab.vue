<template>
  <spon-tabs
    @click="tabClick"
  >
    <spon-tab title="我是标题一">
      <scroller
        :style="{ height: 300 + 'px' }"
        class="content-bg"
      >
        <text>我是内容{{tabIndex}}</text>
      </scroller>
    </spon-tab>
    <spon-tab title="我是标题二">
      <scroller
        :style="{ height: 300 + 'px' }"
        class="content-bg"
      >
        <text>我是内容{{tabIndex}}</text>
      </scroller>

    </spon-tab>
  </spon-tabs>
</template>


<script>
import Tabs from 'components/weex-tabs/weex-tabs';
import Tab from 'components/weex-tab/weex-tab';

export default {
  components: {
    'spon-tabs': Tabs,
    'spon-tab': Tab,
  },
  data() {
    return {
      tabIndex: 0,
    }
  },
  methods: {
    tabClick(index) {
      this.tabIndex = index;
    },
  },
}
</script>
<style scoped>
  .content-bg {
    background-color: #ccc;
  }
</style>