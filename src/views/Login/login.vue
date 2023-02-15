<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="80px" class="demo-ruleForm">
            <h2>后台管理系统</h2>
            <el-form-item label="用户名：" prop="username">
                <el-input v-model="ruleForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button class="loginBtn" type="primary" @click="setFlag(ruleFormRef)">登录</el-button>

                <el-button class="loginBtn" @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
    import {
        defineComponent,
        reactive,
        toRefs,
        ref
    } from "vue";
    // import {
    //     login
    // } from "../request/api";
    import {
        FormInstance
    } from "element-plus";

    import {
        useRouter
    } from "vue-router";

    const ruleForm = {
        username: '',
        password: ''
    }
    const rules = {
        username: [{
            required: true,
            message: "请输入账号",
            trigger: "blur",
        }, {
            min: 3,
            max: 10,
            message: "账号长度在3-10之间",
            trigger: "blur",
        }, ],
        password: [{
            required: true,
            message: "请输入你的密码",
            trigger: "blur",
        }, {
            min: 3,
            max: 10,
            message: "密码长度在3-10之间",
            trigger: "blur",
        }, ],
    };
    // 登录
    const ruleFormRef = ref();
    //路由
    const router = useRouter(); //-->$router
    // 重置
    const resetForm = () => {
        data.ruleForm.username = "";
        data.ruleForm.password = "";
    };
    // 假登录
    const setFlag = () => {
        localStorage.setItem("isLogin", 1);
        router.replace("/");
    };
    // 发送请求
    const submitForm = () => {
        if (!formEl) return;
        // 对表单的内容进行验证  valid是属于一个 布尔类型  如果true验证成功  false验证失败
        formEl.validate((valid) => {
            if (valid) {
                console.log("submit!", data.ruleForm, login);
                console.log(data.ruleForm);
                // 调用接口发送请求
                // console.log(typeof data.ruleForm.username.toString());
                // let myObj = {
                //     username: `${data.ruleForm.username}`,
                //     password: `${data.ruleForm.password}`,
                // };
                // login(myObj).then((res) => {
                //     console.log(res);
                // })
                // login({
                //     username: data.ruleForm.username.toString(),
                //     password: data.ruleForm.password.toString(),
                // }).then((res) => {
                //     console.log(res);
                // });
            } else {
                console.log("error submit!");
                return false;
            }
        });
    };
</script>

<style lang="scss" scoped>
    .login-box {
        width: 100%;
        height: 100%;
        background: paleturquoise;
        padding: 1px;
        text-align: center;
    }

    .demo-ruleForm {
        width: 500px;
        margin: 200px auto;
        background-color: white;
        padding: 40px;
        border-radius: 20px;
    }

    .loginBtn {
        width: 47%;
    }

    h2 {
        margin-bottom: 10px;
    }
</style>
