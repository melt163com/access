<template>
    <div>
        <!-- 车辆进出登记 -->
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
                        <el-breadcrumb-item>数据应用</el-breadcrumb-item>
                        <el-breadcrumb-item>车辆进出台账</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbColor">详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main style="margin-top: -30px;">
                <div style="width: 100%;background: #fff;">
                    <!-- 车辆进出登记 -->
                    <div class="box-one">
                        <div style="width: 100%;display: flex;">
                            <table>
                                <tr>
                                    <td class="a">状态:</td>
                                    <td class="b">已通过</td>
                                    <td class="a">出入类型:</td>
                                    <td class="b">出厂</td>
                                    <td class="a">门禁号:</td>
                                    <td class="b">一号门</td>
                                    <td class="a">车辆号:</td>
                                    <td class="b">xxxx</td>
                                </tr>
                                <tr>
                                    <td>备案状态:</td>
                                    <td>xxxxx</td>
                                    <td>申请时间:</td>
                                    <td>2022-10-24</td>
                                    <td>出入时间:</td>
                                    <td>2022-12-11</td>
                                </tr>
                                <tr>
                                    <td>注册日期:</td>
                                    <td>2022-10-24</td>
                                    <td>排放阶段:</td>
                                    <td>国III</td>
                                    <td>司机:</td>
                                    <td>张三</td>
                                    <td>司机电话:</td>
                                    <td>12323232221</td>
                                </tr>
                                <tr>
                                    <td>车辆识别代码:</td>
                                    <td>xxxxx</td>
                                    <td>发动机号:</td>
                                    <td>xxxx</td>
                                </tr>
                                <tr>
                                    <td>运输货物:</td>
                                    <td>xxxx</td>
                                    <td>运输量:</td>
                                    <td>xxx</td>
                                    <td>受访部门:</td>
                                    <td>xxx</td>
                                    <td>受访人员:</td>
                                    <td>xxxxxx</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div style="display:flex;justify-content: center;margin: 250px 0 20px 0;">
                        <el-button class="sele-but" @click='close()'>关闭</el-button>
                    </div>
                </div>

            </el-main>
        </el-container>
    </div>
</template>
<script setup lang="ts">
    import {
        reactive,
        ref
    } from 'vue'
    // 路由
    import {
        useRouter
    } from 'vue-router'
    const router = useRouter()
        // 跳转回列表页
    const close = () => {
        router.push({
            path: '/standingBookIndex',
            query: ''
        })
    }
</script>
<style scoped>
    /* 面包屑字体颜色更改 */
    
    .breadcrumbColor>>>.el-breadcrumb__inner {
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
        background: #3780B9;
        margin-right: 11px;
    }
    /* 车辆进出登记表大盒子 */
    
    .box-one {
        display: flex;
        padding: 4px;
    }
    /* 车辆及司机信息大盒子 */
    
    .box-two {
        display: flex;
        padding: 4px;
    }
    
    table {
        width: 100%;
        padding: 10px;
    }
    
    tr {
        padding: 10px;
        list-style: none;
        height: 40px;
    }
    
    .a {
        width: 900px;
    }
    
    .b {
        width: 900px;
    }
    
    .c {
        width: 500px;
    }
    /* 实心按钮背景样式 */
    
    .sele-but {
        background: #3780b9;
        border: 0px;
        border-radius: 2px;
        color: white;
        margin-bottom: 20px;
    }
</style>