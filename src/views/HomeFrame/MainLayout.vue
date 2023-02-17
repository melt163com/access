<template>
  <div class="box">
    <el-container>

      <!-- 左侧菜单栏 -->
      <el-aside width="18vw" style="background: #3780ba">
              <div id="one">
          <h4>华晨宝马</h4>
          <h4>铁西工厂一号门</h4>
        </div>
        <el-menu
          active-text-color="#fff"
          background-color="#3780B9"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :router="true"
        >
          <!-- <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#3780B9" active-text-color="#ffd04b" text-color="#fff" @open="handleOpen" @close="handleClose"> -->
          <template v-for="item in infoRef.test">
            <!-- 两级菜单 -->
            <template v-if="item.subs">
              <el-sub-menu :index="item.title" :key="item.title" @click="() => handleMenuItem(item)">
                <!-- 一级菜单标题 -->
                <template #title>
                  <el-icon>
                    <document />
                    <img
                      v-if="item.id == 1"
                      style="
                        height: 1rem;
                        padding-right: 0.3rem;
                        vertical-align: middle;
                      "
                      :src="vehiclefiling"
                      alt=""
                    />
                    <img
                      v-else
                      style="
                        height: 1rem;
                        padding-right: 0.3rem;
                        vertical-align: middle;
                      "
                      :src="dataApplication"
                      alt=""
                    />
                  </el-icon>
                  <span>{{ item.title }}</span>
                </template>
<!-- 二级菜单标题 -->
<template v-for="subItem in item.subs" :key="subItem.index">
                  <el-menu-item
                    :index="subItem.index"
                    @click="() => handleMenuItem(subItem)"
                    >{{ subItem.title }}</el-menu-item
                  >
                </template>
</el-sub-menu>
</template>
</template>
</el-menu>
</el-aside>

<el-container>
    <el-header style="padding: 0">
        <!-- 表头标签 -->
        <div class="tabs">
            <div style="
                float: left;
                height: 100%;
                width: 70%;
                align-items: center;
                display: flex;
              ">
                <el-tabs style="margin-left: 60px" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane v-for="item in tabs" :label="item.count ? item.title + item.count : item.title" :name="item.value" :key="item.id">
                        <div slot="label" class="my-label" :class="activeName === item.value ? 'tab-active' : ''"></div>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <!-- 表头用户头像及编号 -->
            <div style="width: 20%; height: 100%; float: right" id="rightBox">
                <div class="avatar">
                    <div>
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    </div>
                </div>
                <div class="Percode">
                    <el-dropdown :hide-on-click="false">
                        <span class="el-dropdown-link">
                    员工编号<el-icon class="el-icon--right">
                      <arrow-down />
                    </el-icon>
                  </span>
                        <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="exitLogin()"
                        >退出登录</el-dropdown-item
                      >
                    </el-dropdown-menu>
                  </template>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </el-header>
    <!-- 主体模块：标签页 + 当前路由内容 -->
    <el-main class="el-main" style="width: 100%">
        <router-view style="height: 100vh" />
    </el-main>
</el-container>
</el-container>
</div>
</template>
<script>
    import {
        ref,
        reactive,
        nextTick,
      onMounted,
    } from "vue";
    import {
      ElMessageBox,
      TabsPaneContext
    } from "element-plus";
    import {
        ArrowDown,
        Plus
    } from "@element-plus/icons-vue";
    import vehiclefiling from "@/assets/vehiclefiling.png";
    import dataApplication from "@/assets/dataApplication.png";
    import {useRouter} from "vue-router";

    export default {
        setup() {
          const router = useRouter()
          //退出登陆
          const exitLogin = () => {
            ElMessageBox.confirm("真的要退出登陆吗?", "提示", {
              confirmButtonText: "确认",
              cancelButtonText: "取消",
              type: "warning",
            })
              .then(() => {
                // localStorage.removeItem("isLogin");
                router.push("/login");
              })
              .catch(() => {
                //取消：就不做任何提示了
              });
          };
            // tabs循环数据
            const tabs = [{
                title: "视频监控",
                value: "first",
                id: 1,
            }, {
                title: "移动污染",
                value: "second",
                id: 2,
            }, {
                title: "企业环保",
                value: "three",
                id: 3,
            }, {
                title: "账号管理",
                value: "four",
                id: 4,
            }, ];
          // 侧边菜单打开关闭
          const handleOpen = (key, keyPath) => {
            console.log(key, keyPath);
          };
          const handleClose = (key, keyPath) => {
            console.log(key, keyPath);
          };
            // 首次进入选中的名称
            const activeName = ref("second");
            // const asideMenu = ref();
            let asideMenu = reactive([{
                title: "视频",
                id: "1",
                subs: [{
                    title: "视频查询",

                    index: "VideomonitorIndex",
                }, ],
            }, {
                title: "车辆",
                id: "2",
                subs: [{
                    title: "运输",

                    index: "transportIndex",
                }, {
                    title: "场内",

                    index: "onsiteIndex",
                }, {
                    title: "机械",

                    index: "nonRoadIndex",
                }, ],
            }, ]);
            const infoRef = ref(source());
            let info = infoRef.value; // Js里操作只操作 info 就可以不用 infoRef.value 了
            function reset() {
                // 这样需要重置整个响应式对象就不需要 Object.assign和考虑深拷贝问题了
                infoRef.value = source();
                // 重新初始化整个响应式对象时，用来数据操作的实际变量也需要重新赋值！
                info = infoRef.value;
            }

            function source() {
                return {
                    test: [{
                        title: "视频管理",
                        id: "1",
                      sign:'first',
                        subs: [{
                            title: "线上视频查询",

                            index: "VideomonitorIndex",
                        }, ],
                    }, {
                        title: "车辆备案",
                        id: "2",
                      sign:'second',
                        subs: [{
                            title: "运输车辆",

                            index: "transportIndex",
                        }, {
                            title: "场内车辆",

                            index: "onsiteIndex",
                        }, {
                            title: "非道路移动机械",

                            index: "nonRoadIndex",
                        }, ],
                    }, {
                        title: "数据应用",
                        id: "3",
                      sign:'second',
                        subs: [{
                            title: "车辆备案查询",

                            index: "filingQueryIndex",
                        }, {
                            title: "车辆进出台账",

                            index: "standingBookIndex",
                        }, {
                            title: "车辆进出统计",

                            index: "statisticsIndex",
                        }, {
                            title: "后端执行日志",

                            index: "executionLogIndex",
                        }, ],
                    }, {
                        title: "企业文件",
                        id: "4",
                      sign:'three',
                        subs: [{
                            title: "企业环保信息",

                            index: "entInformationIndex",
                        }, {
                            title: "文件分类管理",

                            index: "fileClassIndex",
                        }, {
                            title: "政策法规管理",

                            index: "policyStatuteIndex",
                        }, ],
                    }, {
                        title: "供应商管理",
                        id: "5",
                      sign:'three',
                        subs: [{
                            title: "供应商列表",

                            index: "supplierIndex",
                        }, {
                            title: "供应商分类",

                            index: "classIndex",
                        }, {
                            title: "供应商合同",

                            index: "contractIndex",
                        }, ],
                    }, {
                        title: "人员管理",
                        id: "6",
                      sign:'three',
                        subs: [{
                            title: "环保局人员",

                            index: "bureauPersonIndex",
                        }, {
                            title: "企业环保人员",

                            index: "entPersonIndex",
                        }, {
                            title: "供应商人员",

                            index: "supplierPersonIndex",
                        }, ],
                    }, {
                        title: "账号管理",
                        id: "7",
                      sign:'four',
                        subs: [{
                            title: "账号列表",

                            index: "accIndex",
                        }, ],
                    }, ],
                };
            }
          let all_left_menu = source()
            return {
                tabs,
                asideMenu,
                infoRef,
              all_left_menu,
              exitLogin
            };
        },
        mounted() {
            this.infoRef = [];
        },
        methods: {
            log() {
                this.infoRef = [];
            },
            handleClick(tab, event) {
              let cur_menu = this.all_left_menu.test.filter(e=>tab.props.name == e.sign)
              this.infoRef.test = cur_menu
            },
        },
    };
</script>

<style scoped>
    .box {
        background: #f2f4f5;
        height: 100%;
    }

    #one {
        width: 100%;
        padding: 30px 0;
        color: #fff;
        text-align: center;
    }

    .menu {
        background: #3780ba;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 500px;
    }

    .tabs {
        width: 100%;
        height: 100%;
        background: #fff;
    }

    .avatar {
        width: 30%;
        clear: both;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .avatar>div {
        flex: 1;
        text-align: center;
    }

    .avatar>div:not(:last-child) {
        border-right: 1px solid var(--el-border-color);
    }

    .Percode {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .example-showcase .el-dropdown+.el-dropdown {
        margin-left: 15px;
    }

    .example-showcase .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
    }

    .el-aside {
        overflow-x: hidden;
        /*height: 100vh;*/
    }

    .el-sub-menu .el-menu-item {
        padding-left: 60px !important;
    }

    #rightBox {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    /* 标签样式更改 */
    /* 去掉el-tab-pane底部灰色线条 */

    :deep() .el-tabs__nav-wrap::after {
        height: 0 !important;
    }

    :deep().el-tabs__item {
        color: #888;
    }

    :deep().el-tabs__active-bar {
        background-color: #3780b9;
    }

    :deep().el-tabs__item.is-active {
        color: #000;
    }
    /* 内部header */

    .inside-header {
        height: 10px;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    /* 内部main */

    .inside-main {
        width: 100%;
        height: 100%;
        /* background: #fff; */
        /* align-items: center; */
    }
    /* 空心按钮样式 */

    .empty-but {
        border: 1px solid #3780b9;
        color: #3780b9;
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
