import logIn from './views/login.vue';
import Home from './views/home/home.vue';
import Scan from './views//scan/scan.vue';
import My from './views/my/my.vue';
import Register from './views/register.vue';
import Charge from './views/scan/charge.vue';

export default[
	{path:'/',component:logIn},
	{path:'/register',component:Register},
	{path:'/home',component:Home},
	{path:'/scan',component:Scan},
	{path:'/my',component:My},
	{path:'/charge',component:Charge}
]