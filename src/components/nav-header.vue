<script setup></script>

<template>
  <div class="nav-header">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="" />
    </div>
    <div class="link-list">
      <div class="item active">
        <a href="#">首页</a>
      </div>
      <div class="item">
        <a href="#">全部课程</a>
      </div>
      <div class="item">
        <a href="#">合作院校</a>
      </div>
      <div class="item">
        <a href="#">同等学力</a>
      </div>
      <div class="item">
        <a href="#">训练营</a>
      </div>
      <div class="item">
        <a href="#">雨课堂</a>
      </div>
      <div class="item">
        <a href="#">企业服务</a>
      </div>
      <div class="item">
        <a href="#">教师发展</a>
      </div>
      <div class="item">
        <a href="#">高职课堂</a>
      </div>
      <div class="item">
        <a href="#">更多</a>
      </div>
    </div>
    <div class="search">
      <input type="text" placeholder="大数据" />
    </div>
    <div class="user">
      <div class="signin">登录</div>
      <div class="signup">注册</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-header {
  padding: 1rem 3rem;
  width: 90%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  .logo img {
    width: 13.5rem;
  }
  .link-list {
    width: 50%;
    box-sizing: border-box;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-around;
    .item {
      a {
        color: black;
      }
      margin-right: 1rem;
    }
    .active {
      a {
        color: #1769fe;
      }
      border-bottom: 2px solid #1769fe;
    }
  }
  .search {
    input {
      border: 1px solid #eee;
      color: rgb(167, 167, 167);
      height: 2rem;
      padding-left: 0.5rem;
      outline: none;
    }
  }
  .user {
    display: flex;
    font-size: 1.4rem;
    div {
      margin-right: 1rem;
    }
  }
}
</style>
