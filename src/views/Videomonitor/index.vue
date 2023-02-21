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
                    <el-row class="inside-main" style="background: #fff;padding-top: 10px;">
                        <el-col :span="6" style="margin-left: 20px;">
                            <el-form-item label="检测点名称" >
                                <el-input v-model="form.monitoring_point_name"  clearable/>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4" style="margin-left: 20px;">
                            <el-button class="sele-but" @click="select">查询</el-button>
                            <el-button class="empty-but" @click="clear">重置</el-button>
                        </el-col>
                    </el-row>
                </div>
                <div style="background: #fff;">
                    <el-table :data="tableData" style="width: 100%;">
                        <el-table-column align="center" prop="id" label="序号" width="80px" />
                        <el-table-column align="center" prop="monitoring_point_name" label="检测点名称" />
                        <el-table-column align="center" prop="camera_name" label="摄像头名称" />
                        <el-table-column align="center" prop="video_storage_address" label="视频存储地址" />
                        <el-table-column align="center" prop="video_duration" label="视频时长" />
                        <el-table-column align="center" label="操作" fixed="right">
                            <template #default="item">
                                <el-button link type="primary" size="small" @click="lookup(item.row)">查看视频</el-button>
                            </template>
</el-table-column>
</el-table>
<el-pagination style="margin-top: 20%;display: flex;justify-content: flex-end;" v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="1000"
    @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</div>
</el-main>
</el-container>
<el-dialog center v-model="videoDialog" title="查看视频" width="30%" :before-close="handleClose">
    <video :src="videos" style="width: 100%;height: 200px;" autoplay controls loop muted>

    </video>
    <template #footer>
                <span class="dialog-footer">
                    <el-button @click="videoDialog = false">关闭</el-button>
                </span>
            </template>
</el-dialog>
</div>
</template>

<script setup lang="ts">
    import {
        reactive,
        ref,getCurrentInstance,
        onMounted
    } from 'vue'
    // 路由
    import {
        useRouter
    } from 'vue-router'
    import {
        query
    } from "@/api/user";
    import first from "../../assets/video/0.mp4";
    import second from "../../assets/video/1.mp4";
    import third from "../../assets/video/2.mp4";
    const videoDialog = ref(false)
    const router = useRouter()
    const name = 'transportIndex'
        // 时间
    const size = ref("default");
    const form = reactive({
        monitoring_point_name: "",
    });
    const tableData = ref([]);
    const videos = ref("");
    // 查询全部接口
    const selectAll = () => {
            query({},{page:1,num:10}).then((res) => {
                tableData.value = res.data;
            });
        }
        // 搜索接口
    const select = () => {
            query(form).then((res) => {
                tableData.value = res.data;
            })
        }
    const lookup = (row) =>{
      let index = row.id%3
      switch(index){
        case 0 : videos.value = first; break;
        case 1 : videos.value = second; break;
        case 2 : videos.value = third; break;
        default: videos.value = null;
      }
      videoDialog.value = true;
    }
        // 重置
    const clear = () => {
        form.monitoring_point_name = "",
            selectAll()
    }
    onMounted(() => {
      // const {that} = getCurrentInstance();
      selectAll();
    });
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
