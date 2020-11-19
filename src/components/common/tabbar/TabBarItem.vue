<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-show="!isActive"><slot name="icon"></slot></div>
    <div class="item-active-icon" v-show="isActive">
      <slot name="active-icon"></slot>
    </div>
    <!-- <div class="item-text" :style="activeStyle"><slot name="text"></slot></div> -->
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    // activeStyle() {
    //   return this.isActive ? { color: 'red' } : {}
    // },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)
    },
  },
}
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
  background-color: #2ea44f;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-right: 1px solid #2ab952;
}

.item-icon img,
.item-active-icon img {
  width: 30px;
  height: 30px;
  margin-top: 9px;
  vertical-align: middle;
}

/* .item-text {
  font-size: 12px;
  margin-top: 3px;
  color: #333;
} */
</style>