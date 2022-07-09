<script setup lang="ts">
import ListItem from '../common/list-item/list-item.vue';

export type FriendItem = {
  id: number;
  cover: string;
};

const props = defineProps<{
  friendList: FriendItem[];
}>();
</script>

<template>
  <div class="friend-container">
    <h2>合作伙伴</h2>
    <div class="friend-list">
      <template v-for="item in props.friendList" :key="item.id">
        <ListItem :item-data="item" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.friend-container {
  width: 90%;
  margin: 5rem auto;
  h2 {
    font-size: 2.3rem;
    margin-bottom: 2rem;
  }
  .friend-list {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    flex-wrap: wrap;
    > div {
      width: 90%;
      margin-top: 2rem;
    }
  }
}
</style>
