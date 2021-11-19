<template>
  <form @submit.stop.prevent="handleFormSubtmit" action="" novalidate>
    <!-- form-part 1 -->
    <div v-show="formShowNow === 'buyerInfo'" class="form-part">
      <h2 class="form-part__title checkout-section-title">寄送地址</h2>
      <div class="form-part__form-row">
        <div class="form-part__form-row__form-unit flex-grow-1">
          <label for="salutation">稱謂</label>
          <div class="select-wrapper">
            <select
              v-model="formValues.buyerInfo.salutation"
              name="salutation"
              id="salutation"
            >
              <option value="Mr">先生</option>
              <option value="Ms">小姐</option>
              <option value="Mx">Mx</option>
            </select>
          </div>
        </div>
        <div class="form-part__form-row__form-unit flex-grow-2">
          <label for="name">姓名</label>
          <input
            v-model="formValues.buyerInfo.name"
            type="text"
            name="name"
            id="name"
            placeholder="請輸入姓名"
          />
        </div>
      </div>
      <div class="form-part__form-row">
        <div class="form-part__form-row__form-unit flex-grow-1-pc">
          <label for="phone">電話</label>
          <input
            v-model="formValues.buyerInfo.tel"
            type="text"
            name="phone"
            id="phone"
            placeholder="請輸入行動電話"
          />
        </div>
        <div class="form-part__form-row__form-unit flex-grow-1-pc">
          <label for="email">e-Mail</label>
          <input
            v-model="formValues.buyerInfo.email"
            type="text"
            name="email"
            id="email"
            placeholder="請輸入電子郵件"
          />
        </div>
      </div>
      <div class="form-part__form-row">
        <div class="form-part__form-row__form-unit flex-grow-1-pc">
          <label for="city">縣市</label>
          <div class="select-wrapper">
            <select
              v-model="formValues.buyerInfo.city"
              name="city"
              id="city"
              required
            >
              <option value="" selected disabled>請選擇縣市</option>
              <option value="taipei">台北市</option>
              <option value="new-taipei">新北市</option>
              <option value="taichung">台中市</option>
              <option value="tainan">台南市</option>
              <option value="kaohsiung">高雄市</option>
              <option value="more">更多...</option>
            </select>
          </div>
        </div>
        <div class="form-part__form-row__form-unit flex-grow-2-pc">
          <label for="address">地址</label>
          <input
            v-model="formValues.buyerInfo.address"
            type="text"
            name="address"
            id="address"
            placeholder="請輸入地址"
          />
        </div>
      </div>
    </div>

    <!-- form-part 2 -->
    <div v-show="formShowNow === 'shippingChoice'" class="form-part">
      <h2 class="form-part__title checkout-section-title">運送方式</h2>
      <div class="form-part__form-row">
        <input
          @change="handleShippingChange"
          v-model="formValues.shippingChoice.shipping"
          type="radio"
          name="shipping"
          id="standard-shipping"
          value="standard"
          checked
          required
        />
        <label for="standard-shipping" class="form-part__form-shipping-option">
          <div class="form-part__form-shipping-option__radio-circle"></div>
          <div
            class="form-part__form-shipping-option__shipping-desc flex-grow-1"
          >
            <span
              class="
                form-part__form-shipping-option__shipping-desc__shipping-subtitle
              "
              >標準運送</span
            >
            <span
              class="
                form-part__form-shipping-option__shipping-desc__shipping-time
              "
              >約 3-7 個工作天</span
            >
          </div>
          <div class="form-part__form-shipping-option__shipping-fee">
            {{ 0 | showPriceLabel }}
          </div>
        </label>
      </div>
      <div class="form-part__form-row">
        <input
          @change="handleShippingChange"
          v-model="formValues.shippingChoice.shipping"
          type="radio"
          name="shipping"
          id="DHL-shipping"
          value="DHL"
          required
        />
        <label for="DHL-shipping" class="form-part__form-shipping-option">
          <div class="form-part__form-shipping-option__radio-circle"></div>
          <div
            class="form-part__form-shipping-option__shipping-desc flex-grow-1"
          >
            <span
              class="
                form-part__form-shipping-option__shipping-desc__shipping-subtitle
              "
              >DHL 貨運</span
            >
            <span
              class="
                form-part__form-row__shipping-option__shipping-desc__shipping-time
              "
              >48 小時內送達</span
            >
          </div>
          <div class="form-part__form-shipping-option__shipping-fee">
            {{ 500 | showPriceLabel }}
          </div>
        </label>
      </div>
    </div>

    <!-- form-part 3 -->
    <div v-show="formShowNow === 'paymentInfo'" class="form-part">
      <h2 class="form-part__title checkout-section-title">付款資訊</h2>
      <div class="form-part__form-row">
        <div class="form-part__form-row__form-unit">
          <label for="credit-card-holder">持卡人姓名</label>
          <input
            v-model="formValues.paymentInfo.creditCardHolder"
            type="text"
            name="credit-card-holder"
            id="credit-card-holder"
            placeholder="John Doe"
          />
        </div>
      </div>
      <div class="form-part__form-row">
        <div class="form-part__form-row__form-unit">
          <label for="credit-card-no">卡號</label>
          <input
            v-model="formValues.paymentInfo.creditCardNo"
            type="text"
            name="credit-card-no"
            id="credit-card-no"
            placeholder="1111 2222 3333 4444"
          />
        </div>
      </div>
      <div class="form-part__form-row">
        <div class="form-part__form-row__form-unit flex-grow-1">
          <label for="credit-card-expiration">有效期限</label>
          <input
            v-model="formValues.paymentInfo.creditCardExpiration"
            type="text"
            name="credit-card-expiration"
            id="credit-card-expiration"
            placeholder="MM / YY"
          />
        </div>
        <div class="form-part__form-row__form-unit flex-grow-1">
          <label for="CVC-CCV">CVC / CCV</label>
          <input
            v-model="formValues.paymentInfo.cvcCcv"
            type="text"
            name="CVC-CCV"
            id="CVC-CCV"
            placeholder="123"
          />
        </div>
      </div>
    </div>

    <!-- buttons -->
    <div class="form-btn-groups">
      <div class="form-btn-groups__btn-wrapper">
        <button
          @click.stop.prevent="handleBtnClick"
          v-show="currentStep > 1"
          class="form-btn-groups__btn btn-back"
        >
          <span class="arrow-symbol">&#8592;</span> 上一步
        </button>
      </div>
      <button
        @click.stop.prevent="handleBtnClick"
        v-show="currentStep < totalSteps"
        class="form-btn-groups__btn btn-next"
      >
        下一步 <span class="arrow-symbol">&#8594;</span>
      </button>
      <button
        @click="handleBtnClick"
        v-show="currentStep === totalSteps"
        type="submit"
        class="form-btn-groups__btn btn-submit"
      >
        確認下單
      </button>
    </div>
  </form>
</template>

<script>
import { priceLabelFilter } from "../utils/mixin.js";

export default {
  name: "CheckoutForm",
  props: {
    StorageKey: {
      type: String,
      required: true
    },
    initialFormValues: {
      type: Object,
      required: true,
    },
    initialCurrentStep: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      required: true,
    },
  },
  mixins: [priceLabelFilter],
  data() {
    return {
      formValues: this.initialFormValues,
      currentStep: 1,
    };
  },
  mounted() {
    this.fetchCurrentStep();
  },
  methods: {
    fetchCurrentStep() {
      this.currentStep = Number(this.$route.query.step) || 1;
    },
    saveStorage () {
      localStorage.setItem(this.StorageKey, JSON.stringify(this.formValues))
    },
    handleBtnClick(event) {
      const targetItem = event.target;
      if (
        targetItem.matches(".btn-next") &&
        this.currentStep < this.totalSteps
      ) {
        // form validation (only the "city" field is required input for this moment)
        if (this.formValues.buyerInfo.city.length === 0) {
          this.$swal.fire(
            "必填欄位「縣市」未選擇",
            "請重新確認，謝謝！",
            "warning"
          );
          return;
        }
        this.currentStep++;
        this.$router.replace({
          name: "checkout-page",
          query: { step: this.currentStep },
        });
      } else if (targetItem.matches(".btn-back") && this.currentStep > 1) {
        this.currentStep--;
        this.$router.replace({
          name: "checkout-page",
          query: { step: this.currentStep },
        });
      }
    },
    handleFormSubtmit(event) {
      // form validation
      if (this.formValues.buyerInfo.city.length === 0) {
        this.$swal.fire(
          "必填欄位「縣市」未選擇",
          "請重新確認，謝謝！",
          "warning"
        );
      } else {
        const form = event.target;
        const formData = new FormData(form);
        this.$emit("after-form-submit", formData);
      }
    },
    handleShippingChange() {
      this.$emit(
        "after-shipping-change",
        this.formValues.shippingChoice.shipping
      );
    },
  },
  computed: {
    formShowNow() {
      return Object.keys(this.formValues)[this.currentStep - 1];
    },
  },
  watch: {
    currentStep: function () {
      this.$emit("change-current-step", this.currentStep);
    },
    formValues: {
      handler: function () {
        this.saveStorage()
      },
      deep: true
    }
  },
};
</script>
