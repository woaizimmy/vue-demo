<template>
  <div class="fixed">
    <nav-bar
      :title="myTitle"
      @click-left="goBack"
      @click-right="turnHome"
    >
      <span slot="left" class="iconfont icon-left f20"></span>
      <span slot="right" class="iconfont icon-shouye1 f20"></span>
    </nav-bar>
  </div>
</template>

<script>
import { NavBar } from 'vant';

export default {
  props: ['myTitle'],
  components:{
    NavBar
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    goBack(){
      console.log('go back...')
      this.$router.go(-1);
    },
    turnHome(){
      console.log('turn home...')
      let url = `#/index`;
      window.location.href = url;
    },
  },
};

</script>

<style lang="less" scoped="">
  .fixed{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:1024;
  }
</style>
