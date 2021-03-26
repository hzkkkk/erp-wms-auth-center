<template>
  <div>
    <app-header></app-header>
    <div class="mxg-main">
      <!-- 使用 <router-view> 主区域组件渲染 -->
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>


<script>
import AppHeader from "@/components/layout/AppHeader";
import AppFooter from "@/components/layout/AppFooter";

export default {
  components: { AppHeader, AppFooter },
};
</script>


<style >
.mxg-main {
  /* 自动计算高度 100vh 整屏高度-（头部高83+底部高61） */
  /* min-height: calc(100vh - 144px); */
  min-height: 700px;
  width: 100%;
}
</style>