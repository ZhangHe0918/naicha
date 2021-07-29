<template>
  <div>
  <div id="nav">
    <ul>
    <router-link to="/index" tag="li">
    <img src="~@\assets\img\tabbar\home.png">
    <span>首页&nbsp;</span>
    </router-link> 
    <router-link to="/order" tag="li">
    <img alt="" v-bind:src="item.icon" v-show="index!=num">
    <span>&nbsp;&nbsp;&nbsp;点单&nbsp;&nbsp;&nbsp;
      </span>
      </router-link>
    <router-link to="/shop" >
    <img src="~@\assets\img\tabbar\order.png">
    <span>&nbsp;&nbsp;&nbsp;订单&nbsp;&nbsp;&nbsp;

    </span>
    </router-link>
    <router-link to="/my" tag="li">
    <img src="~@\assets\img\tabbar\my.png">
    <span>&nbsp;&nbsp;&nbsp;我的&nbsp;&nbsp;&nbsp;</span>
      </router-link>
    </ul>
  </div>
  <router-view />
  </div>
</template>

<script>
export default {
  data(){
    return{
     //底部导航栏的切换
     navPicArray:[
       {
         icon:require('~@\assets\img\tabbar\home.png'),
         active:require('~@\assets\img\tabbar\home_selected.png'),
         path:"/index",
         name:"首页"
       },
       {
        icon:require('~@\assets\img\tabbar\index.png'),
         active:require('~@\assets\img\tabbar\index_selected.png'),
         path:"/order",
         name:"分类"
       },
       {
        icon:require('~@\assets\img\tabbar\order.png'),
         active:require('~@\assets\img\tabbar\order_selected.png'),
         path:"/shop",
         name:"首页"
       },
       {
        icon:require('~@\assets\img\tabbar\my.png'),
         active:require('~@\assets\img\tabbar\my_selected.png'),
         path:"/my",
         name:"我的"
       },
     ],
     num:0,
    }
  },
  methods:{
    changeImg(index){
      console.log("index改变之前"+index)
     
     this.num=index
     console.log("index改变之后"+index)
  
    }
  }

}

</script>

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
