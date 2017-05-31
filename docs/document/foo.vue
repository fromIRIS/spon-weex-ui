<template>
  <div class="container">

    <div class="nav-bar-container">
      <ul class="nav-bar">
        <li class="nav-title">
          <a>基础组件</a>
        </li>
        <li class="nav">
          <router-link to="/home">home</router-link>
        </li>
        <li class="nav">
          <router-link to="/header">header</router-link>
        </li>
        <li class="nav">
          <router-link to="/tab">tab</router-link>
        </li>
      </ul>

    </div>
    
    <div class="document-area-container markdown-body">
      <router-view></router-view>
    </div>

    <div class="mock-phone-container">
      <div class="mock-phone">
        <div class="inner">
          <iframe id="preview" :src="'./weex.html#/' + componentName"></iframe>
        </div>
        <div class="camera"></div>
        <div class="earpiece"></div>
        <div class="home-btn"></div>
      </div>
      <div id="qrcode">
        <h2>暂时请用weex playground扫一扫预览原生效果</h2>
        <a :href="val" target="_blank"><canvas ref="canvas" width="100" height="100"></canvas></a>
        <p class="bundle-url"><a :href="val" target="_blank">{{val}}</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  
  h1 { text-align: center; }
  .mock-phone-container { width: 297px; float: left; }
  #preview { width: 750px; height: 1245px; transform: scale(0.354); transform-origin: top left; }
  .mock-phone { position: relative; width: 297px; min-width: 297px; height: 591px; border: 2px solid #0088fb; border-radius: 30px; }
  .mock-phone .inner { position: absolute; top: 60px; z-index: 26; left: 12px; width: 267px; height: 441px; border: 1px solid #0088fb; overflow: hidden; }
  .mock-phone .inner iframe { width: 100%; height: 100%; margin: 0; }
  .mock-phone  .camera { position: absolute; width: 14px; height: 14px; border-radius: 14px; background: #afddff; border: 1px solid #0088fb; top: 23px; left: 94px; }
  .mock-phone  .earpiece { position: absolute; width: 70px; height: 8px; border-radius: 8px; background: #afddff; border: 1px solid #0088fb; top: 26px; left: 124px; }
  .mock-phone .home-btn { position: absolute; width: 56px; height: 56px; border-radius: 56px; background: #afddff; border: 1px solid #0088fb; bottom: 14px; left: 50%; margin-left: -28px; }
  #qrcode { align-self: center; margin-left: 50px; }
  #qrcode .bundle-url { width: 480px; line-height: 1.5; word-break: break-all; }
  .markdown-body {
    box-sizing: border-box;
  }
  .container {
    // min-width: 980px;
    // max-width: 1224px;
    width: 1224px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    .document-area-container {
      width: 730px;
      padding: 20px 10px;
      float: left;
      overflow-y: auto;
      height: 100%;
    }
    .nav-bar-container {
      width: 180px;
      float: left;
      overflow-y: auto;
      background-color: #efefef;
      height: 100%;
      padding-top: 50px;
      .nav-bar {
        list-style: none;
        width: 100%;
        white-space: nowrap;
        font-size: 14px;
        color: #000;
        a {
          color: #000;
          width: 100%;
          height: 100%;
          text-decoration: none;
          display: block;
          padding: 0 0 0 20px;
        }
        .nav {
          height: 30px;
          line-height: 30px;
          text-align: left; 
          .router-link-active {
            color: #F8788B;
            border-right: 2px solid #F8788B;
          }
          a:hover {
            color: #F8788B;
          }

        }
        .nav-title {
          height: 30px;
          line-height: 30px;
          text-align: left; 
          font-size: 18px;
          font-size: bold;
        }
      }
    }
    .mock-phone-container { 
      width: 297px; 
      float: left; 
      height: 100%;
    }
  }
</style>

<script>
  export default {
    name: 'document',
    components: {
    },
    data() {
      return {
        val: url,
        qrcodedraw: new QRCodeLib.QRCodeDraw(),
      };
    },
    created() {
      this.originVal = this.val;
      this.val = this.val + '?pathName=' + this.componentName;
    },
    mounted() {
      const self = this;
      self.qrcodedraw.draw(this.$refs.canvas, this.val, () => {});
    },
    watch: {
      $route() {
        const self = this;
        this.val = this.originVal + '?pathName=' + this.componentName;
        self.qrcodedraw.draw(this.$refs.canvas, this.val, () => {});
      },
    },
    computed: {
      componentName() {
        return this.$route.path.substring(1) || '/';
      },
    },
  };
</script>
