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
                        <el-breadcrumb-item>运输车辆备案</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbColor">详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main style="margin-top: -25px;">
                <div style="width: 100%;background: #fff;">
                    <!-- 车辆进出登记 -->
                    <div class="head-bar">
                        <div class="head-bar-main"></div>
                        <div>
                            <h4>车辆进出登记</h4>
                        </div>
                    </div>
                    <div class="box-one">
                        <div style="width: 100%;display: flex;">
                            <table>
                                <tr>
                                    <td class="a">出入类型:</td>
                                    <td class="b">入厂</td>
                                    <td class="a">登记事由:</td>
                                    <td class="b">送货</td>
                                    <td class="a">送/提货单位:</td>
                                    <td class="b">xxxx</td>
                                </tr>
                                <tr>
                                    <td>运输货物:</td>
                                    <td>xxxxx</td>
                                    <td>运输量/吨:</td>
                                    <td>xxxxx</td>
                                    <td>起运地:</td>
                                    <td>xxxxx</td>
                                </tr>
                                <tr rowspan="2">
                                    <td rowspan="2">同行人员:</td>
                                    <td rowspan="2">张三 123213213
                                        xxxxxxxxxxxxx
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>运输货物:</td>
                                    <td>xxxxx</td>
                                    <td>运输量/吨:</td>
                                    <td>xxxxx</td>
                                    <td>起运地:</td>
                                    <td>xxxxx</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <!-- 车辆及司机信息 -->
                    <div class="head-bar">
                        <div class="head-bar-main"></div>
                        <div>
                            <h4>车辆及司机信息</h4>
                        </div>
                    </div>
                    <div class="box-two">
                        <div style="width: 100%;display: flex;">
                            <table>
                                <tr>
                                    <td class="a">司机姓名:</td>
                                    <td class="b">王永强</td>
                                    <td class="a">司机电话:</td>
                                    <td class="b">13144278096</td>
                                    <td class="a">车牌颜色:</td>
                                    <td class="b">蓝色</td>
                                </tr>
                                <tr>
                                    <td>车型描述:</td>
                                    <td colspan="4">小面包</td>
                                </tr>
                                <tr>
                                    <td>车牌号:</td>
                                    <td>辽A88293</td>
                                    <td>燃料类型:</td>
                                    <td>汽油</td>
                                    <td>排放阶段:</td>
                                    <td>国IV</td>
                                </tr>
                                <tr>
                                    <td>车队名称:</td>
                                    <td>霸王花车队</td>
                                    <td>所有人:</td>
                                    <td>通宵其</td>
                                    <td>使用性质:</td>
                                    <td>非营运</td>
                                </tr>
                                <tr>
                                    <td>地址:</td>
                                    <td colspan="5">辽宁省沈阳市浑南区新隆街动漫世界大厦</td>
                                </tr>
                                <tr>
                                    <td>注册日期:</td>
                                    <td>2021-10-12</td>
                                    <td>发证日期:</td>
                                    <td>2021-10-12</td>
                                    <td>车辆类型:</td>
                                    <td>仓储式</td>
                                </tr>
                                <tr>
                                    <td>品牌型号:</td>
                                    <td>宝马320i运动套装</td>
                                    <td>车辆试别代码:</td>
                                    <td>xxxxxx</td>
                                    <td>核定载质量:</td>
                                    <td>xxxxxx</td>
                                </tr>
                                <tr>
                                    <td>发动机号码:</td>
                                    <td>xxxxx</td>
                                    <td>发动机型号:</td>
                                    <td>xxxxx</td>
                                </tr>
                                <tr>
                                    <td>是否安装OBD:</td>
                                    <td>是</td>
                                    <td>OBD安装日期:</td>
                                    <td>2021-10-12</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div style="display:flex;justify-content: center;margin: 18px 0 50px 0;">
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
            path: '/transportIndex',
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
        width: 350px;
    }
    
    .b {
        width: 900px;
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