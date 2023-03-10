import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login/login.vue"),
  },
  {
    // path: "/",
    // name: "Layout",
    // component: () => import("../views/HomeFrame/index.vue"),
    path: "/",
    name: "Layout",
    component: () => import("../views/HomeFrame/MainLayout.vue"),
    children: [
      {
        // 这里不设置值，是把main作为默认页面
        path: "",
        redirect: "/main",
      },
      {
        // 这里不设置值，是把main作为默认页面
        path: "main",
        name: "main",
        component: () => import("../views/Main/index.vue"),
      },
      {
        // 视频监控-视频管理-线上视频查询列表页
        path: "VideomonitorIndex",
        name: "VideomonitorIndex",
        component: () => import("../views/Videomonitor/index.vue"),
      },
      {
        // 移动污染-车辆备案-运输车辆列表页
        path: "transportIndex",
        name: "transportIndex",
        component: () =>
          import("../views/MobilePollution/transport-vehicle/listPage.vue"),
      },
      // 移动污染-车辆备案-运输车辆新增页面
      {
        path: "transportAdd",
        name: "transportAdd",
        component: () =>
          import("../views/MobilePollution/transport-vehicle/addPage.vue"),
      },
      // 移动污染-车辆备案-运输车辆修改页面
      {
        path: "transportUpdate",
        name: "transportUpdate",
        component: () =>
          import("../views/MobilePollution/transport-vehicle/update.vue"),
      },
      // 移动污染-车辆备案-运输车辆详情页面
      {
        path: "transportDetail",
        name: "transportDetail",
        component: () =>
          import("../views/MobilePollution/transport-vehicle/detail.vue"),
      },
      // 移动污染-车辆备案-场内车辆列表页
      {
        path: "onsiteIndex",
        name: "onsiteIndex",
        component: () =>
          import("../views/MobilePollution/onSite-vehicle/index.vue"),
      },
      // 移动污染-车辆备案-场内车辆新增页
      {
        path: "onsiteAdd",
        name: "onsiteAdd",
        component: () =>
          import("../views/MobilePollution/onSite-vehicle/addPage.vue"),
      },
      // 移动污染-车辆备案-场内车辆详情页
      {
        path: "onsiteDetail",
        name: "onsiteDetail",
        component: () =>
          import("../views/MobilePollution/onSite-vehicle/detailPage.vue"),
      },
      // 移动污染-车辆备案-场内车辆修改页
      {
        path: "onsiteUpdate",
        name: "onsiteUpdate",
        component: () =>
          import("../views/MobilePollution/onSite-vehicle/updatePage.vue"),
      },

      // 移动污染-车辆备案-非道路移动机械列表页
      {
        path: "nonRoadIndex",
        name: "nonRoadIndex",
        component: () =>
          import("../views/MobilePollution/nonRoad-vehicle/index.vue"),
      },
      // 移动污染-车辆备案-非道路移动机械新增页
      {
        path: "nonRoadAdd",
        name: "nonRoadAdd",
        component: () =>
          import("../views/MobilePollution/nonRoad-vehicle/addPage.vue"),
      },
      // 移动污染-车辆备案-非道路移动机械详情页
      {
        path: "nonRoadDetail",
        name: "nonRoadDetail",
        component: () =>
          import("../views/MobilePollution/nonRoad-vehicle/detailPage.vue"),
      },
      // 移动污染-车辆备案-非道路移动机械修改页
      {
        path: "nonRoadUpdate",
        name: "nonRoadUpdate",
        component: () =>
          import("../views/MobilePollution/nonRoad-vehicle/updatePage.vue"),
      },
      // 移动污染-数据应用-车辆备案查询列表页
      {
        path: "filingQueryIndex",
        name: "filingQueryIndex",
        component: () =>
          import("../views/MobilePollution/filingQuery-data/index.vue"),
      },
      // 移动污染-数据应用-车辆进出台账列表页
      {
        path: "standingBookIndex",
        name: "standingBookIndex",
        component: () =>
          import("../views/MobilePollution/standingBook-data/index.vue"),
      },
      // 移动污染-数据应用-车辆进出台账详情页
      {
        path: "standingBookDetail",
        name: "standingBookDetail",
        component: () =>
          import("../views/MobilePollution/standingBook-data/detailPage.vue"),
      },
      // 移动污染-数据应用-车辆进出统计列表页
      {
        path: "statisticsIndex",
        name: "statisticsIndex",
        component: () =>
          import("../views/MobilePollution/statistics-data/index.vue"),
      },
      // 移动污染-数据应用-后端执行日志列表页
      {
        path: "executionLogIndex",
        name: "executionLogIndex",
        component: () =>
          import("../views/MobilePollution/executionLog-data/index.vue"),
      },
      {
        // 企业环保-企业文件-企业环保信息列表页 entInformation-qy
        path: "entInformationIndex",
        name: "entInformationIndex",
        component: () =>
          import("../views/EntProtection/entInformation-qy/index.vue"),
      },
      {
        // 企业环保-企业文件-文件分类管理列表页
        path: "fileClassIndex",
        name: "fileClassIndex",
        component: () =>
          import("../views/EntProtection/fileClass-qy/index.vue"),
      },
      {
        // 企业环保-企业文件-政策法规列表页
        path: "policyStatuteIndex",
        name: "policyStatuteIndex",
        component: () =>
          import("../views/EntProtection/policyStatute-qy/index.vue"),
      },
      {
        // 企业环保-供应商-供应商列表页
        path: "supplierIndex",
        name: "supplierIndex",
        component: () =>
          import("../views/EntProtection/supplier-gys/index.vue"),
      },
      {
        // 企业环保-供应商-供应商分类管理列表页
        path: "classIndex",
        name: "classIndex",
        component: () => import("../views/EntProtection/class-gys/index.vue"),
      },
      {
        // 企业环保-供应商-供应商分类管理列表页
        path: "contractIndex",
        name: "contractIndex",
        component: () =>
          import("../views/EntProtection/contract-gys/index.vue"),
      },
      {
        // 企业环保-人员管理-企业环保人员列表页
        path: "entPersonIndex",
        name: "entPersonIndex",
        component: () => import("../views/EntProtection/entPerson/index.vue"),
      },
      {
        // 企业环保-人员管理-供应商人员列表页
        path: "bureauPersonIndex",
        name: "bureauPersonIndex",
        component: () =>
          import("../views/EntProtection/bureauPerson/index.vue"),
      },
      {
        // 企业环保-人员管理-供应商人员列表页
        path: "supplierPersonIndex",
        name: "supplierPersonIndex",
        component: () =>
          import("../views/EntProtection/supplierPerson/index.vue"),
      },
      {
        // 账号管理-列表页
        path: "accIndex",
        name: "accIndex",
        component: () => import("../views/AccountNumber/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
