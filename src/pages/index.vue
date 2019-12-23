<template>
  <div class="homePage">
    <topBar myTitle="首页"></topBar>
    <div class="pd">
      <div class="mod">
        <div class="modTitle">
          <span>移动端Grid宫格</span>
        </div>
        <div class="appWrap">
          <grid>
            <grid-item
              v-for="item in appList"
              :key="item.id"
              @click="viewApp(item.url)"
            >
            <span :class="'f24 iconfont icon-'+item.logo+' c-'+item.logo"></span>
            <span>{{item.name}}</span>
            </grid-item>
          </grid>
        </div>
      </div>
    </div>
    <div class="mod2">
      <div class="modTitle">
        <span>移动端轮播框架</span>
        <a href="#/index" class="more">more</a>
      </div>
      <div class="swiperWrap">
        <swiperCulture></swiperCulture>
      </div>
    </div>
  </div>
</template>
<script>
import { Grid, GridItem } from 'vant';
import { myApp } from 'comp/util/api';
import topBar from 'comp/topBar.vue';
import swiperCulture from 'comp/swiperCulture.vue';

export default {
  components: {
    // html里使用van-grid、van-grid-item标签
    // vanGrid: Grid,
    // vanGridItem: GridItem,
    Grid, GridItem,
    topBar,swiperCulture
  },
  data() {
    return {
      appList:[
        {
          id:1,
          name:'首页',
          logo:'shouye1',
          url:'#/index',
        },
        {
          id:2,
          name:'PDF',
          logo:'pdf',
          url:'#/pdf',
        },
        {
          id:3,
          name:'使用store',
          logo:'yewu2',
          url:'#/store',
        },
        {
          id:4,
          name:'elementUI',
          logo:'but-down-core-roleuser',
          url:'#/element',
        },
        {
          id:5,
          name:'表格页',
          logo:'but-down-core-roleuser',
          url:'#/table',
        },
        {
          id:6,
          name:'登录页',
          logo:'huifu',
          url:'#/login',
        },
        {
          id:1024,
          name:'更多',
          logo:'wendang',
          url:'',
        },
      ],
    };
  },
  methods: {
    viewApp(url){
      if(!url){
        this.getAllApp();
      }else{
        window.location.href = url;
      }
    },
    getAllApp(){
      console.log('获取更多',res)
      myApp().then(res=>{
          console.log('获取全部app',res)
          if(res.code === 0){
            this.appList = res.data
          }
      },err=>{
          console.log('获取全部app',err)
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      // this.getAllApp();
    });
  },
};
</script>

<style lang="less" scoped>
  .homePage{
    padding: 60px 0;
    .pd{
      padding:0 8px;
    }
    .appWrap{
      padding-top: 10px;
    }
    .mod2{
      background:#fff;
      padding-bottom: 30px;
    }
    .swiperWrap{
      padding:10px 0;
    }
  }
</style>

