<template>
    <div class="common-layout">
        <el-container class="box">
            <!-- 左侧菜单栏 -->
            <el-aside width="19vw" style="background: #3780ba">
                <div id="one">
                    <h4>华晨宝马</h4>
                    <h4>铁西工厂一号门</h4>
                </div>
                <el-menu active-text-color="#ffd04b" background-color="#3780B9" class="el-menu-vertical-demo" default-active="2" text-color="#fff" :router="true">
                    <template v-for="item in asideMenu">
                        <!-- 两级菜单 -->
                        <template v-if="item.subs">
                            <el-sub-menu :index="item.title" :key="item.title">
                                <!-- 一级菜单标题 -->
                                <template #title>
                                    <el-icon>
                                        <img v-if="item.id == 1" style="
                        height: 1rem;
                        width: 1rem;
                        vertical-align: middle;
                      " :src="vehiclefiling" alt="" />
                                        <img v-else style="
                                        width: .8rem;
                        height: 1rem;
                        padding-right: 0.3rem;
                        vertical-align: middle;
                      " :src="dataApplication" alt="" />
                                    </el-icon>
                                    <span>{{ item.title }}</span>
                                </template>
<!-- 二级菜单标题 -->
<template v-for="subItem in item.subs" :key="subItem.index">
                                    <el-menu-item :index="subItem.index" @click="() => handleMenuItem(subItem)">{{ subItem.title }}</el-menu-item>
                                </template>
</el-sub-menu>
</template>

</template>
</el-menu>
</el-aside>

<el-container>
    <!-- header头部菜单 -->
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
                        <div slot="label" class="my-label" :class="activeName === item.value ? 'tab-active' : ''">
                            <!-- <span class="key">{{ item.title }}</span> -->
                            <!-- <span class="value" v-if="item.count">{{
                      item.count
                    }}</span> -->
                        </div>
                        <!-- {{ item.id }} -->
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
                                            <el-dropdown-item>Action 1</el-dropdown-item>
                                            <el-dropdown-item>Action 2</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </el-header>

    <!-- 主体模块：标签页 + 当前路由内容 -->
    <el-main class="el-main" style="width: 100%;">
        <router-view style="height: 500pt;" />
    </el-main>
</el-container>
</el-container>
</div>
</template>

<script>
    import {
        Location,
        Setting,
    } from "@element-plus/icons-vue";
    import {
        ElMessageBox
    } from "element-plus";
    import vehiclefiling from "@/assets/vehiclefiling.png";
    import dataApplication from "@/assets/dataApplication.png";
    export default {
        name: "MainLayout",
        mounted() {},
        data() {
            return {
                //当前选项卡
                activeName: "second",
                subItem: '运输车辆',
                //需要显示的标签数组
                tabs: [{
                    title: "视频监控",
                    value: "first",
                    id: 1,
                }, {
                    title: "移动污染",
                    value: "second",
                    id: 2,
                }, {
                    title: "企业环保",
                    value: "third",
                    id: 3,
                }, {
                    title: "账号管理",
                    value: "four",
                    id: 4,
                }, ],
                //左侧菜单选项配置
                asideMenu: [{
                    title: "车辆备案",
                    id: "1",
                    subs: [{
                        title: "运输车辆",

                        index: "listPage",
                    }, {
                        title: "场内车辆",

                        index: "addPage",
                    }, {
                        title: "非道路移动机械",

                        index: "articleList",
                    }, ],
                }, {
                    title: "数据应用",
                    id: "2",
                    subs: [{
                        title: "车辆备案查询",

                        index: "articleList",
                    }, {
                        title: "车辆进出台账",

                        index: "articleList",
                    }, {
                        title: "车辆进出统计",

                        index: "articleList",
                    }, {
                        title: "后端执行日志",

                        index: "articleList",
                    }]
                }]
            };
        },
        components: {
            Location,
            Setting,
        },
        watch: {
            activeTabName: function() {
                console.log("高亮的index值", this.activeTabName);
            },
        },
        methods: {
            handleisClose(item) {
                if (item.index == "home") {
                    return false;
                }
                return true;
            },

            //点击二级菜单标题 和 没有下一级菜单的标题
            //添加显示的标签
            handleMenuItem(obj) {
                //高亮设置
                this.activeTabName = obj.index;
                let result = this.editableTabs.findIndex((item) => {
                    return item.index == obj.index;
                });
                if (result != -1) {
                    return;
                }
                this.editableTabs.push(obj);
            },

            //点击切换tab标签，切换组件
            handleSwitchRoute(tabsPaneContext) {
                let tabPaneName = tabsPaneContext.paneName;
                //处理一个特殊情况，首页的index 为 '' ，这里取得值为0
                if (tabPaneName == 0) {
                    tabPaneName = "";
                }
                this.$router.push("/" + tabPaneName);
            },

            //(1)移除标签，（2）返回前一个路由
            //删除: 需要当前索引 ，设置路由和高亮，上一个对象的index
            handleRemove(tabPaneName) {
                let tempArr = this.editableTabs;
                let eleIndex = this.editableTabs.findIndex((item) => {
                    return item.index == tabPaneName;
                });
                //上一个路由的index
                let routeIndex;
                for (let p in tempArr) {
                    if (tempArr[p].index == tabPaneName) {
                        routeIndex = tempArr[p - 1].index;
                    }
                }
                //高亮和退到前一个路由
                this.activeTabName = routeIndex;
                this.$router.push("/" + routeIndex);
                //删除当前关闭的路由标签
                this.editableTabs.splice(eleIndex, 1);
            },
        },
    };
</script>

<style scoped>
    .box {
        width: 100vw;
        height: 100vh;
    }
    
    #one {
        width: 100%;
        padding: 30px 0;
        color: #fff;
        text-align: center;
    }
    
    .header {
        padding: 0;
        height: 58px;
    }
    
    .el-main {
        background: #F2F3F5;
    }
    /* 将消息中心和我的控制台摆放在最右侧 */
    
    .el-menu--horizontal {
        justify-content: flex-end;
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
        height: 100vh;
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
</style>