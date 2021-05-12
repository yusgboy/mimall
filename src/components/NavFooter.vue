<template>
  <div class="footer">
    <div class="container">
      <service-bar></service-bar>
      <div class="footer-links">
        <dl>
          <dt>帮助中心</dt>
          <dd><a href="https://www.mi.com/service/account/Account%20registration/">账户管理</a></dd>
          <dd><a href="https://www.mi.com/service/buy/SalesTime/">购物指南</a></dd>
          <dd><a href="https://www.mi.com/service/order/sendprogress/">订单操作</a></dd>
        </dl>
        <dl>
          <dt>服务支持</dt>
          <dd><a href="https://www.mi.com/service/exchange">售后政策</a></dd>
          <dd><a href="https://www.mi.com/service/">自助服务</a></dd>
          <dd><a href="https://www.mi.com/service/download/">相关下载</a></dd>
        </dl>
        <dl>
          <dt>线下门店</dt>
          <dd><a href="https://www.mi.com/service/mihome/list">小米之家</a></dd>
          <dd><a href="https://www.mi.com/service/sitelist">服务网点</a></dd>
          <dd><a href="https://www.mi.com/service/family-location">授权体验店</a></dd>
        </dl>
        <dl>
          <dt>关于小米</dt>
          <dd><a href="https://www.mi.com/about/">了解小米</a></dd>
          <dd><a href="https://hr.xiaomi.com/">加入小米</a></dd>
          <dd><a href="https://company.mi.com/zh-cn/ir/indexContent/index.html">投资者关系</a></dd>
          <dd><a href="https://www.mi.com/csr/">企业社会责任</a></dd>
          <dd><a href="https://www.mi.com/integrity">廉洁举报</a></dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><a href="https://weibo.com/xiaomishangcheng">新浪微博</a></dd>
          <dd><a href="javascript:void(0)">官方微信</a></dd>
          <dd><a href="https://www.mi.com/about/contact/">联系我们</a></dd>
          <dd><a href="https://www.mi.com/foundation/index">公益基金会</a></dd>
        </dl>
        <dl>
          <dt>特色服务</dt>
          <dd><a href="https://www.mi.com/order/fcode">F码通道</a></dd>
          <dd><a href="https://www.mi.com/order/giftcode">礼物码</a></dd>
          <dd><a href="https://www.mi.com/service/imei">防伪查询</a></dd>
        </dl>
        <div class="contact">
          <p class="phone">400-100-5678</p>
          <p>8:00-18:00（仅收市话费）</p>
          <a href="">
            <em class="iconfont icon-message"></em>
             人工客服 
          </a>
          <div class="follow">
            关注小米：
            <a href="https://weibo.com/xiaomishangcheng" class="iconfont icon-weibo"></a>
            <a href="" class="iconfont icon-weixin" @mouseover="wechatShow" @mouseout="wechatShow"></a>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/wx-img.png" alt="" v-show="isShow">
          </div>
        </div>
      </div>
    </div>
    <div class="footer-info">
      <div class="container">
        <div class="logo ir"></div>
        <div class="info-text">
          <p>
            <a href="">小米商城</a>
            <span class="sep">|</span>
            <a href="">MIUI</a>
            <span class="sep">|</span>
            <a href="">米家</a>
            <span class="sep">|</span>
            <a href="">米聊</a>
            <span class="sep">|</span>
            <a href="">多看</a>
            <span class="sep">|</span>
            <a href="">游戏</a>
            <span class="sep">|</span>
            <a href="">政企服务</a>
            <span class="sep">|</span>
            <a href="">小米天猫店</a>
            <span class="sep">|</span>
            <a href="">小米集团隐私政策</a>
            <span class="sep">|</span>
            <a href="">小米公司儿童信息保护规则</a>
            <span class="sep">|</span>
            <a href="">小米商城用户协议</a>
            <span class="sep">|</span>
            <a href="">问题反馈</a>
          </p>
          <p>
            <a href="">北京互联网法院法律服务工作站</a>
            <span class="sep">|</span>
            <a href="">中国消费者协会</a>
            <span class="sep">|</span>
            <a href="">北京市消费协会</a>
          </p>
          <p>
            &copy;
            <a href="">mi.com</a>
            京ICP证110507号
            <a href="">京ICP备10046444号</a>
            <a href="">京公网安备11010802020134号</a>
            <a href="">京网文[2020]0276-042号</a>
            <br/>
            <a href="">（京）网械平台备字（2018）第00005号</a>
            <a href="">互联网药品信息服务资格证 (京)-非经营性-2014-0090</a>
            <a href="">营业执照</a>
            <a href="">医疗器械质量公告</a>
            <br/>
            <a href="">增值电信业务许可证</a>
             网络食品经营备案 京食药网食备202010048  
            <a href="">食品经营许可证</a>
            <br/>
              违法和不良信息举报电话：171-5104-4404 
            <a href="">知识产权侵权投诉</a>
             本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
          </p>
        </div>
        <div class="info-links">
          <a href=""><img src="https://i1.mifile.cn/f/i/17/site/truste.png" alt=""></a>
          <a href=""><img src="https://s01.mifile.cn/i/v-logo-2.png" alt=""></a>
          <a href=""><img src="https://xyt.xinchacha.com/img/icon/icon3.png" alt=""></a>
          <a href=""><img src="https://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png" alt=""></a>
          <a href=""><img src="https://cnbj1.fds.api.xiaomi.com/b2c-misite-activity/f1ee261b96ae71e845efba398efeca02.png" alt=""></a>
        </div>

      </div>
      <div class="slogan"></div>
    </div>
  </div>
</template>

<script>
import ServiceBar from './ServiceBar'
export default {
  data() {
    return {
      isShow:false
    }
  },
  components: {
ServiceBar
  },
  methods: {
    wechatShow() {
     this.isShow=!this.isShow;
    },
  },
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
.footer{
  .container{
    width: 1226px;
    margin-left: auto;
    margin-right: auto;
    .footer-links{
      padding: 40px 0;
      position: relative;
      dl{
        width: 160px;
        display: inline-block;
        vertical-align: top;
        dt{
          font-size: 14px;
          margin:0 0px 26px;
          line-height: 1.25;

        }
        dd{
          margin-top: 10px;
          a{
            color: #757575;
            &:hover{
              color: $colorA;
            }
          }
        }
      }
      .contact{
        width: 251px;
        border-left: 1px solid #e0e0e0;
        color: #616161;
        text-align: center;
        position: absolute;
        right: 0;
        top: 40px;
        p{
          margin: 0 0 5px 0;
          font-size: 12px;
        }
        .phone{
          font-size: 22px;
          line-height: 1;
          color: $colorA;
        }
        >a{
          display: inline-block;
          border: 1px solid $colorA;
          background-color: #fff;
          color: $colorA;
          text-align: center;
          cursor: pointer;
          width: 118px;
          height: 28px;
          font-size: 12px;
          line-height: 28px;
          &:hover{
            background-color: $colorA;
            color: #fff;
          }
          .iconfont{
            font-size: 12px;
          }
        }
        .follow{
          font-size: 12px;
          margin-top: 10px;
          position: relative;
          >a{
            color: #757575;
            width: 24px;
            height: 24px;
            display: inline-block;
            &:hover{
              color: $colorA;
            }
          }
          img{
            width: 126px;
            height: 126px;
            z-index: 2;
            position: absolute;
            top: 20px;
            left: 100px;
            display: block;
          }
        }
      }
    }
  }
  .footer-info{
    padding: 30px 0;
    font-size: 12px;
    background-color: #fafafa;
    .container{
      position: relative;
      .logo{
        width: 56px;
        height: 56px;
        margin-right: 10px;
        background: url('https://s02.mifile.cn/assets/static/image/logo-mi2.png') no-repeat center;
        background-size: 56px;
        position: absolute;
        top: 0;
        left: 0;
      }
      .info-text{
        padding-left: 67px;
        color: #b0b0b0;
        p{
          margin: 0;
          line-height: 18px;
          >a{
            color:#757575;
          }
          .sep{
            margin: 0 .25em;
            vertical-align: 1px;
          }
        }
        p:last-child{
          a{
            color: #b0b0b0;
          }
        }
      }
      .info-links{
        padding-left:67px;
        a{
          display: inline-block;
          img{
            height: 28px;
            width: auto;

          }
        }
      }
    }
    .slogan{
      width: 100%;
      margin: 30px auto 0;
      height: 19px;
      background: url('https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/slogan2020.png') no-repeat center 0;
    }
  }
}
</style>
