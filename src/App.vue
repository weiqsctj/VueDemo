<template>
	<div class="container">

		<Category title="钟情的美食">
			<template scope="weiqsctj">
				<ul>
					<li v-for="(f,index) in weiqsctj.foods" :key="index">{{f}}</li>
				</ul>
			</template>
		</Category>

		<Category title="喜欢的游戏">
			<template scope="{games}">
				<ol>
					<li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
				</ol>
			</template>
		</Category>

		<Category title="好看的影片">
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
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
