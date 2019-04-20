<template>
  <div id="app">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            <router-link to="/HelloWorld">Vue项目首页</router-link>
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            <router-link to="/TodoList">TodoList</router-link>
            
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            <router-link to="/TodoList_Easy">TodoList_Easy</router-link>
            
        </MenuItem>
    </Menu>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
          return {
              theme1: 'light'
          }
      }
}
</script>

<style lang="stylus" scoped>
app, html body 
    padding: 0;
    margin: 0;

#app
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    background-image: url('./assets/img/bg.jpeg')
    background-size: cover;
    background-position: 50%;
    font: 20px microsoft yahei;
    color: #4d4d4d;
    //color: #2c3e50;
    font-smoothing: antialiased;
    font-family: 'Avenir',Helvetica,Arial,sans-serif;
    font-weight: 300;
    text-align: center;
    user-select: none;

</style>
