<template>
    <div>
        <slot name="header"></slot>
        <div>
            <swiper ref="mySwiper" :options="swiperOptions" >
                <swiper-slide v-for="(item,index) in listData" :key="index">
                    {{item.text}}
                    <img :src="item.imgPath" alt=""  @click="swiperJump(item,index)">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

export default {
    props:{
        listData:{
            type:Array,
            default(){
                return [
                    {
                        id:'',
                        text:'图片一',
                        imgPath:'https://dpic.tiankong.com/23/az/QJ6715509019.jpg@!350h'
                    },
                    {
                        id:'',
                        text:'图片二',
                        imgPath:'https://dpic.tiankong.com/23/az/QJ6715509019.jpg@!350h'
                    }
                ]
            }
        }
    },
    data(){
        return {
            swiperOptions: {
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                pagination: {
                    el: '.swiper-pagination'
                },
                // Some Swiper option/callback...
            }

        }
    },
    components:{
        Swiper,
        SwiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    directives: {
        swiper: directive
    },
    mounted(){
        // this.swiper.slideTo(3, 1000, false)
    },
    methods:{
        swiperJump(data,idx){
            console.log('test')
            this.$emit('jump',{data:data,index:idx})
        }
    }
}
</script>