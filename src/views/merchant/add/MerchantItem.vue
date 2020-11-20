<template>
  <div class="merchant-item-container">
    <div></div>
    <div class="btn-con">
      <button class="btn next-btn">下一步</button>
    </div>
  </div>
</template>

  <script>
export default {
  name: 'MerchantItem',
  components: {},
  data() {
    return {
      serviceMerchantItem: {
        serproname: '', //商户/商户名称
        serproshortname: '', //	商户/商户简称
        upserprocode: '', //所属商户id，上级商户
        serprolevel: '', //商户级别
        serprotype: '', //类型
        province: '-', //省
        city: '-', //市
        county: '-', //区
        address: '-', //详细地址
        phone: '-', //客服电话
      },
    }
  },
  methods: {},
  created() {},
}
</script>

<style scoped>
</style>
