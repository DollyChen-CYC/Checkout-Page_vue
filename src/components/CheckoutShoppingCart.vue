<template>
  <div class="shopping-cart">
    <div class="shopping-cart__shopping-list">
    <!-- shopping-item, v-for start  -->
      <div v-for="(product, index) in shoppingCart.products" :key="product.id" class="shopping-cart__shopping-list__shopping-item" data-id=${item.id}>
        <img :src="require('../assets/images/' + product.image)" alt="product-img">
        <div class="shopping-cart__shopping-list__shopping-item__detail">
          <p class="shopping-cart__shopping-list__shopping-item__detail__name">{{ product.name }}</p>
          <div class="shopping-cart__shopping-list__shopping-item__detail__qty-wrapper">
            <span 
            @click="qtyMinus(index)"
            class="shopping-cart__shopping-list__shopping-item__detail__qty-wrapper__qty-controller">-</span>
            <span class="shopping-cart__shopping-list__shopping-item__detail__qty-wrapper__qty">{{ product.qty }}</span>
            <span 
            @click="qtyAdd(index)"
            class="shopping-cart__shopping-list__shopping-item__detail__qty-wrapper__qty-controller">+</span>
          </div>
          <div class="shopping-cart__shopping-list__shopping-item__detail__subtotal shopping-cart__price-info">
            {{ product.subtotal |showPriceLabel }}
          </div>
        </div>
      </div>
    <!-- v-for end -->
    </div>
    <div class="shopping-cart__shipping-fee-wrapper">
      <span>運費</span>
      <span class="shopping-cart__shipping-fee-wrapper__subtotal shopping-cart__price-info">{{ shoppingCart.shippingFee | showPriceLabel}}</span>
    </div>
    <div class="shopping-cart__amount-wrapper">
      <span>小計</span>
      <span class="shopping-cart__amount-wrapper__total-amount shopping-cart__price-info">{{ calcTotalAmount | showPriceLabel}}</span>
    </div>
  </div>
</template>

<script>
import { priceLabelFilter } from '../utils/mixin'

export default {
  props: {
    initialShoppingCart : {
      type: Object,
      required: true
    }
  },
  mixins: [ priceLabelFilter ],
  data () {
    return {
      shoppingCart : {
        ...this.initialShoppingCart,
        totalAmount: this.calcTotalAmount
      }
    }
  },
  computed :{
    calcTotalAmount () {
      const subtotalOfProducts = this.shoppingCart.products.reduce(( sum, current) => {
        return sum + current.subtotal
      }, 0) 
      const totalAmount = subtotalOfProducts + this.shoppingCart.shippingFee
      this.updateTotalAmount(totalAmount)
      return totalAmount
    }
  },
  watch : {
    'initialShoppingCart.shippingFee'() {
      this.shoppingCart.shippingFee = this.initialShoppingCart.shippingFee
    }
  },
  methods: {
    updateTotalAmount(amount) {
      this.$emit('shopping-amount-change', amount)
    },
    qtyMinus (productIndex) {
      if (this.shoppingCart.products[productIndex].qty < 1) {
        return
      } else {
        this.shoppingCart.products[productIndex].qty--
        this.handleQtyChange (productIndex)
      }
    },
    qtyAdd (productIndex) {
      this.shoppingCart.products[productIndex].qty++
      this.handleQtyChange (productIndex)
    },
    handleQtyChange (productIndex) {
      const product = this.shoppingCart.products[productIndex]
      product.subtotal = product.qty * product.price
    }
  }
}
</script>
