import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";

// PNG images
import red from "../../assets/red.png";
import yellow from "../../assets/yellow.png";
import blue from "../../assets/blue.png";
import black from "../../assets/black.png"
import green from "../../assets/green.png"



const slides = [
  {
    quote:
      "Find your dream car today with our extensive selection of reliable and affordable used vehicles.",
    car: red,
    bgColor: "from-gray-900 to-red-500",
  },
  {
    quote:
      "Browse a wide variety of makes, models, and years, all from the comfort of your home.",
    car: yellow,
    bgColor: "from-black to-yellow-500",
  },
  {
    quote:
      "Our user-friendly platform makes it easy to find the perfect match for your lifestyle.",
    car: blue,
    bgColor: "from-gray-800 to-blue-500",
  },
  {
    quote:
      "We’re committed to transparency and fair pricing for a smooth purchase experience.",
    car: black,
    bgColor: "from-gray-900 to-white-500",
  },
  {
    quote:
      "We’re committed to transparency and fair pricing for a smooth purchase experience.",
    car: green,
    bgColor: "from-gray-900 to-green-500",
  },
];

const Heroslider = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  return (
    <div className="relative w-full h-[calc(100vh-72px)]">
      <Slider ref={sliderRef} {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-[calc(100vh-72px)] bg-gradient-to-b ${slide.bgColor}`}
          >
         <div className="flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-20 py-6 md:py-12 gap-2 md:gap-6 h-full">
              {/* Left: Text */}
              <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-3 md:space-y-6 px-2 md:px-0">

                <h4 className="uppercase tracking-widest text-sm md:text-lg">
                  Welcome to Online Shop
                </h4>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  Best Way to Find <br />
                  Your <span className="text-blue-500">Journey</span>
                </h1>
                <p className="text-base md:text-xl font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
                  “{slide.quote}”
                </p>
              </div>

              {/* Right: Car Image */}
              <div className="w-full md:w-1/2 flex justify-center">
               <img
              src={slide.car}
            alt={`car-${index}`}
              className="w-[80%] sm:w-[90%] md:w-[32rem] h-auto object-contain drop-shadow-2xl"
              />

              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Left Arrow */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-indigo-800 p-2 md:p-3 rounded-full text-white text-lg md:text-2xl z-30 hover:bg-indigo-700"
      >
        <AiOutlineLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-indigo-800 p-2 md:p-3 rounded-full text-white text-lg md:text-2xl z-30 hover:bg-indigo-700"
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};


export default Heroslider;
