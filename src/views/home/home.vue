<template>
	<div id="home">
		<imgSwiper></imgSwiper>
		<div id="mainmsg">
			<div id="restmoney">余额:<span>${{money}}</span></div>
			<div>抵用卷:<span></span>{{discount}}张</div>	
		</div>
		<myLine></myLine>
		<div>
			<div id="new1">
				<img src="../../assets/swipertest.jpg" width="100%">
			</div>
			<div id="new2">
				<div class="subnew">
					<img src="../../assets/new2.jpg" width="100%">
				</div>
				<div class="subnew">
					<img src="../../assets/new2.jpg" width="100%">
				</div>
			</div>	
		</div>
		<subNav></subNav>
	</div>
</template>

<script>
	import subNav from '../../components/subnav2.vue';
	//import imgSwiper from '../../components/swiper.vue';
	import imgSwiper from './components/imgswiper.vue';
	import myLine from '../../components/myline.vue';
	export default{
		components:{
			subNav,
			imgSwiper,
			myLine
		},
		data(){
			return{
				money:30,
				discount:3
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	#home{
		margin-bottom: 73px;
		background: #F5F5F5;
		height: 100vh;
	}
	#mainmsg{
		display: flex;
		justify-content: center;
		background: #FFFFFF;
		padding: 5px 0;
	}
	#mainmsg div{
		padding: 20px 40px;
		font-size: 1.4em;
		font-weight: bold;
	}
	#mainmsg span{
		margin-left: 5px;
	}
	#restmoney{
		border-right: 1px solid black;
	}
	#new1{
		margin: 10px auto;
		width: 90%;
	}
	#new2{
		display: flex;
		justify-content: space-between;
		margin: 10px auto;
		width: 90%;	
	}
	.subnew{
		width: 48%;
	}
</style>
