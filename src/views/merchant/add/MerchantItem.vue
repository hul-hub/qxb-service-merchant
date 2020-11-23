<template>
  <div class="merchant-item-container">
    <van-form @submit="onSubmit">
      <van-field
        v-model="serviceMerchantItem.serproname"
        label="商户名称"
        :rules="[{ required: true, message: '请填写商户名称' }]"
      />
      <van-field
        v-model="serviceMerchantItem.serproshortname"
        label="商户简称"
        :rules="[{ required: true, message: '请填写商户简称' }]"
      />
      <van-field
        readonly
        clickable
        label="所属服务商"
        :value="serviceMerchantItem.upserprocodeP"
        @click="showPicker = true"
        :rules="[{ required: true, message: '请选择服务商' }]"
      />
      <van-field
        readonly
        label="商户级别"
        v-model="serviceMerchantItem.serprotypeP"
      />
      <div class="btn-con" style="margin: 16px">
        <button class="btn next-btn" type="submit">下一步</button>
      </div>
    </van-form>
    <template>
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          value-key="serproname"
          :columns="toSerproList"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </template>
  </div>
</template>

  <script>
export default {
  name: 'MerchantItem',
  components: {},
  data() {
    return {
      //商户级别：商户类型serviceType + （所属商户级别serprolevl+1） 例如11：一级商户，12：二级商户。21：一级商户，22：二级商户
      serprolevelList: [
        { value: '21', label: '直营商户' },
        { value: '22', label: '非直营商户' },
      ],
      toSerproList: [
        { serprocode: '5921110001', serproname: '服务商一', serprolevel: 0 },
        { serprocode: '5921110001', serproname: '服务商二', serprolevel: 1 },
      ],
      showPicker: false,
      serviceMerchantItem: {
        serproname: '', //商户/商户名称
        serproshortname: '', //	商户/商户简称
        upserprocode: '', //所属商户id，上级商户
        serprotype: '', //类型
        serprotypeP: '',
        upserprocodeP: '',
        serprolevel: '', //商户级别
        province: '-', //省
        city: '-', //市
        county: '-', //区
        address: '-', //详细地址
        phone: '-', //客服电话
      },
    }
  },
  methods: {
    onConfirm(item) {
      console.log(item)
      this.serviceMerchantItem.upserprocodeP = item.serproname
      this.serviceMerchantItem.upserprocode = item.serprocode
      this.upserprocodeFun(item)
      this.showPicker = false
    },
    upserprocodeFun(item) {
      this.serviceMerchantItem.serprotype = '2' + (item.serprolevel + 1)
      this.serviceMerchantItem.serprolevel = item.serprolevel + 1
      let result = this.serprolevelList.filter((ser) => {
        if (ser.value === this.serviceMerchantItem.serprotype) return ser
      })
      this.serviceMerchantItem.serprotypeP = result[0].label
      // console.log(result)
    },
    onSubmit(values) {
      this.$emit('childMerchantFun', this.serviceMerchantItem)
    },
  },
  created() {},
}
</script>

<style scoped>
</style>
