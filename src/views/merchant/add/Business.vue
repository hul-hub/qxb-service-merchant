<template>
  <div class="business-container">
    <van-form @submit="onSubmit">
      <van-field
        v-model="businessItem.businesslicense"
        label="营业执照编号"
        :rules="[{ required: true, message: '请填写营业执照编号' }]"
      />
      <upload @childUpload="businesslicenesFun" label="营业执照"></upload>
      <upload @childUpload="taximgFun" label="税务登记证"></upload>
      <upload @childUpload="organizationimgFun" label="组织机构代码证"></upload>
      <div class="btn-con" style="margin: 16px">
        <button class="btn next-btn" type="submit">下一步</button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Upload from 'common/upload/Upload'
export default {
  name: 'Business',
  components: {
    Upload,
  },
  data() {
    return {
      businessItem: {
        businesslicense: '', //  营业执照编号
        businesslicenes: '', //营业执照图片链接
        taximg: '', //税务登记证
        organizationimg: '', //组织机构代码证
        islongtime: '0', //营业执照是否长期有效（1是/0否）
        validstartdate: '-', //营业执照有效期开始日期
        validenddate: '-', //营业执照有效期结束日期
        businessstarthours: '-', //营业开始时间（点数）
        businessendhours: '-', //营业结束时间（点数）
      },
    }
  },
  methods: {
    businesslicenesFun(value) {
      console.log(value)
      this.businessItem.businesslicense = value
    },
    taximgFun(value) {
      console.log(value)
      this.businessItem.taximg = value
    },
    organizationimgFun(value) {
      console.log(value)
      this.businessItem.organizationimg = value
    },
    onSubmit(values) {
      this.$emit('childBusinessFun', this.businessItem)
    },
  },
  created() {},
}
</script>

<style scoped>
.business-container {
  margin-top: 20px;
}
</style>
