import request from './request'
import { Message } from 'iview'
import { getAuthorityToken } from '../utils/vue-token'

let baseUrl = ''
if (process.env.NODE_ENV !== 'production') {
  baseUrl = '/api'
} else {
  // baseUrl = 'http://yun.pengdaokuan.cn/'
}

export default {
  /**
   * desc: 验证码获取
   * @param {String} Email
   * @return {String} Code 
  */
  fetchValidateCode: (email) => {
    return request(`${baseUrl}/oauth/send-validate-code`, {
      method: 'POST',
      data: {
        email: email
      }
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        Message.success({
          content: response.msg,
          duration: 1.5
        })
        return response.data
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  /**
   * desc: 管理员登陆
   * @param {String} UserName
   * @param {String} PassWord
   * @param {String} Code
   * @return {String} Token
  */
  fetchOauthAdminLogin: (jsondata) => {
    return request(`${baseUrl}/oauth/login`, {
      method: 'POST',
      data: jsondata
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        Message.success({
          content: response.msg,
          duration: 1.5
        })
        return response.data
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  /**
   * desc: 获取用户信息
   * @return {*} 
  */
  fetchCurrentUser: () => {
    return request(`${baseUrl}/erek-user/getCurrentUser`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        return response.data
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  /**
   * desc: 获取所有数据信息
   * @return {*} 
  */
  fetchAllDataList: () => {
    return request(`${baseUrl}/data/getAllData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  /**
   * desc: 获取标准列表数据信息
   * @return {*} 
  */
  fetchStandAllDataList: () => {
    return request(`${baseUrl}/data/getStandAllData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  /**
   * desc: 获取所有待办任务
   * @return {*} 
  */
  getAllTaskList: () => {
    return request(`${baseUrl}/data/getAllTask`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        // Message.success({
        //   content: response.msg,
        //   duration: 1.5
        // })
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  /**
   * desc: 获取 `平台日访问量` 和  `日注册人数`
   * @return {*} 
  */
  fetchPlatFormViewData: () => {
    return request(`${baseUrl}/data/getPlatFormViewData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        // Message.success({
        //   content: response.msg,
        //   duration: 1.5
        // })
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  /**
   * desc: 获取所有首页tab的卡片数据
   * @return {*} 
  */
  fetchAllTabData: () => {
    return request(`${baseUrl}/data/getAllTabCardList`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        // Message.success({
        //   content: response.msg,
        //   duration: 1.5
        // })
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },

  /**
   * desc: 获取 `站点访问来源数据`
   * @return {*} 
  */
  fetchAllOriginData: () => {
    return request(`${baseUrl}/data/getOriginAllData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        // Message.success({
        //   content: response.msg,
        //   duration: 1.5
        // })
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },
  
  /**
   * desc: 获取 `预算开销和实际开销`
   * @return {*} 
  */
  fetchExpenseOriginData: () => {
    return request(`${baseUrl}/data/getExpenseAllData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        // Message.success({
        //   content: response.msg,
        //   duration: 1.5
        // })
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  },

  /**
   * desc: 获取 `个人页 - 个人中心` 数据
   * @return {*} 
  */
  fetchAllListData: () => {
    return request(`${baseUrl}/erek-user-all/getAllData`, {
      method: 'GET',
      token: getAuthorityToken()
    }).then((res) => {
      let { response } = res
      if (response.code === 1) {
        return response.list
      } else {
        Message.error({
          content: response.msg,
          duration: 1.5
        })
      }
    })
  }
}

