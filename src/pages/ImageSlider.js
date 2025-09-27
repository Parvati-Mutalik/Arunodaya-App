import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";

// Images for each section
const eventSlides = [
  { url: "/image1.jpg", title: "Teaching" },
  { url: "/image2.jpg", title: "Exercise" },
  { url: "/image3.jpg", title: "Exercise" },
  { url: "/image6.jpg", title: "Prayer" },
  { url: "/image12.jpg", title: "Survey" },
];

const activitySlides = [
  { url: "/image4.jpg", title: "Celebration" },
  { url: "/image5.jpg", title: "Fancy Dress" },
  { url: "/act2.jpg", title: "Learning" },
  { url: "/act3.jpg", title: "Activities" },
  { url: "/award.jpg", title: "Quziable 24-25,Cerebralpalsy students,14 States" },
];

const medicalSlides = [
  { url: "/medical1.jpg", title: "Dr. Prakash Sanknur(Orthopaedic surgeon)" },
  { url: "/medical2.jpg", title: "Dr. Balesh Shiragumpi(Neurosurgeon)" },
  { url: "/medical3.jpg", title: "Dr.Prakash Hosamani (MBBS MD Consulting Physician)" },
  { url: "/medical4.jpg", title: "Dr. Somashekar Bijjal(Sychiatrist)" },
  { url: "/medical5.jpg", title: "Dr. Radhika UdayKumar Kulkarni (Gynaecologist)" },
];

const therapySlides = [
  { url: "/v1.jpg", title: "BOB Bank Tub Ball Donote" },
  { url: "/v2.jpg", title: "Tulsi from Uk" },
  { url: "/v3.jpg", title: "Seva UK" },
   { url: "/v4.jpg", title: "Teaching Adis" },
  { url: "/v5.jpg", title: "Conselling" },
  { url: "/v6.jpg", title: "Conselling" },
  
];

const AUTO_PLAY_DELAY = 3000;

const ImageSlider = () => {
  const [section, setSection] = useState("event");
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);

  // Select slides based on current section
  const slides = {
    event: eventSlides,
    activity: activitySlides,
    medical: medicalSlides,
    therapy: therapySlides,
  }[section];

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), AUTO_PLAY_DELAY);
    return () => clearInterval(interval);
  }, [current, slides]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    setCurrent(0); // reset to first slide when section changes
  }, [section]);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX;
    if (startX.current - endX.current > 50) nextSlide();
    if (startX.current - endX.current < -50) prevSlide();
  };

  return (
    <div>
      {/* Section Buttons */}
      <div className="section-buttons">
        <button className={section === "event" ? "active" : ""} onClick={() => setSection("event")}>
          Events
        </button>
        <button className={section === "activity" ? "active" : ""} onClick={() => setSection("activity")}>
          Activities
        </button>
        <button className={section === "medical" ? "active" : ""} onClick={() => setSection("medical")}>
          Medical Sessions
        </button>
        <button className={section === "therapy" ? "active" : ""} onClick={() => setSection("therapy")}>
         Visiters
        </button>
      </div>

      {/* Carousel */}
      <div
        className="carousel-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="arrow left" onClick={prevSlide}>❮</button>
        <div className="carousel">
          {slides.map((slide, idx) => {
            let offset = idx - current;
            if (offset < -Math.floor(slides.length / 2)) offset += slides.length;
            if (offset > Math.floor(slides.length / 2)) offset -= slides.length;

            const transform = `
              translateX(${offset * 240}px) 
              translateZ(${-Math.abs(offset) * 130}px) 
              rotateY(${offset * 15}deg)
              scale(${offset === 0 ? 1.3 : 0.9})
            `;
            const zIndex = slides.length - Math.abs(offset);

            return (
              <div
                key={idx}
                className={`carousel-slide${offset === 0 ? " active" : ""}`}
                style={{ transform, zIndex }}
              >
                <div className="photo-frame">
                  <img src={slide.url} alt={slide.title} />
                </div>
                <p>{slide.title}</p>
                <div className="reflection" />
              </div>
            );
          })}
        </div>
        <button className="arrow right" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default ImageSlider;
