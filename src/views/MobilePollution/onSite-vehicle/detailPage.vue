<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
            <el-breadcrumb-item>车辆备案</el-breadcrumb-item>
            <el-breadcrumb-item>场内车辆备案</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumbColor"
              >场内车辆备案详情</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main style="margin-top: -30px">
        <el-form
          label-position="left"
          style="background: white; padding: 20px"
          :model="form"
          :rules="rules"
          ref="ruleFormRef"
          label-width="120px"
        >
          <el-row :gutter="20">
            <el-col :span="9">
              <el-form-item
                label-width="200px"
                style="margin-left: -10px; margin-right: 10px"
                label="环保等级编码内部管理号牌"
                prop="environmentalProtectionGrade"
              >
                <el-input
                  style="width: 220px; margin-left: 10px"
                  required="true"
                  v-model="form.environmentalProtectionGrade"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="车辆颜色">
                <el-input
                  style="width: 220px"
                  v-model="form.licensePlateColor"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="车辆类型">
                <el-input
                  style="width: 220px"
                  v-model="form.vehicleType"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="9">
              <el-form-item label-width="200px" label="品牌型号">
                <el-input
                  style="width: 220px"
                  v-model="form.brandModel"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="发动机号码">
                <el-input
                  style="width: 220px"
                  v-model="form.engineNumber"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="注册日期">
                <el-input
                  style="width: 220px"
                  v-model="form.registrationDate"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="9">
              <el-form-item label-width="200px" label="车辆识别代码">
                <el-input
                  style="width: 220px"
                  v-model="form.vehicleIdentificationNumber"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="排放阶段">
                <el-input
                  style="width: 220px"
                  v-model="form.vehicleEmissions"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="燃料类型">
                <el-input
                  style="width: 220px"
                  v-model="form.vehicleFuel"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="9">
              <el-form-item label-width="200px" label="所属企业编号">
                <el-input
                  style="width: 220px"
                  v-model="form.enterpriseNo"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="企业名称">
                <el-input
                  style="width: 220px"
                  v-model="form.enterpriseName"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="使用性质">
                <el-input
                  style="width: 220px"
                  v-model="form.natureOfVehicleUse"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="9">
              <el-form-item label-width="200px" label="所有人">
                <el-input
                  style="width: 220px"
                  v-model="form.owner"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="14">
              <el-form-item label="住址">
                <el-input
                  v-model="form.address"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="9">
              <el-form-item label-width="200px" label="是否安装OBD">
                <el-input
                  style="width: 220px"
                  v-model="form.obdInstallation"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="OBD安装日期"
                ><el-input
                  style="width: 220px"
                  v-model="form.obdInstallationDate"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
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
          </el-row>
          <el-row :gutter="20">
            <el-col :span="20" style="margin: 18px 25px">
              <el-tag class="ml-2" type="danger"
                >图片操作为本地操作,点击添加、删除或预览图片,完成后提交上传数据。</el-tag
              >
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <div style="margin: 10px auto 20px">
              <el-col>
                <el-button class="empty-but" @click="close()">返回</el-button>
              </el-col>
            </div>
          </el-row>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import { UploadProps } from "element-plus";
// 路由
import { useRouter } from "vue-router";
const router = useRouter();
let form = reactive(JSON.parse(sessionStorage.getItem("userObj")));
// 跳转回列表页
const close = () => {
  sessionStorage.removeItem("userObj");
  router.push({
    path: "/onsiteIndex",
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
