<template>
  <div class="container">
    <div class="popup">
      <div>
		<div>{{resdata}}</div> 
        <button type="button" class="btn-green" @click="close">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup',
  props:{
	resdata:String
  },
  methods:{
    close (){
      this.$emit('close')
    }
  }

}
</script>

<style scoped>
  .container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
	height: 100px;
	width: 200px;
	padding: 20px;
	padding-top: 30px;
  }
  .popup-footer {
	padding: 15px;
	display: flex;
    justify-content: center;
  }
  .btn-green {
    color: white;
    background: #FFA500;
    border: 1px solid #FFA500;
    border-radius: 2px;
  }
</style>

