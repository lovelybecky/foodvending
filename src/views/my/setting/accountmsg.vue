<template>
	<div id="accountmsg">
		<topBar :resdata="bartitle"></topBar>
		<myLine></myLine>
		<div class="itemlist" style="margin-top: 0;border-top: none;">
			<item :resdata="item1.name" :opdata="user.name" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="item2.name" :opdata="user.tel" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="item3.name" :opdata="user.pwd" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="item4.name" :opdata="user.email" style="border-bottom: 1px solid #BEBEBE;"></item>
			<item :resdata="item5.name" :opdata="user.tel"></item>
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
				item1:{name:"用户名"},
				item2:{name:"手机号"},
				item3:{name:"支付密码"},
				item4:{name:"电子邮箱"},
				item5:{name:"Paynow"},
			}
		},
		computed:{
			user(){
				return this.$store.state.user;
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
