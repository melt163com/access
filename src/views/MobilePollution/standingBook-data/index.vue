<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
            <el-breadcrumb-item>数据应用</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumbColor">车辆进出台账</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main>
        <div class="inside-main-box">
          <el-row class="inside-main" style="background: #fff; padding-top: 10px; height: 46px">
            <el-col :span="4" style="margin-left: 20px;">
              <el-form-item label="出入时间" size="small">
                <el-date-picker v-model="form.date1" type="date" placeholder="选择时间" style="width: 100%" />
                <!-- <span class="text-gray-500">-</span> -->
              </el-form-item>
            </el-col>
            <span>-</span>
            <el-col :span="4" style="margin-left: 5px;">
              <el-form-item label="" size="small">
                <!-- <span class="text-gray-500">-</span> -->
                <el-date-picker v-model="form.date2" type="date" placeholder="选择时间" style="width: 100%" />
              </el-form-item>
            </el-col>
            <el-col :span="3" style="margin-left: 5px;">
              <el-form-item label="车牌号" size="small">
                <el-input v-model="form.num" />
              </el-form-item>
            </el-col>
            <el-col :span="3" style="margin-left: 5px;">
              <el-form-item label="排放阶段" size="small">
                <el-select v-model="form.access" placeholder="全部">
                  <el-option label="全部" value="shanghai" />
                  <el-option label="全部" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="3" style="margin-left: 5px;">
              <el-form-item label="出入类型" size="small">
                <el-select v-model="form.access" placeholder="全部">
                  <el-option label="全部" value="shanghai" />
                  <el-option label="全部" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="5" style="margin-left: 10px">
              <el-button size="small" class="sele-but">查询</el-button>
              <el-button size="small" class="empty-but">重置</el-button>
              <el-button size="small" class="empty-but">导出</el-button>
            </el-col>
          </el-row>
        </div>
        <div style="background: #fff">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column align="center" prop="序号" label="序号" width="80" />
            <el-table-column align="center" prop="状态" label="状态" />
            <el-table-column align="center" prop="类型" label="类型" />
            <el-table-column align="center" prop="门禁号" label="门禁号" />
            <el-table-column align="center" prop="道闸编号" label="道闸编号" />
            <el-table-column align="center" prop="车牌" label="车牌" />
            <el-table-column align="center" prop="排放阶段" label="排放阶段" />
            <el-table-column align="center" prop="司机" label="司机" />
            <el-table-column align="center" prop="司机电话" label="司机电话" />
            <el-table-column align="center" prop="出入时间" label="出入时间" />
            <el-table-column align="center" prop="查看视频" label="查看视频" />
            <el-table-column align="center" prop="查看照片" label="查看照片" />
            <el-table-column align="center" fixed="right" label="操作" width="120">
              <template #default>
                <el-button link type="primary" size="small" @click="detailPage">详情</el-button>
              </template>
</el-table-column>
</el-table>
<el-pagination style="margin-top: 20%; display: flex; justify-content: flex-end" v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="1000"
    @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</div>
</el-main>
</el-container>
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
    const router = useRouter();
    // 跳转到详情页面
    const detailPage = () => {
        router.push({
            path: "standingBookDetail",
            query: "",
        });
    };
    const name = "transportIndex";
    // 时间
    const size = ref("default");
    const form = reactive({
        date1: "",
        date2: "",
        num: "",
        driver: "",
        access: "",
    });
    // 表格假数据
    const tableData = [{
        序号: "1",
        状态: "已通过",
        类型: "入厂",
        门禁号: "一号门",
        通闸编号: "一号门入口01",
        车牌: "辽A78EH",
        排放阶段: "国I",
        司机: "张三",
        司机电话: "1235324733",
        出入时间: "22.12.10 14：50：26",
        查看视频: "点击查看视频",
        查看照片: "点击查看照片",
    }, {
        序号: "2",
        状态: "未补登",
        类型: "出厂",
        门禁号: "一号门",
        通闸编号: "一号门入口04",
        车牌: "辽A78EH",
        排放阶段: "国I",
        司机: "李四",
        司机电话: "1235324733",
        出入时间: "22.12.10 14：50：26",
        查看视频: "点击查看视频",
        查看照片: "点击查看照片",
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