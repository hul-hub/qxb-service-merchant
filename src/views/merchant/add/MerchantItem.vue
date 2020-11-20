<template>
  <div class="merchant-item-container">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        label="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="btn-con" style="margin: 16px">
        <button class="btn next-btn" type="submit">下一步</button>
      </div>
    </van-form>
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
      username: '',
      password: '',
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
      this.$emit('childMerchantFun', this.serviceMerchantItem)
    },
  },
  created() {},
}
</script>

<style scoped>
</style>
