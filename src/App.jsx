import axios from "axios";
import React from "react";


import DefaultHOC from "./HOC/Default.HOC"
import MovieHoc from "./HOC/Movie.HOC";

import Home from "./Pages/Home.page";
import Movie from "./Pages/Movie";
import plays from "./Pages/plays.page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


axios.defaults.baseURL="https://api.themoviedb.org/3"
axios.defaults.params={}
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY



function App() {


 return(
   <>
     <DefaultHOC path="/"  exact component={Home} />
     <MovieHoc path="/movie/:id"  exact component={Movie} />
     <DefaultHOC path="/plays"  exact component={plays} />

   </>
 )

}

export default App;
