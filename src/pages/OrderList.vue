<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <img v-lazy="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.totalPrice + 'X' + item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
          <el-pagination
          class="pagination"
            background
            layout="prev,pager,next"
            :total="total"
            :pageSize="pageSize"
            @current-change="handleChange"
            v-if="list.length"
          >
            
          </el-pagination>
          <div class="load-more" v-if="false">
              <el-button
              type="primary"
              :loading="loading"
              @click="loadMore"

              >加载更多</el-button>
          </div>
          <div class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="true"
            infinite-scroll-distance="684"
            v-if="false"
          >
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
          </div>
          <no-data v-if="!loading && list.length==0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
import NoData from '../components/NoData.vue'
import {Pagination,Button} from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'
export default {
  data() {
    return {
      list:[],
      loading:false,
      pageSize:10,
      pageNum:1,
      total:0,
      // busy:false,
      hasNextPage:true
    }
  },
  components: {
Loading,
NoData,
[Pagination.name]:Pagination,
[Button.name]:Button
  },
  mounted(){
    this.getOrderList();
  },
  directives:{
    infiniteScroll
  },
  methods: {
    getOrderList() {
      this.loading=true;
      // this.busy=true;
      this.$axios.get('/orders',{
        params:{
          pageSize:10,
          pageNum:this.pageNum
        }
      }).then(res=>{
        this.loading=false;
        this.list=this.list.concat(res.list);
        this.total=res.total;
        this.hasNextPage=res.hasNextPage?true:false;
        // this.busy=false;
      }).catch(()=>{
        this.loading=false;
      })
    },
    goPay(orderNo){
      this.$router.push({
        path:'/order/pay',
        query:{
          orderNo
        }
      })
    },
    //分页器
    handleChange(pageNum){
        this.pageNum=pageNum;
        this.getOrderList();
    },
    //第二种 加载更多
    loadMore(){
      this.pageNum++;
      this.getOrderList();
    },
    //第三种 滚动加载
    scrollMore(){
      this.getList();
    },
    //给scrollMore使用
    getList(){
      this.loading=true;
      this.$axios.get('/orders',{
        params:{
          pageSize:10,
          pageNum:this.pageNum
        }
      }).then(res=>{
        this.loading=false;
        this.list=this.list.concat(res.list);
        if(res.hasNextPage){
          this.busy=false;
        }else{
          this.busy=true;
        }
      })
    }
  },

}
</script>

<style lang="scss">
 @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          border: 1px solid #d7d7d7;
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            height: 74px;
            line-height: 74px;
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
             height: 145px;
             line-height: 145px;
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:center;
        }
        // .el-pagination.is-background .el-pager li:not(.disabled).active{
        //   background-color: #FF6600;
        // }
        // .el-button--primary{
        //   background-color: #FF6600;
        //   border-color: #FF6600;
        // }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>
