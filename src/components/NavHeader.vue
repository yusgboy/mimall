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
          <span v-if="username">{{username}}</span>
          <span v-if="!username" @click="login" style="cursor: pointer;">登录</span>
          <span v-if="username" @click="logout" style="cursor: pointer;">退出</span>
          <span class="sep">|</span>
          <span style="cursor: pointer;" @click="goOrderList">我的订单</span>
          <span class="sep">|</span>
          <span class="my-cart" @click="goToCart" style="cursor: pointer;"><span class="iconfont-cart"></span>购物车({{cartCount}})</span>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index">
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
                        <img v-lazy="item.mainImage" :alt="item.subtitle">
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
                        <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="">
                      </div>
                      <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                       <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                    </a>
                  </li>
                  <li class="product">
                    <a href="" target="_blank">
                      <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
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
import {mapState} from 'vuex';
import {Message} from 'element-ui'
export default {
  data() {
    return {
      phoneList:[],
    };
  },
  components: {},
  computed:{
    ...mapState(['username','cartCount'])
  },
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
    },
        getCartCount(){
      this.$axios.get('/carts/products/sum').then((res=0)=>{
        this.$store.dispatch('getCartCount',res);
      })
    },
    logout(){
      this.$axios.post('/user/logout').then(()=>{
        Message.success('退出成功');
        this.$cookies.set('userId','',{expires:'-1'});
        this.$store.dispatch('saveUserName','');
        this.$store.dispatch('getCartCount',0);
      });

    },
    goOrderList(){
      this.$router.push({
        path:'/order/list'
      })
    }
  },
  mounted(){
    this.getProductList();
    let params = this.$route.params;
    if(params&&params.from=='login'){
      this.getCartCount();
    }
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
      .header-nav{
        font-size: 16px;
        padding-left: 172px;
        ul{
          li{
            display: inline-block;
            &:nth-child(2n-1):hover{
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
              background-color: #ffffff;
              z-index: 10;
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
                    top: 40px;
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
