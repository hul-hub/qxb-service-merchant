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
      businessItem: null,
      serviceMerchantItem: null,
      shopItem: null,
      legalItem: null,
      accountItem: null,
      contactsItem: null,
    }
  },
  methods: {
    childMerchantFun(item) {
      console.log('childMerchantFun')
      console.log(item)
      this.serviceMerchantItem = { ...item }
      this.active++
    },
    // 营业信息
    childBusinessFun(arg) {
      console.log('childBusinessFun')
      console.log(arg)
      if (arg[1] === 2) {
        this.active--
      } else {
        this.businessItem = { ...arg[0] }
        this.active++
      }
    },
    // 经营信息
    childShopFun(arg) {
      console.log('childShopFun')
      console.log(arg)
      if (arg[1] === 2) {
        this.active--
      } else {
        this.shopItem = { ...arg[0] }
        this.active++
      }
    },
    // 法人信息
    childLegalFun(arg) {
      console.log('childLegalFun')
      console.log(arg)
      if (arg[1] === 2) {
        this.active--
      } else {
        this.legalItem = { ...arg[0] }
        this.active++
      }
    },
    // 开户信息
    childAccountFun(arg) {
      console.log('childAccountFun')
      console.log(arg)
      if (arg[1] === 2) {
        this.active--
      } else {
        this.accountItem = { ...arg[0] }
        this.active++
      }
    },
    // 联系人信息
    childContactsFun(arg) {
      console.log('childContactsFun')
      console.log(arg)
      if (arg[1] === 2) {
        this.active--
      } else {
        this.contactsItem = { ...arg[0] }
        this.okFun()
      }
    },
    okFun() {
      let params = {}
      params['businesslicense'] = this.businessItem.businesslicense
      params['validstartdate'] = ''
      params['validenddate'] = ''
      params['islongtime'] = this.businessItem.islongtime
      params['businessstarthours'] = this.businessItem.businessstarthours
      params['businessendhours'] = this.businessItem.businessendhours
      params['serproname'] = this.serviceMerchantItem.serproname
      params['serprotype'] = this.serviceMerchantItem.serprotype
      params['serproshortname'] = this.serviceMerchantItem.serproshortname
      params['upserprocode'] = this.serviceMerchantItem.upserprocode
      params['serprolevel'] = this.serviceMerchantItem.serprolevel
      params['phone'] = this.serviceMerchantItem.phone
      params['merchanttype'] = this.shopItem.merchanttype
      params['businessname'] = this.shopItem.businessname
      params['businesstype'] = this.shopItem.businesstype
      params['status'] = '9'
      // 服务商1 ，商户2
      params['servicetype'] = '2'
      // 商户信息对象
      params['serProAddress.province'] = this.serviceMerchantItem.province
      params['serProAddress.city'] = this.serviceMerchantItem.city
      params['serProAddress.county'] = this.serviceMerchantItem.county
      params['serProAddress.address'] = this.serviceMerchantItem.address
      params['serProAddress.status'] = this.serviceMerchantItem.status
      params['serProAddress.flag'] = this.serviceMerchantItem.flag
      params['serProImage.accountopenimg'] = this.shopItem.accountopenimg
      params[
        'serProImage.specialbusinessimg'
      ] = this.shopItem.specialbusinessimg
      // 处理商户协议多张图片用","隔开
      let imgArr = []
      if (this.shopItem.serproagreementimg1) {
        imgArr.push(this.shopItem.serproagreementimg1)
      }
      if (this.shopItem.serproagreementimg2) {
        imgArr.push(this.shopItem.serproagreementimg2)
      }
      if (this.shopItem.serproagreementimg3) {
        imgArr.push(this.shopItem.serproagreementimg3)
      }
      if (this.shopItem.serproagreementimg4) {
        imgArr.push(this.shopItem.serproagreementimg4)
      }
      params['serProImage.serproagreementimg'] = imgArr.join(',')
      params['serProImage.businesslicenes'] = this.businessItem.businesslicenes
      params['serProImage.idfrontimg'] = this.legalItem.idfrontimg
      params['serProImage.idbackimg'] = this.legalItem.idbackimg
      params['serProImage.bodyimg'] = this.shopItem.bodyimg
      params['serProImage.businessimg'] = this.shopItem.businessimg
      params['serProImage.otherimg1'] = this.shopItem.otherimg1
      params['serProImage.accountfrontimg'] = this.accountItem.accountfrontimg
      params['serProImage.accountbackimg'] = this.accountItem.accountbackimg
      params['serProImage.indentityfrontimg'] = '-'
      params['serProImage.indentitybackimg'] = '-'
      params['serProImage.otherimg2'] = '-'
      params['serProImage.otherimg3'] = '-'
      params['serProImage.otherimg4'] = '-'
      params['serProImage.taximg'] = this.businessItem.taximg
      params['serProImage.organizationimg'] = this.businessItem.organizationimg
      params['serProImage.storecashierphoto'] = this.shopItem.storecashierphoto
      params[
        'serProImage.settleauthletterphoto'
      ] = this.accountItem.settleauthletterphoto
      params[
        'serProImage.settleauthidcardfront'
      ] = this.accountItem.settleauthidcardfront
      params[
        'serProImage.settleauthidcardback'
      ] = this.accountItem.settleauthidcardback
      params[
        'serProImage.signauthletterphoto'
      ] = this.accountItem.signauthletterphoto
      // serProBank['serprocode'] = "";
      params['serProBank.accounttype'] = this.accountItem.accounttype
      params['serProBank.province'] = this.accountItem.province
      params['serProBank.city'] = this.accountItem.city
      params['serProBank.bankid'] = this.accountItem.bankid
      params['serProBank.bankname'] = ''
      params['serProBank.branchname'] = ''
      params['serProBank.branchid'] = this.accountItem.branchid
      params['serProBank.accountcode'] = this.accountItem.accountcode
      params['serProBank.accountname'] = this.accountItem.accountname
      params['serProBank.idcardtype'] = this.accountItem.idcardtype
      params['serProBank.idcard'] = this.accountItem.idcard
      params['serProBank.bcvalidstartdate'] = ''
      params['serProBank.bcvalidenddate'] = ''
      params['serProBank.address'] = this.accountItem.address
      params['serProBank.tel'] = this.accountItem.tel
      if (this.contactsItem.iscontactstype) {
        params[
          'serProContacts[1].contactstype'
        ] = this.contactsItem.contactstype
        params['serProContacts[1].mobile'] = this.contactsItem.mobile
        params['serProContacts[1].email'] = this.contactsItem.email
        params[
          'serProContacts[1].contactsname'
        ] = this.contactsItem.contactsname
        params['serProContacts[1].idcode'] = this.contactsItem.idcode
        params['serProContacts[1].idcodetype'] = this.contactsItem.idcodetype
        params[
          'serProContacts[1].conidfrontimg'
        ] = this.contactsItem.conidfrontimg
        params[
          'serProContacts[1].conidbackimg'
        ] = this.contactsItem.conidbackimg
        params['serProContacts[1].idvalidstartdate'] = ''
        params['serProContacts[1].idvalidenddate'] = ''
      }
      //联系人类型为法人的时候只传一个对象
      params['serProContacts[0].contactstype'] = '1'
      params['serProContacts[0].contactsname'] = this.legalItem.contactsname
      params['serProContacts[0].idcodetype'] = this.legalItem.idcodetype
      params['serProContacts[0].idcode'] = this.legalItem.idcode
      params['serProContacts[0].conidfrontimg'] = this.legalItem.idfrontimg
      params['serProContacts[0].conidbackimg'] = this.legalItem.idbackimg
      params['serProContacts[0].mobile'] = this.contactsItem.mobile
      params['serProContacts[0].email'] = this.contactsItem.email
      params['serProContacts[0].idvalidstartdate'] = ''
      params['serProContacts[0].idvalidenddate'] = ''
      console.log(params)
    },
  },
  created() {},
}
</script>

<style scoped>
</style>
