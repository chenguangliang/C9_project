<template>
  <div id="app">
    <section style="background: #f4f4f4">
      <transition name="fade"><!--这是为了进来和离开的动画-->
        <keep-alive>  <!--这里是为了缓存,首页等页面,需要在router中加 meta: {keepAlive: true}-->
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="fade"><!--其他页不缓存-->
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
</style>
