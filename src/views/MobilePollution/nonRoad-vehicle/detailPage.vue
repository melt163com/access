<template>
    <div>
        <!-- 车辆进出登记 -->
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item>移动污染源</el-breadcrumb-item>
                        <el-breadcrumb-item>车辆备案</el-breadcrumb-item>
                        <el-breadcrumb-item>非道路移动机械备案</el-breadcrumb-item>
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
                                    <td class="a">环保登记编码:</td>
                                    <td class="b">xxxx</td>
                                    <td class="a">机械环保代码:</td>
                                    <td class="b">xxx</td>
                                    <td class="a">机械名称:</td>
                                    <td class="b">xxxx</td>
                                </tr>
                                <tr>
                                    <td>排放阶段:</td>
                                    <td>xxxxx</td>
                                    <td>发动机号码:</td>
                                    <td>xxxxx</td>
                                    <td>注册日期:</td>
                                    <td>xxxxx</td>
                                </tr>
                                <tr>
                                    <td>所属企业编码:</td>
                                    <td>xxxxx</td>
                                    <td>所属企业名称:</td>
                                    <td>xxxxx</td>
                                </tr>
                                <tr>
                                    <td>运输货物:</td>
                                    <td>xxxxx</td>
                                    <td>运输重量/吨:</td>
                                    <td>xxxx</td>
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
            path: '/nonRoadIndex',
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