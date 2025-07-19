import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Gardo Novak",
    title: "Customer",
    review:
      "I've been very impressed with the performance and fuel economy of my Ferrari. The engine is responsive and handles well, especially on winding roads.",
    img: "https://t4.ftcdn.net/jpg/03/96/16/79/360_F_396167959_aAhZiGlJoeXOBHivMvaO0Aloxvhg3eVT.jpg",
  },
  {
    name: "Samantha Rose",
    title: "Customer",
    review:
      "Exceptional platform! Buying a used car was never this easy. Great UI and secure transaction system.",
    img: "https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg",
  },
  {
    name: "Rahul Mehta",
    title: "Customer",
    review:
      "Loved the service and support team. I sold my car in less than a week!",
    img: "https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
  },
  {
    name: "Elena Smith",
    title: "Car Dealer",
    review:
      "As a dealer, this platform has brought more visibility to my listings. It's intuitive and fast.",
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Ahmed Khan",
    title: "Customer",
    review:
      "Trustworthy platform! I bought a Honda Civic with full documentation and great condition.",
    img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_items_boosted&w=740",
  },
  {
    name: "Maria Lopez",
    title: "Customer",
    review:
      "Highly recommend! Customer support was excellent and they guided me through the whole process.",
    img: "https://www.shutterstock.com/image-photo/portrait-mature-man-45-50-600nw-2089548508.jpg",
  },
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-blue-700 text-lg font-semibold uppercase">🚘 Testimonials</h2>
        <h3 className="text-4xl font-bold">
          What Our Clients <span className="text-blue-700">Say's</span>
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 p-6 text-center h-full">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 mx-auto rounded-full border-4 border-blue-700 mb-4 object-cover"
                />
                <h4 className="text-lg font-bold">{t.name}</h4>
                <p className="text-blue-700 text-sm mb-2">{t.title}</p>
                <p className="text-sm text-gray-700">{t.review}</p>
                <div className="text-yellow-400 mt-3">★★★★★</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
