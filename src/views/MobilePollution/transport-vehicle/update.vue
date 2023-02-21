<template>
  <div>
    <child-components @add="handleAdd"></child-components>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
            <el-breadcrumb-item>车辆备案</el-breadcrumb-item>
            <el-breadcrumb-item>运输车辆备案</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumbColor"
              >修改运输车辆备案</el-breadcrumb-item
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
                <el-select v-model="form.typeOfAcces" placeholder="请选择">
                  <el-option label="入厂" value="入厂" />
                  <el-option label="出厂" value="出厂" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="登记事由">
                <el-select v-model="form.cl_dengjishiyou" placeholder="请选择">
                  <el-option label="送货" value="送货" />
                  <el-option label="提货" value="提货" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="送/提货单位">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_tihuodanwei"
                  class="w-50 m-2"
                  placeholder="请填写"
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
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="运输量/吨">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_huowushuliang"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="起运地">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_qiyundi"
                  class="w-50 m-2"
                  placeholder="请填写"
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
                  placeholder="请输入姓名、身份证号、联系方式"
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
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="受(拜)访人员">
                <el-input
                  style="width: 220px"
                  v-model="form.bumen_name"
                  class="w-50 m-2"
                  placeholder="请填写"
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
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="司机电话">
                <el-input
                  style="width: 220px"
                  v-model="form.sj_phone"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="车牌颜色">
                <el-select
                  v-model="form.licensePlateColor"
                  placeholder="请选项"
                >
                  <el-option label="蓝色" value="蓝色" />
                  <el-option label="绿色" value="绿色" />
                  <el-option label="白色" value="白色" />
                  <el-option label="黄色" value="黄色" />
                  <el-option label="黑色" value="黑色" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="车型描述">
                <el-select v-model="form.vehicleType" placeholder="请选择">
                  <el-option label="面包车" value="面包车" />
                  <el-option label="轿车" value="轿车" />
                  <el-option label="SUV" value="SUV" />
                  <el-option label="厢货" value="厢货" />
                  <el-option label="货车" value="货车" />
                  <el-option label="叉车" value="叉车" />
                  <el-option label="特种车辆" value="特种车辆" />
                </el-select>
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
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="燃料类型">
                <el-select v-model="form.vehicleFuel" placeholder="请选择">
                  <el-option label="汽油" value="汽油" />
                  <el-option label="柴油" value="柴油" />
                  <el-option label="航煤" value="航煤" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="排放阶段">
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
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="车队名称">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_cdmc"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="所有人">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_cz"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="使用性质">
                <el-select
                  v-model="form.natureOfVehicleUse"
                  placeholder="请选择"
                >
                  <el-option label="非营运" value="非营运" />
                  <el-option label="营运" value="营运" />
                  <el-option label="货运" value="货运" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="16">
              <el-form-item label="地址">
                <el-input
                  style="width: 650px"
                  v-model="form.cl_dz"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="注册日期">
                <el-date-picker
                  v-model="form.zcrq"
                  type="date"
                  placeholder="请选择"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="发证日期">
                <el-date-picker
                  :formatter="dateFormat"
                  v-model="form.fzrq"
                  type="date"
                  placeholder="请选择"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="车辆类型">
                <el-input
                  style="width: 220px"
                  v-model="form.modeldescription"
                  class="w-50 m-2"
                  placeholder="请填写"
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
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="车辆识别代码">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_sbm"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="核定载质量">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_hdzzl"
                  class="w-50 m-2"
                  placeholder="请填写"
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
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="发动机型号">
                <el-input
                  style="width: 220px"
                  v-model="form.cl_fdjxh"
                  class="w-50 m-2"
                  placeholder="请填写"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="是否安装OBD">
                <el-select v-model="form.obdInstallation" placeholder="请选择">
                  <el-option label="是" value="是" />
                  <el-option label="否" value="否" />
                  <!--                   <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                 />-->
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="发证日期">
                <el-date-picker
                  v-model="form.obdanzhrq"
                  type="date"
                  placeholder="请选择"
                />
              </el-form-item>
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
import { reactive, ref, onMounted, watch, toRefs } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { Add, updateData } from "@/api/mobilePollution";
import { UploadProps } from "element-plus";
// 路由
import { useRoute, useRouter } from "vue-router";
import ChildComponents from "./listPage.vue";
export default {
  setup() {
    const handleAdd = (value) => {
      // list.value.push(value);
      console.log(value);
    };
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      // form = sessionStorage.getItem("userObj");
      // console.log(form);
      // console.log(router.params);
    });
    let form = reactive(JSON.parse(sessionStorage.getItem("userObj")));
    // 跳转回列表页
    const close = () => {
      sessionStorage.removeItem("userObj");
      router.push({
        path: "/transportIndex",
      });
    };
    // console.log(form, "updateForm updateForm updateForm updateForm ");
    const update = () => {
      var d = new Date(form.fzrq);
      form.fzrq =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds();
      var a = new Date(form.obdanzhrq);
      form.obdanzhrq =
        a.getFullYear() +
        "-" +
        (a.getMonth() + 1) +
        "-" +
        a.getDate() +
        " " +
        a.getHours() +
        ":" +
        a.getMinutes() +
        ":" +
        a.getSeconds();
      var c = new Date(form.zcrq);
      form.zcrq =
        c.getFullYear() +
        "-" +
        (c.getMonth() + 1) +
        "-" +
        c.getDate() +
        " " +
        c.getHours() +
        ":" +
        c.getMinutes() +
        ":" +
        c.getSeconds();
      if (form.zcrq == "1970-1-1 8:0:0") {
        form.zcrq = "";
      }
      if (form.obdanzhrq == "1970-1-1 8:0:0") {
        form.obdanzhrq = "";
      }
      if (form.fzrq == "1970-1-1 8:0:0") {
        form.fzrq = "";
      }
      updateData(form).then((res) => {
        if (res.code == 200) {
          sessionStorage.removeItem("userObj");
          router.push("/transportIndex");
        } else {
          ElMessage.error("修改数据失败");
        }
      });
    };
    // const imageUrl = ref('')
    // 文件上传（照片）
    const handleAvatarSuccess = (response, uploadFile) => {
      imageUrl.value = URL.createObjectURL();
    }; // 时间选择器
    const value1 = ref("");
    const value2 = ref("");
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
    return { form, update, close };
  },

  methods: {
    test() {
      console.log(this.form);
      var d = new Date("Thu May 12 2016 08:00:00 GMT+0800 (中国标准时间)");
      var datetime =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds();
      console.log(datetime, "datetimedatetimedatetime");
    },
  },
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
