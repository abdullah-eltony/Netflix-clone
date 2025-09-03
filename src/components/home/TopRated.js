import React, { useState } from "react";
import Titles from "../Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { BsBookmarkStarFill } from "react-icons/bs";
import { moviesData } from "../../data/moviesData";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import { BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";
const TopRated = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames =
    "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-cols bg-subMain text-white";
  return (
    <div className="my-16">
      <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          breakpoints={{
            475:{
              slidesPerView:2
            },
            
            992:{
              slidesPerView:3
            },
            1300: {
              slidesPerView:4
            }
          }}
          slidesPerView={1}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {moviesData.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden">
                <img
                  src={`/images/movies/${movie.titleImg}`}
                  alt="movie img"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="hovers item-center px-4 gap-6 text-center absolute bg-black bg-opacity-70 top-0 bottom-0 left-0 right-0">
                  <button className="w-12 h-12 flex-cols transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                    <FaHeart />
                  </button>
                  <Link
                    to={`/movies/${movie.name}`}
                    className="font-semibold text-lg truncate line-clamp-2"
                  >
                    {movie.name}
                  </Link>
                  <div className="flex gap-2 text-star">
                    <Rating value={movie.rating} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
