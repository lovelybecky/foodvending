<template>
	<div id="scan">
		<div id="toppart">
			<div>扫描二维码即可完成付款</div>
			<div id="qrcode">
				<img :src="qrcodeurl">
			</div>
			<div id="qrmoney">账户余额：<span>${{account.money}}</span></div>
			<myButton :resdata="chargebutton" @change="chargepage" style="margin: 10px auto;"></myButton>
			<myButton :resdata="buybutton" @change="buyproduct" style="margin: 10px auto;"></myButton>
		</div>
		<myLine></myLine>
		<div v-for="item in account.discounts" :key="item.id">
			<discount :type="item.type"></discount>
		</div>
		<subNav></subNav>
		<popup
			v-show="isPopupVisible"
			@close="closePopup"
			:resdata="dialogtext">
		</popup>
	</div>
</template>

<script>
	import QRcode from "qrcode";
	import subNav from '../../components/subnav2.vue';
	import myButton from '../../components/mybutton.vue';
	import myLine from '../../components/myline.vue';
	import discount from './components/discount.vue';
	import popup from '../../components/dialogue.vue'
	export default{
		components:{
			subNav,
			myButton,
			myLine,
			discount,
			popup
		},
		data(){
			return{
				chargebutton:"充值",
				buybutton:"购买",
				qrcodeurl:"",
				isPopupVisible: false,
				dialogtext:""
			}
		},
		mounted() {
			let segs="http://localhost:8080/scan/"+this.user.name+this.account.money;
			let self=this;
			QRcode.toDataURL(
				segs,
				{errorCorrectionLevel:"H",version:4},
				function(err,url){
					if(!err){
						self.qrcodeurl=url;
					}
				}
			);
			
			this.sockets.subscribe('orderresult',(data)=>{
				console.log(data);
				this.isPopupVisible = true;
				this.dialogtext=data.msg;
			});
		},
		computed:{
			user(){
				return this.$store.state.user;
			},
			account(){
				return this.$store.state.account;
			}
		},
		methods:{
			async chargepage(){
				this.$router.push('/charge');
			},
			buyproduct(){
				this.$socket.emit('order',{
					username:this.user.name,
					money:this.account.money
				});
			},
			closePopup(){
				this.isPopupVisible = false
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
	#qrcode img{
		width: 200px;
		height: 200px;
	}
	#qrmoney{
		font-size: 1.4em;
		font-weight: bold;
	}
</style>
