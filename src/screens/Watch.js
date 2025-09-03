import React from "react";
import { Link, useParams } from "react-router-dom";
import { moviesData } from "../data/moviesData";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaDownload, FaHeart, FaPlay } from "react-icons/fa";

const Watch = () => {
  let { slug } = useParams();
  const movie = moviesData.find((movie) => movie.name === slug);
  const [play, setPlay] = React.useState(false);
  return (
    <div className="container mx-auto bg-dry p-6 mb-12">
      <div className="flex-btn mb-6 gap-2 bg-main rounded border border-gray-800 flex-wrap p-6">
        <Link
          to={`/movies/${movie.name}`}
          className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray"
        >
          <BiArrowBack /> {movie.name}
        </Link>
        <div className="flex-btn sm:w-auto w-full gap-5">
          <button className="bg-white hover:text-subMain transitions bg-opacity-30 rounded px-4 py-3">
            <FaHeart />
          </button>
          <button className="bg-subMain hover:text-main flex-rows gap-2 transitions  rounded px-8 font-medium py-3">
            <FaCloudDownloadAlt /> Download
          </button>
        </div>
      </div>
      {/* video */}
      {play ? (
        <video controls autoPlay={play} className="w-full h-screen rounded">
          <source src="vidos/movie.mp4" type="video/mp4" title={movie?.name} />
        </video>
      ) : (
        <div className="w-full h-screen rounded-lg overflow-hidden relative">
          <div className="absolute top-0 bottom-0 right-0 w-full h-full bg-main bg-opacity-30 flex flex-cols">
            <button onClick={() => setPlay(true)} className="w-20 h-20 flex-cols bg-white text-subMain flex-cols border border-subMain rounded-full font-medium text-xl">
              <FaPlay/>
            </button>
          </div>
          <img src={movie.img ? `/images/movies/${movie.img}` : `/images/movies/${movie.titleImg}`} alt={movie.name} className="w-full h-full object-cover rounded-lg"/>
        </div>
      )}
    </div>
  );
};

export default Watch;
