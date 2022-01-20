<!--
* @description 
* @fileName List.vue
* @author weiqsctj-薇清时
* @Email weiqsctj@126.com
* @par 修改日志:
* @version 版本:
* @date 2022/01/20 13:55:43
!-->
<template>
	<div class="row">
		<!-- 展示用户列表 -->
		<div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
			<a :href="user.html_url" target="_blank">
				<img :src="user.avatar_url" style='width: 100px'/>
			</a>
			<p class="card-text">{{user.login}}</p>
		</div>
		<!-- 展示欢迎词 -->
		<h1 v-show="info.isFirst">欢迎使用！</h1>
		<!-- 展示加载中 -->
		<h1 v-show="info.isLoading">加载中....</h1>
		<!-- 展示错误信息 -->
		<h1 v-show="info.errMsg">{{info.errMsg}}</h1>
	</div>
</template>

<script>
	export default {
		name:'List',
		data() {
			return {
				info:{
					isFirst:true,
					isLoading:false,
					errMsg:'',
					users:[]
				}
			}
		},
		mounted() {
			this.$bus.$on('updateListData',(dataObj)=>{
				this.info = {...this.info,...dataObj}
			})
		},
	}
</script>

<style scoped>
	.album {
		min-height: 50rem; /* Can be removed; just added for demo purposes */
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #f7f7f7;
	}
  .row{
		margin-left: 150px;
	}
	.card {
		float:left;
		width: 15%;
		padding: .85rem;
		margin-bottom: 2rem;
		margin-top: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}

	.card > img {
		margin-bottom: .75rem;
		border-radius: 100px;
	}

	.card-text {
		font-size: 85%;
	}
	h1{
		margin-right: 150px;
		text-align: center;
	}
</style>