/**
 * 通用js方法封装处理日期
 * Copyright (c) 2021 liu gang
 */
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '')
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**添加日期范围*/
export function addDateRange(params, dateRange, propName) {
  const search = params
  search.params = typeof (search.params) === 'object' && search.params !== null && !Array.isArray(search.params) ? search.params : {}
  dateRange = Array.isArray(dateRange) ? dateRange : []
  if (typeof (propName) === 'undefined') {
    search.params['beginTime'] = dateRange[0] || ''
    search.params['endTime'] = dateRange[1] || ''
  } else {
    search.params['begin' + propName] = dateRange[0]
    search.params['end' + propName] = dateRange[1]
  }
  return search
}

/**字符串格式化(%s )*/
export function sprintf(str) {
  var args = arguments; var flag = true; var i = 1
  str = str.replace(/%s/g, function() {
    var arg = args[i++]
    if (typeof arg === 'undefined') {
      flag = false
      return ''
    }
    return arg
  })
  return flag ? str : ''
}

/**数据合并*/
export function mergeRecursive(source, target) {
  for (var p in target) {
    try {
      if (target[p].constructor === Object) {
        source[p] = mergeRecursive(source[p], target[p])
      } else {
        source[p] = target[p]
      }
    } catch (e) {
      source[p] = target[p]
    }
  }
  return source
}

/**
 * 平面变树型
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 * Copyright (c) 2021 liu gang
 */
export function handleTree(data, id, parentId, children) {
  const config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children'
  }
  /**命名三个变量用于接收数据*/
  var childrenListMap = {}
  var nodeIds = {}
  var tree = []

  for (const d of data) {
    const parentId = d[config.parentId]
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = []
    }
    nodeIds[d[config.id]] = d
    childrenListMap[parentId].push(d)
  }
  /**先把根目录取到*/
  for (const d of data) {
    const parentId = d[config.parentId]
    if (nodeIds[parentId] == null) {
      tree.push(d)
    }
  }
  /**取下属目录*/
  for (const t of tree) {
    adaptToChildrenList(t)
  }
  /**递归法自循环,取完为止*/
  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]]
    }
    if (o[config.childrenList]) {
      for (const c of o[config.childrenList]) {
        adaptToChildrenList(c)
      }
    }
  }
  /**把结果返回*/
  return tree
}

    /**
      *从树形中查询
     * Copyright (c) 2021 liu gang
    * */
export function findFromTree(list , code){
  let obj;
  for(let i in list){
    let e = list[i];
    if(e.deptId==code){
      obj = e;
      break;
    }
    if(e.children){
      lookfor(e.children);
    }
  }
  function lookfor(list2){
    for(let j in list2){
      let f = list2[j];
      if(f.deptId==code){
        obj = f;
        break;
      }
      if(f.children){
        lookfor(f.children);
      }
    }
  }
  return obj;
}

/**取id*/
export function getAllNodeId (moduleDataList,expandedKeys) {
  for (let i = 0; i < moduleDataList.length; i++) {
    // console.log('moduleDataList[i].deptId  in getAllNodeId: ', moduleDataList[i].deptId)
    expandedKeys.push(moduleDataList[i].deptId)
    if (moduleDataList[i].children) {
      expandedKeys = this.getAllNodeId(moduleDataList[i].children,expandedKeys)
    }
  }
  return expandedKeys
}

/**
 * 树形变平面,比变树形简单很多
 * Copyright (c) 2021 liu gang
 * */
export function getPlane (inlist,obj) {
  for (let i = 0; i < inlist.length; i++) {
    obj[inlist[i].value] = inlist[i].label;
    if (inlist[i].children) {
      obj = this.getPlane(inlist[i].children,obj);
}
}
return obj;
}

/**
 * 参数处理
 * @param {*} params  参数
 */
export function tansParams(params) {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName]
    var part = encodeURIComponent(propName) + '='
    if (value !== null && typeof (value) !== 'undefined') {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && typeof (value[key]) !== 'undefined') {
            const params = propName + '[' + key + ']'
            var subPart = encodeURIComponent(params) + '='
            result += subPart + encodeURIComponent(value[key]) + '&'
          }
        }
      } else {
        result += part + encodeURIComponent(value) + '&'
      }
    }
  }
  return result
}

/**
 * 简单粗暴最有效的码表
 * Copyright (c) 2021 liu gang
 */
export function getDictList(sysdatelist) {
  const datas = {}
  let key = ''
  sysdatelist.map((item, k) => {
    const data = JSON.parse(JSON.stringify(item))
    if (data.dictType !== key) {
      datas[data.dictType] = []
      datas[data.dictType + '2'] = {}
      key = data.dictType
    }
    datas[data.dictType].push({
      dictValue: data.dictValue,
      dictLabel: data.dictLabel
    })
    datas[data.dictType + '2'][data.dictValue] = data.dictLabel
  })
  return datas
}
