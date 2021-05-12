<template>
  <div class="index">
    <div class="swiper-box">
      <div class="container" @mouseenter="swiperStop" @mouseleave="swiperStart">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href=""
                >手机 电话卡<em class="iconfont icon-previewright"></em
              ></a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, i) in item" :key="i">
                    <a :href="sub.id ? '/#/product/' + sub.id : ''">
                      <img
                        :src="sub ? sub.img : '/imgs/item-box-1.png'"
                        alt=""
                      />
                      <span>{{ sub ? sub.name : "小米9" }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href=""
                >电视 盒子<em class="iconfont icon-previewright"></em
              ></a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href=""
                >笔记本 显示器<em class="iconfont icon-previewright"></em
              ></a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href=""
                >家电 插线板<em class="iconfont icon-previewright"></em
              ></a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href=""
                >出行 穿戴<em class="iconfont icon-previewright"></em
              ></a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href=""
                >智能 路由器<em class="iconfont icon-previewright"></em
              ></a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href=""
                >电源 配件<em class="iconfont icon-previewright"></em
              ></a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href=""
                >健康 儿童<em class="iconfont icon-previewright"></em
              ></a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href=""
                >耳机 音响<em class="iconfont icon-previewright"></em
              ></a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href=""
                >生活 箱包<em class="iconfont icon-previewright"></em
              ></a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions" ref="mySwiper">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id"
              ><img :src="item.img" alt=""
            /></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button"></div>
          <div class="swiper-button-next swiper-button"></div>
        </swiper>
      </div>
    </div>
    <div class="container">
      <div class="ads-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="(item, index) in adsList"
          :key="index"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <div class="box-hd">
          <h2 class="title">手机</h2>
          <div class="more">
            <a href="" class="more-link">
              查看更多
              <i class="iconfont icon-previewright"></i>
            </a>
          </div>
        </div>
        <div class="box-bd">
          <div class="wrapper">
            <div class="banner-left">
              <a href="/#/product/35">
                <img
                  src="/imgs/mix-alpha.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="list-box">
              <ul>
                <li v-for="(item,index) in phoneList" :key="index">
                    <span :class="{'new-pro':index%2===0}">新品</span>
                    <div>
                      <img
                        v-lazy="item.mainImage"
                        alt=""
                      />
                    </div>
                    <h3 class="title">{{item.name}}</h3>
                    <p class="desc">{{item.subtitle}}</p>
                    <p class="price iconfont icon-cart" @click="addCart(item.id)">{{item.price}}元起</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal 
      title="'提示'"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="goToCart"
      @cancel="showModal=false"
      >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
      </modal>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Modal from '../components/Modal'
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        effect: "fade",
        autoplay: true,
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G+专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      phoneList:[
        {

        }
      ],
      showModal:false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Modal
  },
 
 computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    swiperStop() {
      this.swiper.autoplay.stop();
    },
    swiperStart() {
      this.swiper.autoplay.start();
    },
    init(){
      this.$axios.get('/products',{
        params:{
          categoryId:100012,
          pageSize:14
        }
      }).then(res=>{
        this.phoneList=res.list.slice(6);
      })
    },
    addCart(){
      this.showModal=true;
      return
      // this.$axios.post('/carts',{
      //   productId:id,
      //   selected:true
      // }).then(res=>{
      //   console.log(res)
      // }).catch(()=>{
      //   this.showModal=true;
      // })
    },
    goToCart(){
      this.$router.push('/cart');
    }
  },
};
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/mixin.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      z-index: 9;
      height: 420px;
      border: 0;
      color: #fff;
      background: rgba(105, 101, 101, 0.6);
      padding: 20px 0;
      width: 234px;
      font-size: 14px;
      .menu-wrap {
        .menu-item {
          height: 42px;
          line-height: 42px;
          &:hover {
            color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 992px;
            position: absolute;
            height: 458px;
            left: 234px;
            top: 0;
            border: 1px solid #e0e0e0;
            border-left: 0;
            background: #fff;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.18);
            > ul {
              height: 76px;
              > li {
                width: 248px;
                display: inline-block;
                padding: 18px 20px;
                box-sizing: border-box;
                > a {
                  line-height: 40px;
                  height: 40px;
                  display: block;
                  color: #333;
                  img {
                    width: 40px;
                    height: 40px;
                    margin-right: 12px;
                    display: inline-block;
                    vertical-align: middle;
                  }
                  span {
                    display: inline-block;
                    vertical-align: middle;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    line-height: 40px;
                  }
                }
              }
            }
          }
          > a {
            padding-left: 30px;
            color: #fff;
            display: block;
            position: relative;
            em {
              position: absolute;
              right: 20px;
              color: #e0e0e0;
              font-weight: bold;
            }
            &:hover {
              background: $colorA;
            }
          }
        }
      }
    }
    .swiper-container {
      height: 460px;
      .swiper-slide {
        img {
          width: 100%;
        }
      }
      .swiper-button::after {
        content: "";
      }
      .swiper-button {
        width: 41px;
        height: 69px;
      }
      .swiper-button-prev {
        background: url("https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png")
          no-repeat -84px 50%;
        left: 234px;
      }
      .swiper-button-prev:hover {
        background-position: 0;
      }
      .swiper-button-next {
        background: url("https://i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png")
          no-repeat -125px 50%;
        right: 0;
      }
      .swiper-button-next:hover {
        background-position: -42px;
      }
      .swiper-pagination {
        text-align: right;
        width: 400px;
        right: 30px;
        left: auto;
        bottom: 20px;
        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          border: 2px solid #fff;
          border-color: hsla(0, 0%, 100%, 0.3);
          border-radius: 10px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.4);
          opacity: 1;
        }
        .swiper-pagination-bullet-active,
        .swiper-pagination-bullet:hover {
          background: hsla(0, 0%, 100%, 0.4);
          border-color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
  .ads-box {
    @include flex();
    margin: 14px auto 26px;
    > a {
      width: 296px;
      height: 167px;
      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      }
    }
  }
  .banner {
    height: 120px;
    margin: 22px 0;
    overflow: hidden;
  }
  .product-box {
    background: #f5f5f5;
            padding: 0 0 50px;
    .box-hd {
      position: relative;
      height: 58px;
      .title {
        margin: 0;
        font-size: 22px;
        font-weight: 200;
        line-height: 58px;
        color: #333;
      }
      .more {
        position: absolute;
        top: 0;
        right: 0;
        .more-link {
          font-size: 16px;
          line-height: 58px;
          color: #424242;
          -webkit-transition: all 0.4s;
          transition: all 0.4s;
          &:hover {
            color: $colorA;
            > .iconfont {
              background: $colorA;
            }
          }
          > .iconfont {
            width: 12px;
            height: 12px;
            padding: 4px;
            margin-left: 8px;
            border-radius: 16px;
            font-size: 12px;
            line-height: 12px;
            background: #b0b0b0;
            color: #fff;
            vertical-align: 1px;
            transition: all 0.4s;
          }
        }
      }
    }
    .box-bd {
      .wrapper {
        .banner-left {
          width: 234px;
          height: 614px;
          display: inline-block;
          transition: all 0.2s linear;
          vertical-align: top;
          &:hover{
                box-shadow: 0 15px 30px rgba(0,0,0,.1);
              transform: translate3d(0,-2px,0);
              }
          > a {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .list-box {
          display: inline-block;
          width: 992px;
          height: 614px;
          vertical-align: top;
          ul {
            display: inline-block;
            li {
              position: relative;
              display: inline-block;
              width: 234px;
              height: 260px;
              padding: 20px 0;
              margin-left: 14px;
              margin-bottom: 14px;
              background: #fff;
              transition: all 0.2s linear;
              &:hover{
                box-shadow: 0 15px 30px rgba(0,0,0,.1);
              transform: translate3d(0,-2px,0);
              }
                >span{
                  position: absolute;
                  top: 0;
                  left: 50%;
                  transform: translate(-50%);
                  width: 67px;
                  height: 24px;
                  line-height: 24px;
                  font-size: 14px;
                  color: #fff;
                  text-align: center;
                  &.new-pro{
                    background-color: #7ecf68;
                  }
                  &.kill-pro{
                    background-color: #e82626;
                  }
                }
                div {
                  width: 160px;
                    height: 160px;
                  margin: 0 auto 18px;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .title,
                .desc {
                  text-align: center;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                }
                .title {
                  margin: 0 10px 2px;
                  font-size: 14px;
                  font-weight: 400;
                  color: #333;
                }
                .desc {
                  margin: 0 10px 10px;
                  height: 18px;
                  font-size: 12px;
                  color: #b0b0b0;
                }
                .price {
                  margin: 0 10px 14px;
                  text-align: center;
                  color: #ff6700;
                  font-size: 14px;
                  cursor: pointer;
                }
            }
          }
        }
      }
    }
  }
}
</style>
