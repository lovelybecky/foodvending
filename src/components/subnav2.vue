<template>
	<div id="outnav">
		<router-link class="navselect" to="/home" exact>
			<img class="subicon" :src="imageUrl.homeIcon">
			<div class="subtitle">主页</div>
		</router-link>
		<router-link class="navselect" to="/scan" exact>
			<img class="subicon" :src="imageUrl.scanIcon">
			<div class="subtitle">扫描</div>
		</router-link>
		<router-link class="navselect" to="/my" exact>
			<img class="subicon" :src="imageUrl.myIcon">
			<div class="subtitle">我的</div>
		</router-link>	
	</div>
</template>

<script>
	export default{
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
	#outnav{
		width: 100%;
		height: 73px;
		background-color: #F5F5F5;
		margin: 0;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-around;
	}
	.navselect{
		display: flex;
		flex-direction: column;
		margin: 10px;
		text-decoration: none;
		color: #343A40;
	}
	.subicon{
		height: 30px;
		width: 30px;
	}
	.subtitle{
		
	}
	.router-link-active{
		color: #FFA500;
	}
</style>
