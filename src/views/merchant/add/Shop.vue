<template>
  <div class="shop-container">
    <van-form @submit="onSubmit">
      <van-field
        v-model="shopItem.businessname"
        label="经营名称"
        :rules="[{ required: true, message: '请填写经营名称' }]"
      />
      <van-field
        readonly
        clickable
        label="商户类型"
        :value="shopItem.merchanttypeP"
        @click="showPicker = true"
        :rules="[{ required: true, message: '请选择商户类型' }]"
      />
      <upload
        @childUpload="bodyimgFun"
        v-model="shopItem.bodyimg"
        label="门口照"
      ></upload>
      <upload
        @childUpload="storecashierphotoFun"
        v-model="shopItem.storecashierphoto"
        label="收银台照片"
      ></upload>
      <upload
        @childUpload="businessimgFun"
        v-model="shopItem.businessimg"
        label="内部经营照"
      ></upload>
      <upload
        @childUpload="accountopenimgFun"
        v-model="shopItem.accountopenimg"
        label="开户许可证"
      ></upload>
      <upload
        @childUpload="specialbusinessimgFun"
        v-model="shopItem.specialbusinessimg"
        label="特殊行业许可证"
      ></upload>
      <upload
        @childUpload="serproagreementimg1Fun"
        v-model="shopItem.serproagreementimg1"
        label="商户协议"
      ></upload>
      <upload
        @childUpload="otherimg1Fun"
        v-model="shopItem.otherimg1"
        label="其他补充材料"
      ></upload>
      <div class="btn-con" style="margin: 16px">
        <button class="btn next-btn" type="submit">下一步</button>
      </div>
    </van-form>
    <template>
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          value-key="label"
          :columns="merchanttypeList"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
    </template>
  </div>
</template>

<script>
import Upload from 'common/upload/Upload'
export default {
  name: 'Shop',
  components: {
    Upload,
  },
  data() {
    return {
      shopItem: {
        businessname: '', //经营名称
        merchanttype: '', // 商户类型
        merchanttypeP: '',
        onebusinesstype: '', //行业类型
        twobusinesstype: '', //行业类型
        businesstype: '', //行业类型
        bodyimg: '', //门头照
        storecashierphoto: '', // 收银台照片
        businessimg: '', // 内部经营图片链接
        accountopenimg: '', // 	开户许可证图片链接
        specialbusinessimg: '', // 	特殊行业许可证
        otherimg1: '', // 	其它材料
        serproagreementimg: '', // 	商户协议
        serproagreementimg1: '', // 	商户协议
        serproagreementimg2: '', // 	商户协议
        serproagreementimg3: '', // 	商户协议
        serproagreementimg4: '', // 	商户协议
      },
      showPicker: false,
      merchanttypeList: [
        { label: '个人', value: '1' },
        { label: '企业', value: '2' },
        { label: '小微企业', value: '4' },
      ],
    }
  },
  methods: {
    onConfirm(item) {
      this.shopItem.merchanttype = item.value
      this.shopItem.merchanttypeP = item.label
      this.showPicker = false
    },
    // 门头照
    bodyimgFun(value) {
      console.log(value)
      this.shopItem.bodyimg = value
    },
    // 收银台
    storecashierphotoFun(value) {
      console.log(value)
      this.shopItem.storecashierphoto = value
    },
    // 内部经营照
    businessimgFun(value) {
      console.log(value)
      this.shopItem.businessimg = value
    },
    // 开户许可证
    accountopenimgFun(value) {
      console.log(value)
      this.shopItem.accountopenimg = value
    },
    // 特殊行业许可证
    specialbusinessimgFun(value) {
      console.log(value)
      this.shopItem.specialbusinessimg = value
    },
    // 其他补充材料
    otherimg1Fun(value) {
      console.log(value)
      this.shopItem.otherimg1 = value
    },
    // 商户协议
    serproagreementimg1Fun(value) {
      console.log(value)
      this.shopItem.serproagreementimg1 = value
    },
    onSubmit(values) {
      this.$emit('childShopFun', this.shopItem)
    },
  },
  created() {},
}
</script>

<style scoped>
</style>
