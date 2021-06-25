<template>
  <div class="ali-pay">
    <div class="form" v-html="content"></div>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue'
export default {
  name:'alipay',
  data() {
    return {
      orderId:this.$route.query.orderId,
      content:'',
      loading:true
    }
  },
  components: {
Loading
  },
  mounted(){
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.$axios.post('/pay',{
        orderId:this.orderId,
        orderName:'Vue仿小米商城',
        amount:0.01,
        payType:1 //1支付宝，2微信
      }).then(res=>{
        this.content=res.content;
        setTimeout(()=>{
          document.forms[0].submit();
        },100)
      })
    },
  },
}
</script>

<style>
</style>
