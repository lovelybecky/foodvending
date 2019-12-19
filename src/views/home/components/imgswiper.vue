<template>
	<div id="swiper" v-on:mouseover="stop()" v-on:mouseout="move()">
		<div class="swipercontainer">
			<transition-group tag="ul" name="image">
				<li v-for="(image,index) in images" :key="index" v-show="index===mark" >
					<img :src="image">
				</li>
			</transition-group>	
		</div>
		<div class="swiperbutton">
			<span v-for="(item,index) in images" :key="index" :class="{'active':index===mark }" @click="change(index)"></span>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				mark:0,
				timer:null,
				images:[
					require('../../../assets/swipertest.jpg'),
					require('../../../assets/1.jpg'),
					require('../../../assets/swipertest.jpg'),
					require('../../../assets/1.jpg')
				]
			}
		},
		methods:{
			autoPlay(){
				this.mark++;
				if(this.mark===4){
					this.mark=0;
				}	
			},
			play(){
				setInterval(this.autoPlay,3500);
			},
			change(i){
				this.mark=i;
			},
			stop(){
				clearInterval(this.timer);
				this.timer = null;
			},
			move(){
				this.timer = setInterval(this.autoPlay, 3500);
			}
		},
		created(){
			this.play();
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	#swiper{
		width: 100%;
		height: 200px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
	}
	.swipercontainer{
		width:100%;
		height: 200px;
	}
	.swipercontainer li{
		position: absolute;
	}
	.swipercontainer img{
		width: 100%;
		height: 200px;
	}
	.swiperbutton{
		position: absolute;
		width: 100%;
		bottom: 5px;
		margin: 0 auto;
		z-index:10;
		text-align: center;
	}
	.swiperbutton span{
		cursor: pointer;
		width: 10px;
		height: 10px;
		background: #F5F5F5;
		border-radius: 5px;
		display: inline-block;
		margin-right: 10px;
	}
	.active{
		background:#FFA500 !important;
	}
	.image-enter-active {
		transform: translateX(0);
		transition: all 1.5s ease;
	}
	.image-leave-active {
		transform: translateX(-100%);
		transition: all 1.5s ease;
	}
	.image-enter {
		transform: translateX(100%);
	}
	.image-leave {
		transform: translateX(0);
	}
</style>
