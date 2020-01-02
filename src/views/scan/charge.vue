<template>
	<div>
		<div>充值</div>
		<div>
			<img :src="qrcodeurl">
		</div>	
	</div>
</template>

<script>
	import QRcode from "qrcode";
	export default{
		data(){
			return{
				qrcodeurl:""
			}
		},
		mounted() {
			let self=this;
			let segs=[
				{data:'aasdag'},
				{data:'098987'}
			]
			QRcode.toDataURL(
				segs,
				function(err,url){
					if(!err){
						self.qrcodeurl=url;
					}
				}
			);
		}
	}
</script>

<style>
</style>
