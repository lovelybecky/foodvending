<template>
	<div id="myorder">
		<div id="ordertitle">我的订单</div>
		<div id="ordernav">
			<div v-for="(item,index) in items" :key="item.id" @click="change(item.page,index)">
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
					{url:require('../../../assets/orders.png'),title:"全部",page:'/my/order'},
					{url:require('../../../assets/pay.png'),title:"未付款",page:'/my/order'},
					{url:require('../../../assets/package.png'),title:"未发货",page:'/my/order'},
					{url:require('../../../assets/deliver.png'),title:"已发货",page:'/my/order'}
				],
				test:0
			}
		},
		methods:{
			change:function(address,index){
				console.log(index);
				this.$router.push({
					path:address,
					name:'myorder',
					params:{pageindex:index}
				});
			}
		}
	}
</script>

<style>
	#myorder{
		width: 90%;
		background-color: #FFFFFF;
		border-radius: 10px;
		margin: 10px auto;
	}
	#ordernav{
		display: flex;
		justify-content: space-around;
		padding: 5px 5px 10px 5px;
		color: #000000;
	}
	#ordernav img{
		width: 30px;
		height: 30px;
	}
	#ordertitle{
		text-align: left;
		font-size: 1.2em;
		color: #000000;
		border-bottom: 1px solid #BEBEBE;
		margin: 10px;
		padding: 10px 0 5px 0;
	}
</style>
