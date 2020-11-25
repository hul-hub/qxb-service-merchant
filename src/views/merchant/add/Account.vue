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
      <van-field
        readonly
        clickable
        label="开户省份"
        :value="accountItem.provinceP"
        @click="showPickerProvince = true"
        :rules="[{ required: true, message: '请选择开户省份' }]"
      />
      <van-field
        readonly
        clickable
        label="开户城市"
        :value="accountItem.cityP"
        @click="showPickerCity = true"
        :rules="[{ required: true, message: '请选择开户城市' }]"
      />
      <van-field
        readonly
        clickable
        label="开户银行"
        :value="accountItem.bankidP"
        @click="showPickerBank = true"
        :rules="[{ required: true, message: '请选择开户银行' }]"
      />
      <van-field
        readonly
        clickable
        label="开户银行支行"
        :value="accountItem.branchidP"
        @click="showPickerBranch = true"
        :rules="[{ required: true, message: '请选择开户银行支行' }]"
      />
      <van-field
        readonly
        clickable
        label="证件类型"
        :value="accountItem.idcardtypeP"
        @click="showPickerIdcardtype = true"
        :rules="[{ required: true, message: '请选择证件类型' }]"
      />
      <van-field
        v-model="accountItem.idcard"
        label="证件号码"
        :rules="[{ required: true, message: '请填证件号码' }]"
      />
      <van-field
        v-model="accountItem.address"
        label="持卡人地址"
        :rules="[{ required: true, message: '请填持卡人地址' }]"
      />
      <van-field
        v-model="accountItem.tel"
        label="银行预留手机号"
        :rules="[{ required: true, message: '请填银行预留手机号' }]"
      />
      <van-field
        v-model="accountItem.accountcode"
        label="银行账号"
        :rules="[{ required: true, message: '请填银行账号' }]"
      />
      <upload
        @childUpload="accountfrontimgFun"
        v-model="accountItem.accountfrontimg"
        label="银行卡正面"
      ></upload>
      <div class="btn-con" style="margin: 16px">
        <button class="btn pre-btn" type="button" @click="preTab">上一步</button>
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
      <van-popup v-model="showPickerProvince" round position="bottom">
        <van-picker
          show-toolbar
          value-key="provinceName"
          :columns="provinceList"
          @cancel="showPickerProvince = false"
          @confirm="onConfirmPickerProvince"
        />
      </van-popup>
      <van-popup v-model="showPickerCity" round position="bottom">
        <van-picker
          show-toolbar
          value-key="cityName"
          :columns="cityAccountList"
          @cancel="showPickerCity = false"
          @confirm="onConfirmPickerCity"
        />
      </van-popup>
      <van-popup v-model="showPickerBank" round position="bottom">
        <van-picker
          show-toolbar
          value-key="bankname"
          :columns="bankList"
          @cancel="showPickerBank = false"
          @confirm="onConfirmPickerBank"
        />
      </van-popup>
      <van-popup v-model="showPickerBranch" round position="bottom">
        <van-picker
          show-toolbar
          value-key="branchName"
          :columns="bankBranchList"
          @cancel="showPickerBranch = false"
          @confirm="onConfirmPickerBranch"
        />
      </van-popup>
      <van-popup v-model="showPickerIdcardtype" round position="bottom">
        <van-picker
          show-toolbar
          value-key="label"
          :columns="idcardtypeAccountList"
          @cancel="showPickerIdcardtype = false"
          @confirm="onConfirmIdcardtype"
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
      showPickerProvince: false,
      cityAccountList: [], // 开户城市
      showPickerCity: false,
      bankList: [], //开户银行
      showPickerBank: false,
      bankBranchList: [], // 开户银行支行
      showPickerBranch: false,

      accountItem: {
        accountname: '', // 开户人姓名
        accounttype: '', //账户类型
        accounttypeP: '',
        province: '', //省份
        provinceP: '',
        city: '', //城市
        cityP: '',
        bankid: '', //开户银行
        bankidP: '',
        branchid: '', //开户银行支行
        branchidP: '',
        idcardtype: '', //	持卡人证件类型
        idcardtypeP: '',
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
      showPickerIdcardtype: false,
      idcardtypeAccountList: [
        { label: '身份证', value: '1' },
        { label: '护照', value: '2' },
        { label: '军人证', value: '3' },
      ],
    }
  },
  methods: {
    // 开户省份
    onConfirmPickerProvince(item) {
      this.accountItem.province = item.provinceCode
      this.accountItem.provinceP = item.provinceName
      this.showPickerProvince = false
    },
    // 开户城市
    onConfirmPickerCity(item) {
      this.accountItem.province = item.cityCode
      this.accountItem.provinceP = item.cityName
      this.showPickerCity = false
    },
    // 开户银行
    onConfirmPickerBank(item) {
      this.accountItem.bankid = item.cityCode
      this.accountItem.bankidP = item.cityName
      this.showPickerBank = false
    },
    // 开户银行支行
    onConfirmPickerBranch(item) {
      this.accountItem.branchid = item.branchId
      this.accountItem.branchidP = item.branchName
      this.showPickerBranch = false
    },
    // 证件类型
    onConfirmIdcardtype(item) {
      this.accountItem.idcardtype = item.value
      this.accountItem.idcardtypeP = item.label
      this.showPickerIdcardtype = false
    },
    onConfirmPicker(item) {
      this.accountItem.accounttype = item.value
      this.accountItem.accounttypeP = item.label
      this.changeaccounttype(item.value)
      this.showPicker = false
    },
    accountfrontimgFun(val) {
      this.accountItem.accountfrontimg = val
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
