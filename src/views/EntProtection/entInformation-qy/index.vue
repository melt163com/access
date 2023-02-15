<template>
    <div>
        <el-container>
            <el-header class="inside-header">
                <div>
                    <!-- 面包屑 -->
                    <el-breadcrumb separator=">">
                        <el-breadcrumb-item>企业环保</el-breadcrumb-item>
                        <el-breadcrumb-item>企业文件</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbColor">企业环保信息</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main style="margin-top: -40px;">
                <el-form style="background: white;padding: 20px;" :model="form" label-width="120px">
                    <!-- 横条 项目环评报批及验收材料 -->
                    <div class="head-bar">
                        <div class="head-bar-main"></div>
                        <div>
                            <h4>项目环评报批及验收材料</h4>
                        </div>
                    </div>
                    <table cellspacing="0">
                        <tr>
                            <td class="a">序号</td>
                            <td class="b">名称</td>
                            <td>文件管理</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>营业执照</td>
                            <td>
                                <el-button type="primary">营业执照上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">2</td>
                            <td rowspan="3">环境影响评价报告书</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <el-button type="primary">备案上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <el-button type="primary">全本上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>登记表网上备案文件</td>
                            <td>
                                <el-button type="primary">全本上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="3">4</td>
                            <td rowspan="3">环境保护设施验收</td>
                            <td>
                                <el-button type="primary">批复上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <el-button type="primary">备案上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <el-button type="primary">全本上传</el-button>
                            </td>
                        </tr>
                    </table>
                    <!-- 横条 排污许可证 -->
                    <div class="head-bar">
                        <div class="head-bar-main"></div>
                        <div>
                            <h4>排污许可证</h4>
                        </div>
                    </div>
                    <table cellspacing="0">
                        <tr>
                            <td class="a">序号</td>
                            <td class="b">名称</td>
                            <td>文件管理</td>
                        </tr>
                        <tr>
                            <td rowspan="3">1</td>
                            <td rowspan="3">排污许可证</td>
                            <td>
                                <el-button type="primary">正本上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <el-button type="primary">副本上传</el-button>
                            </td>
                        </tr>
                    </table>
                    <!-- 横条 污染治理设施运行台账 -->
                    <div class="head-bar">
                        <div class="head-bar-main"></div>
                        <div>
                            <h4>污染治理设施运行台账</h4>
                        </div>
                    </div>
                    <table cellspacing="0">
                        <tr>
                            <td class="a">序号</td>
                            <td class="b">名称</td>
                            <td>文件管理</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>废水</td>
                            <td>
                                <el-button type="primary">文件上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>废气</td>
                            <td>
                                <el-button type="primary">文件上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>维护</td>
                            <td>
                                <el-button type="primary">维护记录</el-button>
                                <el-button type="primary" @click="maintain = true">添加记录</el-button>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>加药</td>
                            <td>
                                <el-button type="primary">加药记录</el-button>
                                <el-button type="primary" @click="dosing = true">添加记录</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>活性炭</td>
                            <td>
                                <el-button type="primary">活性炭记录</el-button>
                                <el-button type="primary">添加记录</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>安装</td>
                            <td>
                                <el-button type="primary">文件上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>验收</td>
                            <td>
                                <el-button type="primary">文件上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>使用</td>
                            <td>
                                <el-button type="primary">文件上传</el-button>
                            </td>
                        </tr>
                    </table>
                    <!-- 横条 排污口分布及污染物检测台账 -->
                    <div class="head-bar">
                        <div class="head-bar-main"></div>
                        <div>
                            <h4>排污口分布及污染物检测台账</h4>
                        </div>
                    </div>
                    <table cellspacing="0">
                        <tr>
                            <td class="a">序号</td>
                            <td class="b">名称</td>
                            <td>文件管理</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>设置情况</td>
                            <td>
                                <el-button type="primary">文件上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>分布图</td>
                            <td>
                                <el-button type="primary">文件上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>标志照片</td>
                            <td>
                                <el-button type="primary">文件上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>监测计划</td>
                            <td>
                                <el-button type="primary">文件上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>监测报告</td>
                            <td>
                                <el-button type="primary">文件上传</el-button>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>监测公开</td>
                            <td>
                                <el-button type="primary">文件上传</el-button>
                            </td>
                        </tr>
                    </table>
                    <div style="display:flex;justify-content: center;margin: 18px 0 80px 0;">
                        <el-button class="sele-but" @click='close()'>保存</el-button>
                        <!-- <el-button class="empty-but" @click='close()'>关闭</el-button> -->
                    </div>
                </el-form>

            </el-main>
        </el-container>
        <!-- 维护新增弹窗 -->
        <div>
            <el-dialog v-model="maintain" title="添加维护记录" width="30%" :before-close="handleClose">
                <div style="width: 90%;">
                    <el-form :model="form" label-width="120px">
                        <el-form-item label="时间">
                            <el-date-picker v-model="form.date1" type="date" placeholder="请选择" />
                        </el-form-item>
                        <el-form-item label="维护内容">
                            <el-input v-model="form.desc" type="textarea" />
                        </el-form-item>
                        <el-form-item label="维护人">
                            <el-input v-model="form.name" />
                        </el-form-item>
                    </el-form>
                </div>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button type="primary" @click="maintain = false">
                            确定
                        </el-button>
                        <el-button @click="maintain = false">取消</el-button>
                    </span>
                </template>
</el-dialog>
</div>
<!-- 加药新增弹窗 -->
<div>
    <el-dialog v-model="dosing" title="添加维护记录" width="30%" :before-close="handleClose">
        <div style="width: 90%;">
            <el-form :model="formDosing" label-width="120px">
                <el-form-item label="时间">
                    <el-date-picker v-model="formDosing.date1" type="date" placeholder="请选择" />
                </el-form-item>
                <el-form-item label="加药内容">
                    <el-input v-model="formDosing.desc" type="textarea" />
                </el-form-item>
                <el-form-item label="加药人">
                    <el-input v-model="formDosing.name" />
                </el-form-item>
                <el-form-item label="企业确认人">
                    <el-input v-model="formDosing.namename" />
                </el-form-item>
            </el-form>
        </div>
        <template #footer>
                    <span class="dialog-footer">
                        <el-button type="primary" @click="dosing = false">
                            确定
                        </el-button>
                        <el-button @click="dosing = false">取消</el-button>
                    </span>
                </template>
    </el-dialog>
</div>
</div>
</template>

<script setup lang="ts">
    import {
        reactive,
        ref
    } from 'vue'
    import {
        ElMessage
    } from 'element-plus'
    import {
        Plus
    } from '@element-plus/icons-vue'

    import {
        UploadProps
    } from 'element-plus'
    // 路由
    import {
        useRouter
    } from 'vue-router'
    // form维护新增表单
    const form = reactive({
            name: '',
            date1: '',
            desc: '',
        })
        // 维护新增弹窗
    const maintain = ref(false)
        // 加药新增弹窗
    const dosing = ref(false)
        // form假药新增表单
    const formDosing = reactive({
        name: '',
        date1: '',
        desc: '',
        namename: ''
    })
    const handleClose = (done) => {
        ElMessageBox.confirm('Are you sure to close this dialog?')
            .then(() => {
                done()
            })
            .catch(() => {
                // catch error
            })
    }
    const router = useRouter()
        // 跳转回列表页
    const close = () => {
            router.push({
                // path: '/transportIndex',
                query: ''
            })
        }
        // 下拉选择 - 是否安装OBD
    const value = ref('')

    const options = [{
        value: 'Option1',
        label: '是',
    }, {
        value: 'Option2',
        label: '否',
    }, ]

    // 时间选择器
    const value1 = ref('')
    const value2 = ref('')
    const onSubmit = () => {
            console.log('submit!')
        }
        // const imageUrl = ref('')
        // 文件上传（照片）
    const handleAvatarSuccess = (
        response,
        uploadFile
    ) => {
        imageUrl.value = URL.createObjectURL()
    }

    const beforeAvatarUpload = (rawFile) => {
        if (rawFile.type !== 'image/jpeg') {
            ElMessage.error('Avatar picture must be JPG format!')
            return false
        } else if (rawFile.size / 1024 / 1024 > 2) {
            ElMessage.error('Avatar picture size can not exceed 2MB!')
            return false
        }
        return true
    }
</script>
<style scoped>
    table {
        width: 80%;
        padding: 10px;
        /* border: 1px solid rgb(0, 0, 0); */
    }
    
    tr {
        padding: 10px;
        list-style: none;
        height: 40px;
        text-align: center;
    }
    
    td {
        border: 1px solid black;
    }
    
    .a {
        width: 130px;
    }
    
    .b {
        width: 200px;
    }
    
    .c {
        width: 600px;
    }
    /* 面包屑字体颜色更改 */
    
    .breadcrumbColor>>>.el-breadcrumb__inner {
        color: #000;
    }
    /* 横条蓝条样式 */
    
    .head-bar {
        width: 100%;
        height: 40px;
        margin-top: 5px;
        display: flex;
    }
    
    .head-bar-main {
        width: 3px;
        height: 20px;
        opacity: 1;
        margin-top: 5px;
        background: #3780B9;
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
        background-color: #E5F4FF;
    }
    
    .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #3780B9;
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