import React from "react";
import Slider from "react-slick";
import settings from "../../config/setting.cards";
import Poster from "../Poster/Poster.component";

function OnlineStreamEvents() {
    const images = [
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312931-uvuqsbqclm-portrait.jpg",
        alt: "Comic Against Humanity",
        title: "Comic Against Humanity",
        description: "Watch on Zoom",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312931-uvuqsbqclm-portrait.jpg",
        alt: "Comic Against Humanity",
        title: "Comic Against Humanity",
        description: "Watch on Zoom",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312931-uvuqsbqclm-portrait.jpg",
        alt: "Comic Against Humanity",
        title: "Comic Against Humanity",
        description: "Watch on Zoom",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312931-uvuqsbqclm-portrait.jpg",
        alt: "Comic Against Humanity",
        title: "Comic Against Humanity",
        description: "Watch on Zoom",
      },
      {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyMCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312931-uvuqsbqclm-portrait.jpg",
        alt: "Comic Against Humanity",
        title: "Comic Against Humanity",
        description: "Watch on Zoom",
      },
      
    ];
  
  
  
    return (
      <>
        <Slider {...settings}>
          {images.map((image) => (
            <Poster {...image}  />
          ))}
        </Slider>
      </>
    );
  }
  
  export default OnlineStreamEvents;