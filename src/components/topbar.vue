<template>
	<div>
		<div id="topbar">
			<div id="backicon" @click="event">
				<img src="../assets/back.png">
			</div>
			<div class="bartitle">{{resdata}}</div>
		</div>	
	</div>
	
</template>

<script>
	export default{
		props:{
			resdata:String
		},
		methods:{
			event(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	#topbar{
		margin: 0;
		padding: 0;
		background: #FFFFFF;
	}
	#backicon{
		margin: 15px;
		text-align: left;
		position: fixed;
		z-index: 1;
		top: 0;
	}
	#backicon img{
		width: 30px;
		height: 30px;
	}
	.bartitle{
		background:#FFFFFF;
		position: fixed;
		top: 0;
		width: 100%;
		padding: 15px 0;
		padding-bottom: 15px;
		font-size: 1.3em;
		font-weight: bold;
		border-bottom: 1px solid #BEBEBE;
	}
</style>
