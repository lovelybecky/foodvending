<template>
	<div>
		<topBar :resdata="bartitle"></topBar>
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
				bartitle:"联系客服"
			}
		}
	}
</script>

<style>
</style>
