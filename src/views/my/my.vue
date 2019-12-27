<template>
	<div id="my">
		<div id="">
			<div id="usermsg">
				<div id="userhead">
					<img src="../../assets/userhead.jpeg">
				</div>
				<div id="useraccount">
					<div>姓名：{{user.name}}</div>
					<div>电话：{{user.tel}}</div>
					<div>积分：{{user.points}}</div>
				</div>
			</div>
			<mainMsg></mainMsg>
			<myOrder></myOrder>
			<myService></myService>
		</div>
		<subNav style="background: #FFFFFF;"></subNav>
	</div>
</template>

<script>
	import subNav from '../../components/subnav2.vue';
	import mainMsg from './components/mainmsg.vue';
	import myOrder from './components/myorder.vue';
	import myService from './components/myservice.vue';
	export default{
		components:{
			subNav,
			mainMsg,
			myOrder,
			myService
		},
		data(){
			return{
				username:"Adam",
				usertel:"12345678",
				userpoints:"60",
			}
		},
		computed:{
			user(){
				return this.$store.state.user;
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	#my{
		margin-bottom: 73px;
		background-color: #F5F5F5;
		height: 100vh;
	}
	#usermsg{
		height: 180px;
		display: flex;
		justify-content: center;
		background:linear-gradient(to right,rgb(255,169,62),rgb(255,196,45)) ;
	}
	#userhead{
		width: 100px;
		height: 100px;
		margin: 30px 10px 0 30px;
		flex: 1;
		border-radius: 50%;
		overflow: hidden;
	}
	#userhead img{
		width: 100%;
	}
	#useraccount{
		flex: 2;
		margin: 45px 10px 0 10px;
		text-align: left;
	}
</style>
