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
                        <el-breadcrumb-item class="breadcrumbColor">添加非道路移动机械备案</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-header>
            <el-main style="margin-top: -20px;">
                <el-form label-width="110px" label-position="left" style="background: white;padding: 20px;" :model="form">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item style="margin-left:-10px;margin-right:10px" label="环保登记编码" prop="email" :rules="[
                              {
                                required: true,   
                                message: 'Please input email address',
                                trigger: 'blur',
                              },
                              {
                                type: 'email',
                                message: 'Please input correct email address',
                                trigger: ['blur', 'change'],
                              },
                            ]">
                                <el-input style="width: 220px;" v-model="form.name" class="w-50 m-2" placeholder="请填写" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item style="margin-left:-10px;margin-right:10px" label="机械环保代码" prop="email" :rules="[
                              {
                                required: true,   
                                message: 'Please input email address',
                                trigger: 'blur',
                              },
                              {
                                type: 'email',
                                message: 'Please input correct email address',
                                trigger: ['blur', 'change'],
                              },
                            ]">
                                <el-input style="width: 220px;" v-model="form.name" class="w-50 m-2" placeholder="请填写" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="机械名称">
                                <el-input style="width: 220px;" v-model="form.name" class="w-50 m-2" placeholder="请填写" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item style="margin-left:-10px;margin-right:10px" label="排放阶段" prop="email" :rules="[
                              {
                                required: true,   
                                message: 'Please input email address',
                                trigger: 'blur',
                              },
                              {
                                type: 'email',
                                message: 'Please input correct email address',
                                trigger: ['blur', 'change'],
                              },
                            ]">
                                <el-select v-model="form.type" placeholder="请选择">
                                    <el-option label="国0" value="shanghai" />
                                    <el-option label="出厂" value="beijing" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="发动机号码">
                                <el-input style="width: 220px;" v-model="form.name" class="w-50 m-2" placeholder="请填写" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="注册日期">
                                <el-date-picker v-model="value1" type="date" placeholder="请选择" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="所属企业编码">
                                <el-input style="width: 220px;" v-model="form.name" class="w-50 m-2" placeholder="请填写" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="所属企业名称">
                                <el-input style="width: 220px;" v-model="form.name" class="w-50 m-2" placeholder="请填写" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-form-item label="运输货物">
                                <el-input style="width: 220px;" v-model="form.name" class="w-50 m-2" placeholder="请填写" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="运输重量/吨">
                                <el-input style="width: 220px;" v-model="form.name" class="w-50 m-2" placeholder="请填写" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="3" style="margin-left: 25px;">
                            <div class="UPtsxt"><span>车辆照片(正面)</span></div>
                            <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                        </el-col>
                        <el-col :span="3" style="margin-left: 25px;">
                            <div class="UPtsxt"><span>车辆铭牌照片</span></div>
                            <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                        </el-col>
                        <el-col :span="3" style="margin-left: 25px;">
                            <div class="UPtsxt"><span>行驶证(正面)</span></div>
                            <el-upload class="avatar-uploader" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="20" style="margin: 18px 25px;">
                            <el-tag class="ml-2" type="danger">图片操作为本地操作,点击添加、删除或预览图片,完成后提交上传数据。</el-tag>
                        </el-col>
                    </el-row>
                    <el-row>
                        <div style="margin: 10px auto 20px ;">
                            <el-col>
                                <el-button class="sele-but">保存</el-button>
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
    const router = useRouter()
        // 跳转回列表页
    const close = () => {
            router.push({
                path: '/nonRoadIndex',
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
        // do not use same name with ref
    const form = reactive({
        name: '',
    })
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
    /* 面包屑字体颜色更改 */
    
    .breadcrumbColor>>>.el-breadcrumb__inner {
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