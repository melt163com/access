<template>
    <div>
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
                        <el-breadcrumb-item>数据应用</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbColor">后端执行日志</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main>
                <div class="inside-main-box">
                    <el-row class="inside-main" style="background: #fff;padding-top: 10px;height: 46px;">
                        <el-col :span="5" style="margin-left: 20px;">
                            <el-form-item label="出入时间" size="small">
                                <el-date-picker v-model="form.date1" type="date" placeholder="选择时间" style="width: 100%" />
                                <!-- <span class="text-gray-500">-</span> -->
                            </el-form-item>
                        </el-col>
                        <span>-</span>
                        <el-col :span="4">
                            <el-form-item label="" size="small">
                                <!-- <span class="text-gray-500">-</span> -->
                                <el-date-picker v-model="form.date2" type="date" placeholder="选择时间" style="width: 100%" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="3" style="margin-left: 5px;">
                            <el-form-item label="车牌号" size="small">
                                <el-input v-model="form.driver" />
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

                        <el-col :span="4" style="margin-left: 20px;">
                            <el-button size="small" class="sele-but">查询</el-button>
                            <el-button size="small" class="empty-but" @click="exportExcel">导出</el-button>
                        </el-col>
                    </el-row>
                    <div></div>
                </div>
                <!-- 导入弹出框 -->
                <el-dialog style="width: 600px;" v-model="dialogTableVisible" center title="导入文件">
                    <el-upload v-model:file-list="fileList" class="upload-demo" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3" :on-exceed="handleExceed" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                        <!-- list-type="picture" -->
                        <el-icon class="el-icon--upload">
                            <upload-filled />
                        </el-icon>
                        <div class="el-upload__text">
                            将文件托到此处或<em>点击导入</em>
                            <p>按住Ctrl可同时多选,支持上传rar/zip格式文件,如果没有模板<em>点击下载</em></p>
                        </div>
                        <template #tip>
                            <div class="el-upload__tip">

                            </div>
                        </template>
</el-upload>
</el-dialog>
<div style="background: #fff;">
    <el-table :data="tableData" style="width: 100%;">
        <el-table-column align="center" prop="序号" label="序号" width="80px" />
        <el-table-column align="center" prop="道闸编号" label="道闸编号" />
        <el-table-column align="center" prop="出入时间" label="出入时间" />
        <el-table-column align="center" prop="车牌号" label="车牌号" />
        <el-table-column align="center" prop="车辆颜色" label="车辆颜色" />
        <el-table-column align="center" prop="开闸情况" label="开闸情况" />
        <el-table-column align="center" prop="执行说明" label="执行说明" />
        <el-table-column align="center" prop="申请人" label="申请人" />
        <el-table-column align="center" prop="申请时间" label="申请时间" />
        <el-table-column align="center" prop="视频地址" label="视频地址" />
        <el-table-column align="center" prop="摄像头IP" label="摄像头IP" />
        <el-table-column align="center" prop="抓拍照片" label="抓拍照片" />
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
        onMounted,
        reactive,
        ref
    } from 'vue'
    import {
        Plus,
        UploadFilled
    } from "@element-plus/icons-vue";
    // import {
    //     getUsers
    // } from "@/api/user"
    // 路由
    import {
        useRouter
    } from 'vue-router'
    // 文件导入
    import {
        ElMessage,
        ElMessageBox
    } from 'element-plus'
    import * as XLSX from 'xlsx'
    let table = reactive({
        rows: [],
        total: 0
    });
    onMounted(() => {
        // getTbaleData(null);
    });
    // const getTbaleData = (namel) => {
    //     getUsers({
    //             displayName: name,
    //             pageNo: 1,
    //             pageSize: 10,
    //         })
    //         .then((res) => {
    //             // table.rows = res.data.records;
    //             // table.total = res.data.total
    //         });
    // };
    // 导入
    const fileList = ref([{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    }, ])

    const handleRemove = (uploadFile, uploadFiles) => {
        console.log(uploadFile, uploadFiles)
    }

    const handlePreview = (file) => {
            console.log(file)
        }
        // 导入弹出框
    const dialogTableVisible = ref(false)
    const router = useRouter()
        // 新增跳转到新增页面
    const addPage = () => {
            router.push({
                path: '/transportAdd',
                query: ''
            })
        }
        // 跳转到详情页面
    const detailPage = () => {
        router.push({
            path: 'transportDetail',
            query: ''
        })
    }
    const name = 'transportIndex'
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
        序号: 1,
        出入类型: "出门",
        道闸编号: "A01",
        出入时间: "2022-10-22",
        车牌号: "辽A23212",
        车牌颜色: "蓝色",
        开闸情况: "开闸",
        执行说明: "",
        申请人: "张三",
        申请时间: "2022-10-22",
        视频地址: "",
        摄像头IP: "192.168.1.1",
        抓拍照片: ""
    }];
    const exportExcel = ()=>{
      const data = XLSX.utils.json_to_sheet(tableData)//此处tableData.value为表格的数据
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb,data,'test-data')//test-data为自定义的sheet表名
      XLSX.writeFile(wb,'后端执行日志.xlsx')//test.xlsx为自定义的文件名
    }
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
