import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { moviesData } from "../../data/moviesData";
import FlexMovieItems from "../FlexMovieItems";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="w-full relative">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-48 lg:h-64 xl:h-96"
      >
        {moviesData.map((movie, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full relative rounded overflow-hidden"
          >
            <img
              src={`./images/movies/${movie.img}`}
              alt="banner"
              className="w-full h-full object-cover"
            />
            <div className="linear-bg absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center gap-4 md:gap-5 lg:gap-8 pl-8 sm:pl-32 xl:pl-52">
              <h1 className="xl:text-4xl trancate capitalize font-sans sm:text-2xl font-bold ">
                {movie.name}
              </h1>
              <div className="flex gap-5 items-center text-dryGray">
                <FlexMovieItems movie={movie} />
              </div>
              <div className="flex gap-5 items center">
                <Link
                  to={`/movie/${movie.name}`}
                  className="bg-subMain hover:text-main transitions text-white px-8 py-3 font-medium rounded sm:text-sm text-xs"
                >
                  Watch Now
                </Link>
                <button className="bg-white hover:text-subMain transitions text-white py-3 rounded tex-sm px-4 bg-opacity-30">
                  <FaHeart />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
