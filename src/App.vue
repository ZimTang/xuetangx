<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Virtual,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/autoplay';

import NavHeader from './components/common/nav-header/nav-header.vue';
import livePart, { LiveItem } from './components/live-part/live-part.vue';
import CoursePart, { CateItem } from './components/course-part/course-part.vue';
import FriendPart, {
  FriendItem,
} from './components/friend-part/friend-part.vue';
import FooterPart from './components/footer-part/footer-part.vue';
import getSwiperData from './api/swiper';
import getLiveData from './api/live';
import { getCourseByCate, getCourseCate } from './api/course';
import getFriendData from './api/friend';

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual];
const swiperList = ref([]);
const liveList = ref<LiveItem[]>([]);
const cateList = ref<CateItem[]>([]);
const cateId = ref(1);
const courseList = ref([]);
const friendList = ref<FriendItem[]>([]);

onMounted(async () => {
  swiperList.value = (await getSwiperData()).data;
  liveList.value = (await getLiveData()).data;
  cateList.value = (await getCourseCate()).data;
  courseList.value = (await getCourseByCate(cateId.value)).data;
  friendList.value = (await getFriendData()).data;
});

// 改变分类
const handleChangeCate = async (id: number) => {
  cateId.value = id;
  courseList.value = (await getCourseByCate(cateId.value)).data;
};
</script>

<template>
  <div class="app-container">
    <nav-header />
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      autoplay
      navigation
      virtual
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: false }"
    >
      <swiper-slide v-for="swiper in swiperList" :key="swiper">
        <img :src="swiper" alt="" class="swiper-img" />
      </swiper-slide>
    </swiper>
    <live-part :live-list="liveList" />
    <course-part
      :cate-list="cateList"
      :cate-id="cateId"
      :course-list="courseList"
      @change-cate="handleChangeCate"
    />
    <friend-part :friend-list="friendList" />
    <footer-part />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  .swiper-img {
    width: 100%;
  }
}
</style>
