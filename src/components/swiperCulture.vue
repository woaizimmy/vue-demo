<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <a href="">
        <img :src="slide.img">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import pic1 from '@/static/img/img1.png';
import pic2 from '@/static/img/img2.png';
import pic3 from '@/static/img/img3.png';
export default {
  components:{
    swiper,swiperSlide
  },
  data() {
    return {
      swiperSlides: [
        {
          img:pic1
        },
        {
          img:pic2
        },
        {
          img:pic3
        }
      ],
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 600,
          modifier: 1,
          slideShadows : true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      
    });
  },
  methods: {
    
  },
};

</script>

<style lang="less" scoped>
  .swiper-container{
    padding-bottom:25px;
  }
  .swiper-inner {
    width: 100%;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 210px;
    min-height:280px;
  }
  .swiper-slide img{
    width:210px;
  }
</style>
