<template>
  <div class="business-container">
    <upload></upload>
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
    return {}
  },
  methods: {},
  created() {},
}
</script>

<style scoped>
.business-container {
  margin-top: 20px;
}
</style>
