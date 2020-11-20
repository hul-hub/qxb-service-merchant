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
        <div class="input-con">
          <input
            placeholder="开始日期"
            @focus="startTimeOnFocus"
            v-model="startTime"
            ref="startInput"
          />
          <span>至</span>
          <input
            placeholder="结束日期"
            @focus="endTimeOnFocus"
            ref="endInput"
            v-model="endTime"
          />
        </div>
        <button class="btn right-btn">查询</button>
      </div>
    </div>
    <div class="table-container">
      <table cellspacing="0" cellpadding="0">
        <tr>
          <th>商户名称</th>
          <th>日期</th>
          <th>日期</th>
          <th>交易金额</th>
          <th>分润金额</th>
        </tr>
        <tr>
          <td>商户A</td>
          <td>2020-11-20</td>
          <td>2020-11-20</td>
          <td>10000.00</td>
          <td>5800</td>
        </tr>
        <tr>
          <td>商户B</td>
          <td>2020-11-20</td>
          <td>2020-11-20</td>
          <td>10000.00</td>
          <td>5800</td>
        </tr>
      </table>
      <pagination
        :total="total"
        :display="display"
        :current="current"
        @pagechange="pagechange"
      ></pagination>
    </div>
    <template>
      <van-popup v-model="startShow" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="startShow = false"
          @confirm="confirmStartPicker"
        />
      </van-popup>
      <van-popup v-model="endShow" position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="endShow = false"
          @confirm="confirmEndPicker"
        />
      </van-popup>
    </template>
  </div>
</template>

<script>
import Pagination from 'common/pagination/Pagination'
export default {
  name: 'Home',
  components: {
    Pagination,
  },
  data() {
    return {
      //分页
      total: 20,
      display: 8,
      current: 1,
      // 时间
      startTime: '',
      endTime: '',
      startShow: false,
      endShow: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    }
  },
  methods: {
    pagechange() {},
    startTimeOnFocus() {
      this.$refs.startInput.blur()
      this.startShow = true
    },
    endTimeOnFocus() {
      this.$refs.endInput.blur()
      this.endShow = true
    },
    // 确认选择的时间
    confirmStartPicker(val) {
      let year = val.getFullYear()
      let month = val.getMonth() + 1
      let day = val.getDate()
      let hour = val.getHours()
      let minute = val.getMinutes()
      if (month >= 1 && month <= 9) {
        month = `0${month}`
      }
      if (day >= 1 && day <= 9) {
        day = `0${day}`
      }
      this.className = 'timeClass'
      this.startTime = `${year}-${month}-${day}`
      this.startShow = false
    },
    // 确认选择的时间
    confirmEndPicker(val) {
      let year = val.getFullYear()
      let month = val.getMonth() + 1
      let day = val.getDate()
      let hour = val.getHours()
      let minute = val.getMinutes()
      if (month >= 1 && month <= 9) {
        month = `0${month}`
      }
      if (day >= 1 && day <= 9) {
        day = `0${day}`
      }
      this.className = 'timeClass'
      this.endTime = `${year}-${month}-${day}`
      this.endShow = false
    },
  },
  mounted() {},
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
  vertical-align: sub;
  margin-left: 10px;
}
.time-container input {
  border: none;
}
.time-container div {
  display: inline-block;
}
.input-con input {
  width: 6.6rem;
}
.input-con input:first-child {
  margin-left: 20px;
}
.input-con span {
  display: inline-block;
  width: 40px;
}
.right-btn {
  float: right;
  margin-right: 5px;
}
input::placeholder {
  color: #d1d1d1;
  left: 30px;
  text-align: center;
}
table {
  width: 100%;
  /* // 下面设置表格整体的边框，左上 */
  border-top: 1px solid #e8eaec;
  border-left: 1px solid #e8eaec;
}
tr {
  width: 100%;
  /* //每一行高度 */
  height: 40px;
}
th {
  border-right: 1px solid #e8eaec;
  border-bottom: 1px solid #e8eaec;
}
td {
  /* // 因为我的一行分了五个，所以是20% */
  width: 20%;
  /* // 下面设置每个格子边框，右下 */
  border-right: 1px solid #e8eaec;
  border-bottom: 1px solid #e8eaec;
  padding-left: 2px;
}
</style>