<template>
  <div class="merchant-item-container">
    <!-- 商户 -->
    <merchant-item
      @childMerchantFun="childMerchantFun"
      v-show="active === 1"
    ></merchant-item>
    <!-- 营业 -->
    <business
      @childBusinessFun="childBusinessFun(arguments)"
      v-show="active === 2"
    ></business>
    <!-- 经营 -->
    <shop @childShopFun="childShopFun(arguments)" v-show="active === 3"></shop>
    <!-- 法人 -->
    <legal
      @childLegalFun="childLegalFun(arguments)"
      v-show="active === 4"
    ></legal>
    <!-- 开户 -->
    <account
      @childAccountFun="childAccountFun(arguments)"
      v-show="active === 5"
    ></account>
    <!-- 联系人 -->
    <contacts
      @childContactsFun="childContactsFun(arguments)"
      v-show="active === 6"
    ></contacts>
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
      active: 1,
    }
  },
  methods: {
    childMerchantFun(item) {
      this.active++
      console.log(item)
    },
    // 营业信息
    childBusinessFun(arg) {
      if (arg[1] === 2) {
        this.active--
      } else {
        this.active++
      }
      console.log(arg)
    },
    // 经营信息
    childShopFun(arg) {
      if (arg[1] === 2) {
        this.active--
      } else {
        this.active++
      }
      console.log(arg)
    },
    // 法人信息
    childLegalFun(arg) {
      if (arg[1] === 2) {
        this.active--
      } else {
        this.active++
      }
      console.log(arg)
    },
    // 开户信息
    childAccountFun(arg) {
      if (arg[1] === 2) {
        this.active--
      } else {
        this.active++
      }
      console.log(arg)
    },
    // 联系人信息
    childContactsFun(arg) {
      if (arg[1] === 2) {
        this.active--
      } else {
      }
    },
  },
  created() {},
}
</script>

<style scoped>
</style>
