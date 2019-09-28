<template>
  <div class="nav-wrap">
    <div class="item" @click="turnHome">
      <span class="iconfont icon-shouye1 f20"></span>
    </div>
    <div class="item" @click="goBack">
      <span class="iconfont icon-left f20"></span>
    </div>
  </div>
</template>

<script>

export default {
  props:['path'],
  components:{
    
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    turnHome(){
      window.location.href = '#/index';
    },
    goBack(){
      this.$router.go(-1);
    }
  },
};

</script>

<style lang="less">
  .nav-wrap{
    position:fixed;
    left:20px;
    bottom:40px;
    z-index:1024;
    width:40px;
    min-height:40px;
    .item{
      width:40px;
      height:40px;
      line-height: 40px;
      text-align:center;
      border-radius:100%;
      background:#35495e;
      color:#fff;
      margin-top: 10px;
    }
  }
</style>
