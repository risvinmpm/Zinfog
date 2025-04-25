import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

type TestimonialItemProps = {
  rating: number;
  comment: string;
  name: string;
};

// Component for rendering each testimonial
const TestimonialItem: React.FC<TestimonialItemProps> = ({
  rating,
  comment,
  name,
}) => {
  const roundedRating = Math.round(rating);

  return (
    <div className="testimonial rounded-lg">
      <div className="rating flex gap-3 mb-4">
        <p>{rating}</p>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={
              index < roundedRating ? "text-yellow-500" : "text-gray-400"
            }
          />
        ))}
      </div>
      <p className="testimonial-comment mb-3 text-sm sm:text-base">{comment}</p>
      <p className="testimonial-name font-semibold text-white">{name}</p>
    </div>
  );
};

// Main component for testimonial section
const ChooseTestimonials: React.FC = () => {
  const testimonials: TestimonialItemProps[] = [
    {
      rating: 5.0,
      comment:
        "I recommend Zinfog Codelabs to everyone looking for mobile app development.",
      name: "Ali Akbar Ellyes",
    },
    {
      rating: 5.0,
      comment:
        "I recommend Zinfog Codelabs to everyone looking for mobile app development.",
      name: "Ali Akbar Ellyes",
    },
    {
      rating: 5.0,
      comment:
        "I recommend Zinfog Codelabs to everyone looking for mobile app development.",
      name: "Ali Akbar Ellyes",
    },
  ];

  return (
    <div className="main-padding py-5 lg:py-10 xl:py-20 bg-[#131321]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-semibold text-[#D5D5D5] mb-6 leading-snug max-w-xs">
            Our customers become our friends
          </h1>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialItem
                  rating={testimonial.rating}
                  comment={testimonial.comment}
                  name={testimonial.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ChooseTestimonials;
