<template>
  <div id="Checkout-page">
    <Stepper />
    <CheckoutForm />
    <CheckoutShoppingCart />
  </div>
</template>

<script>
import Stepper from "../components/Stepper.vue";
import CheckoutForm from "../components/CheckoutForm.vue";
import CheckoutShoppingCart from "../components/CheckoutShoppingCart.vue";

export default {
  name: "ChekoutPage",
  components: {
    Stepper,
    CheckoutForm,
    CheckoutShoppingCart,
  },
  data() {
    return {
      formValues: {
        buyerInfo: {
          title: "寄送地址",
          salutation: "Mr",
          name: "",
          tel: "",
          email: "",
          city: "",
          address: "",
        },
        shippingChoice: {
          title: "運送方式",
          shipping: "",
          fee: {
            standard: 0,
            dhl: 500,
          },
        },
        paymentInfo: {
          title: "付款資訊",
          creditCardHolder: "",
          creditCardNo: "",
          creditCardExpiration: "",
          cvcCcv: "",
        },
      },
      checkoutStep: {
        steps: [
          {
            title: '寄送地址',
            isActive: true,
            isChecked: false,
          },
          {
            title: '運送方式',
            isActive: false,
            isChecked: false,
          },
          {
            title: '付款資訊',
            isActive: false,
            isChecked: false,
          }
        ],
        totalSteps: 3,
        currentStep: 1,
      },
      shoppingCart: {
        product : [
          {
            id: 1,
            name: '破壞補丁修身牛仔褲',
            image: 'product-1@3x.png',
            price: 3999,
            qty: 1
          },
          {
            id: 1,
            name: '破壞補丁修身牛仔褲',
            image: 'product-1@3x.png',
            price: 3999,
            qty: 1
          },
        ],
        shippingFee : 0,
        totalAmount: -1,
      }
    };
  },
};

// shoppingCart.product -> 來自 fetchDummyData() {}
  // shoppingCart.shippingFee --> 來自 form options 
  // 計算第一次的 totalAomunt
// shoppingCart.totalAmount --> 來自 computed
  // no product 告警！
  // 更新回 parents view

// product.img src --> filter 轉換 path (import img)
// Mixins : 所有 price --> filter 轉換 ($ + 免費)

// v-if (steps[currentStep - 1].title === formValues.buyerInfo.title)   現行： v-model可讀性較高 (v)
// v-if (steps[currentStep - 1].title === formValues[currentStep - 1].name)   -> formValues 改成陣列，但 v-model 使用 index 取值可讀性就會變差

</script>


