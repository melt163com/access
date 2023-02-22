/**移动污染 车辆备案and数据应用**/

import request from "@/utils/request";

// 运输车辆 --查询所有
export function selectAll(query, page) {
  return request({
    url: "/ysclxx/clxxselect",
    method: "post",
    data: query,
    params: page,
  });
}

// 运输车辆 --根据条件查询
export function selectQuery(query, page) {
  return request({
    url: "/ysclxx/fuzzyQueryselectysclxx",
    method: "post",
    data: query,
    params: page,
  });
}

// 运输车辆 --新增接口
export function Add(query, page) {
  return request({
    url: "/ysclxx/addclxx",
    method: "post",
    data: query,
    params: page,
  });
}

// 运输车辆 --修改接口
export function updateData(query, page) {
  return request({
    url: "/ysclxx/updateclxx",
    method: "post",
    data: query,
    params: page,
  });
}

// 运输车辆 --删除接口
export function deleteData(query, page) {
  return request({
    url: "/ysclxx/delectclxx",
    method: "post",
    data: query,
    params: page,
  });
}

//场内车辆 --查询全部接口
export function selectOnsiteAll(query, page) {
  return request({
    url: "/onsitevehicles/selectonsitevehicles",
    method: "post",
    data: query,
    params: page,
  });
}

//场内车辆 --根据条件查询
export function selectOnsiteQuery(query, page) {
  return request({
    url: "/onsitevehicles/fuzzyQueryselectonsitevehicles",
    method: "post",
    data: query,
    params: page,
  });
}

//场内车辆 --新增接口
export function insertOnsite(query, page) {
  return request({
    url: "/onsitevehicles/insertonsitevehicles",
    method: "post",
    data: query,
    params: page,
  });
}

//场内车辆 --修改接口
export function updateOnsite(query, page) {
  return request({
    url: "/onsitevehicles/updateonsitevehicles",
    method: "post",
    data: query,
    params: page,
  });
}

//场内车辆 --删除接口
export function deleteOnsite(query, page) {
  return request({
    url: "/onsitevehicles/deleteonsitevehicles",
    method: "post",
    data: query,
    params: page,
  });
}

//非道路移动机械 --查询所有接口
export function selectAllRoad(query, page) {
  return request({
    url: "/noMobileMachinery/selectnoMobileMachinery",
    method: "post",
    data: query,
    params: page,
  });
}

//非道路移动机械 --根据条件查询接口
export function selectQueryRoad(query, page) {
  return request({
    url: "/noMobileMachinery/fuzzyQueryselectnoMobileMachinery",
    method: "post",
    data: query,
    params: page,
  });
}

//非道路移动机械 --新增接口
export function insertRoad(query, page) {
  return request({
    url: "/noMobileMachinery/insertnoMobileMachinery",
    method: "post",
    data: query,
    params: page,
  });
}

//非道路移动机械 --删除接口
export function deleteRoad(query, page) {
  return request({
    url: "/noMobileMachinery/deletenoMobileMachinery",
    method: "post",
    data: query,
    params: page,
  });
}

//非道路移动机械 --修改接口
export function updateRoad(query, page) {
  return request({
    url: "/noMobileMachinery/updatenoMobileMachinery",
    method: "post",
    data: query,
    params: page,
  });
}

/**移动污染 数据应用**/
//车辆进出台账 --查询所有接口
export function selectAllBook(query, page) {
  return request({
    url: "/vehicleAccount/selectvehicleAccount",
    method: "post",
    data: query,
    params: page,
  });
}

//车辆进出台账 --根据条件查询
export function selectQueryBook(query, page) {
  return request({
    url: "/vehicleAccount/fuzzyQueryselectvehicleAccount",
    method: "post",
    data: query,
    params: page,
  });
}
