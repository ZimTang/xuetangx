<script setup>
import listItem from './list-item.vue';

const props = defineProps({
  cateList: Array,
  cateId: Number,
  courseList: Array,
});

const emits = defineEmits(['changeCate']);

const changeCate = (id) => {
  emits('changeCate', id);
};
</script>

<template>
  <div class="course-container">
    <h2>好课推荐</h2>
    <div class="cate-list">
      <div
        class="cate-item"
        :class="{ active: cate?.id === props.cateId }"
        v-for="cate in props.cateList"
        :key="cate.id"
        @click="changeCate(cate.id)"
      >
        <span>{{ cate.text }}</span>
      </div>
    </div>
    <div class="course-list">
      <template v-for="item in props.courseList" :key="item.id">
        <list-item :item-data="item" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.course-container {
  width: 90%;
  margin: 0 auto;
  h2 {
    font-size: 2.3rem;
    margin-bottom: 3rem;
  }
  .cate-list {
    display: flex;
    .cate-item {
      border-radius: 2rem;
      margin-right: 2rem;
      height: 3rem;
      padding: 0 1.5rem;
      text-align: center;
      line-height: 3rem;
      background-color: #ecf2fe;
      color: #333333;
      span {
        color: #333333;
      }

      &:hover {
        cursor: pointer;
        background-color: #ccddfd;
        color: #ecf2fe;
        span {
          color: #437ff6;
        }
      }
    }
    .active {
      &:hover {
        background-color: #1769fe;
        span {
          color: white;
        }
      }
      background-color: #1769fe;
      span {
        color: white;
      }
    }
  }
  .course-list {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    flex-wrap: wrap;
    > div {
      width: 90%;
      margin-top: 2rem;
    }
  }
}
</style>
