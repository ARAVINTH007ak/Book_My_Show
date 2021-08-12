import React, { useState, useContext, useEffect } from "react";
import Poster from "../components/Poster/Poster.component";
import MyDisclosure from "../components/Playsfilters/plays.Filter";

const plays = () => {


  return (
    <>
      <div className="container mx-auto px-16">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="font-bold text-2xl ">Plays in Chennai</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top/et00312469-flpfrmhgzg-portrait.jpg"
                  title="TVK Culturals Presents Ponniyin Selvan"
                  description="Tamil=>$300"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-3/12 hidden lg:block">
            <h2 className="font-bold text-2xl ">Filters</h2>
            <div className="">
              <MyDisclosure
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <MyDisclosure
                title="Language"
                tags={["Tamil", "Telugu", "English"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default plays;
