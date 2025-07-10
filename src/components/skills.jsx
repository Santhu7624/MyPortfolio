import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import aws from "../images/AWS.png";
import Azure from "../images/Azure.png";
import NET from "../images/.NET.png";
import CSharp from "../images/C#-(CSharp).png";
import JavaScript from "../images/JavaScript.png";
import Html from "../images/HTML5.png";
import CSS from "../images/CSS3.png";
import ReactLogo from "../images/React.png";
import Angular from "../images/Angular.png";
import Docker from "../images/Docker.png";
import Kubernetes from "../images/Kubernetes.png";


const techSkills = [
  { name: "AWS", src: aws },
  { name: "Azure", src: Azure },
  { name: ".NET", src: NET },
  { name: "C#", src: CSharp },
  { name: "JavaScript", src: JavaScript },
  { name: "HTML", src: Html },
  { name: "CSS", src: CSS },
  { name: "React", src: ReactLogo },
  { name: "Angular", src: Angular },
  { name: "Docker", src: Docker },
  { name: "Kubernetes", src: Kubernetes },
];

export default function Skills() {
  return (
    <div className="w-full py-10 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Tech Stack</h2>
      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        freeMode={true}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {techSkills.map((skill, idx) => (
          <SwiperSlide key={idx} className="ml-5  flex justify-center">
            <img
              src={skill.src}
              alt={skill.name}
              className="w-16 h-16 object-contain"
            />
              <p className="mt-2 ml-3 text-sm justify-center font-medium text-gray-700">{skill.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}