<!--
* @description 
* @fileName App.vue
* @author: weiqsctj-薇清时
* @Email: weiqsctj@126.com
* @par 修改日志: 
* @version 版本: 
* @date 2022/03/02 10:46:00
!-->
<template>
  <div>
		<button>原生的按钮</button>
		<input type="text">
		<weiqsctj-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
		</weiqsctj-row>
		<weiqsctj-date-picker
      type="date"
      placeholder="选择日期">
    </weiqsctj-date-picker>
		<weiqsctj-row>
			<el-button icon="el-icon-search" circle></el-button>
			<el-button type="primary" icon="el-icon-s-check" circle></el-button>
			<el-button type="success" icon="el-icon-check" circle></el-button>
			<el-button type="info" icon="el-icon-message" circle></el-button>
			<el-button type="warning" icon="el-icon-star-off" circle></el-button>
			<el-button type="danger" icon="el-icon-delete" circle></el-button>
		</weiqsctj-row>
  </div>
</template>

<script>
	export default {
		name:'App',
	}
</script>
