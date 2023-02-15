<template>
    <div>
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item>企业环保</el-breadcrumb-item>
                        <el-breadcrumb-item>人员管理</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbColor">环保局人员管理</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main>
                <div class="inside-main-box">
                    <el-row :gutter="10" class="inside-main" style="background: #fff;padding-top: 10px;height: 46px;">
                        <el-col :span="5">
                            <el-form-item label="人员信息" size="small">
                                <el-input v-model="form.num" placeholder="请输入" />
                            </el-form-item>
                        </el-col>

                        <el-col :span="6" style="margin-left: 20px;">
                            <el-button size="small" class="sele-but">查询</el-button>
                            <el-button size="small" class="empty-but">重置</el-button>
                            <el-button size="small" :icon="Plus" class="add-but" @click="centerDialogVisible = true">新增</el-button>

                        </el-col>
                    </el-row>
                </div>
                <div style="background: #fff;">
                    <el-table :data="tableData" style="width: 100vw;">
                        <el-table-column prop="序号" label="序号" width="50" />
                        <el-table-column prop="所属组织结构" label="所属组织结构" width="100" />
                        <el-table-column prop="姓名" label="姓名" width="100" />
                        <el-table-column prop="电话" label="电话" width="100" />
                        <el-table-column prop="省" label="省" width="100" />
                        <el-table-column prop="市" label="市" width="100" />
                        <el-table-column prop="区" label="区" width="100" />
                        <el-table-column prop="部门" label="部门" width="100" />
                        <el-table-column prop="职位" label="职位" width="100" />
                        <el-table-column prop="备注" label="备注" width="100" />
                        <el-table-column label="操作" width="120">
                            <template #default>
                                <el-button link type="primary" size="small">修改</el-button>
                                <el-button link type="primary" size="small">删除</el-button>
                            </template>
</el-table-column>
</el-table>
<el-pagination style="margin-top: 20%;display: flex;justify-content: flex-end;" v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="1000"
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
    } from 'vue'
    import {
        Plus
    } from "@element-plus/icons-vue";
    // 路由
    import {
        useRouter
    } from 'vue-router'
    const router = useRouter()
        // 新增跳转到新增页面
    const addPage = () => {
        router.push({
            path: '/transportAdd',
            query: ''
        })
    }
    const name = 'transportIndex'
        // 时间
    const size = ref("default");
    const form = reactive({
        num: "",

    });
    // 表格假数据
    const tableData = [{
        序号: "1",
        姓名: "",
        所属供应商: "",
        电话: "",
        证件: "",
        人员类型: "",
        签属日期: "",
        服务时间: "",
        职位: "",
        事项记录: "",
        维保日志: ""
    }, {
        序号: "2",
        姓名: "",
        所属供应商: "",
        电话: "",
        证件: "",
        人员类型: "",
        签属日期: "",
        服务时间: "",
        职位: "",
        事项记录: "",
        维保日志: ""
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