import React from "react";
import { Route } from "react-router-dom";
import MovieLayout from "../layouts/Movie.layout";

const MovieHoc = ({ component: Component, ...res }) => {
  return (
    <>
      <Route
        {...res}
        component={(props) => (
          <MovieLayout>
            <Component {...props} />
          </MovieLayout>
        )}
      />
    </>
  );
};

export default MovieHoc;
