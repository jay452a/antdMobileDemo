import io from './io'
import host from './config'
const {host: base} = host

const api = {
    // 获取刚才开奖接口
    login: params => io.post(`${base}/login/loginForm`,params),
    getUserInfo: params => io.get(`${base}/login/userInfo`)

}

export default api

