<template>
  <div id="app">
    <div id="nav">
      <router-link to="/HelloWorld">Vue项目首页</router-link> | 
      <router-link to="/TodoList">TodoList</router-link> | 
      <router-link to="/TodoList_Easy">TodoList_Easy</router-link>
    </div>
    <div>
    <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style  lang='stylus'>
html body
  padding 0
  margin 0
  top 0 
  left 0
#app 
    margin 0
    padding 60px 0 0 0
    width 100%
    height 100%
    position absolute
    left 0
    right 0
    background-image url("./assets/images/bg.jpeg")
    background-size cover
    background-position center
    font 14px 'microsoft yahei'
    color: #4d4d4d;
    font-smoothing:antialiased;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-weight 300
    text-align: center;
 
#nav
  padding-bottom 20px
</style>
