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
              >添加场内车辆备案</el-breadcrumb-item
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
                  v-model="form.environmentalProtectionGrade"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="车辆颜色">
                <el-select
                  v-model="form.licensePlateColor"
                  placeholder="请选择"
                  style="width: 220px"
                >
                  <el-option label="蓝色" value="101" />
                  <el-option label="绿色" value="102" />
                  <el-option label="白色" value="103" />
                  <el-option label="黄色" value="104" />
                  <el-option label="黑色" value="105" />
                </el-select>
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
                <el-date-picker
                  v-model="form.registrationDate"
                  type="date"
                  placeholder="请选择"
                  style="width: 220px"
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
                <el-select
                  v-model="form.vehicleEmissions"
                  style="width: 220px"
                  placeholder="请选择"
                >
                  <el-option label="国I" value="1001" />
                  <el-option label="国II" value="1002" />
                  <el-option label="国III" value="1003" />
                  <el-option label="国IV" value="1004" />
                  <el-option label="国V" value="1005" />
                  <el-option label="国VI" value="1006" />
                  <el-option label="普通" value="1007" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="燃料类型">
                <el-select
                  v-model="form.vehicleFuel"
                  style="width: 220px"
                  placeholder="请选择"
                >
                  <el-option label="汽油" value="2001" />
                  <el-option label="柴油" value="2002" />
                  <el-option label="航煤" value="2003" />
                </el-select>
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
                <el-select
                  v-model="form.natureOfVehicleUse"
                  placeholder="请选择"
                  style="width: 220px"
                >
                  <el-option label="非营运" value="3001" />
                  <el-option label="营运" value="3002" />
                  <el-option label="货运" value="3003" />
                </el-select>
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
                <el-select
                  v-model="form.obdInstallation"
                  style="width: 220px"
                  placeholder="请选择"
                >
                  <el-option label="是" value="1" />
                  <el-option label="否" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="OBD安装日期">
                <el-date-picker
                  v-model="form.obdInstallationDate"
                  type="date"
                  placeholder="请选择"
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
                <el-button class="sele-but" @click="insert(ruleFormRef)"
                  >保存</el-button
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

<script setup lang="ts">
import { reactive, ref } from "vue";

//接口
import { insertOnsite } from "@/api/mobilePollution";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

import { UploadProps } from "element-plus";
// 路由
import { useRouter } from "vue-router";
const router = useRouter();
const ruleFormRef = ref();
// 跳转回列表页
const close = () => {
  router.push({
    path: "/onsiteIndex",
  });
};
//新增接口
const insert = () => {
  console.log(
    form.environmentalProtectionGrade,
    "environmentalProtectionGrade"
  );
  if (form.environmentalProtectionGrade == "") {
    ElMessage.error("请填写环保等级编码内部管理号牌");
  } else {
    insertOnsite(form).then((res) => {
      if (res.code == 200) {
        ElMessage.success("保存数据成功");
        router.push({
          path: "/onsiteIndex",
        });
      } else {
        ElMessage.error("保存数据失败");
      }
    });
  }
};
let form = reactive({ environmentalProtectionGrade: "" });
// 校验
const rules = {
  environmentalProtectionGrade: [
    {
      required: true,
      message: "请填写环保等级编码内部管理号牌",
      trigger: "blur",
    },
  ],
};
// 下拉选择 - 是否安装OBD
const value = ref("");

const options = [
  {
    value: "Option1",
    label: "是",
  },
  {
    value: "Option2",
    label: "否",
  },
];

// 时间选择器
const value1 = ref("");
const value2 = ref("");
// do not use same name with ref
const onSubmit = () => {
  console.log("submit!");
};
// const imageUrl = ref('')
// 文件上传（照片）
// const handleAvatarSuccess = (response, uploadFile) => {
//   imageUrl.value = URL.createObjectURL();
// };

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Avatar picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
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
