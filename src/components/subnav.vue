<template>
	<div id="subnav">
		<div class="selector">
			<img class="subicon" src="../assets/home.png" >
			<div>主页</div>
		</div>
		<div class="selector">
			<img class="subicon" src="../assets/scan.png">
			<div>扫描</div>
		</div>
		<div class="selector">
			<img class="subicon" src="../assets/my.png">
			<div>我的</div>
		</div>
	</div>
</template>

<script>
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
