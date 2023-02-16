/*
 * @Description: 接口定义
 * @Autor: LiuGang
 * @Date: 2022-04-14 09:25:52
 * @LastEditors: LiuGang
 * @LastEditTime: 2022-12-27 16:27:54
 */
import request from '@/utils/request'

// 获取接口
export function getType(query, page) {
    return request({
        url: '/tree/getType',
        method: 'post',
        params: query,
    })
}
// 获取接口
export function getTreeStructure(query, page) {
    return request({
        url: '/tree/getTreeStructure',
        method: 'post',
        params: query,
    })
}
