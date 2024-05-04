<template>
  <div id="payBox">
    <h1>请使用微信支付:{{ price }}元</h1>
    <div class="scanPay">
      <img src="../../assets/wxPay.jpg">
      <div>
        <button @click="scanToPay">扫码支付</button>
        <p v-if="paymentResult">{{ paymentResult }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PayServer",
  data() {
    return {
      price: '',
      paymentResult: ""
    };
  },
  mounted() {
    this.price = this.$store.state.price;
  },
  methods: {
    scanToPay() {
      axios.post("/api/user/pay", {
        id: this.$store.state.id,
        payType: this.$store.state.payType,
        price: this.price
      })
          .then(response => {
            if (response.data.code === 1)
              this.paymentResult = "支付成功"
            else
              this.paymentResult = response.data.msg
          })
          .catch(error => {
            console.log(error)
          });
    }
  }
};
</script>

<style>
#payBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f1f1;
  border-radius: 6px;
}

#payBox h1 {
  text-align: center;
  color: orange;
}

.scanPay {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#payBox .scanPay img {
  width: 50%;
  height: 50%;
  margin: 0 auto;
}

#payBox .scanPay button {
  width: 150px;
  height: 50px;
  font-size: 26px;
  background-color: orange;
  margin: 50px auto 0;
  border-radius: 5px;
}

.scanPay p {
  font-size: 18px;
  color: black;
}
</style>