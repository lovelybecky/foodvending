<template>
	<div id="setting">
		<topBar :resdata="bartitle"></topBar>
		<div id="setlogo">
			<div><img src="../../assets/logo.jpg" width="40%"></div>
			<div>版本号 v3.0.0</div>
		</div>
		<div class="itemlist">
			<item :resdata="itemname1" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="itemname2" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="itemname3"></item>
		</div>
		<div class="itemlist">
			<item :resdata="itemname4" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="itemname5"></item>
		</div>
		<div class="itemlist">
			<item :resdata="itemname6"></item>
		</div>
		
	</div>
</template>

<script>
	import topBar from '../../components/topbar.vue';
	import item from '../../components/item.vue';
	export default{
		components:{
			topBar,
			item
		},
		data(){
			return{
				bartitle:"设置",
				itemname1:"账户信息",
				itemname2:"意见反馈",
				itemname3:"欢迎评分",
				itemname4:"用户协议",
				itemname5:"隐私策略",
				itemname6:"清除缓存"
			}
		}
	}
</script>

<style>
	#setting{
		margin-top: 60px;
		background: #F5F5F5;
		height: 100vh;
	}
	#setlogo{
		padding: 15px;
	}
	#serlogo div{
		width: 100%;
	}
	.itemlist{
		background: #FFFFFF;
		border-top: 1px solid #BEBEBE;
		border-bottom: 1px solid #BEBEBE;
		margin: 20px 0;
	}
</style>
