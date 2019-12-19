<template>
	<div id="home">
		<imgSwiper></imgSwiper>
		<div id="mainmsg">
			<div id="restmoney">余额:<span>${{money}}</span></div>
			<div>抵用卷:<span></span>{{discount}}张</div>	
		</div>
		<myLine></myLine>
		<div id="new1">
			<img src="../../assets/swipertest.jpg">
		</div>
		<div id="new2">
			<div class="subnew">
				<img src="../../assets/new2.jpg">
			</div>
			<div class="subnew">
				<img src="../../assets/new2.jpg">
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

<style>
	#home{
		margin-bottom: 73px;
	}
	#mainmsg{
		display: flex;
		justify-content: center;
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
		margin: 10px;
	}
	#new2{
		display: flex;
		justify-content: space-between;
		margin: 10px;
	}
</style>
