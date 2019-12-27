<template>
	<div id="supplement">
		<topBar :resdata="bartitle"></topBar>
		<div>
			<img src="" width="100%" height="200px">
		</div>
		<div class="content">
			<div class="contitle">主要内容</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
		</div>
	</div>
</template>

<script>
	import topBar from '../../components/topbar.vue'
	export default{
		components:{
			topBar
		},
		data(){
			return{
				bartitle:"新品推荐"
			}
		}
	}
</script>

<style>
	#supplement{
		margin-top: 60px;
		background: #FFFFFF;
		min-height: 100vh;
	}
	.content{
		width: 80%;
		margin: 15px auto;
	}
	.contitle{
		margin: 10px;
		font-weight: bold;
		font-size: 1.2em;
	}
	.maincontent{
		text-align: left;
	}
</style>
