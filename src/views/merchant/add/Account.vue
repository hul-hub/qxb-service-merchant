<template>
  <div class="account-container">
    <van-form @submit="onSubmit">
      <van-field
        v-model="accountItem.accountname"
        label="开户人姓名"
        :rules="[{ required: true, message: '请填开户人姓名' }]"
      />
      <van-field
        readonly
        clickable
        label="账户类型"
        :value="accountItem.accounttypeP"
        @click="showPicker = true"
        :rules="[{ required: true, message: '请选择账户类型' }]"
      />

      <!-- <upload
        @childUpload="idfrontimgFun"
        v-model="accountItem.accountfrontimg"
        label="身份证正面"
      ></upload>
      <upload
        @childUpload="idbackimgFun"
        v-model="accountItem.accountfrontimg"
        label="身份证反面"
      ></upload> -->
      <div class="btn-con" style="margin: 16px">
        <button class="btn pre-btn" @click="preTab">上一步</button>
        <button class="btn next-btn" type="submit">下一步</button>
      </div>
    </van-form>
    <template>
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          value-key="label"
          :columns="accounttypeList"
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
  name: 'Account',
  components: {
    Upload,
  },
  data() {
    return {
      provinceList: [], // 开户省份
      cityAccountList: [], // 开户城市
      bankList: [], //开户银行
      bankBranchList: [], // 开户银行支行
      accountItem: {
        accountname: '', // 开户人姓名
        accounttype: '', //账户类型
        accounttypeP: '',
        province: '', //省份
        city: '', //城市
        bankid: '', //开户银行
        branchid: '', //开户银行支行
        idcardtype: '', //	持卡人证件类型
        idcard: '', //	证件编号
        bcvalidstartdate: '', //
        bcvalidenddate: '',
        accountcode: '', // 银行账号
        tel: '', // 银行预留手机号
        address: '', // 持卡人地址
        accountfrontimg: '', // 银行卡正面照
        accountbackimg: '', // 银行卡反面照
        signauthletterphoto: '', // 签约授权书
        settleauthletterphoto: '', // 结算授权函图片
        settleauthidcardfront: '', // 结算授权人身份证正面
        settleauthidcardback: '', // 结算授权人身份证反面
      },
      // 当账号类型选择（对公、对私-法人）这两种情况，持卡
      //人证件类型、证件编号、证件有效期、持卡人地址这四个功能不需要自己填写，从界
      //面相关数据直接获取，持卡人地址由上个界面的商户地址和详细地址拼接组成。
      accounttypeList: [
        { label: '对公', value: '1' },
        { label: '对私法人', value: '2' },
        { label: '对私非法人', value: '3' },
      ],
      showPicker: false,
      isaccounttype: false,
    }
  },
  methods: {
    onConfirmPicker(item) {
      this.accountItem.accounttype = item.value
      this.accountItem.accounttypeP = item.label
      this.changeaccounttype(item.value)
      this.showPicker = false
    },
    changeaccounttype(val) {
      switch (val) {
        case '1':
          this.isaccounttype = false
          break
        case '2':
          this.isaccounttype = false
          break
        case '3':
          this.isaccounttype = true
          break
      }
    },
    onSubmit(values) {
      this.$emit('childAccountFun', this.accountItem, 1)
    },
    preTab() {
      this.$emit('childAccountFun', this.accountItem, 2)
    },
  },
  created() {},
}
</script>

<style scoped>
</style>
