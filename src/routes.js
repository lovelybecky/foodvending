import logIn from './views/login.vue';
import Home from './views/home/home.vue';
import Scan from './views//scan/scan.vue';
import My from './views/my/my.vue';
import Register from './views/register.vue';
import Charge from './views/scan/charge.vue';
import Supplement from "./views/home/supplement.vue";
import Setting from "./views/my/setting.vue";
import accMsg from "./views/my/setting/accountmsg.vue";
import Service from "./views/my/service.vue";
import myOrder from "./views/my/order.vue";


export default[
	{path:'/',component:logIn},
	{path:'/register',component:Register},
	{path:'/home',component:Home},
	{path:'/scan',component:Scan},
	{path:'/my',component:My},
	{path:'/charge',component:Charge},
	{path:'/home/supplement',component:Supplement},
	{path:'/my/setting',component:Setting},
	{path:'/my/setting/accountmsg',component:accMsg},
	{path:'/my/service',component:Service},
	{path:'/my/order',name:'myorder',component:myOrder}
]