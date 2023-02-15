<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item>企业环保</el-breadcrumb-item>
            <el-breadcrumb-item>供应商管理</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumbColor">供应商列表</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main>
        <div class="inside-main-box">
          <el-row class="inside-main" style="background: #fff; padding-top: 10px; height: 46px">
            <el-col :span="8" style="margin-left: 20px;">
              <el-form-item label="供应商名称" size="small">
                <el-input v-model="form.num" />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="供应商分类" size="small" style="margin-left: 5px;">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 20px">
              <el-button size="small" class="sele-but">查询</el-button>
              <el-button size="small" :icon="Plus" class="add-but">新增</el-button>
              <!-- <el-button size="small" :icon="Plus" class="add-but" @click="centerDialogVisible = true">新增</el-button> -->
            </el-col>
          </el-row>
        </div>
        <div style="background: #fff">
          <el-table :data="tableData" style="width: 100vw">
            <el-table-column align="center" prop="序号" label="序号" width="80" />
            <el-table-column align="center" prop="供应商名称" label="供应商名称" />
            <el-table-column align="center" prop="供应商分类" label="供应商分类" />
            <el-table-column align="center" prop="法人" label="法人" />
            <el-table-column align="center" prop="营业执照" label="营业执照" />
            <el-table-column align="center" prop="商务对接人" label="商务对接人" />
            <el-table-column align="center" prop="对接人电话" label="对接人电话" />
            <el-table-column align="center" prop="合同" label="合同" />
            <el-table-column align="center" prop="服务类别" label="服务类别" />
            <el-table-column align="center" prop="服务项" label="服务项" />
            <el-table-column align="center" prop="环保负责人" label="环保负责人+信息" />
            <el-table-column align="center" prop="安装人员" label="安装人员+信息" />
            <el-table-column align="center" prop="运维人员" label="运维人员+信息" />
            <el-table-column align="center" prop="供应商时间记录" label="供应商时间记录" />
            <el-table-column align="center" fixed="right" label="操作" width="120">
              <template #default>
                <el-button link type="primary" size="small">修改</el-button>
                <el-button link type="primary" size="small">删除</el-button>
              </template>
</el-table-column>
</el-table>
<el-pagination style="margin-top: 20%; display: flex; justify-content: flex-end" v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="1000"
    @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</div>
</el-main>
</el-container>
<!-- 新增弹窗 -->
<el-dialog v-model="centerDialogVisible" title="新增分类" width="40%">
    <div style="width: 80%"></div>
    <template #footer>
        <span class="dialog-footer">
          <el-button class="sele-but" @click="centerDialogVisible = false">
            确定
          </el-button>
          <el-button class="empty-but" @click="centerDialogVisible = false">取消</el-button>
        </span>
      </template>
</el-dialog>
</div>
</template>

<script setup lang="ts">
    import {
        reactive,
        ref
    } from "vue";
    import {
        Plus
    } from "@element-plus/icons-vue";
    // 路由
    import {
        useRouter
    } from "vue-router";
    import {
        FormInstance,
        FormRules
    } from "element-plus";
    const router = useRouter();
    // 新增弹窗
    const centerDialogVisible = ref(false);

    const name = "transportIndex";
    // 时间
    const size = ref("default");
    const form = reactive({
        num: "",
    });
    // 表格假数据
    const tableData = [{
        序号: "1",
        供应商名称: "",
        供应商分类: "",
        法人: "",
        营业执照: "查看",
        商务对接人: "",
        对接人电话: "",
        合同: "",
        服务类别: "",
        服务项: "",
        环保负责人: "9人",
        安装人员: "9人",
        运维人员: "9人",
        供应商时间记录: "0条",
    }, {
        序号: "2",
        供应商名称: "",
        供应商分类: "",
        法人: "",
        营业执照: "查看",
        商务对接人: "",
        对接人电话: "",
        合同: "",
        服务类别: "",
        服务项: "",
        环保负责人: "9人",
        安装人员: "9人",
        运维人员: "9人",
        供应商时间记录: "0条",
    }, ];
</script>
<style scoped>
    /* 面包屑字体颜色更改 */
    
    .breadcrumbColor>>>.el-breadcrumb__inner {
        color: #000;
    }
    /* 内部header */
    
    .inside-header {
        height: 10px;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    /* 空心按钮样式 */
    
    .empty-but {
        border: 1px solid #3780b9;
        color: #3780b9;
    }
    /* 实心按钮背景样式 */
    
    .sele-but {
        background: #3780b9;
        border: 0px;
        border-radius: 2px;
        color: white;
    }
    
    .add-but {
        background: #dde5fe;
        color: #3780b9;
    }
    /* 分页 */
    
    .demo-pagination-block {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>