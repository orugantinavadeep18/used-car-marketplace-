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
  }
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
          <div key={index} className={`h-[calc(100vh-72px)] bg-gradient-to-b ${slide.bgColor}`}>
            <div className="flex flex-wrap items-center justify-between px-8 lg:px-20 py-10 h-full">
              {/* Left: Text */}
              <div className="w-full md:w-1/2 text-white space-y-6">
                <h4 className="uppercase tracking-widest text-lg">Welcome to Online Shop</h4>
                <h1 className="text-5xl font-extrabold leading-tight">
                  Best Way to Find <br />
                  Your <span className="text-blue-500">Journey</span>
                </h1>
                <p className="text-xl font-medium max-w-xl leading-relaxed">
                  “{slide.quote}”
                </p>
              </div>

              {/* Right: Car Image */}
              <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                <img
                  src={slide.car}
                  alt={`car-${index}`}
                  className="h-[28rem] md:h-[32rem] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Left Arrow */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-indigo-800 p-3 rounded text-white text-2xl z-30 hover:bg-indigo-700"
      >
        <AiOutlineLeft />
      </button>

      {/* Custom Right Arrow */}
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-800 p-3 rounded text-white text-2xl z-30 hover:bg-indigo-700"
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Heroslider;
