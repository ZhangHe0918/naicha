<template>
  <div>
  <div id="nav">
    <ul>
    <router-link to="/index" >首页&nbsp;&nbsp;&nbsp;</router-link> 
    <router-link to="/order" >&nbsp;&nbsp;&nbsp;点单&nbsp;&nbsp;&nbsp;</router-link>
    <router-link to="/shop" >&nbsp;&nbsp;&nbsp;订单&nbsp;&nbsp;&nbsp;</router-link>
    <router-link to="/my" >&nbsp;&nbsp;&nbsp;我的&nbsp;&nbsp;&nbsp;</router-link>
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
