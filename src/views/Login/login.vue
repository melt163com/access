<template>
  <div class="login">
    <div class="login-box">
      <div class="logo">
        <!-- <img :src="logo"> -->
      </div>
      <div class="main">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="demo-ruleForm"
          :size="formSize"
          1
          status-icon
        >
          <el-form-item label="" prop="username">
            <el-input
              class="input-box"
              placeholder="请输入用户名"
              v-model="ruleForm.username"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              class="input-box"
              placeholder="请输入用户名"
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item>
            <!-- <el-button class="loginBtn" type="primary" @click="submitForm(ruleFormRef)">登录</el-button> -->
            <el-button class="loginBtn" type="primary" @click="setFlag()"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs, ref } from "vue";
import bgLogin from "@/assets/bgLogin.png";
import logo from "@/assets/logo.png";
import { Login } from "@/api/user";
import { FormInstance, ElMessage } from "element-plus";

import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    //登录
    // const setFlag = () => {
    //     Login({
    //         usernumber: ruleForm.username.toString(),
    //         userpwd: ruleForm.password.toString(),
    //     }).then(
    //         (res) => {
    //             console.log(res, "res");
    //             console.log(res.code, "code");
    //             if (res.code == 200) {
    //                 ElMessage.success("登录成功");
    //                 localStorage.setItem("token", res.data.token);
    //                 router.push("/");
    //             } else {
    //                 ElMessage.error(res.msg);
    //             }
    //             // ElMessage.success("登录成功");
    //             // localStorage.setItem("token", res.data.token);
    //             // router.push("/");
    //         },
    //         (err) => {
    //             console.log(err);
    //             ElMessage.error("登录失败");
    //             return false;
    //         }
    //     );
    // };
    const router = useRouter();
    const ruleFormRef = ref();
    const ruleForm = reactive({
      username: "",
      password: "",
    });
    // 重置
    const resetForm = () => {
      ruleForm.username = "";
      ruleForm.password = "";
    };
    // 校验
    const rules = {
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
        {
          min: 3,
          max: 10,
          message: "用户名格式错误",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
        {
          min: 3,
          max: 12,
          message: "密码格式错误",
          trigger: "blur",
        },
      ],
    };
    // 假登录
    const setFlag = () => {
      localStorage.setItem("isLogin", 1);
      router.replace("/");
    };
    return {
      rules,
      ruleForm,
      ruleFormRef,
      setFlag,
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  background: url("@/assets/bgLogin.png") no-repeat;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
}

.logo {
  /* background: rebeccapurple; */
  background-image: url("@/assets/logo.png");
  width: 188px;
  height: 56px;
  margin: 40px 40px;
}

.login-box {
  width: 420px;
  height: 390px;
  position: fixed;
  left: 20%;
  top: 20%;
  /* background: rgba(114, 114, 114, 0.2); */
}

.input-box {
  width: 300px;
  height: 40px;
  margin-left: 45px;
  border-radius: 2px;
  color: #fff;
  /* border: 1px solid #47c9FF; */
}

::v-deep .el-input__wrapper {
  background-color: transparent !important;
}

::v-deep .el-form-item__error {
  margin-left: 45px;
}

.loginBtn {
  width: 300px;
  height: 40px;
  margin-top: 32px;
  margin-left: 45px;
  border-radius: 2px;
  background: rgba(12, 111, 214, 1);
}
</style>
