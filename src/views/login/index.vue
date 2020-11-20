<template>
  <div class="container login-container">
    <div class="bind-login">
      <div class="logo-contain"></div>
      <form
        action=""
        method="post"
        id="searchFrm"
        lay-filter="searchFrm"
        class="form-pane"
      >
        <div class="form-item">
          <div class="inline">
            <div class="form-item-content">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span>账号</span>
                </div>
                <input type="text" v-model="serprocode" class="input-inner" />
              </div>
            </div>
          </div>
          <div class="inline">
            <div class="form-item-content">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span>密码</span>
                </div>
                <input
                  type="password"
                  v-model="password"
                  class="input-inner"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <div class="inline">
            <button type="button" @click="okFun">登陆</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { setToken } from 'util/auth'
export default {
  data() {
    return {
      serprocode: '',
      password: '',
    }
  },
  methods: {
    okFun() {
      setToken('5921110001')
      this.$router.push('/home')
    },
  },
}
</script>

<style>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 24px;
  /* background-image: url(../../assets/img/login/login-bg.jpg); */
  background-size: cover;
}
.bind-login {
  width: 90%;
}
.logo-contain {
  display: flex;
  justify-content: center;
  margin: 110px 0;
}
.logo-contain > image {
  height: 120px;
  width: 120px;
}
.form-pane {
  width: 100%;
}
.form-item {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
.inline {
  margin-bottom: 22px;
}
.form-item-content {
  line-height: 40px;
  position: relative;
  font-size: 14px;
}
.input-group {
  line-height: normal;
  display: inline-table;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
.input-group-prepend {
  background-color: #f5f7fa;
  color: #909399;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 20px;
  width: 1px;
  white-space: nowrap;
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group-prepend > span {
  margin-left: 5px;
}
.input-inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: block !important;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
button {
  color: #fff;
  background-color: #409eff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #409eff;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  width: 100%;
}
</style>