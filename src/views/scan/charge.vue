<template>
	<div>
		<button
			type="button"
			class="btn"
			@click="showPopup">
			Click me
		</button>
		<popup
			v-show="isPopupVisible"
			@close="closePopup">
		</popup>
	</div>
</template>

<script>
	import popup from '../../components/dialogue.vue'
	export default{
		components:{
			popup
		},
		data (){
			return {
				isPopupVisible: false
			}
		},
		methods: {
			showPopup(){
				this.isPopupVisible = true
			},
			closePopup(){
				this.isPopupVisible = false
			}
		}
	}
</script>

<style>
</style>
