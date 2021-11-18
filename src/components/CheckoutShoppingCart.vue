<template>
  <div class="shopping-cart">
    <div class="shopping-cart__shopping-list">
    <!-- shopping-item, v-for start  -->
      <div v-for="product in shoppingCart.products" :key="product.id" class="shopping-cart__shopping-list__shopping-item" data-id=${item.id}>
        <img :src="require('../assets/images/' + product.image)" alt="product-img">
        <div class="shopping-cart__shopping-list__shopping-item__detail">
          <p class="shopping-cart__shopping-list__shopping-item__detail__name">{{ product.name }}</p>
          <div class="shopping-cart__shopping-list__shopping-item__detail__qty-wrapper">
            <span class="shopping-cart__shopping-list__shopping-item__detail__qty-wrapper__qty-controller qty-minus-circle">-</span>
            <span class="shopping-cart__shopping-list__shopping-item__detail__qty-wrapper__qty">{{ product.qty }}</span>
            <span class="shopping-cart__shopping-list__shopping-item__detail__qty-wrapper__qty-controller  qty-add-circle d-inline-block rounded-circle">+</span>
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
      <span class="shopping-cart__amount-wrapper__total-amount shopping-cart__price-info">{{ shoppingCart.totalAmount | showPriceLabel}}</span>
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
      shoppingCart : this.initialShoppingCart
    }
  },
  methods: {
    
  }
}
</script>
