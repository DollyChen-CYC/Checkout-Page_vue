<template>
  <div id="Checkout-page">
    <Stepper
      :checkout-steps="checkoutSteps"
      :current-step="currentStep"
      :total-steps="totalSteps"
    />
    <CheckoutForm
      @change-current-step="updateCurrentStep"
      @after-shipping-change="updateShippingFee"
      @after-form-submit="handleAfterFormSubmit"
      :initial-form-values="formValues"
      :initial-current-step="currentStep"
      :total-steps="totalSteps"
    />
    <CheckoutShoppingCart :initial-shopping-cart="shoppingCart" />
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
      currentStep: 1,
      totalSteps: 3,
      formValues: {
        buyerInfo: {
          formId: 1,
          title: "寄送地址",
          salutation: "Mr",
          name: "",
          tel: "",
          email: "",
          city: "",
          address: "",
        },
        shippingChoice: {
          formId: 2,
          title: "運送方式",
          shipping: "standard",
          fee: {
            standard: 0,
            DHL: 500,
          },
        },
        paymentInfo: {
          formId: 3,
          title: "付款資訊",
          creditCardHolder: "",
          creditCardNo: "",
          creditCardExpiration: "",
          cvcCcv: "",
        },
      },
      checkoutSteps: [
        {
          name: "寄送地址",
          isActive: true,
          isChecked: false,
        },
        {
          name: "運送方式",
          isActive: false,
          isChecked: false,
        },
        {
          name: "付款資訊",
          isActive: false,
          isChecked: false,
        },
      ],
      shoppingCart: {
        products: [
          {
            id: 1,
            name: "破壞補丁修身牛仔褲",
            image: "product-1@3x.png",
            price: 3999,
            qty: 1,
            subtotal: 3999
          },
          {
            id: 2,
            name: "刷色直筒牛仔褲",
            image: "product-2@3x.png",
            price: 1299,
            qty: 1,
            subtotal: 1299
          },
        ],
        shippingFee: 0,
        totalAmount: 5298,
      }
    };
  },
  methods: {
    updateFormProgress() {
      this.checkoutSteps = this.checkoutSteps.map((step, index) => {
        if (index < this.currentStep - 1) {
          return {
            ...step,
            isChecked: true,
          };
        } else if (index === this.currentStep - 1) {
          return {
            ...step,
            isActive: true,
          };
        } else {
          return step;
        }
      });
    },
    updateCurrentStep(newStep) {
      this.currentStep = newStep;
    },
    updateShippingFee(inputValue) {
      this.shoppingCart.shippingFee = this.formValues.shippingChoice.fee[inputValue];
    },
    handleAfterFormSubmit(formData) {
      console.log("-- 透過 API 傳送資料到後端伺服器 --");
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
  watch: {
    currentStep: {
      handler: function () {
        this.updateFormProgress();
      },
      deep: true,
    },
  },
};

// plan:
// shoppingCart.product -> 來自 fetchDummyData() {}
// shoppingCart.shippingFee --> 來自 form options
// 計算第一次的 totalAomunt
// shoppingCart.totalAmount --> 來自 computed
// no product 告警！
// 更新回 parents view

// product.img src --> filter 轉換 path (import img)
// Mixins : 所有 price --> filter 轉換 ($ + 免費)

// v-if (steps[currentStep - 1].name === formValues.buyerInfo.title)   現行： v-model可讀性較高 (v)
// v-if (steps[currentStep - 1].name === formValues[currentStep - 1].name)   -> formValues 改成陣列，但 v-model 使用 index 取值可讀性就會變差
</script>


