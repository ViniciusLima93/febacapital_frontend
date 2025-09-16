'use client'
import { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

interface BannerProps {
  carouselData: {
    id: number;
    image: string;
    width: number;
    height: number;
  }[];
}

export default function Banner({ carouselData }: BannerProps) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const handlePrev = () => {
    setActiveItemIndex((prevIndex) => 
        prevIndex === 0 ? carouselData.length -1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setActiveItemIndex((prevIndex) => 
        prevIndex === carouselData.length -1  ? 0: prevIndex + 1
    )
  }

  return (
    <div className="flex items-center">
      <button
        onClick={handlePrev}
        className=" bg-#000000 w-[64px] h-[64px] grid place-items-start lg:w-[100px] lg:h-[100px] lg:grid lg:place-items-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200 "
      >
          <FaLongArrowAltLeft size={32} />
  
        
      </button>

      <section
        className="w-full h-[424px] lg:w-[1440px] lg:h-[751px] grid place-items-center rounded-lg duration-500 overflow-hidden"
        style={{
          width: carouselData[activeItemIndex].width,
          height: carouselData[activeItemIndex].height,
          backgroundImage: `url(${carouselData[activeItemIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-start text-start ml-0.5 mr-78">
        <p className="text-white mt-4">PRÉ LANÇAMENTO</p>
        <h4 className="text-white font-bold text-lg text-center items-center justify-center text-[80px]">
          BARRA VIEW
        </h4>
        <p className="bg-[#DCF8B1] w-[444px] h-[35px] text-[18px] justify-start font-medium rounded-xs">Apartamento com 3 dormitórios sendo 1 suíte</p>
        <button className="rounded border-2 border-[#FFFFFF] text-white p-3 w-[174px] h-[47px] mt-6">Saiba mais</button>
        </div>
        
      </section>

      <button
        onClick={handleNext}
        className="bg-#000000 min-w-[64px] h-[64px]  lg:w-[100px] lg:h-[100px]  grid place-items-center text-white bg-black bg-opacity-20 hover:bg-opacity-60 duration-200"
      >
        <FaLongArrowAltRight size={32} />
      </button>
    </div>
  );
}
