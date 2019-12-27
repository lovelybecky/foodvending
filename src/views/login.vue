<template>
	<div id="login">
		<div id="logo">LOGO</div>
		<div>
			<div>
				<input class="input" v-model="username" type="text" placeholder="用户名/手机号">
			</div>
			<div>
				<input class="input" v-model="password" type="password" placeholder="密码">
			</div>
			<div id="submsg">
				<div @click="registerNew">注册</div>
				<div>忘记密码？</div>
			</div>
			<myButton :resdata="loginbutton" @change="loginmain"></myButton>
		</div>		
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
				loginbutton:"登录",
				username:'',
				password:''
			}
		},
		methods:{
			registerNew(){
				this.$router.push('/register');
			},
			async loginmain(){
				let loginForm = {
					name: this.username,
					pwd: this.password
				}
				if(!this.username){
					alert('请输入用户名');
				}
				else if(!this.password){
					alert('请输入密码')
				}
				else{
					let res = await this.$http.post('/users/login', loginForm);
					console.log(res.data);
					if(res.data.status===1){
						alert('密码错误');
					}
					else if(res.data.status===2){
						alert('用户名未注册');
					}
					else{
						this.$router.push('/home');
						this.$store.commit('storeUser', res.data.data);
					}
				}
			}
		}
	}
</script>

<style>
	#login{
		height: 100vh;
		background: #FFFFFF;
		margin: 0;
		padding: 0;
		border: 1px solid #FFFFFF;
	}
	#logo{
		margin: 100px auto 20px auto;
		height: 100px; 
		width: 200px; 
		line-height: 100px;
		background: #F5F5F5;
	}
	.input{
		text-align: center;
		font-size: 1em;
		font-weight: bolder;
		border: none;
		border-bottom: 1px solid #333333;
		margin-top: 30px;
		width: 200px;
	}
	input::-webkit-input-placeholder {
	/* WebKit browsers */ 
	color: #BEBEBE; 
	} 
	input:-moz-placeholder { 
	/* Mozilla Firefox 4 to 18 */ 
	color: #BEBEBE; 
	} 
	input::-moz-placeholder { 
	/* Mozilla Firefox 19+ */ 
	color: #BEBEBE; 
	} 
	input:-ms-input-placeholder { 
	/* Internet Explorer 10+ */ 
	color: #BEBEBE; 
	}
	#submsg{
		width: 200px;
		display: flex;
		margin: 0 auto;
		justify-content: space-between;
		font-size: 0.8em;
	}
</style>
