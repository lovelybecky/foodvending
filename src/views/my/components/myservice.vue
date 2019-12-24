<template>
	<div id="myservice">
		<div id="servicetitle">我的服务</div>
		<div id="servicenav">
			<div v-for="item in items" :key="item.id" @click="change(item.page)">
				<img :src="item.url">
				<div>{{item.title}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:[
					{url:require('../../../assets/setting.png'),title:"设置",page:'/my/setting'},
					{url:require('../../../assets/share.png'),title:"分享有礼",page:'/my/setting'},
					{url:require('../../../assets/kefu.png'),title:"联系客服",page:'/my/service'}
				]
			}
		},
		methods:{
			change(address){
				this.$router.push(address);
			}
		}
	}
</script>

<style>
	#myservice{
		width: 90%;
		background-color: #FFFFFF;
		border-radius: 10px;
		margin: 10px auto;
	}
	#servicenav{
		display: flex;
		justify-content: space-around;
		padding: 5px 5px 10px 5px;
		color: #000000;
	}
	#servicenav img{
		width: 30px;
		height: 30px;
	}
	#servicetitle{
		text-align: left;
		font-size: 1.2em;
		color: #000000;
		border-bottom: 1px solid #BEBEBE;
		margin: 10px;
		padding: 10px 0 5px 0;
	}
</style>
