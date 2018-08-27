<template>
    <div style="width: 1200px;margin: 0 auto">
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b" style="width: 100%">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">他们的C9故事</template>
            <el-menu-item index="2-1">故事1</el-menu-item>
            <el-menu-item index="2-2">故事2</el-menu-item>
            <el-menu-item index="2-3">故事3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">故事4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">印刷知识</el-menu-item>
          <el-menu-item index="4"><a href="javascript:;" target="_blank">C9重要伙伴</a></el-menu-item>
          <el-menu-item index="5" disabled>联系我们</el-menu-item>
          <el-menu-item index="6" style="float: right;">登录</el-menu-item>
          <el-menu-item index="7" style="float: right;">注册</el-menu-item>
        </el-menu>
      </el-header>
    </div>
</template>
<script type="text/ecmascript-6">

    export default {
        name: 'header_top',
        mixins: [],
        data() {
          return {
            activeIndex: '1',
            activeIndex2: '1'
          };
        },
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        },
        components: {},
        beforeMount(){
        },
        mounted(){
        },
        watch: {},
    }
</script>

<style scoped>

</style>
