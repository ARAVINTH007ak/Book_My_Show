import React from "react";
import Slider from "react-slick";
import settings from "../../config/setting.cards";
import Poster from "../Poster/Poster.component";


function Premier() {
    const images = [
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
        alt: "Godzilla",
        title: "Godzilla vs. Knog",
        description: "English",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
        alt: "Godzilla",
        title: "Godzilla vs. Knog",
        description: "English",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
        alt: "Godzilla",
        title: "Godzilla vs. Knog",
        description: "English",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
        alt: "Godzilla",
        title: "Godzilla vs. Knog",
        description: "English",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-epjvjxmnab-portrait.jpg",
        alt: "Godzilla",
        title: "Godzilla vs. Knog",
        description: "English",
      },
    ];
  
  
  
    return (
      <>
        <Slider {...settings}>
          {images.map((image) => (
            <Poster {...image}  isDark />
          ))}
        </Slider>
      </>
    );
  }
  
  export default Premier;