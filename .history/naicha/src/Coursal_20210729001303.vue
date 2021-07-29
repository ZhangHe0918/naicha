<template>
  <div class="coursel">
    <div class="coursel-view">
      <img v-for="(item,index) in coursellist " v-show="index===img" :key="index" src="item" alt="">
      <ul class="coursel-page">
        <li  v-for="(v,i) in coursellist" :key="i"></li>
      </ul>

  </div>
  
  </div>
  
</template>

<script>
export default {
data(){
return{
coursellist:[

require("naicha\src\assets\img\home\home_nav1.png"),
require("naicha\src\assets\img\home\home_nav2.png"),
require("naicha\src\assets\img\home\home_nav3.png")
],

img:0

}

}
}
methods:{

  go()
  {

    setInterval( () => {
    this.img++;
     if(this.img == this.coursellist.length)  this.img =0;
      
    },2000)
  }
}
mounted()
{
this.go()

}

</script>

<style lang="less" scoped>
.active{

  background: #000; !important;
}
</style>

