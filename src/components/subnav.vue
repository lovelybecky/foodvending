<template>
	<div id="subnav">
		<div class="selector">
			<img class="subicon" :src="imageUrl.homeIcon" >
			<div class="subtitle">主页</div>
		</div>
		<div class="selector">
			<img class="subicon" :src="imageUrl.scanIcon">
			<div class="subtitle">扫描</div>
		</div>
		<div class="selector">
			<img class="subicon" :src="imageUrl.myIcon">
			<div class="subtitle">我的</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"subNavigation",
		data(){
			return{
				imageUrl:{
					homeIcon:require('../assets/home.png'),
					scanIcon:require('../assets/scan.png'),
					myIcon:require('../assets/my.png')
				}
			}
		},
		created() {
			if(typeof this.$route.path === 'string'){
				let val = this.$route.path;
				console.log(val);
				switch(val){
					case '/home':
						this.imageUrl.homeIcon=require('../assets/homeselect.png')
						this.imageUrl.scanIcon=require('../assets/scan.png')
						this.imageUrl.myIcon=require('../assets/my.png')
						break
					case '/scan':
						this.imageUrl.homeIcon=require('../assets/home.png')
						this.imageUrl.scanIcon=require('../assets/scanselect.png')
						this.imageUrl.myIcon=require('../assets/my.png')
						break
					case '/my':
						this.imageUrl.homeIcon=require('../assets/home.png')
						this.imageUrl.scanIcon=require('../assets/scan.png')
						this.imageUrl.myIcon=require('../assets/myselect.png')
						break
				}
			}
			else{
				console.log('fail');
			}
		},
		methods:{
			
		}	
	}
</script>

<style>
	#subnav{
		width: 100%;
		display: flex;
		justify-content: space-around;
		background-color: #F5F5F5;
		margin: 0;
		position: fixed;
		bottom: 0;
	}
	.selector{
		display: flex;
		flex-direction: column;
		margin: 10px;
	}
	.subicon{
		height: 30px;
		width: 30px;
	}
</style>
