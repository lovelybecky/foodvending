<template>
	<div id="mainmsg">
		<div class="subacmsg" style="border-right: 1px solid #BEBEBE;">
			<div style="font-size: 1.4em; font-weight: bold;">${{account.money}}</div>
			<div>账户余额</div>
		</div>
		<div class="subacmsg" >
			<div style="font-size: 1.4em; font-weight: bold;">{{account.items}}张</div>
			<div>优惠券</div>
		</div>	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			account(){
				return this.$store.state.account;
			}
		}
	}
</script>

<style scoped>
	#mainmsg{
		width: 90%;
		background-color: #FFFFFF;
		border-radius: 10px;
		margin: -30px auto 10px auto;
		display: flex;
		justify-content: center;
		
	}
	.subacmsg{
		margin: 5px 0; 
		padding: 15px; 
		flex: 1;
	}
</style>
