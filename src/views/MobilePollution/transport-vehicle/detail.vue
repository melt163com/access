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
            <el-main style="margin-top: -20px;">
                <div style="width: 100%;background: #fff;">
                    <!-- 车辆进出登记 -->
                    <div class="head-bar">
                        <div class="head-bar-main"></div>
                        <div>
                            <h4>车辆进出登记</h4>
                        </div>
                    </div>
                    <el-descriptions style="padding: 20px;">
                        <el-descriptions-item label="出入类型:">入厂</el-descriptions-item>
                        <el-descriptions-item lable-width="2000px" label="登记事由:">送货</el-descriptions-item>
                        <el-descriptions-item label="送/提货单位:">xxxxx</el-descriptions-item>
                        <el-descriptions-item label="运输货物:">xxxxx</el-descriptions-item>
                        <el-descriptions-item label="运输量/吨:">xxxxx</el-descriptions-item>
                        <el-descriptions-item label="起运地:">xxxxx</el-descriptions-item>
                        <el-descriptions-item :span='4' label="同行人员">张三 2132312 xxxxxxxxxxx</el-descriptions-item>
                        <el-descriptions-item label="受(拜)访部门:">xxxxx</el-descriptions-item>
                        <el-descriptions-item label="受(拜)访人员:">xxxxx</el-descriptions-item>
                    </el-descriptions>
                    <!-- 车辆及司机信息 -->
                    <div class="head-bar">
                        <div class="head-bar-main"></div>
                        <div>
                            <h4>车辆及司机信息</h4>
                        </div>
                    </div>
                    <el-descriptions style="padding: 20px;">
                        <el-descriptions-item label="司机姓名:">王永强</el-descriptions-item>
                        <el-descriptions-item label="司机电话:">15437382910</el-descriptions-item>
                        <el-descriptions-item label="车牌颜色:">蓝色</el-descriptions-item>
                        <el-descriptions-item :span="4" label="车牌描述:">小面包</el-descriptions-item>
                        <el-descriptions-item label="车牌号:">XXXX</el-descriptions-item>
                        <el-descriptions-item label="燃料类型:">汽油</el-descriptions-item>
                        <el-descriptions-item label="排放阶段:">国IV</el-descriptions-item>
                        <el-descriptions-item label="车队名称:">霸王花车队</el-descriptions-item>
                        <el-descriptions-item label="所有人:">通宵其</el-descriptions-item>
                        <el-descriptions-item label="使用性质:">非营运</el-descriptions-item>
                        <el-descriptions-item :span='4' label="地址:">辽宁省沈阳市浑南区新隆街动漫世界大厦</el-descriptions-item>
                        <el-descriptions-item label="注册日期:">2021-10-12</el-descriptions-item>
                        <el-descriptions-item label="发证日期:">2021-10-12</el-descriptions-item>
                        <el-descriptions-item label="车辆类型:">仓储式</el-descriptions-item>
                        <el-descriptions-item label="品牌型号:">宝马320i运动套装</el-descriptions-item>
                        <el-descriptions-item label="车辆识别代码:">XXXX</el-descriptions-item>
                        <el-descriptions-item label="核定载质量:">XXXX</el-descriptions-item>
                        <el-descriptions-item label="发动机号码:">XXXX</el-descriptions-item>
                        <el-descriptions-item :span="2" label="发动机型号:">XXXX</el-descriptions-item>
                        <el-descriptions-item label="是否安装OBD:">XXXX</el-descriptions-item>
                        <el-descriptions-item :span="2" label="OBD安装日期:">XXXX</el-descriptions-item>
                    </el-descriptions>
                    <div style="display:flex;justify-content: center;margin: 18px 0 200px 0;">
                        <el-button class="sele-but" @click='close()'>关闭</el-button>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import {
        reactive,
        ref,
        toRefs,
        onBeforeMount,
        onMounted
    } from 'vue'
    // 路由
    import {
        useRouter
    } from 'vue-router'

    export default {
        name: '',
        setup() {
            const router = useRouter()
            const data = reactive({}) // 跳转回列表页
            const close = () => {
                router.push({
                    path: '/transportIndex',
                    query: ''
                })
            }
            onBeforeMount(() => {
                console.log('2.组件挂载页面之前执行----onBeforeMount')
            })
            onMounted(() => {
                console.log('3.-组件挂载到页面之后执行-------onMounted')
            })
            return {
                ...toRefs(data),
                close
            }
        },
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
    /* 实心按钮背景样式 */
    
    .sele-but {
        background: #3780b9;
        border: 0px;
        border-radius: 2px;
        color: white;
        margin-bottom: 20px;
    }
</style>