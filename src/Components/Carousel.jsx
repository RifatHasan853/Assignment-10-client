// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import bgimg1 from '../assets/images/9457535_35665.jpg'
import bgimg2 from '../assets/images/aerial-drone-view-council-square-decorated-christmas-brasov-romania.jpg'
import bgimg3 from '../assets/images/lyon-after-sunset-with-saone-river.jpg'
import Slide from './Sliede'


export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
        <Slide
            image={bgimg1}
           
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
        
          />
        </SwiperSlide>
        <SwiperSlide>
        <Slide
            image={bgimg3}
           
          />
           
           
          
        </SwiperSlide>
      </Swiper>
    </div>
  )
}