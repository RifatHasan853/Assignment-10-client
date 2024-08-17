
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

import { Helmet } from 'react-helmet';
import SectionTitle from './SectionTitle';


const countryName = [
    { name: 'France', photo: 'https://i.ibb.co/34dKyqr/969.jpg' },
    { name: 'Italy', photo: 'https://i.ibb.co/x8jvKY3/7710.jpg' },
    { name: 'Spain', photo: 'https://i.ibb.co/QKkczMT/909.jpg' },
    { name: 'England', photo: 'https://i.ibb.co/T8TSFBN/1402.jpg' },
    { name: 'Netherlands',  photo: 'https://i.ibb.co/FmmmXJh/48915.jpg' },
    { name: 'Switzerland',  photo: 'https://i.ibb.co/4Kwx2RN/237.jpg' }
  ]
  



const CountryName = () => {
    return (
        <section>
        <Helmet><title>All Countries </title></Helmet>

<SectionTitle subHeading="Popular destinations in Europe" heading="Visit Europe"></SectionTitle>

<div className="min-h-96 mx-auto  flex flex-col items-center justify-center p-4">

<Swiper
slidesPerView={1}
spaceBetween={10}
pagination={{ clickable: true }}
navigation={true}
modules={[Pagination, Navigation]}
className="mySwiper w-full md:w-3/4"
breakpoints={{
640: { slidesPerView: 1, spaceBetween: 20 },
768: { slidesPerView: 2, spaceBetween: 40 },
1024: { slidesPerView: 3, spaceBetween: 50 },
}}
>
{countryName.map((member, index) => (
<SwiperSlide key={index}>
<div
className="bg-gray-700 bg-cover bg-center p-6 rounded-lg shadow-teal-800 hover:scale-105 transform transition duration-300 ease-in-out w-full"
style={{ backgroundImage: `url(${member.photo})`, height: '300px' }}
>
<div className="bg-black bg-opacity-30 h-full flex flex-col items-center justify-center rounded-lg ">
<h2 className="text-xl font-bold text-gray-100 mt-4 text-center">{member.name}</h2>
<p className="text-gray-200 font-bold text-center ">{member.position}</p>
</div>
</div>
</SwiperSlide>
))}
</Swiper>
</div>
</section>
    );
};

export default CountryName;