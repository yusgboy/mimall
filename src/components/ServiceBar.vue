<template>
<div class="footer-service">
        <ul>
          <li>
            <a href="https://www.mi.com/service/quick-repair"><em class="iconfont icon-weixiu"></em>预约维修服务</a>
          </li>
          <li>
            <a href="https://www.mi.com/service/exchange#back"><em class="iconfont icon-7tiantuihuanhuo"></em>7天无理由退货</a>
          </li>
          <li>
            <a href="https://www.mi.com/service/exchange#back"><em class="iconfont icon-15tianwuliyoutuihuo"></em>15天免费换货</a>
          </li>
          <li>
            <a href="https://www.mi.com/service/buy/Postal%20policy"><em class="iconfont icon-liwu"></em>满69包邮</a>
          </li>
          <li>
            <a href="https://www.mi.com/service/sitelist"><em class="iconfont icon-wangdianchaxun"></em>520余家售后网点</a>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss">
.footer-service{
      padding: 27px 0;
      border-bottom: 1px solid #e0e0e0;
      ul{
        li:last-child{
          border-right: 0;
        }
        li{
          width: 19.8%;
          display: inline-block;
          height: 25px;
          line-height: 25px;
          text-align: center;
          font-size: 16px;
          border-right: 1px solid #e0e0e0;
          a{
            color: #616161;
          }
        }
      }
    }
</style>
