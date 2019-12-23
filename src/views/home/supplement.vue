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
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div class="maincontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</div>
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
