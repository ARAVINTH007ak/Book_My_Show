import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHoc = ({component:Component, ...res}) => {

  return (
    <>
      <Route {...res} component={()=> 
         <DefaultLayout> 
            <Component  />
         </DefaultLayout>   
        
        } />
    </>
  );
};

export default DefaultHoc;

