<script setup>
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
import NavHeader from './components/nav-header.vue';
import livePart from './components/live-part.vue';
import CoursePart from './components/course-part.vue';
import FriendPart from './components/friend-part.vue';
import { getCourseByCate, getCourseCate } from './api/course';
import getSwiperData from './api/swiper';
import getLiveData from './api/live';
import getFriendData from './api/frend';
import 'swiper/css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/autoplay';

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual];
const onSwiper = () => {};
const onSlideChange = () => {};

const swiperList = ref(null);
const liveList = ref(null);
const cateList = ref(null);
const cateId = ref(1);
const courseList = ref(null);
const friendList = ref(null);

onMounted(() => {
  getSwiperData().then((res) => {
    swiperList.value = res.data;
  });
  getLiveData().then((res) => {
    liveList.value = res.data;
  });
  getCourseCate().then((res) => {
    cateList.value = res.data;
  });
  getCourseByCate(cateId.value).then((res) => {
    courseList.value = res.data;
  });
  getFriendData().then((res) => {
    friendList.value = res.data;
  });
});

const handleChangeCate = (id) => {
  cateId.value = id;
  getCourseByCate(cateId.value).then((res) => {
    courseList.value = res.data;
  });
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
      @swiper="onSwiper"
      @slideChange="onSlideChange"
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
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  .swiper-img {
    width: 100%;
  }
}
</style>
