<template>
  <div class="add-container">
    <div class="con-con">
      <div class="con-item" @click="handleType(1)">
        <p>个体工商户</p>
        <p>营业执照上的主体类型一般为个体户、个体工商户、个体经营</p>
      </div>
      <div class="con-item" @click="handleType(2)">
        <p>企业</p>
        <p>营业执照上的主体类型一般为有限公司、有限责任公司</p>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  name: 'MerchantAdd',
  components: {},
  data() {
    return {}
  },
  methods: {
    handleType(type) {
      switch (type) {
        case 1:
          this.$router.push('/contain')
          break
        case 2:
          this.$router.push('/contain')
          break
      }
    },
  },
  created() {},
}
</script>

<style scoped>
.con-con {
  margin-top: 30px;
}
.con-item {
  padding: 16px 10px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 10px;
}
</style>
