/**
 * Created by 56234 on 2018/8/30.
 */
export default (process.env.NODE_ENV === 'development'
    ? {
        //开发环境
        host: 'http://localhost:3002'
    }
    : {
        // 发布环境
        host: 'https://www.plum5.com'
    });