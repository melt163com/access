<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
            <el-breadcrumb-item>车辆备案</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumbColor"
              >场内车辆备案</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main>
        <div class="inside-main-box">
          <el-row
            class="inside-main"
            style="background: #fff; padding-top: 10px; height: 46px"
          >
            <el-col :span="5" style="margin-left: 20px">
              <el-form-item label="申请时间" size="small">
                <el-date-picker
                  v-model="form.startDateTime"
                  type="date"
                  placeholder="选择时间"
                  style="width: 100%"
                />
                <!-- <span class="text-gray-500">-</span> -->
              </el-form-item>
            </el-col>
            <span>-</span>
            <el-col :span="4" style="margin-left: 5px">
              <el-form-item label="" size="small">
                <!-- <span class="text-gray-500">-</span> -->
                <el-date-picker
                  v-model="form.endtDateTime"
                  type="date"
                  placeholder="选择时间"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 5px">
              <el-form-item label="管理号码" size="small">
                <el-input
                  v-model="form.environmentalProtectionGrade"
                  placeholder="请输入"
                />
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 20px">
              <el-button size="small" class="sele-but" @click="selectQuery"
                >查询</el-button
              >
              <el-button size="small" class="empty-but" @click="onReset"
                >重置</el-button
              >
            </el-col>
          </el-row>
          <div></div>
        </div>
        <div style="height: 40px; display: flex; align-items: center">
          <el-button
            size="small"
            :icon="Plus"
            class="add-but"
            @click="addPage()"
            >新增</el-button
          >
          <el-button
            size="small"
            class="empty-but"
            @click="dialogTableVisible = true"
            >导入</el-button
          >
          <el-button size="small" class="empty-but" @click="exportExcel"
            >导出</el-button
          >
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
              prop="onSsiteVehicleFilingForm_id"
              label="序号"
              align="center"
              width="80"
            />
            <el-table-column
              prop="environmentalProtectionGrade"
              align="center"
              label="环保登记编码内部管理号牌"
            />
            <el-table-column
              prop="licensePlateColor"
              label="车辆颜色"
              align="center"
            />
            <el-table-column
              prop="vehiclePhoto"
              label="车辆照片"
              align="center"
            />
            <el-table-column
              prop="accompanyingList"
              label="随车清单"
              align="center"
            />
            <el-table-column
              prop="drivingLicense"
              label="行驶证"
              align="center"
            />
            <el-table-column
              prop="vehicleType"
              label="车辆类型"
              align="center"
            />
            <el-table-column
              prop="registrationDate"
              label="注册时间"
              align="center"
            />
            <el-table-column
              prop="vehicleEmissions"
              label="排放标准"
              align="center"
            />
            <el-table-column
              label="操作"
              align="center"
              fixed="right"
              width="120"
            >
              <template #default="scope">
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="detailPage(scope.row)"
                  >详情</el-button
                >
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="update(scope.row)"
                  >修改</el-button
                >
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="delect(scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
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
<script>
import { reactive, ref, onMounted } from "vue";
import { Plus, UploadFilled } from "@element-plus/icons-vue";
//接口导入
import {
  deleteOnsite,
  selectOnsiteAll,
  selectOnsiteQuery,
} from "@/api/mobilePollution";
// 路由
import { useRouter } from "vue-router";
// 文件导入
import { ElMessage, ElMessageBox } from "element-plus";
import * as XLSX from "xlsx";
export default {
  setup() {
    // 路由
    const router = useRouter();
    //    定义
    const tableData = ref([]);
    const formRef = ref(null);
    const form = reactive({
      startDateTime: "",
      endtDateTime: "",
      environmentalProtectionGrade: "",
    });
    // 重置
    const onReset = () => {
      form.startDateTime = "";
      form.endtDateTime = "";
      form.environmentalProtectionGrade = "";
    };
    // 新增跳转到新增页面
    const addPage = () => {
      router.push({
        path: "/onsiteAdd",
      });
    };
    // 跳转到详情页面
    const detailPage = (row) => {
      sessionStorage.setItem("userObj", JSON.stringify(row));
      router.push({
        path: "/onsiteDetail",
        query: "",
      });
    };
    // 跳转到修改页面
    const update = (row) => {
      sessionStorage.setItem("userObj", JSON.stringify(row));
      router.push({
        path: "/onsiteUpdate",
        query: "",
      });
    };
    //查询全部接口
    const select = () => {
      selectOnsiteAll({}).then((res) => {
        tableData.value = res.data;
      });
    };
    select();
    //搜索查询
    const selectQuery = () => {
      selectOnsiteQuery(form).then((res) => {
        if (res.code == 200) {
          tableData.value = res.data;
        } else {
        }
      });
    };
    //删除
    const delect = (row) => {
      let onSsiteVehicleFilingForm_id = JSON.stringify(
        row.onSsiteVehicleFilingForm_id
      );
      deleteOnsite({
        onSsiteVehicleFilingForm_id,
      }).then((res) => {
        if (res.code == 200) {
          select();
          console.log(res, "333333333333333333333");
        } else {
          console.log("删除失败");
        }
      });
    };
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
    }; // 导入弹出框
    let table = reactive({
      rows: [],
      total: 0,
    });
    const dialogTableVisible = ref(false);
    const exportExcel = () => {
      const data = XLSX.utils.json_to_sheet(tableData); //此处tableData.value为表格的数据
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, data, "test-data"); //test-data为自定义的sheet表名
      XLSX.writeFile(wb, "场内车辆.xlsx"); //test.xlsx为自定义的文件名
    };
    return {
      tableData,
      onReset,
      form,
      select,
      selectQuery,
      addPage,
      delect,
      update,
      detailPage,
      exportExcel,
      dialogTableVisible,
    };
  },
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
