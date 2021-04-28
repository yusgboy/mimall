<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="">小米商城</a>
          <span class="sep">|</span>
          <a href="">MIUI</a>
          <span class="sep">|</span>
          <a href="">LoT</a>
        </div>
        <div class="topbar-user">
          <span v-if="userName">{{userName}}</span>
          <span v-if="!userName" @click="login">登录</span>
          <span class="sep">|</span>
          <span>我的订单</span>
          <span class="sep">|</span>
          <span class="my-cart" @click="goToCart"><span class="iconfont-cart"></span>购物车</span>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index.html">

          </a>
        </div>
        <div class="header-nav">
          <ul>
            <li>
              <a href="">小米手机</a>
              <div class="children">
                <ul>
                  <li class="product" v-for="(item,index) in phoneList" :key="index">
                    <a :href="'/#/product/'+item.id" target="_blank">
                      <div class="pro-img">
                        <img :src="item.mainImage" :alt="item.subtitle">
                      </div>
                      <div class="pro-name">{{item.name}}</div>
                      <div class="pro-price">{{item.price|currency}}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">Redmi手机</a>
              <div class="children">
                <ul>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="">小米电视</a>
              <div class="children">
                <ul>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="header-search">
          <form action="">
            <input type="text">
            <input type="submit" value="">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneList:[],
      userName:'',
    };
  },
  components: {},
  filters:{
    currency(val){
      if(!val)return '0.00';
      return val.toFixed(2)+'元';
    }
  },
  methods:{
    login(){
      this.$router.push('/login')
    },
    getProductList(){
      this.$axios.get('/products',{
        params:{
          categoryId:'100012',

        }
      }).then(res=>{
        if(res.list.length>6){
          this.phoneList=res.list.slice(0,6);
        }
      })
    },
    goToCart(){
      this.$router.push('/cart')
    }
  },
  mounted(){
    this.getProductList();
  }
};
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.header {
  .nav-topbar {
    height: 40px;
    line-height: 40px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      .topbar-menu{
        a{
        display: inline-block;
        color: #b0b0b0;
      }
      .sep{
        margin: 0 .3em;
        color: #424242;
      }
      }
      .topbar-user{
        span{
          display: inline-block;
          padding: 0px 5px;
        }
        .sep{
          padding: 0;
          color: #424242;
        }
        .my-cart{
          width: 120px;
          padding: 0;
          text-align: center;
          background-color: #FF7600;
          color: #FFF;
          .iconfont-cart{
            width: 16px;
            height: 12px;
            background: url('../../public/imgs/icon-cart-checked.png') no-repeat center;
            background-size: contain;
            margin-right: 4px;
            vertical-align: -1px;
            padding: 0;
          }
        }
      }
    }
  }
  .nav-header{
    .container{
      height: 100px;
      line-height: 100px;
      @include flex(flex-start);
      position: relative;
      .header-logo{
        display: inline-block;
        width: 62px;
        height: 56px;
        a{
          display: inline-block;
          width: 56px;
          height: 56px;
          &::before{
            background: url('https://s02.mifile.cn/assets/static/image/logo-mi2.png') no-repeat center;
            content: '';
            display: inline-block;
            background-size: 56px;
            width: 56px;
            height: 56px;
          }
        }
      }
      .header-nav{
        font-size: 16px;
        padding-left: 172px;
        ul{
          li{
            display: inline-block;
            &:hover{
              .children{
                height: 229px;
                opacity: 1;
              }
              >a{
                color: $colorA;
              }
            }
            a{
              color: #333333;
              padding: 0px 10px;
              cursor: pointer;
            }
            .children{
              height: 0px;
              opacity: 0;
              position: absolute;
              top: 100px;
              left: 0;
              width: 1226px;
              box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
              border-top: 1px solid #e5e5e5;
              transition: height .5s;
              overflow: hidden;
              ul{
                height: 229px;
                .product{
                  width: 180px;
                  height: 194px;
                  font-size: 12px;
                  line-height: 20px;
                  text-align: center;
                  padding: 35px 12px 0px;
                  a{
                    display: inline-block;
                    color: #333;
                    width: 180px;
                    height: 229px;
                    padding: 0;
                    div{
                      height: 20px;
                    }
                    .pro-img{
                      width: 160px;
                      height: 110px;
                      margin: 0;
                      margin: 0px auto 16px;
                      img{
                        width: 160px;
                        height: 110px;
                      }
                    }
                    .pro-price{
                      color: $colorA;
                    }
                  }
                  &::before{
                    content:'';
                    position: absolute;
                    top: 35px;
                    width: 1px;
                    height: 100px;
                    display: inline-block;
                    background-color: #e0e0e0;
                  }
                  &:first-child::before{
                    display: none;
                  }
                }
              }
            }
          }
        }
      }
      .header-search{
        position: absolute;
        right: 0;
            form{
              display: flex;
              align-items: center;
              input:nth-child(1){
                width: 223px;
                height: 48px;
                padding: 0 10px;
                font-size: 14px;
                line-height: 48px;
                border: 1px solid #e0e0e0;
              }
              input:nth-child(2){
                width: 52px;
                height: 50px;
                font-size: 24px;
                line-height: 24px;
                background: #fff;
                color: #616161;
                border: 1px solid #e0e0e0;
                outline: none;
                border-left: none;
                background: url('../../public/imgs/icon-search.png') no-repeat center;
                background-size: 18px;
              }
            }
      }
    }
  }
}
</style>
