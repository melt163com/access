<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
            <el-breadcrumb-item>车辆备案</el-breadcrumb-item>
            <el-breadcrumb-item>运输车辆备案</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumbColor"
              >运输车辆备案详情</el-breadcrumb-item
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
          <!-- 横条 车辆进出登记 -->
          <div class="head-bar">
            <div class="head-bar-main"></div>
            <div>
              <h4>车辆进出登记</h4>
            </div>
          </div>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="出入类型">
                <el-input
                  style="width: 220px"
                  v-model="form.typeOfAcces"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="登记事由">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_dengjishiyou"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="送/提货单位">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_tihuodanwei"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="运输货物">
                <el-input
                  style="width: 220px"
                  v-model="form.cargo_type"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="运输量/吨">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_huowushuliang"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="起运地">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_qiyundi"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="16">
              <el-form-item label="同行人员">
                <el-input
                  style="height: 60px; width: 640px"
                  v-model="form.peers"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="受(拜)访部门">
                <el-input
                  style="width: 220px"
                  v-model="form.bumen_type"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="受(拜)访人员">
                <el-input
                  style="width: 220px"
                  v-model="form.bumen_name"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <!-- 横条 车辆及司机信息 -->
          <div class="head-bar">
            <div class="head-bar-main"></div>
            <div>
              <h4>车辆及司机信息</h4>
            </div>
          </div>
          <el-row>
            <el-col :span="8">
              <el-form-item label="司机姓名">
                <el-input
                  style="width: 220px"
                  v-model="form.sj_name"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="司机电话">
                <el-input
                  style="width: 220px"
                  v-model="form.sj_phone"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="车牌颜色">
                <el-input
                  style="width: 220px"
                  :value="form.licensePlateColor?.cp_type"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="车型描述">
                <el-input
                  style="width: 220px"
                  :value="form.vehicleType?.cx_type"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3" style="margin-left: 25px">
              <div class="UPtsxt"><span>行驶证(正面)</span></div>
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
              </el-upload>
            </el-col>
            <el-col :span="3">
              <div class="UPtsxt"><span>车辆照片(正面)</span></div>
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
              </el-upload>
            </el-col>
            <el-col :span="3">
              <div class="UPtsxt"><span>随车清单</span></div>
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
              </el-upload>
            </el-col>
            <el-col :span="3">
              <div class="UPtsxt"><span>健康码</span></div>
              <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon">
                  <Plus />
                </el-icon>
              </el-upload>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="20" style="margin: 18px 25px">
              <el-tag class="ml-2" type="danger"
                >图片操作为本地操作,点击添加、删除或预览图片,完成后提交上传数据。</el-tag
              >
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="车牌号">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_cph"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="燃料类型">
                <el-input
                  style="width: 220px"
                  :value="form.vehicleFuel?.clrl_type"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="排放阶段">
                <el-input
                  style="width: 220px"
                  :value="form.vehicleEmissions?.clpf_type"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="车队名称">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_cdmc"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="所有人">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_cz"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="使用性质">
                <el-input
                  style="width: 220px"
                  :value="form.natureOfVehicleUse?.clsyxz_type"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="16">
              <el-form-item label="地址">
                <el-input style="width: 650px" v-model="form.cl_dz" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="注册日期">
                <el-input style="width: 650px" :value="$moment(form.zcrq).format('YYYY-MM-DD HH:mm:ss')" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="发证日期">
                <el-input style="width: 650px" :value="$moment(form.zcrq).format('YYYY-MM-DD HH:mm:ss')" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="车辆类型">
                <el-input
                  style="width: 220px"
                  v-model="form.modeldescription"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="品牌型号">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_ppxh"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="车辆识别代码">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_sbm"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="核定载质量">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_hdzzl"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="发动机号码">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_fdjhm"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="发动机型号">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_fdjxh"
                  class="w-50 m-2"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="是否安装OBD">
                <el-input style="width: 650px" v-model="form.obdInstallation" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="发证日期">
                <el-input style="width: 650px" :value="$moment(form.obdanzhrq).format('YYYY-MM-DD HH:mm:ss')" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <div style="margin: 10px auto 20px">
              <el-col>
                <el-button
                  class="sele-but"
                  v-if="queryId == 1"
                  @click="insert()"
                  >保存</el-button
                >
                <el-button
                  class="sele-but"
                  v-if="queryId == 2"
                  @click="update()"
                  >修改</el-button
                >
                <el-button class="empty-but" @click="close()">取消</el-button>
              </el-col>
            </div>
          </el-row>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { UploadProps } from "element-plus";
// 路由
import { useRouter } from "vue-router";
const router = useRouter();
let form = JSON.parse(router.currentRoute.value.query.row);

// 跳转回列表页
const close = () => {
  router.push({
    path: "/transportIndex",
  });
};
</script>
<style scoped>
/* 面包屑字体颜色更改 */

.breadcrumbColor >>> .el-breadcrumb__inner {
  color: #000;
}
/* 横条蓝条样式 */

.head-bar {
  width: 100%;
  height: 40px;
  display: flex;
}

.head-bar-main {
  width: 3px;
  height: 20px;
  opacity: 1;
  background: #3780b9;
  margin-right: 11px;
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
