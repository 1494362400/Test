<template>
    <div>
        <swiper :listData="listImg"></swiper>
        <div>首页</div>
        <navList></navList>
    </div>
</template>

<script>
import navList from '../../components/nav'
import swiper from '../../components/swiper'

export default {
    data(){
        return {
            listImg:[
                {
                    id:'',
                    text:'图片一',
                    imgPath:'https://dpic.tiankong.com/23/az/QJ6715509019.jpg@!350h'
                },
                {
                    id:'',
                    text:'图片二',
                    imgPath:'https://dpic.tiankong.com/23/az/QJ6715509019.jpg@!350h'
                },
                {
                    id:'',
                    text:'图片三',
                    imgPath:'https://dpic.tiankong.com/23/az/QJ6715509019.jpg@!350h'
                },
                {
                    id:'',
                    text:'图片四',
                    imgPath:'https://dpic.tiankong.com/23/az/QJ6715509019.jpg@!350h'
                }
            ]
        }
    },
    components:{
        navList,
        swiper
    },

}
</script>