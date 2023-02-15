<template>
    <div>
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item>企业环保</el-breadcrumb-item>
                        <el-breadcrumb-item>企业文件</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbColor">政策法规管理</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main>
                <div class="inside-main-box">
                    <el-row class="inside-main" style="background: #fff;padding-top: 10px;height: 46px;">
                        <el-col :span="8">
                            <el-form-item label="文件名称" size="small">
                                <el-input v-model="form.num" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="文件分类" size="small">
                                <el-select v-model="form.region" placeholder="请选择">
                                    <el-option label="Zone one" value="shanghai" />
                                    <el-option label="Zone two" value="beijing" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="margin-left: 20px;">
                            <el-button size="small" class="sele-but">查询</el-button>
                            <el-button size="small" :icon="Plus" class="add-but">新增</el-button>
                            <!-- <el-button size="small" :icon="Plus" class="add-but" @click="centerDialogVisible = true">新增</el-button> -->
                        </el-col>
                    </el-row>
                </div>
                <div style="background: #fff;">
                    <el-table :data="tableData" style="width: 100vw;">
                        <el-table-column prop="序号" label="序号" width="50" />
                        <el-table-column prop="文件名称" label="文件名称" width="100" />
                        <el-table-column prop="文件分类" label="文件分类" width="100" />
                        <el-table-column prop="发布日期" label="发布日期" width="100" />
                        <el-table-column prop="实施日期" label="实施日期" width="100" />
                        <el-table-column prop="上传人" label="上传人" width="100" />
                        <el-table-column prop="文件解析" label="文件解析" width="100" />
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
<!-- 新增弹窗 -->
<el-dialog v-model="centerDialogVisible" title="新增分类" width="40%">
    <div style="width:80%">

    </div>
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
    } from 'vue'
    import {
        Plus
    } from "@element-plus/icons-vue";
    // 路由
    import {
        useRouter
    } from 'vue-router'
    import {
        FormInstance,
        FormRules
    } from 'element-plus'
    const router = useRouter()
        // 新增弹窗
    const centerDialogVisible = ref(false)

    const name = 'transportIndex'
        // 时间
    const size = ref("default");
    const form = reactive({
        num: "",

    });
    // 表格假数据
    const tableData = [{
        序号: "1",
        文件名称: "污水源监控",
        文件分类: "水类文件",
        发布日期: "2022-11-15",
        实施日期: "2022-11-15",
        上传人: "张三",
        文件解析: "正在解析",
    }, {
        序号: "2",
        文件名称: "污染气体监控",
        文件分类: "气体类文件",
        发布日期: "2022-11-15",
        实施日期: "2022-11-15",
        上传人: "张三",
        文件解析: "查看",
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