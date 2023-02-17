<template>
    <div>
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
                        <el-breadcrumb-item>车辆备案</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbColor">运输车辆备案</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main>
                <div class="inside-main-box">
                    <el-row class="inside-main" style="background: #fff;padding-top: 10px;height: 46px;">
                        <el-col :span="4" style="margin-left: 20px;">
                            <el-form-item label="申请时间" size="small">
                                <el-date-picker v-model="form.date1" type="date" placeholder="选择时间" style="width: 100%" />
                                <!-- <span class="text-gray-500">-</span> -->
                            </el-form-item>
                        </el-col>
                        <span>-</span>
                        <el-col :span="3">
                            <el-form-item label="" size="small">
                                <!-- <span class="text-gray-500">-</span> -->
                                <el-date-picker v-model="form.date2" type="date" placeholder="选择时间" style="width: 100%" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="margin-left: 5px;">
                            <el-form-item label="车牌号" size="small">
                                <el-input v-model="form.num" placeholder="请输入车牌号"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" style="margin-left: 5px;">
                            <el-form-item label="司机" size="small">
                                <el-input v-model="form.driver" placeholder="请输入司机" />
                            </el-form-item>
                        </el-col>

                        <el-col :span="3" style="margin-left: 5px;">
                            <el-form-item label="选择类型" size="small">

                                    <el-select v-model="form.access" placeholder="请选择">
                                        <el-option label="国I" value="shanghai" />
                                        <el-option label="国II" value="beijing" />
                                    </el-select>

                            </el-form-item>
                        </el-col>

                        <el-col :span="4" style="margin-left:10px">
                            <el-button size="small" class="sele-but">查询</el-button>
                            <el-button size="small" class="empty-but">重置</el-button>
                        </el-col>
                    </el-row>
                    <div></div>
                </div>
                <div style="height: 40px; display: flex; align-items: center">
                    <el-button size="small" :icon="Plus" class="add-but" @click='addPage()'>新增</el-button>
                    <el-button size="small" class="empty-but" @click="dialogTableVisible = true">导入</el-button>
                    <el-button size="small" class="empty-but" @click="exportExcel">导出</el-button>
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
 <el-dialog v-model="centerDialogVisible"  width="60%" center>
                    <img

                      style="

                        vertical-align: middle;
                      "
                      :src="car"
                      alt=""
                    />

  </el-dialog>
<div style="background: #fff;">
    <el-table :data="tableData" style="width: 100%;">
        <el-table-column align="center" prop="序号" label="序号" width="80px" />
        <el-table-column align="center" prop="类型" label="类型" />
        <el-table-column align="center" prop="车牌" label="车牌" />
        <el-table-column align="center" prop="车辆照片" label="车辆照片" >
        <template #default="scope">
        <el-button

      link
       @click="list">{{scope.row.车辆照片}}</el-button
    >
</template>
</el-table-column>
        <el-table-column align="center" prop="随车清单" label="随车清单" >
                <template #default="scope">
        <el-button

      link
       @click="list">{{scope.row.随车清单}}</el-button
    >
</template>
</el-table-column>
        <el-table-column align="center" prop="行驶证" label="行驶证" >
                        <template #default="scope">
        <el-button

      link
       @click="list">{{scope.row.行驶证}}</el-button
    >
</template>
</el-table-column>
        <el-table-column align="center" prop="健康码" label="健康码" >
                        <template #default="scope">
        <el-button

      link
       @click="list">{{scope.row.健康码}}</el-button
    >
</template>
</el-table-column>
        <el-table-column align="center" prop="申请时间" label="申请时间" width="200px" />
        <el-table-column align="center" prop="排放标准" label="排放标准" />
        <el-table-column align="center" fixed="right" label="操作" width="120">
            <template #default>
                                <el-button link type="primary" size="small" @click="detailPage">详情</el-button>
                                <el-button link type="primary" size="small" >修改</el-button>
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

<script setup>
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
    import car from"@/assets/car.png"
    // 路由
    import {
        useRouter
    } from 'vue-router'
    // 文件导入
    import {
        ElMessage,
        ElMessageBox
    } from 'element-plus'
    import * as XLSX from "xlsx";
    let table = reactive({
        rows: [],
        total: 0
    });
    onMounted(() => {
    });
    const centerDialogVisible = ref(false)
const list = ()=>{
  centerDialogVisible.value = true
}
    // 导入
    const fileList = ref([])

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
        类型: "出门",
        车牌: "辽A88882",
        车辆照片: "点击查看图片",
        随车清单: "点击查看图片",
        行驶证: "点击查看图片",
        健康码: "点击查看图片",
        申请时间: "22.12.10 14：50：26",
        排放标准: "国V",
    }, {
        序号: 2,
        类型: "出门",
        车牌: "辽A88888",
        车辆照片: "点击查看图片",
        随车清单: "点击查看图片",
        行驶证: "点击查看图片",
        健康码: "点击查看图片",
        申请时间: "22.12.10 14：50：26",
        排放标准: "国V",
    }, ];
    const exportExcel = ()=>{
      const data = XLSX.utils.json_to_sheet(tableData)//此处tableData.value为表格的数据
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb,data,'test-data')//test-data为自定义的sheet表名
      XLSX.writeFile(wb,'运输车辆备案.xlsx')//test.xlsx为自定义的文件名
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
