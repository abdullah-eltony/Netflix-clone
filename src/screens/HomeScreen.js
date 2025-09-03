import React from "react";
import { Banner, PopularMovies, Promos, TopRated } from "../components";
const HomeScreen = () => {
  return <div className="min-h-screen container mx-auto mb-6 px-2">
    <Banner />
    <PopularMovies />
    <Promos/>
    <TopRated />
  </div>;
};

export default HomeScreen;
