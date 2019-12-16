<template>
	<div>
		<div id="logo">LOGO</div>
		<div>
			<div>
				<input class="input" type="text" placeholder="用户名">
			</div>
			<div>
				<input class="input" type="text" placeholder="手机号码">
			</div>
			<div id="checkbox">
				<div><input class="sex" type="checkbox">男</div>
				<div><input class="sex" type="checkbox">女</div>
			</div>
			<div>
				<input class="input" type="password" placeholder="设置密码">
			</div>
			<div>
				<input class="input" type="text" placeholder="所在地">
			</div>
		</div>
		<myButton :resdata="registerbutton" @change="registermain"></myButton>
	</div>
</template>

<script>
	import myButton from '../components/mybutton.vue';
	export default{
		components:{
			myButton
		},
		data(){
			return{
				registerbutton:"注册"
			}
		},
		methods:{
			async registermain(){
				this.$router.push('/home');
			}
		}
	}
</script>

<style>
	#checkbox{
		display: flex;
		justify-content: space-around;
		width: 200px;
		margin: auto;
	}
	.sex{
		margin-top: 30px;
		margin-right: 10px;
	}
</style>
