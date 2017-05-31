<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
const modal = weex.requireModule('modal')
export default {
  data() {
    return {
    };
  },
  watch: {
  },
  created() {
    const self = this;
    if (!(weex.config.env.platform.toLowerCase() === 'web')) {
      self.$router.replace(self.getParams('pathName'));
    }
  },
  methods: {
    getParams(name) {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      const url = weex.config.bundleUrl;
      const r = url.substring(url.indexOf('?')).substr(1).match(reg);
      modal.toast({
        message: r[2],
      });
      if (r !== null) {
        return r[2];
      } else {
        return false;
      }
    },
  },
};
</script>
<style scoped>
  
</style>
