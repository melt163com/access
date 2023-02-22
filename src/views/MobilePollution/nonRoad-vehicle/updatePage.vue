<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
            <el-breadcrumb-item>车辆备案</el-breadcrumb-item>
            <el-breadcrumb-item>非道路移动机械备案</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumbColor"
              >添加非道路移动机械备案</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main style="margin-top: -20px">
        <el-form
          label-width="110px"
          label-position="left"
          style="background: white; padding: 20px"
          :model="form"
          :rules="rules"
        >
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item
                style="margin-left: -10px; margin-right: 10px"
                label="环保登记编码"
                prop="environmentalProtectionRegistrationCode"
              >
                <el-input
                  style="width: 220px; margin-left: 10px"
                  v-model="form.environmentalProtectionRegistrationCode"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                style="margin-left: -10px; margin-right: 10px"
                label="机械环保代码"
                prop="mechanicalEnvironmentalProtectionCode"
              >
                <el-input
                  style="width: 220px; margin-left: 10px"
                  v-model="form.mechanicalEnvironmentalProtectionCode"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="机械名称">
                <el-input
                  style="width: 220px"
                  v-model="form.machineName"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item
                style="margin-left: -10px; margin-right: 10px"
                label="排放阶段"
                prop="vehicleEmissions"
              >
                <el-select
                  style="margin-left: 10px"
                  v-model="form.vehicleEmissions"
                  placeholder="请选择"
                >
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
            <el-col :span="8">
              <el-form-item label="发动机号码">
                <el-input
                  style="width: 205px"
                  v-model="form.engineNumber"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="注册日期">
                <el-date-picker
                  v-model="form.registrationDate"
                  type="date"
                  placeholder="请选择"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="所属企业编码">
                <el-input
                  style="width: 205px"
                  v-model="form.enterpriseCode"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="所属企业名称">
                <el-input
                  style="width: 205px"
                  v-model="form.nameOfAffiliatedEnterprise"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="运输货物">
                <el-input
                  style="width: 205px"
                  v-model="form.freight"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="运输重量/吨">
                <el-input
                  style="width: 205px"
                  v-model="form.transportWeight"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="3" style="margin-left: 25px">
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
            <el-col :span="3" style="margin-left: 25px">
              <div class="UPtsxt"><span>车辆铭牌照片</span></div>
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
          </el-row>
          <el-row :gutter="20">
            <el-col :span="20" style="margin: 18px 25px">
              <el-tag class="ml-2" type="danger"
                >图片操作为本地操作,点击添加、删除或预览图片,完成后提交上传数据。</el-tag
              >
            </el-col>
          </el-row>
          <el-row>
            <div style="margin: 10px auto 20px">
              <el-col>
                <el-button class="sele-but" @click="update()">修改</el-button>
                <el-button class="empty-but" @click="close()">取消</el-button>
              </el-col>
            </div>
          </el-row>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
//接口
import { updateRoad } from "@/api/mobilePollution";
import { UploadProps } from "element-plus";
// 路由
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    // 跳转回列表页
    const close = () => {
      sessionStorage.removeItem("userObj");
      router.push({
        path: "/nonRoadIndex",
      });
    };
    //修改按钮
    const update = () => {
      if (form.environmentalProtectionRegistrationCode == "") {
        ElMessage.error("请填写环保登记编码");
      } else if (form.mechanicalEnvironmentalProtectionCode == "") {
        ElMessage.error("请填写机械环保代码");
      } else if (form.vehicleEmissions == "") {
        ElMessage.error("请选择排放阶段");
      } else {
        updateRoad(form).then((res) => {
          if (res.code == 200) {
            sessionStorage.removeItem("userObj");
            router.push({
              path: "/nonRoadIndex",
            });
          } else {
            ElMessage.error("保存数据失败");
          }
        });
      }
    };
    let form = reactive(JSON.parse(sessionStorage.getItem("userObj")));
    const rules = {
      environmentalProtectionRegistrationCode: [
        {
          required: true,
          message: "请填写环保登记编码",
          trigger: "blur",
        },
      ],
      mechanicalEnvironmentalProtectionCode: [
        {
          required: true,
          message: "请填写机械环保代码",
          trigger: "blur",
        },
      ],
      vehicleEmissions: [
        {
          required: true,
          message: "请选择排放阶段",
          trigger: "blur",
        },
      ],
    };
    return { form, close, update, rules };
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
