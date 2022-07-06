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
      <svg
        t="1657074424363"
        class="icon search-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1328"
        width="10"
        height="10"
      >
        <path
          d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z"
          p-id="1329"
        ></path>
      </svg>
    </div>
    <div class="user">
      <div>
        <svg
          t="1657074842380"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2368"
          width="18"
          height="18"
        >
          <path
            d="M704 128v768H320V128h384m0-64H320c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h384c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64zM272 192v64h480v-64H272z m0 576h480v-64H272v64z m176 96h128v-64H448v64z"
            p-id="2369"
          ></path>
        </svg>
      </div>
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
  height: 5rem;
  align-items: center;
  .logo img {
    width: 13.5rem;
  }
  .link-list {
    padding: 0 2rem;
    width: 60%;
    box-sizing: border-box;
    font-size: 1.3rem;
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
    position: relative;
    .search-icon {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-50%);
    }
    input {
      font-size: 1.3rem;
      border: 1px solid #eee;
      color: rgb(167, 167, 167);
      height: 2rem;
      padding-left: 1rem;
      outline: none;
    }
  }
  .user {
    display: flex;
    font-size: 1.3rem;
    div {
      margin-right: 1rem;
    }
  }
}
</style>
