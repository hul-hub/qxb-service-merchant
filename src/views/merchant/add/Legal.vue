<template>
  <div class="legal-container">
    <van-form @submit="onSubmit">
      <van-field
        v-model="legalItem.contactsname"
        label="法人姓名"
        :rules="[{ required: true, message: '请填写法人姓名' }]"
      />
      <van-field
        readonly
        clickable
        label="证件类型"
        :value="legalItem.idcodetypeP"
        @click="showPicker = true"
        :rules="[{ required: true, message: '请选择证件类型' }]"
      />
      <van-field
        v-model="legalItem.contactsname"
        label="证件号码"
        :rules="[{ required: true, message: '请填写证件号码' }]"
      />
      <upload @childUpload="idfrontimgFun" label="身份证正面"></upload>
      <upload @childUpload="idbackimgFun" label="身份证反面"></upload>
    </van-form>
    <template>
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          value-key="label"
          :columns="idcodetypeList"
          @cancel="showPicker = false"
          @confirm="onConfirmPicker"
        />
      </van-popup>
    </template>
  </div>
</template>

<script>
import Upload from 'common/upload/Upload'
export default {
  name: 'Legal',
  components: { Upload },
  data() {
    return {
      legalItem: {
        contactsname: '', //责任人姓名
        idcodetype: '1', //证件类型 只有身份证一个选择
        idcodetypeP: '身份证',
        idcode: '', // 证件号码
        idfrontimg: '', // 身份证正面
        idbackimg: '', //身份证反面
        idvalidstartdate: '-', //身份证开始时间
        idvalidenddate: '-', //身份证结束时间
      },
      showPicker: false,
      idcodetypeList: [{ label: '身份证', value: '1' }],
    }
  },
  methods: {
    onConfirmPicker(item) {
      this.legalItem.idcodetype = item.value
      this.legalItem.idcodetypeP = item.label
      this.showPicker = false
    },
    // 身份证正面上传
    idfrontimgFun(value) {
      console.log(value)
      this.legalItem.idfrontimg = value
    },
    // 身份证反面上传
    idbackimgFun(value) {
      console.log(value)
      this.legalItem.idcodetype = value
    },
    onSubmit(values) {
      this.$emit('childLegalFun', this.shopItem)
    },
  },
  created() {},
}
</script>

<style scoped>
</style>
