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
      :storage-key="StorageKey"
      :initial-form-values="formValues"
      :initial-current-step="currentStep"
      :total-steps="totalSteps"
    />
    <CheckoutShoppingCart
      @shopping-list-change="updateShoppingCart"
      :initial-shopping-cart="shoppingCart"
    />
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
      StorageKey: "localFormData",
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
          shippingTime: {
            standard: '約 3-7 個工作天',
            DHL: '48 小時內'
          }
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
            subtotal: 3999,
          },
          {
            id: 2,
            name: "刷色直筒牛仔褲",
            image: "product-2@3x.png",
            price: 1299,
            qty: 1,
            subtotal: 1299,
          },
        ],
        shippingFee: 0,
        totalAmount: 5298,
      },
    };
  },
  created () {
    this.fetchLocalFormData()
  },
  methods: {
    fetchLocalFormData () {
      const localFormData = JSON.parse(localStorage.getItem(this.StorageKey))
      console.log('fetch loacl formData')
      this.formValues = {
        ...this.formValues,
        ...localFormData
      }
    },
    updateCheckoutSteps() {
      this.checkoutSteps = this.checkoutSteps.map((step, index) => {
        if (index < this.currentStep - 1) {
          return {
            ...step,
            isActive: true,
            isChecked: true,
          };
        } else if (index === this.currentStep - 1) {
          return {
            ...step,
            isActive: true,
            isChecked: false,
          };
        } else {
          return {
            ...step,
            isActive: false,
            isChecked: false,
          }
        }
      });
    },
    updateCurrentStep(newStep) {
      this.currentStep = newStep;
    },
    updateShippingFee(inputValue) {
      this.shoppingCart.shippingFee =
        this.formValues.shippingChoice.fee[inputValue];
    },
    updateShoppingCart(dataFromComponent) {
      this.shoppingCart = dataFromComponent;
    },
    handleAfterFormSubmit(formData) {
      // TODO: 將資料透過 API 傳送到後端
      console.log("-- 透過 API 傳送資料到後端 --");
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
      // show a pop-up window to notify users
      const shipping = this.formValues.shippingChoice.shipping
      const shippingTime = this.formValues.shippingChoice.shippingTime[shipping]

      this.$swal.fire(
        "訂單已送出!",
        `今日消費金額為：${this.shoppingCart.totalAmount} 元 <br> 商品會在${shippingTime}送達，請耐心等候`,
        "success"
      );
    },
  },
  watch: {
    currentStep: function () {
      this.updateCheckoutSteps();
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


