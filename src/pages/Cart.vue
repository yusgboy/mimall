<template>
  <div>
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </order-header>
    <div class="cart-wrapper">
          <div class="container">
      <div class="cart-goods-list">
        <div class="list-head">
          <div class="col col-check">
            <i class="icon-checkbox iconfont icon-iconfontcheck" :class="{'icon-checkbox-selected':allChecked}" @click="toggleAll"></i>
            全选
          </div>
          <div class="col col-img">&nbsp;</div>
          <div class="col col-name">商品名称</div>
          <div class="col col-price">单价</div>
          <div class="col col-num">数量</div>
          <div class="col col-total">小计</div>
          <div class="col col-action">操作</div>
        </div>
        <div class="list-body">
          <div class="list-item" v-for="(item,index) in list" :key="index">
            <div class="item-box">
              <div class="item-table">
                <div class="item-row">
                  <div class="col col-check">
                    <i @click="updateCart(item)" class="icon-checkbox iconfont icon-iconfontcheck" :class="{'icon-checkbox-selected':item.productSelected}"></i>
                  </div>
                  <div class="col col-img">
                    <img
                      v-lazy="item.productMainImage"
                      width="80"
                      height="80"
                      alt=""
                    />
                  </div>
                  <div class="col col-name">
                    <h3 class="name">{{item.productName}}</h3>
                  </div>
                  <div class="col col-price">{{item.productPrice}}元</div>
                  <div class="col col-num">
                    <div class="change-goods-num">
                      <a href="javascript:;" @click="updateCart(item,'-')">
                        <i class="iconfont icon-jiansvg"></i>
                      </a>
                      <input type="text" :value="item.quantity"/>
                      <a href="javascript:;" @click="updateCart(item,'+')">
                        <i class="iconfont icon-jia"></i>
                      </a>
                    </div>
                  </div>
                  <div class="col col-total">{{item.productTotalPrice}}</div>
                  <div class="col col-action">
                    <a href="javascript:;" title="删除" class="del">
                      <i class="iconfont icon-guanbi" @click="isDel(item)"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-bar">
        <div class="section-left">
          <a href="" class="back-shopping">继续购物</a>
          <span class="cart-total">共<i>{{list.length}}</i>件商品，已选择<i>{{checkedNum}}</i>件</span>
        </div>
        <span class="total-price">
          合计：<em>{{cartTotalPrice}}</em>元
          <a href="javascript:;" @click="order" class="btn btn-large">去结算</a>
        </span>
      </div>
    </div>
    </div>
    <nav-footer></nav-footer>
    <modal :showModal="showModal"
    :modalType="'middle'"
    :btnType="'3'"
    :sureText="'删除'"
    :cancelText="'取消'"
    @submit="delProduct(item)"
    @cancel="showModal=false">
    <template v-slot:body>
      <p>确定删除吗？</p>
      </template></modal>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader";
import NavFooter from "../components/NavFooter";
import Modal from "../components/Modal.vue";
import { Message } from 'element-ui';
export default {
  data() {
    return {
      item:{},
      list:[],//商品列表
      allChecked:false,//是否全选
      cartTotalPrice:0,//商品总金额
      checkedNum:0,//选中商品数量
      showModal:false
    };
  },
  components: {
    OrderHeader,
    NavFooter,
    Modal
  },
  mounted(){
    this.getCartList();
  },
  methods:{
    getCartList(){
      this.$axios.get('/carts').then((res)=>{
        this.renderData(res);
      })
    },
    toggleAll(){
      let url=this.allChecked?'/carts/unSelectAll':'/carts/selectAll';
      this.$axios.put(url).then((res)=>{
        this.renderData(res);
      })
    },
    updateCart(item,type){
      let quantity=item.quantity,
          selected=item.productSelected;
      if(type=='-'){
        if(quantity==1){
          Message.warning('商品至少保留一件');
          return
        }
        --quantity;
      }else if(type=="+"){
        if(quantity>item.productStock){
          Message.warning('购买数量不能超过库存数量');
          return
        }
        ++quantity;
      }else{
        selected=!item.productSelected;
      }
      this.$axios.put(`/carts/${item.productId}`,{
        quantity,
        selected
      }).then((res)=>{
        this.renderData(res);
      })
    },
    delProduct(item){
      let id=item.productId;
      this.$axios.delete(`/carts/${id}`).then(res=>{
        this.renderData(res);
      })
      this.showModal=false;
            Message.success('删除成功');
    },
    isDel(item){
      this.item=item;
      this.showModal=true;
    },
    order(){
      let isCheck=this.list.every(item=>!item.productSelected);
      if(isCheck){
        Message.warning('请选择一件商品');
      }else{
        this.$router.push('/order/confirm');
      }
    },
    renderData(res){
this.list=res.cartProductVoList||[];
        this.allChecked=res.selectedAll;
        this.cartTotalPrice=res.cartTotalPrice;
        this.checkedNum=this.list.filter(item=>item.productSelected).length;
    }
  }
};
</script>

<style lang="scss">
.cart-wrapper{
  background: #e5e5e5;
  padding-top: 38px;
  padding-bottom: 38px;
  .cart-goods-list {
  background: #fff;
  font-size: 14px;
  .icon-checkbox {
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    border: 1px solid #e0e0e0;
    margin-left: 24px;
    background-color: #fff;
    color: #fff;
    font-size: 20px;
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
    position: relative;
    top: -1px;
    cursor: pointer;
  }
  .icon-checkbox-selected {
    color: #fff;
    border-color: #ff6700;
    background-color: #ff6700;
  }
  .col-check {
    width: 110px;
  }
  .col-img {
    width: 120px;
    height: 100%;
  }
  .col-name {
    width: 380px;
  }
  .col-price {
    width: 140px;
    padding-right: 18px;
    text-align: center;
    color: #424242;
  }
  .col-num {
    width: 150px;
    text-align: center;
    color: #424242;
  }
  .col-total {
    width: 120px;
    padding-right: 81px;
    text-align: right;
  }
  .col-action {
    width: 80px;
    text-align: center;
  }
  .list-head {
    height: 70px;
    line-height: 70px;
    padding-right: 26px;
    color: #424242;
    .col {
      float: left;
    }
    .col-check {
      .icon-checkbox {
        margin-right: 15px;
      }
    }
  }
  .list-body {
    .list-item {
      .item-box {
        padding: 15px 26px 15px 0;
        border-top: 1px solid #e0e0e0;
        .item-table {
          display: table;
          border-collapse: collapse;
          border-spacing: 0;
          .item-row {
            display: table-row;
            .col {
              display: table-cell;
              vertical-align: middle;
            }
            .col-img {
              width: 80px;
              height: 80px;
              padding-right: 40px;
              overflow: hidden;
            }
            .col-name {
              .name {
                line-height: 1;
                margin-top: 8px;
                margin-bottom: 8px;
                font-size: 18px;
                font-weight: 400;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
            .col-price,
            .col-num {
              font-size: 16px;
            }
            .col-num {
              .change-goods-num {
                width: 148px;
                height: 38px;
                border: 1px solid #e0e0e0;
                text-align: center;
                background-color: #fff;
                position: relative;
                zoom: 1;
                a {
                  float: left;
                  width: 38px;
                  height: 38px;
                  line-height: 38px;
                  color: #757575;
                  font-size: 20px;
                  transition: all 0.3s;
                  &:hover{
                    background-color: #e0e0e0;
                  }
                }
                input {
                  float: left;
                  width: 72px;
                  height: 38px;
                  line-height: 38px;
                  padding: 0;
                  border-width: 0;
                  color: #424242;
                  font-size: 16px;
                  text-align: center;
                }
              }
            }
            .col-total {
              color: #ff6700;
              font-size: 16px;
            }
            .del {
              display: inline-block;
              width: 24px;
              height: 24px;
              line-height: 24px;
              text-align: center;
              border-radius: 12px;
              color: #757575;
              font-size: 16px;
              transition: all 0.3s;
              &:hover {
                color: #fff;
                background-color: #e53935;
              }
            }
          }
        }
      }
    }
  }
}
.cart-bar{
  margin-top: 20px;
    height: 50px;
    text-align: right;
    background-color: #fff;
    -webkit-transition: background .3s ease,top .3s ease;
    transition: background .3s ease,top .3s ease;
    position: relative;
    font-size: 14px;
    a{
      transition: color .3s;
    }
    .section-left{
      float: left;
      .back-shopping{
        line-height: 50px;
    margin-left: 32px;
        color: #757575;
      }
      .cart-total{
        margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
    color: #757575;
    i{
          color: #ff6700;
                font-style: normal;
    }
      }
    }
    .total-price{
      padding-left: 13px;
    color: #ff6700;
    em{
          font-style: normal;
    font-size: 30px;
    }
    .btn{
      margin-left: 50px;
    }
    }
}
}
</style>
