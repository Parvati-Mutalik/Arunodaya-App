import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./TestimonialsSlider.css";

const testimonials = [
  {
    title: "Unlocking Potential, One Step at a Time",
    content:
      "Such a special day in my life to visit such a great SEWA by all involved in Arunodaya School. Each staff is dedicated to take care of each gifted child. Big pranaam to all. Om!!! ",
    name: "Arun Patil",
    identity: "HSS UK, London",
    link: "#"
  },
  {
    title: "Different Needs, Equal Dreams",
    content:
      "A wonderful school with such lovely children and teachers. I have seen really amazing dedication and hands-on work that I’ve never witnessed before. Feeling very inspired!",
    name: "Tulsi Dave",
    identity: "London, England",
    link: "#"
  },
  {
    title: "Empowering Minds, Inspiring Futures",
    content:
      "I had the incredible opportunity to meet Mallappa and Jayashree ji and many of the children during their visit to Udaipur in 2023! Today, I got the chance to visit the Arunodaya school and see the hard work, dedication and resilience put in by both the teachers and students. Very blessed to work here.",
    name: "Aswesha Patil",
    identity: "London, UK",
    link: "#"
  },
  {
    title: "A Place for Growth, Joy, and Belonging",
    content:
      "On the occasion of Disabled Day Observation, we need to carry a message to prevent mental illness and physical disability. In this regard Arunodaya School is doing wonderful work and providing all facilities to shape the future of disabled children. I wish all the best and pray almighty for the progress and prosperity of the school.",
    name: "Dr. M.D. Samudri",
    identity: "Indian Red Cross, Gadag",
    link: "#"
  },
  {
    title: "Together in Learning, Together in Life",
    content:
      "Inspirational visit observing the students and all staff. The work here is done purely from the heart and witnessing the relationship between the teachers and children is truly beautiful.",
    name: "Diyaa Joshi",
    identity: "UK",
    link: "#"
  },
  {
    title: "Every Ability Deserves Opportunity",
    content:
      "It’s always a pleasure and motivating to visit Arunodaya school. I wish a very healthy and successful growth for this institution and may the service mindset of this institute be the model for the people of Gadag.",
    name: "Mohammed Nadaf",
    identity: "Narasapur, Gadag",
    link: "#"
  },
  {
    title: "Building Confidence, Creating Smiles",
    content:
      "Today we visited Arunodaya special school for the purpose of field orientation for our MSW Students. The agency is doing wonderful work. It has inspired our new social workers. Keep moving forward, we are always with you if you need our support.",
    name: "Dr. Shekhar",
    identity: "BSW College, Gadag",
    link: "#"
  },
  {
    title: "Learning Beyond Limits",
    content:
      "It’s our honour to celebrate our son’s Birthday with God-gifted children. We really feel so satisfied for the celebration. May God bless with lots of love, keep smiling, take care. We are always with you.",
    name: "Viom / Vihaan Pavanlaumar",
    identity: "Karnal",
    link: "#"
  },
  {
    title: "Where Every Child Shines in Their Own Way",
    content:
      "Humbled to see the information and support system created by Seva Bharathi, I compliment the people involved in creating this institution.",
    name: "Ashok Shetter",
    identity: "KLE Tech University, Hubli",
    link: "#"
  }
];

function TestimonialsSlider() {
  return (
    <div className="testimonials__fullscreen">
      <h1 className="testimonials__headline">TESTIMONIALS</h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 3 } // desktop
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="testimonial__card">
              <div className="testimonial__text">
                <h2 className="testimonial__heading">{t.title}</h2>
                <p className="testimonial__content">{t.content}</p>
                <div className="testimonial__author">
                  <span>{t.name}</span>
                  {t.identity && (
                    <span className="testimonial__identity">
                      {" "}
                      · {t.identity}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialsSlider;
