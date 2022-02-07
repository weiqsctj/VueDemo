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
		<Category title="钟情的美食" >
			<img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
			<ul>
				<li v-for="(m,index) in foods" :key="index">{{m}}</li>
			</ul>
		</Category>

		<Category title="喜欢的游戏" >
			<ul>
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
		</Category>

		<Category title="好看的影片">
			<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
			<ul>
				<li v-for="(f,index) in films" :key="index">{{f}}</li>
			</ul>
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'
	export default {
		name:'App',
		components:{Category},
		data() {
			return {
				foods:['烧烤','酱鸡','烤鸭','牛排'],
				games:['巫师3','方舟进化生存','荒野大镖客2','孤岛惊魂系列','战神5','猎人:荒野的召唤'],
				films:['《教父》','《太阳照常升起》','《让子弹飞》','《3年A班》','《夏目友人帐》']
			}
		},
	}
</script>

<style scoped>
	.container{
		margin-top: 50px;
		display: flex;
		justify-content: space-around;
	}
</style>
