<template>
  <div class="container">
    <Category title="钟情的美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="https://www.weiqsctj.wang/">更多美食</a>
    </Category>

    <Category title="喜欢的游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.weiqsctj.wang/">单机游戏</a>
        <a href="https://www.weiqsctj.wang/">网络游戏</a>
      </div>
    </Category>

    <Category title="好看的影片">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.weiqsctj.wang/">经典</a>
          <a href="https://www.weiqsctj.wang/">推荐</a>
          <a href="https://www.weiqsctj.wang/">热门</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>

  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name: 'App',
  components: { Category },
  data() {
    return {
      foods: ['烧烤', '酱鸡', '烤鸭', '牛排'],
      games: [
        '巫师3',
        '方舟进化生存',
        '荒野大镖客2',
        '孤岛惊魂系列',
        '战神5',
        '猎人:荒野的召唤',
      ],
      films: [
        '《教父》',
        '《太阳照常升起》',
        '《让子弹飞》',
        '《3年A班》',
        '《夏目友人帐》',
      ],
    }
  },
}
</script>

<style scoped>
.container,
.foot {
	margin-top: 50px;
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
