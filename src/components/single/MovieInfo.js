import React from "react";
import FlexMovieItems from "../FlexMovieItems";
import { FaPlay, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import ShareModal from "../modals/ShareModal";

const MovieInfo = ({ movie }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <div className="w-full xl:h-screen relative text-white">
        <img
          src={`/images/movies/${movie.img}`}
          alt={movie.name}
          className="w-full h-full xl:inline-block hidden  object-cover"
        />
        <div className="xl:bg-main bg-dry flex-cols xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
          <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-cols py-10 lg:py-20 gap-8">
            <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border-gray-800 rounded overflow-hidden">
              <img
                src={`/images/movies/${movie?.titleImg}`}
                alt="movie"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
              <div className="col-span-3 flex flex-col gap-10">
                {/* movie Title */}
                <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                  {movie.name}
                </h1>
                {/*flex-items */}
                <div className="flex items-center gap-4 font-medium text-dryGray">
                  <div className="flex-cols bg-subMain text-ellipsis px-2 py-1">
                    HD 4K
                  </div>
                  <FlexMovieItems movie={movie} />
                </div>
                {/* movie desc */}
                <p className="text-text text-sm leading-7">{movie?.desc}</p>
                <div className="grid sm:grid-cols-5 grid-cols-4 gap-4 p-6 bg-main border border-gray-800">
                  {/*share*/}
                  <div className="col-span-1 flex-cols border-r border-border ">
                    <button className="w-10 h-10 flex-cols rounded-l bg-white bg-opacity-20" onClick={() => setModalOpen(true)}>
                      <FaShareAlt />
                    </button>
                  </div>
                  {/* language */}
                  <div className="col-span-2 flex-cols font-medium text-sm">
                    <p>
                      Language :{" "}
                      <span className="ml-2 truncate">{movie?.language}</span>
                    </p>
                  </div>
                  {/* Watch btn */}
                  <div className="sm:col-span-2 flex-cols col-span-3 flex justify-end font-medium text-sm">
                    <Link
                      to={`/watch/${movie.name}`}
                      className="bg-dry hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full py-4  sm:py-3"
                    >
                      <FaPlay className="w-3 h-3" />
                      Watch
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
                <button className="md:w-1/4 w-full relative flex-cols bg-subMain border-2 border-subMain hover:bg-transparent transitions md:h-64 h-20 rounded font-medium">
                  <div className="flex-rows gap-6 text-center uppercase tracking-widest absolute md:rotate-90">
                    Download <FiLogIn className="w-6 h-6" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen} movie={movie}/>
    </>
  );
};

export default MovieInfo;
