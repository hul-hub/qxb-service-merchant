<template>
  <div class="home-container">
    <div class="head-con">
      <div>
        <h2>胡掌柜</h2>
      </div>
      <div class="money-con fw-con">
        <h3>分润金额：100</h3>
        <button class="btn">体现</button>
      </div>
      <div class="money-con">
        <h3>已体现：100</h3>
        <h3 class="not-money">未体现：100</h3>
      </div>
    </div>
    <div class="con-content">
      <div class="time-container">
        <img src="~assets/img/content/time.svg" alt="" />
        <input placeholder="开始时间" v-model="startTime" />
      </div>
    </div>
    <template>
      <van-popup v-model="show" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="show = false"
          @confirm="confirmPicker"
        />
      </van-popup>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      startTime: '',
      show: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    }
  },
  methods: {
    confirmPicker() {},
    // 显示弹窗
    showPopup() {
      this.show = true
    },
  },
}
</script>

<style scoped>
.head-con {
  background-color: #99cc66;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.money-con {
  margin-top: 1rem;
}
.fw-con {
  position: relative;
  height: 1.6rem;
}
.fw-con h3 {
  height: 1.6rem;
  line-height: 1.6rem;
}
.fw-con button {
  position: absolute;
  left: 7rem;
  top: 0;
  bottom: 0;
}
.money-con h3 {
  display: inline-block;
}
.not-money {
  margin-left: 1rem;
  color: #409eff;
}
.btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background-color: #409eff;
  border-color: #409eff;
  border: 1px solid #409eff;
  /* color: #606266; */
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 4px 14px;
  font-size: 14px;
  border-radius: 4px;
}
.time-container {
  height: 24px;
  line-height: 24px;
}
.time-container img {
  /* height: 100%; */
  height: 16px;
  vertical-align: middle;
  margin-left: 10px;
}
.time-container input {
  border: none;
}
</style>