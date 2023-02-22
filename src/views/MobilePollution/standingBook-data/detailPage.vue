<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
            <el-breadcrumb-item>数据应用</el-breadcrumb-item>
            <el-breadcrumb-item>车辆进出台账</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumbColor"
              >车辆进出台账详情</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main style="margin-top: -20px">
        <el-form
          style="background: white; padding: 20px"
          :model="form"
          label-width="120px"
        >
          <el-row>
            <el-col :span="8">
              <el-form-item label="状态">
                <el-input v-model="form.statuss" placeholder="请填写" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出入类型">
                <el-input v-model="form.typeOfAcces" placeholder="请填写" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出入类型">
                <el-input
                  v-model="form.accessControl"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col> </el-row
          ><el-row>
            <el-col :span="8">
              <el-form-item label="车辆号">
                <el-input
                  v-model="form.cl_cph"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="备案状态">
                <el-input
                  v-model="form.filingStatus"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="申请时间">
                <el-input
                  v-model="form.applicationTime"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="出入时间">
                <el-input
                  v-model="form.accessTime"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="注册日期">
                <el-input
                  v-model="form.zcrq"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="排放阶段">
                <el-input
                  v-model="form.vehicleEmissions"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="司机姓名">
                <el-input
                  v-model="form.sj_name"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="司机电话">
                <el-input
                  v-model="form.sj_phone"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="车辆识别代码">
                <el-input
                  v-model="form.cl_sbm"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="发动机号">
                <el-input
                  v-model="form.cl_fdjhm"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="运输货物">
                <el-input
                  v-model="form.cargo_type"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="运输量">
                <el-input
                  v-model="form.cl_huowushuliang"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="受访部门">
                <el-input
                  v-model="form.bumen_type"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="受访人员">
                <el-input
                  v-model="form.bumen_name"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col> </el-row
          ><el-row>
            <div style="margin: 10px auto 20px">
              <el-col>
                <el-button class="empty-but" @click="close()">返回</el-button>
              </el-col>
            </div>
          </el-row></el-form
        ></el-main
      >
    </el-container>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { UploadProps } from "element-plus";
// 路由
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    // // 跳转回列表页
    const close = () => {
      sessionStorage.removeItem("userObj");
      router.push({
        path: "/nonRoadIndex",
      });
    };
    // let form = reactive({});
    let form = reactive(JSON.parse(sessionStorage.getItem("userObj")));
    return { form, close };
  },
};
</script>
<style scoped>
/* 面包屑字体颜色更改 */

.breadcrumbColor >>> .el-breadcrumb__inner {
  color: #000;
}
/* 文件上传文字样式 */

.UPtsxt {
  width: 120px;
  height: 30px;
}
/* 文件上传样式 */

.avatar-uploader {
  width: 120px;
  height: 120px;
  background-color: #e5f4ff;
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #3780b9;
  width: 120px;
  height: 120px;
  text-align: center;
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
</style>
