/**
 * Created by 56234 on 2018/8/29.
 */
import HealthManage from '@/modules/jujia/healthManage'
import PersonCenter from '@/modules/jujia/personCenter'
import YouxianOldServer from '@/modules/jujia/youxianOldServe'
const routeConfig = [
    {path:'/healthManage', component: HealthManage},
    {path:'/personCenter', component: PersonCenter},
    {path:'/index', component: YouxianOldServer},
]
export default routeConfig