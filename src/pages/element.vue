<template>
  <div class="pageWrap">
    <topBar myTitle="使用elementUI"></topBar>
    <div class="tips" v-if="winWidth<=768">
      <p>这是PC端页面</p>
      <p>请增加浏览器宽度(大于768px)</p>
      <p>并刷新页面</p>
    </div>
    <div class="tableWrap" v-else>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import topBar from 'comp/topBar.vue';
import {  } from 'comp/util/api';


export default {
  components:{
    topBar,
  },
  data() {
    return {
      winWidth:document.documentElement.clientWidth,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
};

</script>

<style lang="less" scoped>
  .tips{
    padding: 0 30px;
    text-align:center;
  }
  .tableWrap{
    width: 1200px;
    margin: 0 auto;
  }
</style>
