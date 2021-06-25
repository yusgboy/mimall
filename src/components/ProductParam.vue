<template>
  <div class="nav-bar" :class="{ fixed: isFixed }">
    <div class="container clearfix">
      <div class="pro-title">{{title}}</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>
        <span>|</span>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  props:{
    title:String
  },
  data() {
    return {
      isFixed: false,
    };
  },
  components: {},
  mounted() {
    window.addEventListener('scroll', this.initHeight);
  },
  methods: {
    initHeight() {
      let scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      this.isFixed = scrollTop > 140 ? true : false;
    },
  },
  destroyed(){
    window.removeEventListener('scroll',this.initHeight,false);
  }
};
</script>

<style lang="scss">
.nav-bar {
  position: relative;
  height: 63px;
  width: 100%;
  margin-top: 0;
  color: #616161;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
  z-index: 9;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
  &.fixed {
    position: fixed;
    top: 0;
  }
  .pro-title {
    font-size: 18px;
    font-weight: 400;
    line-height: 60px;
    color: #424242;
    float: left;
  }
  .pro-param {
    float: right;
    margin: 17px 0 0 0;
    font-size: 14px;
    a {
      color: #616161;
    }
    span {
      color: #e0e0e0;
      margin: 0.5em;
    }
  }
}
</style>
