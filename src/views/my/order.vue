<template>
	<div id="order">
		<topBar :resdata="bartitle"></topBar>
		<div id="topnav">	
			<div v-for="(title,index) in titles" :key="index">
				<div v-bind:style="fontcolor(index)" @click="changeOrder(index)">{{title.name}}</div>
			</div>
		</div>
		
		<div v-for="order in orders" :key="order.id">
			<orderItem :state="order"></orderItem>
		</div>
		
	</div>
</template>
	
<script>
	import topBar from '../../components/topbar.vue'
	import orderItem from './components/orderitem.vue'
	export default{
		components:{
			topBar,
			orderItem
		},
		data(){
			return{
				bartitle:"我的订单",
				titles:[
					{name:"全部订单"},
					{name:"未支付"},
					{name:"未发货"},
					{name:"配送中"},
					{name:"售后/退款"}
				],
				orders:null,
				orderselect:"",
				titleselect:0
			}
		},
		created() {
			this.titleselect= this.$route.params.pageindex;
			this.getOrders();
		},
		computed:{
			user(){
				return this.$store.state.user;
			},
			fontcolor:function(){
				return function(index){
					if(index===this.titleselect){
						return{
							color:'#FFA500'
						}
					}
				}	
			},
			/*filterorders:function(){
				return this.orders.filter((order)=>{
					return order.state.match(this.orderselect)
				});
			}	*/
		},
		methods:{
			async getOrders(){
				let enter=null;
				if(this.titleselect===0){
					enter={
						name:this.user.name,
					}	
				}
				else if(this.titleselect===1){
					enter={
						name:this.user.name,
						status:'unpaid'
					}	
				}
				else if(this.titleselect===2){
					enter={
						name:this.user.name,
						status:'dealing'
					}	
				}
				else if(this.titleselect===3){
					enter={
						name:this.user.name,
						status:'delivery'
					}	
				}
				else if(this.titleselect===4){
					enter={
						name:this.user.name,
						status:'service'
					}	
				}
				let res = await this.$http.post('/users/orders', enter);
				console.log(res.data);
				this.orders=res.data.orders;
			},
			changeOrder(index){
				this.titleselect=index;
				this.getOrders();
			}
			/*titlechange(name){
				if(name==='全部订单'){
					this.orderselect="";
					this.titleselect=0;
				}
				else if(name==='未支付'){
					this.orderselect="未处理";
					this.titleselect=1;
				}
				else if(name==='未发货'){
					this.orderselect="处理中";
					this.titleselect=2;
				}
				else if(name==='配送中'){
					this.orderselect="配送中";
					this.titleselect=3;
				}
				else if(name==='售后/退款'){
					this.orderselect="售后中";
					this.titleselect=4;
				}
			}*/
		}
	}
</script>

<style>
	#order{
		margin-top: 61px;
	}
	#topnav{
		display: flex;
		border-top:1px solid #BEBEBE;
		border-bottom:1px solid #BEBEBE;
		background: #FFFFFF;
		justify-content: space-around;
		padding: 10px;
	}
</style>
