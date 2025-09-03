import React from "react";
import Titles from "../Titles";
import { FaUserFriends } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { actorsData } from "../../data/actorsData";
const MovieCasts = () => {
  return (
    <div className="my-12 ">
      <Titles title={"Casts"} Icon={FaUserFriends} />
      <div className="mt-10">
        <Swiper
          autoplay={true}
        //   delay={1000}
          loop={true}
          speed={1000}
          module={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {actorsData.map((actor) => (
            <SwiperSlide key={actor.id}>
              <div className="w-full p-3 italic text-xs text-text rounded flex-cols bg-dry border border-gray-800">
                <img
                  src={`/images/actors/${actor.img}`}
                  alt={actor.name}
                  className={`w-full h-64 object-cover rounded mb-4`}
                />
                <p>{actor?.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieCasts;
