<template>
  <div>
  <div id="nav">
    <ul>
    <router-link to="/index" tag="li" active-class="">
    <img src="~@\assets\img\tabbar\home.png">
    <br>
    <span>首页</span>
    </router-link> 
    <!-- <router-link to="/order" tag="li">
    <img src="~@\assets\img\tabbar\index.png">
    <br>
    <span>点单</span>
      </router-link>
    <router-link to="/shop" >
    <img  src="~@\assets\img\tabbar\order.png">
    <br><span>订单</span>
    </router-link>
    <router-link to="/my" tag="li">
    <img src="~@\assets\img\tabbar\my.png">
    <br><span>我的</span>
      </router-link>
    </ul>
  </div> -->
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
