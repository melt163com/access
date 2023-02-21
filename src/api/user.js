/*
 * @Description: 接口定义
 * @Autor: LiuGang
 * @Date: 2022-04-14 09:25:52
 * @LastEditors: LiuGang
 * @LastEditTime: 2022-12-27 16:27:54
 */
import request from "@/utils/request";

// 查询用户列表
// export function getUsers(query, page) {
//     return request({
//         url: '/backend/admin/buser/getData',
//         method: 'post',
//         data: query,
//         params: page,
//     })
// }
// 登录接口
export function Login(query, page) {
  return request({
    url: "/userInfo/login",
    method: "post",
    params: query,
  });
}

// 搜索视频名称接口
export function query(query, page) {
  return request({
    url: "/video/queryByPointNameOrCameraName",
    method: "post",
    params: query,
  });
}
/** 企业环保-文件分类管理**/
// 新增接口
export function insert(query) {
  return request({
    url: "/FileType/insert",
    method: "post",
    params: query,
  });
}
// 查询所有
export function selectAll(query, page) {
  return request({
    url: "/FileType/queryAll",
    method: "post",
    params: query,
  });
}
// 根据搜索查询
export function selectName(query, page) {
  return request({
    url: "/FileType/queryByTypeName",
    method: "post",
    params: query,
  });
}
// 修改接口
export function update(query) {
  return request({
    url: "/FileType/update",
    method: "post",
    params: query,
  });
}
// 删除接口
export function delect(query) {
  return request({
    url: "/FileType/delete",
    method: "post",
    params: query,
  });
}
