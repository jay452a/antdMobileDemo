/**
 * Created by 56234 on 2018/8/29.
 */
import HealthManage from '@/modules/jujia/healthManage'
import PersonCenter from '@/modules/jujia/personCenter'
import YouxianOldServer from '@/modules/jujia/youxianOldServe'
import Login from '@/modules/jujia/login'
const routeConfig = [
    {path:'/healthManage', component: HealthManage},
    {path:'/personCenter', component: PersonCenter},
    {path:'/index', component: YouxianOldServer},
    {path:'/login', component: Login},
]
export default routeConfig