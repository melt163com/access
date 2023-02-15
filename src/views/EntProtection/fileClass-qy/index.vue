<template>
  <div>
    <el-container>
      <el-header class="inside-header">
        <div>
          <!-- 面包屑 -->
          <el-breadcrumb separator=">">
            <el-breadcrumb-item>企业环保</el-breadcrumb-item>
            <el-breadcrumb-item>企业文件</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumbColor"
              >文件分类管理</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
      </el-header>
      <el-main>
        <div class="inside-main-box">
          <el-row
            class="inside-main"
            style="background: #fff; padding-top: 10px; height: 46px"
          >
            <el-col :span="8" style="margin-left: 20px">
              <el-form-item label="分类名称" size="small">
                <el-input v-model="form.type_name" />
              </el-form-item>
            </el-col>
            <el-col :span="4" style="margin-left: 20px">
              <el-button size="small" class="sele-but" @click="selectForm"
                >查询</el-button
              >
              <el-button
                size="small"
                :icon="Plus"
                class="add-but"
                @click="addDialog = true"
                >新增</el-button
              >
            </el-col>
          </el-row>
        </div>
        <div style="background: #fff">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column align="center" prop="id" label="序号" width="80" />
            <el-table-column align="center" prop="type_name" label="分类名称" />
            <el-table-column
              align="center"
              prop="parent_classification"
              label="父级分类"
            />
            <el-table-column align="center" prop="depth" label="深度" />
            <el-table-column align="center" prop="description" label="描述" />
            <el-table-column align="center" prop="creator" label="创建人" />
            <el-table-column
              align="center"
              prop="create_time"
              label="创建时间"
            />
            <el-table-column
              align="center"
              fixed="right"
              label="操作"
              width="120"
            >
              <template #default="scope">
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="
                    updateDialog = true;
                    obj = scope.row;
                  "
                  >修改</el-button
                >
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click.prevent="deleteRow(scope.$index)"
                  >删除</el-button
                >
              </template>
</el-table-column>
</el-table>
<el-pagination style="margin-top: 20%; display: flex; justify-content: flex-end" v-model:current-page="currentPage3" v-model:page-size="pageSize3" :small="small" :disabled="disabled" :background="background" layout="prev, pager, next, jumper" :total="1000"
    @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</div>
</el-main>
</el-container>
<!-- 新增弹窗 -->
<el-dialog v-model="addDialog" title="新增分类" width="40%">
    <div style="width: 80%">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="80px" class="demo-ruleForm">
            <el-form-item label="分类名称" prop="type_name">
                <el-input v-model="ruleForm.type_name" placeholder="请输入" autocomplete="off" />
            </el-form-item>
            <el-form-item label="选择上级" prop="parent_classification">
                <el-select v-model="ruleForm.parent_classification" placeholder="请选择">
                    <el-option label="-" value="-" />
                    <el-option label="环保" value="环保" />
                    <el-option label="水类" value="水类" />
                </el-select>
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="ruleForm.description" maxlength="500" placeholder="请输入" show-word-limit type="textarea" />
            </el-form-item>
        </el-form>
    </div>
    <template #footer>
        <span class="dialog-footer">
          <el-button class="sele-but" @click="add"> 确定 </el-button>
          <el-button class="empty-but" @click="addDialog = false"
            >取消</el-button
          >
        </span>
      </template>
</el-dialog>
<!-- 修改弹窗 -->
<el-dialog v-model="updateDialog" title="修改分类" width="40%">
    <div style="width: 80%">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="80px" class="demo-ruleForm">
            <el-form-item label="分类名称" prop="type_name">
                <el-input v-model="obj.type_name" placeholder="请输入" autocomplete="off" />
            </el-form-item>
            <el-form-item label="选择上级" prop="parent_classification">
                <el-select v-model="obj.parent_classification" placeholder="请选择">
                    <el-option label="-" value="-" />
                    <el-option label="环保" value="环保" />
                    <el-option label="水类" value="水类" />
                </el-select>
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="obj.description" maxlength="500" placeholder="请输入" show-word-limit type="textarea" />
            </el-form-item>
        </el-form>
    </div>
    <template #footer>
        <span class="dialog-footer">
          <el-button class="sele-but" @click="updateAll(obj)"> 修改 </el-button>
          <el-button class="empty-but" @click="updateDialog = false"
            >取消</el-button
          >
        </span>
      </template>
</el-dialog>
</div>
</template>

<script setup>
    import {
        reactive,
        ref,
        onMounted
    } from "vue";
    import {
        Plus
    } from "@element-plus/icons-vue";
    // 路由
    import {
        useRouter
    } from "vue-router";
    import {
        ElMessage
    } from "element-plus";
    import {
        insert,
        selectAll,
        selectName,
        update,
        delect
    } from "@/api/user";
    onMounted(() => {
        All();
    });
    // 重置
    const clear = () => {
        (form.type_name = ""), All();
    };
    // 新增弹窗 表单校验
    const ruleForm = reactive({
        type_name: "",
        parent_classification: "",
        description: "",
    });
    // 根据搜索栏来查询
    const form = reactive({
        type_name: "",
    });
    const selectForm = () => {
        selectName(form).then((res) => {
            tableData.value = res.data;
            console.log(res, "res");
        });
    };
    // 新增
    const add = () => {
        insert(ruleForm).then((res) => {
            if (res.code == 200) {
                ElMessage.success("新增成功");
                addDialog.value = false;
            } else {
                ElMessage.error("新增失败");
            }
        });
    };
    // 查所有
    const All = () => {
        selectAll().then((res) => {
            tableData.value = res.data;
        });
    };
    // 删除
    const dele = (rown) => {
        delect();
    };
    const deleteRow = (index) => {
        tableData.value.splice(index, 1);
    };

    // 修改
    const updateDialog = ref(false);
    let obj = reactive({
        type_name: "",
        parent_classification: "",
        description: "",
        id: "",
    });
    const updateAll = (row) => {
        update(row).then((res) => {
            if (res.code == 200) {
                ElMessage.success("修改成功");
                All();
                addDialog.value = false;
            } else {
                ElMessage.error("修改失败");
            }
        });
    };
    const rules = {
        username: [{
            required: true,
            message: "请输入分类名称",
            trigger: "blur",
        }, {
            // min: 3,
            // max: 10,
            message: "请输入分类名称",
            trigger: "blur",
        }, ],
        region: [{
            required: true,
            message: "请选择上级",
            trigger: "change",
        }, ],
    };
    const router = useRouter();
    // 新增弹窗
    const addDialog = ref(false);
    const tableData = ref([]);
    const name = "transportIndex";
    // 时间
    const size = ref("default");
</script>
<style scoped>
    /* 面包屑字体颜色更改 */
    
    .breadcrumbColor>>>.el-breadcrumb__inner {
        color: #000;
    }
    /* 内部header */
    
    .inside-header {
        height: 10px;
        display: flex;
        justify-content: left;
        align-items: center;
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
    
    .add-but {
        background: #dde5fe;
        color: #3780b9;
    }
    /* 分页 */
    
    .demo-pagination-block {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>