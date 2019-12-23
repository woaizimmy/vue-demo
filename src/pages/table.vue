<template>
<div class="table-wrap">
  <!-- 查询表单 -->
  <el-form :inline="true" :model="qryForm" :rules="qryRules" ref="qryForm" label-width="100px">
      <el-form-item label="操作名称" prop="title">
          <el-input type="text" size="small" v-model="qryForm.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="操作说明" prop="desc">
          <el-input type="text" size="small" v-model="qryForm.desc" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="操作结果" prop="result">
          <el-input type="text" size="small" v-model="qryForm.result" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" size="small" @click="submitForm('qryForm')">提交</el-button>
          <el-button size="small" @click="resetForm('qryForm')">重置</el-button>
      </el-form-item>
  </el-form>

  <!-- 表格、分页 -->
  <div class="container">
    <el-table :data="tableData" border class="table-wrap">
        <el-table-column label="名称" prop="title" width="200"></el-table-column>
        <el-table-column label="操作说明" prop="desc" width=""></el-table-column>
        <el-table-column label="操作结果" prop="result" width="250"></el-table-column>
        <el-table-column label="操作" width="200">
            <template slot-scope="scope" v-if="scope.row && scope.row.title != '搜索功能'">
                <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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

  <!-- 编辑弹窗 -->
  <el-dialog title="编辑" :visible.sync="editVisible" width="600px" center>
    <el-form :model="editForm" :rules="editRules" ref="editForm" label-width="100px">
      <el-form-item label="操作名称" prop="title">
        <el-input type="text" size="small" v-model="editForm.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="操作描述" prop="desc">
        <el-input type="text" size="small" v-model="editForm.desc" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="操作结果" prop="result">
        <el-input type="text" size="small" v-model="editForm.result" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="tr">
        <el-button size="small" @click="editVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="editSubmit('editForm')">确 定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

</div>
</template>

<script>
import { getData } from 'comp/util/data';
import { editSave } from 'comp/util/api';

export default {
  components:{
    
  },
  data() {
    return {
        qryForm: {
          title: '',
          desc: '',
          result: '',
          page: 1,
          pageSize: 3,
        },
        qryRules: {},

        editVisible: false,
        editForm: {},
        editRules: {
          title: [
            { required: true, message: '名称不能为空', trigger: 'blur' },
          ],
          desc: [
            { required: true, message: '描述不能为空', trigger: 'blur' },
          ],
          result: [
            { required: true, message: '结果不能为空', trigger: 'blur' },
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
      console.log('=====================\n查询参数', this.qryForm, '直接整个扔给后台就行\n=====================');
      const res = getData(this.qryForm);
      res.then(res=>{
          console.log('查询到的数据',res)
          if(res.code === 200){
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
          this.$message.success('查询参数：看浏览器console打印');
          this.qryData();
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleEdit(index, row) {
      this.editVisible = true;
      // this.editForm = row;  // 没有深拷贝，指向原对象
      this.editForm = JSON.parse(JSON.stringify(row));  // 深拷贝，新的对象
    },
    editSubmit(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.editVisible = false;
          this.$message.success('编辑后的数据：看浏览器console打印');
          console.log('=====================\n编辑后的数据', this.editForm, '也是整个直接扔给后台\n=====================');
          // 和后台对接示例，editSave是引于util/api.js中封装好的接口
          editSave(this.editForm).then(res=>{
            console.log('提交编辑',res);
            if(res.code === 200){
              this.$message.success('编辑成功！');
            }
          },err=>{
            console.log('提交编辑失败',err);
          });
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.qryForm.page = 1;
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
    .table-wrap{
      padding: 40px 0;
      width: 1200px;
      margin: 0 auto;
      .el-form{
          margin-bottom: 20px;
          background: #fff;
          padding-top: 20px;
      }
      .container{
        background: #fff;
        padding: 20px;
        overflow: hidden;
      }
      .table-wrap{
        margin-bottom: 20px;
      }
      .tr{
        text-align: right;
      }
    }
    .el-table thead tr th{
      font-weight: bold;
      text-align: center;
    }
</style>
