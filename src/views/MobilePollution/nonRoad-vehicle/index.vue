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
              >非道路移动机械备案</el-breadcrumb-item
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
              <el-form-item label="环保登记编码" size="small">
                <el-input
                  v-model="form.environmentalProtectionRegistrationCode"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="5" style="margin-left: 5px">
              <el-form-item label="机械环保代码" size="small">
                <el-input
                  v-model="form.mechanicalEnvironmentalProtectionCode"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="5" style="margin-left: 5px">
              <el-form-item label="注册日期" size="small">
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
            <el-col :span="3">
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
            <el-col :span="4" style="margin-left: 10px">
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
              align="center"
              prop="nonRoadMobileMachineryFiling_id"
              label="序号"
              width="80"
            />
            <el-table-column
              align="center"
              prop="environmentalProtectionRegistrationCode"
              label="环保登记编码"
            />
            <el-table-column
              align="center"
              prop="mechanicalEnvironmentalProtectionCode"
              label="机械环保代码"
            />
            <el-table-column
              align="center"
              prop="vehicleNameplate"
              label="车辆铭牌照片"
            />
            <el-table-column
              align="center"
              prop="accompanyingList"
              label="随车清单"
            />
            <el-table-column
              align="center"
              prop="drivingLicense"
              label="行驶证"
            />
            <el-table-column
              align="center"
              prop="vehicleEmissions"
              label="排放阶段"
            />
            <el-table-column
              align="center"
              prop="registrationDate"
              label="注册日期"
            />
            <el-table-column
              align="center"
              fixed="right"
              label="操作"
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
                  @click="updatePage(scope.row)"
                  >修改</el-button
                >
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="del(scope.row)"
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
import { reactive, ref } from "vue";
import { Plus, UploadFilled } from "@element-plus/icons-vue";
// 路由
import { useRouter } from "vue-router";
// 文件导入
import { ElMessage, ElMessageBox } from "element-plus";
//接口
import {
  selectAllRoad,
  selectQueryRoad,
  deleteRoad,
} from "@/api/mobilePollution";
import * as XLSX from "xlsx";
export default {
  setup() {
    // 路由
    const router = useRouter();
    // 新增跳转到新增页面
    const addPage = () => {
      router.push({
        path: "/nonRoadAdd",
        query: "",
      });
    };
    // 跳转到详情页面
    const detailPage = (row) => {
      sessionStorage.setItem("userObj", JSON.stringify(row));
      router.push({
        path: "/nonRoadDetail",
        query: "",
      });
    };
    // 跳转到修改页面
    const updatePage = (row) => {
      sessionStorage.setItem("userObj", JSON.stringify(row));
      router.push({
        path: "/nonRoadUpdate",
        query: "",
      });
    };
    //查询所有
    const select = () => {
      selectAllRoad({}).then((res) => {
        if (res.code == 200) {
          tableData.value = res.data;
        }
      });
    };
    select();
    //根据条件查询
    const selectQuery = () => {
      selectQueryRoad(form).then((res) => {
        if (res.code == 200) {
          tableData.value = res.data;
        }
      });
    };
    const del = (row) => {
      let nonRoadMobileMachineryFiling_id = JSON.stringify(
        row.nonRoadMobileMachineryFiling_id
      );
      deleteRoad({ nonRoadMobileMachineryFiling_id }).then((res) => {
        select();
        ElMessage.success("删除成功");
      });
    };
    // 重置
    const onReset = () => {
      form.startDateTime = "";
      form.endtDateTime = "";
      form.environmentalProtectionRegistrationCode = "";
      form.mechanicalEnvironmentalProtectionCode = "";
    };
    //定义
    const tableData = ref([]);
    const form = reactive({});
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
    let table = reactive({
      rows: [],
      total: 0,
    });
    const exportExcel = () => {
      const data = XLSX.utils.json_to_sheet(tableData); //此处tableData.value为表格的数据
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, data, "test-data"); //test-data为自定义的sheet表名
      XLSX.writeFile(wb, "非道路移动机械.xlsx"); //test.xlsx为自定义的文件名
    };
    return {
      form,
      tableData,
      select,
      selectQuery,
      onReset,
      addPage,
      exportExcel,
      detailPage,
      updatePage,
      del,
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
