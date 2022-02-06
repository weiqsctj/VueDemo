<!--
* @description 
* @fileName Category.vue
* @author weiqsctj-薇清时
* @Email weiqsctj@126.com
* @par 修改日志:
* @version 版本:
* @date 2022/02/06 10:35:08
!-->
<template>
	<div class="category">
		<h3>{{title}}分类</h3>
		<slot :foods="foods" msg="hello">默认的一些内容</slot>
	</div>
</template>

<script>
	export default { 
		name:'Category',
		props:['title'],
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
	.category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>