<template>
    <div>
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item>视频监控</el-breadcrumb-item>
                        <el-breadcrumb-item>视频管理</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbColor">线上视频查询</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main>
                <div class="inside-main-box">
                    <el-row class="inside-main" style="background: #fff;padding-top: 10px;height: 46px;">
                        <el-col :span="8">
                            <el-form-item label="名称" size="small">
                                <el-input v-model="form.num" />
                            </el-form-item>
                        </el-col>

                        <el-col :span="4" style="margin-left: 20px;">
                            <el-button size="small" class="sele-but">查询</el-button>
                            <el-button size="small" class="empty-but">重置</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div style="background: #fff;">
                    <el-table :data="tableData" style="width: 100vw;">
                        <el-table-column prop="序号" label="序号" width="50" />
                        <el-table-column prop="检测点名称" label="检测点名称" width="100" />
                        <el-table-column prop="摄像头名称" label="摄像头名称" width="100" />
                        <el-table-column prop="视频存储地址" label="视频存储地址" width="100" />
                        <el-table-column prop="视频时长" label="视频时长" width="100" />
                        <el-table-column label="操作" width="120">
                            <template #default>
                                <el-button link type="primary" size="small" @click="detailPage">查看视频</el-button>
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
        监测点名称: "正门",
        摄像头名称: "01A",
        视频存储地址: "",
        视频时长: "",
    }, {
        序号: "2",
        监测点名称: "正门",
        摄像头名称: "01A",
        视频存储地址: "",
        视频时长: "",
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