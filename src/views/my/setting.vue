<template>
	<div id="setting">
		<topBar :resdata="bartitle"></topBar>
		<div id="setlogo">
			<div><img src="../../assets/logo.jpg" width="40%"></div>
			<div>版本号 v3.0.0</div>
		</div>
		<div class="itemlist">
			<item :resdata="item1.name" style="border-bottom: 1px solid #BEBEBE;" @change="event(item1.page)"></item>
			<item :resdata="item2.name" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="item3.name"></item>
		</div>
		<div class="itemlist">
			<item :resdata="item4.name" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="item5.name"></item>
		</div>
		<div class="itemlist">
			<item :resdata="item6.name"></item>
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
				item1:{name:"账户信息",page:'/my/setting/accountmsg'},
				item2:{name:"意见反馈",page:'/my/setting/accountmsg'},
				item3:{name:"欢迎评分",page:'/my/setting/accountmsg'},
				item4:{name:"用户协议",page:'/my/setting/accountmsg'},
				item5:{name:"隐私策略",page:'/my/setting/accountmsg'},
				item6:{name:"清除缓存",page:'/my/setting/accountmsg'}
			}
		},
		methods:{
			event(address){
				this.$router.push(address);
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
