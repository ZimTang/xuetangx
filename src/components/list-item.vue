<script setup>
defineProps({
  itemData: Object,
});
</script>

<template>
  <div class="list-item">
    <div class="cover" v-if="itemData.cover">
      <img :src="itemData.cover" alt="" />
    </div>
    <div class="title" v-if="itemData.title">
      <p>{{ itemData.title }}</p>
    </div>
    <div class="desc" v-if="itemData.desc">
      <p>{{ itemData.desc }}</p>
    </div>
    <div class="bottom" v-if="itemData.creator">
      <div class="creator">{{ itemData.creator }}</div>
      <div class="count" v-if="itemData.count">
        {{
          itemData.count > 10000
            ? itemData.count.toString()[0] + 'w+'
            : itemData.count
        }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  width: 20rem;
  border: 1px solid #eee;
  transition: all 0.4s;
  .cover img {
    width: 100%;
  }
  .title {
    font-size: 1.4rem;
    margin: 0 1rem;
    margin-top: 2rem;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 4px 4px #eee;
    transform: translateY(-3%);
  }
  .desc {
    font-size: 1.2rem;
    margin: 1rem 0;
    padding: 0 1rem;
  }
  .bottom {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    .creator,
    .count {
      color: rgb(148, 147, 147);
      font-size: 1.1rem;
    }
  }
}
</style>
