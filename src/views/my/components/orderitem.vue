<template>
	<div id="orderitem">
		<div class="itemtop">
			<div>2019/09/01</div>
			<div>{{state}}</div>
		</div>
		<div class="itemmid">
			<div class="table">
				<div class="tablerow">
					<div class="tableproduct">产品</div>
					<div class="tablenumber">数量</div>
					<div class="tableprice">价格</div>
				</div>
				<div class="tablerow">
					<div class="tableproduct">橙汁</div>
					<div class="tablenumber">x1</div>
					<div class="tableprice">$2.00</div>
				</div>
			</div>
			<div class="totalprice">总价：$2.00</div>
		</div>
		<div class="itemend">
			<div>付款方式：</div>
			<div>付款状态：</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			state:String
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
