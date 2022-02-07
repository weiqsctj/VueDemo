<!--
* @description 
* @fileName App.vue
* @author weiqsctj-薇清时
* @Email weiqsctj@126.com
* @par 修改日志:
* @version 版本:
* @date 2022/02/06 10:35:50
!-->
<template>
	<div class="container">
	<!--category.app里 props:['title']接受<Category title="钟情的美食">里title -->
		<Category title="钟情">
			<template scope="weiqsctj">
				<ul>
					<li v-for="(f,index) in weiqsctj.games" :key="index">{{f}}</li>
				</ul>
			</template>
		</Category>

		<Category title="喜欢">
			<template scope="{games}">
				<ol>
					<li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
				</ol>
			</template>
		</Category>

		<Category title="好玩">
			<template slot-scope="{games}">
				<h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
			</template>
		</Category>

	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
	}
</script>

<style scoped>
	.container,.foot{
		margin-top: 50px;
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
