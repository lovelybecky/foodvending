<template>
	<div id="orderitem">
		<div class="itemtop">
			<div>{{state.date}}</div>
			<div v-bind:style="fontcolor(state.status)">{{state.status}}</div>
		</div>
		<div class="itemmid">
			<div class="table">
				<div class="tablerow">
					<div class="tableproduct">产品</div>
					<div class="tablenumber">数量</div>
					<div class="tableprice">价格</div>
				</div>
				<div class="tablerow" v-for="item in state.products" :key="item.id">
					<div class="tableproduct">{{item.product}}</div>
					<div class="tablenumber">x{{item.num}}</div>
					<div class="tableprice">${{item.price}}</div>
				</div>
			</div>
			<div class="totalprice">总价：${{state.allprice}}</div>
		</div>
		<div class="itemend">
			<div>付款方式：{{state.method}}</div>
			<div>付款状态：{{state.paystatus}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			state:Object
		},
		data(){	
			return{
				ordersta:""
			}
		},
		computed:{
			fontcolor:function(){
				return function(sta){
					if(sta==='未处理'){
						return{
							color:'red'
						}
					}
					else if(sta==='处理中'){
						return{
							color:'orange'
						}
					}
					if(sta==='配送中'){
						return{
							color:'black'
						}
					}
					if(sta==='售后中'){
						return{
							color:'blue'
						}
					}
					if(sta==='已完成'){
						return{
							color:'green'
						}
					}
				}
			}
			/*orderSta:function(){
				if(this.state.status==='unpaid'){
					return this.ordersta='未处理'
				}
				else if(this.state.status==='dealing'){
					return this.ordersta='处理中'
				}
				else if(this.state.status==='delivery'){
					return this.ordersta='配送中'
				}
				else if(this.state.status==='service'){
					return this.ordersta='售后中'
				}
				else{
					return this.ordersta='已完成'
				}
			}*/
		},
		methods:{
	
		},
	}
</script>

<style>
	#orderitem{
		background: #FFFFFF;
		width: 90%;
		border-radius: 5px;
		padding: 10px;
		margin: 15px auto;
	}
	.itemtop{
		display: flex;
		justify-content: space-between;
		margin: 5px;
	}
	.itemmid{
		border-bottom: 1px solid #BEBEBE;
		border-top: 1px solid #BEBEBE;
		padding: 10px;
	}
	.itemend{
		display: flex;
		justify-content: space-between;
		margin: 5px;
	}
	.table{
		display: table;
		width: 100%;
	}
	.tablerow{
		display: table-row;
	}
	.tableproduct{
		display: table-cell;
		border: 1px solid #BEBEBE;
		width: 50%;
		padding: 5px;
	}
	.tablenumber{
		display: table-cell;
		border: 1px solid #BEBEBE;
		width: 25%;
		padding: 5px;
	}
	.tableprice{
		display: table-cell;
		border: 1px solid #BEBEBE;	
		width: 25%;
		padding: 5px;
	}
	.totalprice{
		text-align: right;
		margin-top: 5px;
	}
</style>
