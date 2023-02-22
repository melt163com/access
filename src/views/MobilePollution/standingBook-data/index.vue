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
              >车辆进出台账</el-breadcrumb-item
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
            <el-col :span="4" style="margin-left: 20px">
              <el-form-item label="出入时间" size="small">
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
            <el-col :span="3" style="margin-left: 5px">
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
              <el-form-item label="车牌号" size="small">
                <el-input v-model="form.cl_cph" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :span="3" style="margin-left: 5px">
              <el-form-item label="排放阶段" size="small">
                <el-select v-model="form.vehicleEmissions" placeholder="请选择">
                  <el-option label="国I" value="国I" />
                  <el-option label="国II" value="国II" />
                  <el-option label="国III" value="国III" />
                  <el-option label="国IV" value="国IV" />
                  <el-option label="国V" value="国V" />
                  <el-option label="国VI" value="国VI" />
                  <el-option label="普通" value="普通" />
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="3" style="margin-left: 5px">
              <el-form-item label="出入类型" size="small">
                <el-select v-model="form.access" placeholder="请选择">
                  <el-option label="入厂" value="入厂" />
                  <el-option label="出厂" value="出厂" />
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="5" style="margin-left: 10px">
              <el-button size="small" class="sele-but" @click="selectQuery()"
                >查询</el-button
              >
              <el-button size="small" class="empty-but">重置</el-button>
              <el-button size="small" class="empty-but" @click="exportExcel"
                >导出</el-button
              >
            </el-col>
          </el-row>
        </div>
        <div style="background: #fff">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              align="center"
              prop="cl_id"
              label="序号"
              width="80"
            />
            <el-table-column align="center" prop="filingStatus" label="状态" />
            <el-table-column align="center" prop="typeOfAcces" label="类型" />
            <el-table-column
              align="center"
              prop="accessControl"
              label="门禁号"
            />
            <el-table-column align="center" prop="道闸编号" label="道闸编号" />
            <el-table-column align="center" prop="cl_cph" label="车牌" />
            <el-table-column
              align="center"
              prop="vehicleEmissions"
              label="排放阶段"
            />
            <el-table-column align="center" prop="sj_name" label="司机" />
            <el-table-column align="center" prop="sj_phone" label="司机电话" />
            <el-table-column
              align="center"
              prop="accessTime"
              label="出入时间"
            />
            <el-table-column align="center" prop="viewvideo" label="查看视频" />
            <el-table-column
              align="center"
              prop="viewphotos"
              label="查看照片"
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
import { Plus } from "@element-plus/icons-vue";
// 路由
import { useRouter } from "vue-router";
import { selectAllBook, selectQueryBook } from "@/api/mobilePollution";
import * as XLSX from "xlsx";
export default {
  setup() {
    const router = useRouter();
    // 跳转到详情页面
    const detailPage = (row) => {
      sessionStorage.setItem("userObj", JSON.stringify(row));
      router.push({
        path: "standingBookDetail",
        query: "",
      });
    };
    //查所有
    const select = () => {
      selectAllBook({}).then((res) => {
        tableData.value = res.data;
      });
    };
    select();
    //根据条件查询
    const selectQuery = () => {
      selectQueryBook().then((res) => {
        tableData.value = res.data;
      });
    };
    const tableData = ref([]);
    const form = reactive({
      date1: "",
      date2: "",
      num: "",
      driver: "",
      access: "",
    });
    let table = reactive({
      rows: [],
      total: 0,
    });
    const exportExcel = () => {
      const data = XLSX.utils.json_to_sheet(tableData); //此处tableData.value为表格的数据
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, data, "test-data"); //test-data为自定义的sheet表名
      XLSX.writeFile(wb, "车辆进出台账.xlsx"); //test.xlsx为自定义的文件名
    };
    return {
      form,
      tableData,
      exportExcel,
      table,
      detailPage,
      select,
      selectQuery,
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
