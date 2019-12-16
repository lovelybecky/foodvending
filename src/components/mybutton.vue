<template>
	<button @click="event">{{resdata}}</button>
</template>

<script>
	export default{
		props:{
			resdata:String
		},
		methods:{
			event(){
				this.$emit('change')
			}
		}
	}
</script>

<style>
	button{
		margin-top: 30px;
		height: 40px;
		width: 130px;
		border-radius: 0.5em;
		background-color: #FFA500;
		color: white;
		font-size: 1em;
		font-weight: 900;
	}
</style>
