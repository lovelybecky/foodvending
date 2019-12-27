<template>
	<div id="scan">
		<div id="toppart">
			<div>扫描二维码即可完成付款</div>
			<div id="qrcode">
				<img src="../../assets/qrcode.jpg">
			</div>
			<div id="qrmoney">账户余额：<span>${{account.money}}</span></div>
			<myButton :resdata="chargebutton" @change="chargepage" style="margin: 10px auto;"></myButton>
		</div>
		<myLine></myLine>
		<div v-for="item in account.discounts" :key="item.id">
			<discount :type="item.type"></discount>
		</div>
		<subNav></subNav>
		
	</div>
</template>

<script>
	import subNav from '../../components/subnav2.vue';
	import myButton from '../../components/mybutton.vue';
	import myLine from '../../components/myline.vue';
	import discount from './components/discount.vue'
	export default{
		components:{
			subNav,
			myButton,
			myLine,
			discount
		},
		data(){
			return{
				chargebutton:"充值"
			}
		},
		computed:{
			account(){
				return this.$store.state.account;
			}
		},
		methods:{
			async chargepage(){
				this.$router.push('/charge');
			}
		}	
	}
</script>

<style>
	#scan{
		margin-bottom: 73px;
		background: #F5F5F5;
		min-height: 100vh;
	}
	#toppart{
		padding-top: 20px;
		background: #FFFFFF;
	}
	#qrcode{
		width: 200px;
		height: 200px;
		margin: 10px auto;
		border: 1px dashed #333333;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#qrmoney{
		font-size: 1.4em;
		font-weight: bold;
	}
</style>
