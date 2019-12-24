<template>
	<div id="discount" v-bind:class="change">
		<div>优惠券</div>
		<div class="label" v-if="type==='used'">
			<img src="../../../assets/shiyong.jpeg" width="60px">
		</div>
		<div class="label" v-else-if="type==='expired'">
			<img src="../../../assets/guoqi.jpeg" width="60px">
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			type:String
		},
		methods:{

		},
		computed:{
			change:function(){
				if(this.type==='used'){
					return{
						newitem:false,
						useditem:true,
						expireditem:false
					}
				}
				else if(this.type==='expired'){
					return{
						newitem:false,
						useditem:false,
						expireditem:true
					}
				}
				else{
					return{
						newitem:true,
						useditem:false,
						expireditem:false
					}
				}
			}
		}
	}
</script>

<style>
	#discount{
		background: #FFFFFF;
		width: 85%;	
		border-radius: 3px;
		margin: 15px auto;
		font-size: 1.5em;
		position: relative;
	}
	.newitem{
		border: 1px solid #FFA500;
		color: #FFA500;
	}
	.useditem{
		border: 1px solid #333333;
		color: #333333;
	}
	.expireditem{
		border: 1px solid #BEBEBE;
		color: #BEBEBE;
	}
	#discount div{
		margin: 20px auto;
	}
	.label{
		text-align: right;
		position: absolute;
		width: 100%;
		top: -20px;
	}
</style>
