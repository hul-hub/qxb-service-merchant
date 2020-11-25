<template>
  <div class="contacts-container">
    <van-form @submit="onSubmit">
      <van-field
        readonly
        clickable
        label="联系人类型"
        :value="contactsItem.contactstypeP"
        @click="showPicker = true"
        :rules="[{ required: true, message: '请选择联系人类型' }]"
      />
      <van-field
        v-model="contactsItem.mobile"
        label="手机号"
        :rules="[{ required: true, message: '请填写联系人手机号' }]"
      />
      <van-field
        v-model="contactsItem.email"
        label="邮箱"
        :rules="[{ required: true, message: '请填写联系人邮箱' }]"
      />
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
          :columns="contactstypeList"
          @cancel="showPicker = false"
          @confirm="onConfirmPicker"
        />
      </van-popup>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  components: {},
  data() {
    return {
      contactsItem: {
        contactstype: '', //联系人类型
        contactstypeP: '',
        mobile: '', //联系人手机号
        email: '', //联系人邮箱
        contactsname: '', //联系人姓名
        idcodetype: '', //证件类型
        idcode: '', //证件号码
        idvaliddate: [],
        idvalidstartdate: '',
        idvalidenddate: '',
        conidfrontimg: '', //身份证正面链接
        conidbackimg: '', //身份证反面链接
      },
      showPicker: false,
      contactstypeList: [
        { label: '法人', value: '1' },
        { label: '负责人', value: '2' },
      ],
    }
  },
  methods: {
    onConfirmPicker(item) {
      this.contactsItem.contactstype = item.value
      this.contactsItem.contactstypeP = item.label
      this.showPicker = false
    },
    onSubmit(values) {
      this.$emit('childContactsFun', this.contactsItem, 1)
    },
    preTab() {
      this.$emit('childContactsFun', this.contactsItem, 2)
    },
  },
  created() {},
}
</script>

<style scoped>
</style>
