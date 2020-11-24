<template>
  <div class="merchant-item-container">
    <!-- 商户 -->
    <merchant-item
      @childMerchantFun="childMerchantFun"
      v-show="active === 1"
    ></merchant-item>
    <!-- 营业 -->
    <business
      @childBusinessFun="childBusinessFun"
      v-show="active === 2"
    ></business>
    <!-- 经营 -->
    <shop @childShopFun="childShopFun" v-show="active === 3"></shop>
    <!-- 法人 -->
    <legal @childLegalFun="childLegalFun" v-show="active === 4"></legal>
    <!-- 开户 -->
    <account v-show="active === 5"></account>
    <!-- 联系人 -->
    <contacts v-show="active === 6"></contacts>
  </div>
</template>

<script>
import MerchantItem from './MerchantItem.vue'
import Business from './Business.vue'
import Account from './Account.vue'
import Legal from './Legal.vue'
import Contacts from './Contacts.vue'
import Shop from './Shop.vue'
export default {
  name: 'Contain',
  components: {
    MerchantItem,
    Business,
    Account,
    Contacts,
    Legal,
    Shop,
  },
  data() {
    return {
      active: 4,
    }
  },
  methods: {
    childMerchantFun(item) {
      this.active++
      console.log(item)
    },
    // 营业信息
    childBusinessFun(item) {
      this.active++
      console.log(item)
    },
    // 经营信息
    childShopFun(item) {
      this.active++
      console.log(item)
    },
    // 法人信息
    childLegalFun(item) {
      this.active++
      console.log(item)
    },
  },
  created() {},
}
</script>

<style scoped>
</style>
