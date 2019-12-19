<template>
	<div>
		<div id="toppart">
			<div>扫描二维码即可完成付款</div>
			<div id="qrcode">
				<img src="../../assets/qrcode.jpg">
			</div>
			<div id="qrmoney">账户余额：<span>${{money}}</span></div>
			<myButton :resdata="chargebutton" @change="chargepage" style="margin: 10px auto;"></myButton>
		</div>
		<myLine></myLine>
		<div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<subNav></subNav>
	</div>
</template>

<script>
	import subNav from '../../components/subnav2.vue';
	import myButton from '../../components/mybutton.vue';
	import myLine from '../../components/myline.vue';
	export default{
		components:{
			subNav,
			myButton,
			myLine
		},
		data(){
			return{
				chargebutton:"充值",
				money:30
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
	#toppart{
		margin-top: 20px;
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
