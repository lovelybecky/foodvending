<template>
	<div id="item">
		<div>{{resdata}}</div>
		<div @click="change">
			<span>{{opdata}}</span>
			<img src="../assets/into.png">
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			resdata:String,
			opdata:String
		},
		methods:{
			change(){
				this.$emit('change')
			}
		}
	}
</script>

<style>
	#item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FFFFFF;
		padding: 10px 5px;
		font-size: 1.2em;
		width: 90%;
		margin: 0 auto;
	}
	#item img{
		height: 25px;
		width: 25px;
		vertical-align: middle;
	}
	#item span{
		color: gray;
		line-height: 25px;
		vertical-align: middle;
	}
</style>
