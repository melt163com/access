<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
            <el-breadcrumb-item>数据应用</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumbColor"
              >车辆备案查询</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main>
        <div class="inside-main-box">
          <el-row
            class="inside-main"
            style="background: #fff; padding-top: 10px; height: 85px"
          >
            <el-col :span="5" style="margin-left: 20px">
              <el-form-item label="申请时间" size="small">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="选择时间"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <span>-</span>
            <el-col :span="4">
              <el-form-item label="" size="small">
                <el-date-picker
                  v-model="form.date2"
                  type="date"
                  placeholder="选择时间"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 5px">
              <el-form-item label="车牌号" size="small">
                <el-input v-model="form.driver" placeholder="请输入车牌号" />
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 5px">
              <el-form-item label="司机" size="small">
                <el-input v-model="form.driver" placeholder="请输入司机" />
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 5px">
              <el-form-item label="出入类型" size="small">
                <el-select v-model="form.access" placeholder="请选择">
                  <el-option label="出厂" value="shanghai" />
                  <el-option label="入厂" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 20px">
              <el-form-item label="受访部门" size="small">
                <el-input v-model="form.driver" placeholder="请输入受访部门" />
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 5px">
              <el-form-item label="受访人员" size="small">
                <el-input v-model="form.driver" placeholder="请输入受访人员" />
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 20px">
              <el-button size="small" class="sele-but">查询</el-button>
              <el-button size="small" class="empty-but">刷新</el-button>
              <el-button size="small" class="empty-but" @click="exportExcel"
                >导出</el-button
              >
            </el-col>
          </el-row>
        </div>
        <!-- 导入弹出框 -->
        <el-dialog
          style="width: 600px"
          v-model="dialogTableVisible"
          center
          title="导入文件"
        >
          <el-upload
            v-model:file-list="fileList"
            class="upload-demo"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="3"
            :on-exceed="handleExceed"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
          >
            <!-- list-type="picture" -->
            <el-icon class="el-icon--upload">
              <upload-filled />
            </el-icon>
            <div class="el-upload__text">
              将文件托到此处或<em>点击导入</em>
              <p>
                按住Ctrl可同时多选,支持上传rar/zip格式文件,如果没有模板<em
                  >点击下载</em
                >
              </p>
            </div>
            <template #tip>
              <div class="el-upload__tip"></div>
            </template>
          </el-upload>
        </el-dialog>
        <div style="background: #fff">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              align="center"
              prop="序号"
              label="序号"
              width="80px"
            />
            <el-table-column align="center" prop="企业名称" label="企业名称" />
            <el-table-column align="center" prop="环保等级" label="环保等级" />
            <el-table-column align="center" prop="通行状态" label="通行状态" />
            <el-table-column align="center" prop="类型" label="类型" />
            <el-table-column align="center" prop="门禁号" label="门禁号" />
            <el-table-column
              align="center"
              prop="道闸编号"
              label="道闸编号"
              width="150px"
            />
            <el-table-column align="center" prop="车牌" label="车牌" />
            <el-table-column align="center" prop="司机" label="司机" />
            <el-table-column align="center" prop="司机电话" label="司机电话" />
            <el-table-column align="center" prop="申请人" label="申请人" />
            <el-table-column
              align="center"
              prop="申请时间"
              label="申请时间"
              width="180px"
            />
            <el-table-column
              align="center"
              prop="出入时间"
              label="出入时间"
              width="180px"
            />
            <el-table-column align="center" prop="排放阶段" label="排放阶段" />
            <el-table-column
              align="center"
              prop="车辆识别代码"
              label="车辆识别代码(VIN)"
              width="180px"
            />
            <el-table-column
              align="center"
              prop="发动机号码"
              label="发动机号码"
            />
            <el-table-column align="center" prop="注册时间" label="注册时间" />
            <el-table-column align="center" prop="运输货物" label="运输货物" />
            <el-table-column
              align="center"
              prop="运输货量"
              label="运输货量/吨"
            />
          </el-table>
          <el-pagination
            style="margin-top: 20%; display: flex; justify-content: flex-end"
            v-model:current-page="currentPage3"
            v-model:page-size="pageSize3"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next, jumper"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { Plus, UploadFilled } from "@element-plus/icons-vue";
// import {
//     getUsers
// } from "@/api/user"
// 路由
import { useRouter } from "vue-router";
// 文件导入
import { ElMessage, ElMessageBox } from "element-plus";
import * as XLSX from "xlsx";
let table = reactive({
  rows: [],
  total: 0,
});

// 导入
const fileList = ref([
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
  {
    name: "food2.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
]);

const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePreview = (file) => {
  console.log(file);
};
// 导入弹出框
const dialogTableVisible = ref(false);
const router = useRouter();
// 新增跳转到新增页面
const addPage = () => {
  router.push({
    path: "/transportAdd",
    query: "",
  });
};
// 跳转到详情页面
const detailPage = () => {
  router.push({
    path: "transportDetail",
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
const tableData = [
  {
    序号: 1,
    企业名称: "",
    环保等级: "",
    通行状态: "已通过",
    类型: "入门",
    门禁号: "",
    道闸编号: "一号门入口01",
    车牌: "辽A9999",
    司机: "张三",
    司机电话: "",
    申请人: "",
    申请时间: "2022-02-08 14:20:58",
    出入时间: "2022-02-08 14:20:58",
    排放阶段: "",
    注册时间: "",
    车辆识别代码: "",
    发动机号码: "",
    运输货物: "钢铁",
    运输货量: 50,
  },
];
const exportExcel = () => {
  const data = XLSX.utils.json_to_sheet(tableData); //此处tableData.value为表格的数据
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, data, "test-data"); //test-data为自定义的sheet表名
  XLSX.writeFile(wb, "车辆备案查询.xlsx"); //test.xlsx为自定义的文件名
};
</script>
<style scoped>
/* 面包屑字体颜色更改 */

.breadcrumbColor >>> .el-breadcrumb__inner {
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
