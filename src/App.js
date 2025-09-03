import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  About,
  HomeScreen,
  NotFound,
  Watch,
  MoviesPage,
  Contact,
  SingleMovie,
  Login,
  Regester,
  Profile,
} from "./screens";
import Layout from "./layout/Layout";
import Aos from "aos";
import Passwrod from "./screens/dashboard/Password";
import FavoriteMovies from "./screens/dashboard/FavoriteMovies";
import MoviesList from "./screens/dashboard/admin/MoviesList";
import Dashboard from "./screens/dashboard/admin/Dashboard";
import Categories from "./screens/dashboard/admin/Categories";
import Users from "./screens/dashboard/admin/Users";
import AddMovie from "./screens/dashboard/admin/AddMovie";
import ScrollToTop from "./ScrollToTop";
function App() {
  Aos.init();
  return (
    <ScrollToTop>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:slug" element={<SingleMovie />} />
          <Route path="/watch/:slug" element={<Watch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regester />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<Passwrod />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
          <Route path="/movieslist" element={<MoviesList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addmovie" element={<AddMovie />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
