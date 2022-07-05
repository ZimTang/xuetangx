<script setup>
import ListItem from './list-item.vue';

const props = defineProps({
  liveList: Array,
});
</script>

<template>
  <div class="live-container">
    <h2>热门直播</h2>
    <div class="live-list">
      <template v-for="item in props.liveList" :key="item.id">
        <list-item :item-data="item" />
      </template>
    </div>
    <div class="bottom">
      <div class="line"></div>
      <a href="#" class="more">查看更多</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.live-container {
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  h2 {
    font-size: 2.3rem;
    margin-bottom: 3rem;
  }
  .live-list {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    > div {
      width: 90%;
      margin-right: 5rem;
    }
  }
  .bottom {
    width: 90%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .line {
      width: 90%;
      margin-right: 4rem;
      background-color: #ebebeb;
      height: 0.15rem;
    }
    .more {
      color: #a7a7a7;
      font-size: 1.2rem;
      &:hover {
        color: #1769fe;
      }
    }
  }
}
</style>
