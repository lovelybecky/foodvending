<template>
	<div id="accountmsg">
		<topBar :resdata="bartitle"></topBar>
		<myLine></myLine>
		<div class="itemlist" style="margin-top: 0;border-top: none;">
			<item :resdata="item1.name" :opdata="item1.msg" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="item2.name" :opdata="item2.msg" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="item3.name" :opdata="item3.msg" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="item4.name" :opdata="item4.msg" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="item5.name" :opdata="item5.msg"></item>
		</div>
	</div>
</template>

<script>
	import topBar from '../../../components/topbar.vue';
	import item from '../../../components/item.vue';
	import myLine from '../../../components/myline.vue';
	export default{
		components:{
			topBar,
			item,
			myLine
		},
		data(){
			return{
				bartitle:"个人账户信息",
				item1:{name:"手机号",msg:"8796 3254"},
				item2:{name:"用户名",msg:"bjyx1108"},
				item3:{name:"支付密码",msg:"******"},
				item4:{name:"电子邮箱",msg:"1128@163.com"},
				item5:{name:"Paynow",msg:"8796 3254"},
			}
		}
	}
</script>

<style>
	#accountmsg{
		margin-top: 60px;
		background: #F5F5F5;
		height: 100vh;
	}
</style>
