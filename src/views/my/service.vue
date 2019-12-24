<template>
	<div id="service">
		<topBar :resdata="bartitle"></topBar>
		<myLine></myLine>
		<div id="serlogo">
			<img src="../../assets/logo.jpg" width="60%">
		</div>
		<div>
			<textarea name="suggestion" id="inputsugg" v-model="textmsg" placeholder="告诉我们您的意见或建议"></textarea>
		</div>
		<div >
			<button id="submitbutton" v-bind:class="classchange" :disabled="!textmsg">提交</button>
		</div>
		<div >
			<button id="contactbutton">联系客服</button>
		</div>
		<div>
			<div style="color: red;">客服热线： 9773 5658</div>
			<div>客服工作时间： 9:00 - 19:00</div>
		</div>
	</div>
</template>

<script>
	import topBar from '../../components/topbar.vue'
	import myLine from '../../components/myline.vue'
	export default{
		components:{
			topBar,
			myLine
		},
		data(){
			return{
				bartitle:"客服与帮助",
				backColor:'#BEBEBE',
				textmsg:''
			}
		},
		computed:{
			classchange:function(){
				if(!this.textmsg){
					return{
					changebutton:false,
					defaultbutton:true
					}
				}
				else{
					return{
						changebutton:true,
						defaultbutton:false
					}
				}	
			}	
		},
		watch:{
			textmsg:function(){
				if (this.textmsg != null){
					this.backColor='#FFA500';
				}
			}
		}
	}
</script>

<style>
	#service{
		margin-top: 60px;
		height: 100vh;
	}
	#inputsugg{
		border: 1px solid #333333;
		border-radius: 5px;
		padding: 15px;
		width: 80%;
		height: 150px;
		font-size: 1.1em;
	}
	textarea::-webkit-input-placeholder {
	/* WebKit browsers */ 
	color: #BEBEBE; 
	} 
	textarea:-moz-placeholder { 
	/* Mozilla Firefox 4 to 18 */ 
	color: #BEBEBE; 
	} 
	textarea::-moz-placeholder { 
	/* Mozilla Firefox 19+ */ 
	color: #BEBEBE; 
	} 
	textarea:-ms-input-placeholder { 
	/* Internet Explorer 10+ */ 
	color: #BEBEBE; 
	}
	#submitbutton{
		width: 90%;
		margin: 15px auto;
	}
	.changebutton{
		background: #FFA500;
	}
	.defaultbutton{
		background: #BEBEBE;
	}
	#contactbutton{
		width: 90%;
		margin: 0 auto 30px auto;
	}
</style>
