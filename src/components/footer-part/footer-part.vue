<script setup></script>

<template>
  <div class="footer-container">
    <div class="left">
      <div class="top">
        <div class="lang">中文</div>
        <div class="item">招募教师</div>
        <div class="item">关于我们</div>
        <div class="item">联系我们</div>
        <div class="item">招兵买马</div>
        <div class="item">服务协议和隐私政策</div>
        <div class="item">帮助与反馈</div>
        <div class="item">侵权与投诉</div>
      </div>
      <div class="middle">
        <div class="title">创新教育 改变世界</div>
        <div class="desc">New Education, New World</div>
      </div>
      <div class="bottom">
        <div>
          Copyright 2013-2022 北京慕华信息科技有限公司 京ICP备14019655号 |
          京公网安备 11010802033054号
          广播电视节目制作经营许可证（京）字第05791号
        </div>
        <div>地址：北京市海淀区清华科技园科建大厦7层</div>
      </div>
    </div>
    <div class="right">
      <div>
        <img
          src="https://storagecdn.xuetangx.com/public_assets/xuetangx/xuetangX2018/76e93bdd5f6f357e58ab16c0a4433abb.qrcode.png"
          alt=""
        />
      </div>
      <div>学堂微信客服</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  color: #a8a8a8;
  background-color: #282c2f;
  padding: 3rem 10rem;
  .left {
    .top {
      display: flex;
      margin-bottom: 2rem;
      > div {
        font-size: 1.3rem;
        margin-right: 2rem;
      }
    }
    .middle {
      margin-bottom: 2rem;
      .title {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      .desc {
        font-size: 1.3rem;
      }
    }
    .bottom {
      > div {
        margin-bottom: 1rem;
      }
    }
  }
  .right {
    img {
      width: 10rem;
    }
    text-align: center;
    > div {
      margin-bottom: 1rem;
    }
  }
}
</style>
