<template>
    <div>
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item>企业环保</el-breadcrumb-item>
                        <el-breadcrumb-item>人员管理</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbColor">企业环保人员管理</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main>
                <div class="inside-main-box">
                    <el-row class="inside-main" style="background: #fff;padding-top: 10px;height: 46px;">
                        <el-col :span="5" style="margin-left: 20px;">
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
                    <el-table :data="tableData" style="width: 100%;">
                        <el-table-column align="center" prop="序号" label="序号" width="80" />
                        <el-table-column align="center" prop="姓名" label="姓名" />
                        <el-table-column align="center" prop="电话" label="电话" />
                        <el-table-column align="center" prop="职位" label="职位" />
                        <el-table-column align="center" prop="部门" label="部门" />
                        <el-table-column align="center" prop="服务领域" label="服务领域" />
                        <el-table-column align="center" prop="学历" label="学历" />
                        <el-table-column align="center" prop="服务内容" label="服务内容" />
                        <el-table-column align="center" prop="从业经验" label="从业经验" />
                        <el-table-column align="center" fixed="right" label="操作" width="120">
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
            path: '',
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
        电话: "",
        职位: "",
        部门: "",
        服务领域: "",
        学历: "",
        服务内容: "",
        从业经验: "",
    }, {
        序号: "2",
        姓名: "",
        电话: "",
        职位: "",
        部门: "",
        服务领域: "",
        学历: "",
        服务内容: "",
        从业经验: "",
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