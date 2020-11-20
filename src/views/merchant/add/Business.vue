<template>
  <div class="business-container">
    <van-uploader :before-read="beforeRead"/>
  </div>
</template>

  <script>
export default {
  name: 'Business',
  components: {},
  data() {
    return {}
  },
  methods: {
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== 'image/jpeg') {
        Toast('请上传 jpg 格式图片')
        return false
      }
      return true
    },
    // 返回 Promise
    asyncBeforeRead(file) {
      console.log(file);
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/jpeg') {
          Toast('请上传 jpg 格式图片')
          reject()
        } else {
          let img = new File(['foo'], 'bar.jpg', {
            type: 'image/jpeg',
          })
          resolve(img)
        }
      })
    },
  },
  created() {},
}
</script>

<style scoped>
</style>
