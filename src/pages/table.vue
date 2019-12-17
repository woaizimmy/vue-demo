<template>
<div class="wrapper">
    <el-form :inline="true" :model="qryForm" :rules="qryRules" ref="qryForm" label-width="100px">
        <el-form-item label="操作名称" prop="title">
            <el-input type="text" size="small" v-model="qryForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="操作结果" prop="result">
            <el-input type="text" size="small" v-model="qryForm.result" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" size="small" @click="submitForm('qryForm')">提交</el-button>
            <el-button size="small" @click="resetForm('qryForm')">重置</el-button>
        </el-form-item>
    </el-form>

    <el-table :data="tableData" border class="table-wrap">
        <el-table-column label="名称" prop="title" width="200"></el-table-column>
        <el-table-column label="操作说明" prop="desc" width=""></el-table-column>
        <el-table-column label="操作结果" prop="result" width=""></el-table-column>
        <el-table-column label="操作" width="200">
            <template slot-scope="scope">
                <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="qryForm.page"
      :page-sizes="[3, 5, 7, 10]"
      :page-size="qryForm.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>


</div>
</template>

<script>
import { getData } from 'comp/util/data';

export default {
  components:{
    
  },
  data() {
    return {
        qryForm: {
          title: '',
          result: '',
          page: 1,
          pageSize: 3,
        },
        qryRules: {
          title: [
            { required: true, message: '请输入名称', trigger: 'blur' },
          ],
          result: [
            { required: true, message: '请输入结果', trigger: 'blur' },
          ],
        },

        tableData: [],
        total: 0,
    };
  },
  mounted() {
    this.qryData();
  },
  methods: {
    qryData(){
        console.log('进行查询操作，直接把整个查询参数扔给后台就行：', this.qryForm);
        const res = getData(this.qryForm);
        res.then(res=>{
            console.log('查询数据',res)
            if(res.code === 0){
                this.total = res.total;
                this.tableData = res.data;
            }
        },err=>{
            console.log('查询数据失败',err);
        });
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.qryData();
          }
        });
    },
    resetForm(formName) {
        this.$refs[formName].resetFields();
    },
    handleEdit(index, row) {
        console.log(index, row);
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.qryForm.pageSize = val;
        this.qryData();
    },
    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.qryForm.page = val;
        this.qryData();
    }
  },
};

</script>

<style lang="less">
    .wrapper{
        padding: 40px 0;
        width: 1200px;
        margin: 0 auto;
        .el-form{
            margin-bottom: 20px;
            background: #fff;
            padding-top: 20px;
        }
    }
    .el-table thead tr th{
        font-weight: bold;
        text-align: center;
    }
</style>
