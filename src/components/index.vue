<template>
  <div class="main">
    <div class="top">
        <div class="header">
            <mt-swipe :auto="1000">
                <mt-swipe-item id="ter" v-for="(i,index) in data.banner" :key="index">
                        <img :src="i.aa" alt="">
                </mt-swipe-item>
            </mt-swipe>
              <div class="nav">
                <input type="text" placeholder="京东生鲜超级类">
            </div>  
        </div>
        <div class="banner">
            <img :src="data.nav" alt="">
        </div> 
         <nav>
            <mt-swipe :auto="0">
                <mt-swipe-item>
                    <ul>
                        <li v-for="(i,index) in data.tab" :key="index">
                            <img :src="i.img" alt="">
                            <span>{{i.name}}</span>
                        </li>
                    </ul>
                </mt-swipe-item>
                <mt-swipe-item>
                    <ul>
                        <li v-for="(i,index) in data.tab" :key="index">
                            <img :src="i.img" alt="">
                            <span>{{i.name}}</span>
                        </li>
                    </ul>
                </mt-swipe-item>
            </mt-swipe>    
        </nav> 
         <div class="product">
             <div class="tit1">
                <p>
                    <img src="../static/icon/jd_news.png" alt=""> 
                    热 iPhone手机最神奇的功能    <span>|更多</span>
                </p>
            </div>
             <div class="pro-main1">
                <div class="pro-main1-top">
                    <img src="../static/icon/miaosha.png" alt=""> 
                    <p class="pro-main1-top-time">14点专场
                        <span>01</span>:
                        <span>53</span>
                        <span>48</span>
                    </p>
                    <p class="pro-main1-top-link">精选尖货轮翻炒》</p>
                </div>
                <div class="pro-main1-bottom">
                    <ul>
                        <li v-for="(i,index) in data.fastNews" :key="index">
                            <img :src="i.img" alt=""> 
                            <b>{{i.currentPrice}}</b>
                            <span>{{i.originPrice}}</span>
                        </li>
            
                    </ul>
                </div>
            </div>
            <div class="tit2">
                    <img src="../static/images/tit.jpg" alt=""> 
            </div>
             <div class="menu">
                <ul>
                    <li v-for="(i,index) in data.menu" :key="index"><a href="#"><img :src="i.aa" alt=""></a></li>
                </ul>
            </div>
            <div class="hai">
                <img src="../static/images/hai.jpg" alt="">
            </div> 
             <div class="pro-lei-list">
                <ul>
                    <li v-for="(i,index) in data.lovelife" :key="index"><a href="#"><img :src="i" alt=""></a></li>
                </ul>

            </div> 
        </div> 
        <div class="like-live">
            <p><img src="../static/hr/6.jpg" alt=""></p>
            <ul>
                 <li v-for="(i,index) in data.like" :key="index"><a href="#"><img :src="i.ul" alt=""></a></li>
            </ul>
            <ol>
                <li v-for="(i,index) in data.like" :key="index"><a href="#"><img :src="i.ol" alt=""></a></li>
            </ol>
            <div class="xuan">
                 <mt-swipe :auto="0">
                    <mt-swipe-item v-for="(i,index) in data.bannerList" :key="index"><a href="#"><img :src="i.banner" alt=""></a></mt-swipe-item>
                </mt-swipe>
            </div>
        </div> 
         <div class="like-live  by-cheap">
            <p><img src="../static/hr/4.jpg" alt=""></p>
            <ul>
                 <li v-for="(i,index) in data.cheap" :key="index"><a href="#"><img :src="i.ul" alt=""></a></li>
            </ul>
        </div>      
         <div class="like-live pingzhi">
            <p><img src="../static/hr/2.jpg" alt=""></p>
             <ul>
                <li v-for="(i,index) in data.pingzhiuls" :key="index"><a href="#"><img :src="i" alt=""></a></li>
            </ul>
            <ol>
                <li v-for="(i,index) in data.pingzhiols" :key="index"><a href="#"><img :src="i" alt=""></a></li>
            </ol> 
            <div class="xuan">
                <mt-swipe :auto="0">
                    <mt-swipe-item v-for="(i,index) in data.bannerList" :key="index"><a href="#"><img :src="i.banner" alt=""></a></mt-swipe-item>
                </mt-swipe>
            </div>
        </div>    
         <div class="like-live teshe">
            <p><img src="../static/hr/6.jpg" alt=""></p>
            <ul>
                 <li v-for="(i,index) in data.like" :key="index"><a href="#"><img :src="i.ul" alt=""></a></li>
            </ul>
            <ol>
                <li v-for="(i,index) in data.like" :key="index"><a href="#"><img :src="i.ol" alt=""></a></li>
            </ol>
            <div class="xuan">
                 <mt-swipe :auto="0">
                    <mt-swipe-item v-for="(i,index) in data.bannerList" :key="index"><a href="#"><img :src="i.banner" alt=""></a></mt-swipe-item>
                </mt-swipe>
            </div>
        </div> 
        <div class="like-live teshe">
            <p><img src="../static/hr/6.jpg" alt=""></p>
            <ul>
                 <li v-for="(i,index) in data.shopping" :key="index"><a href="#"><img :src="i.ul" alt=""></a></li>
            </ul>
            <ol>
                <li v-for="(i,index) in data.shopping" :key="index"><a href="#"><img :src="i.ol" alt=""></a></li>
            </ol>
            <ol>
                <li v-for="(i,index) in data.shopping" :key="index"><a href="#"><img :src="i.ol" alt=""></a></li>
            </ol>
            <div class="xuan">
                 <mt-swipe :auto="0">
                    <mt-swipe-item v-for="(i,index) in data.bannerList" :key="index"><a href="#"><img :src="i.banner" alt=""></a></mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
        <div class="like-live dong">
              <p><img src="../static/hr/7.jpg" alt=""></p>
              <ul>
                <li><a href="#"><img src="../static/images/m1.jpg" alt=""></a></li>
                <li><a href="#"><img src="../static/images/m2.jpg" alt=""></a></li>
              </ul> 
              <ol>
                <li><a href="#"><img src="../static/images/ll5.jpg" alt=""></a></li>
                <li><a href="#"><img src="../static/images/ll6.jpg" alt=""></a></li>
                <li><a href="#"><img src="../static/images/ll7.jpg" alt=""></a></li>
                <li><a href="#"><img src="../static/images/ll8.jpg" alt=""></a></li>
            </ol>
        </div>
        <div class="like-live goodshop">
              <p><img src="../static/hr/1.jpg" alt=""></p>
            <ul>
                <li>
                    <p>电脑配件</p>
                    <span>极客的选择</span>
                    <div class="pro">
                        <div class="left"><img src="../static/images/j1.jpg" alt=""></div>
                        <div class="right">
                            <p><img src="../static/images/j2.jpg" alt=""></p>
                            <p><img src="../static/images/j3.jpg" alt=""></p>
                        </div>
                    </div>
                    <p  class="shop">金士顿官方旗舰店</p>
                </li>
                <li>
                    <p>电脑整机</p>
                    <span>不懂DIY的还是买整机吧</span>
                    <div class="pro">
                        <div class="left"><img src="../static/images/lx1.jpg" alt=""></div>
                        <div class="right">
                            <p><img src="../static/images/lx2.jpg" alt=""></p>
                            <p><img src="../static/images/lx3.jpg" alt=""></p>
                        </div>
                    </div>
                    <p class="shop">联想佳运汇通专卖店</p>
                </li>
            </ul>
        </div> 
        <div class="prouct-main">
            <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                <li v-for="(i,index) in data.list" :key="index">
                    <img :src="i" alt="">
                    <span>$15</span>
                </li>
            </ul>
        </div>


    </div>
     <div class="footer">
        <ul>
            <li>
                <img src="../static/footer/a-recommend.png" alt="">
                <span>首页</span>
            </li>
            <li>
                <img src="../static/footer/n-cart.png" alt="">
                <span>首页</span>
            </li>
            <li>
                <img src="../static/footer/n-catergry.png" alt="">
                <span>首页</span>
            </li>
            <li>
                <img src="../static/footer/n-find.png" alt="">
                <span>首页</span>
            </li>
            <li>
                <img src="../static/footer/n-me.png" alt="">
                <span>首页</span>
            </li>
            
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            data:"",
        }
    },
    created(){
        var _this=this
        this.axios.get("/fenlei").then(function(data){
             _this.data=data.data.index;
        })
    },
    mounted(){
        console.log(this)
    },
    methods:{
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let last = this.data.list[this.data.list.length - 1];
                console.log(last)
                for (let i = 1; i <= 10; i++) {
                this.data.list.push(last);
                }
                console.log(this.data.list)
                this.loading = false;
            }, 2500);
        }
    }

}
</script>

<style>
@import url("./style.css");
</style>
