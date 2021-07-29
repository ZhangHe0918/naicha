<template>
  <div>
  <div id="nav">
    <ul>
    <router-link to="/index" tag="li">
    <img src="naicha\src\assets\img\tabbar\home.png">
    <span>首页&nbsp;&nbsp;&nbsp;</span>
    </router-link> 
    <router-link to="/order" ><span>&nbsp;&nbsp;&nbsp;点单&nbsp;&nbsp;&nbsp;</span></router-link>
    <router-link to="/shop" ><span>&nbsp;&nbsp;&nbsp;订单&nbsp;&nbsp;&nbsp;</span></router-link>
    <router-link to="/my" ><span>&nbsp;&nbsp;&nbsp;我的&nbsp;&nbsp;&nbsp;</span></router-link>
    </ul>
  </div>
  <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #0000002f;
  text-decoration: none;
 
}

#nav {
  ul
  {
position:fixed;
z-index:999;
bottom:0px;
  }
  height:10px;
  a {
    font-weight:bold;
    font-size:x-large;
    color: #494a4b59;
    text-decoration: none;
    bottom: 0px;
    
    
    


    

    &.router-link-exact-active {

      color: #000000;
      text-decoration: none;
      font-weight:bold;

      
    }
  }
}
</style>
