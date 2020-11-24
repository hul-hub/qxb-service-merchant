<template>
  <div class="upload-container">
    <div class="upload-con">
      <div class="upload-item">
        <div class="img-con">
          <van-uploader :before-read="beforeRead" :after-read="afterBead">
            <div class="url-con">
              <img class="upload-img" v-if="imgUrl" :src="imgUrl" alt="" />
              <img class="icon-img" v-else :src="uploadIcon" alt="" />
            </div>
          </van-uploader>
          <div class="upload-detail">
            <span>{{ label }}，只支持png、jpg格式，小于1M</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadImg } from 'network/merchant'
import uploadIcon from 'assets/img/content/upload.png'
export default {
  name: 'Upload',
  props: {
    value: {
      default: '',
    },
    label: {
      type: String,
      required: true,
      default: '选择图片',
    },
  },
  data() {
    return {
      imgUrl: this.value,
      uploadIcon: uploadIcon,
    }
  },

  methods: {
    // 返回布尔值
    beforeRead(file) {
      console.log(file);
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        return false
      }
      return true
    },
    afterBead(file, detail) {
      console.log(file)
      let formData = new FormData()
      formData.append('file', file.file)
      this.uploadImg(formData)
    },
    uploadImg(formData) {
      uploadImg(formData).then((res) => {
        console.log(res)
        let data = res
        this.imgUrl = data.extend.url
        this.$emit('childUpload', this.imgUrl)
      })
    },
  },
}
</script>

<style scoped>
.upload-item {
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  text-align: center;
  margin: 20px 0;
}
.img-con {
  padding: 20px 0;
}
.url-con {
  border: 1px solid #dbdbdb;
  width: 100px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.url-con .icon-img {
  height: 48px;
  width: 48px;
}
.url-con .upload-img {
  width: 100px;
  height: 60px;
  object-fit: co;
}
.upload-detail {
  margin-top: 10px;
  color: #adacac;
}
</style>