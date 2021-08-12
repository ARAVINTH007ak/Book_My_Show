import React, {  useContext ,useEffect} from "react";
import MovieNavBar from "../components/Navbar/MovieNavbar";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/movie.contact";
import axios from "axios";


function MovieLayout(props) {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  useEffect(() => {
    const requestMovie= async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie (getMovieData.data);
    };

    requestMovie();
  }, [id]);


  return (
    <>
      <MovieNavBar />
      {props.children}
    </>
  );
}

export default MovieLayout;
