import React, { useRef, useState } from "react";
import "./HomePage1.css";
import Payment from "./Payment";
import ImageSlider from "./ImageSlider";
import ContactModal from "./ContactModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function HomePage1() {
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu
  const [showPayment, setShowPayment] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const aboutRef = useRef(null);
  const eventsRef = useRef(null);

  const handleDonateClick = () => setShowPayment(true);
  const handleClosePayment = () => setShowPayment(false);

  const handleContactClick = () => setShowContactModal(true);
  const handleCloseContact = () => setShowContactModal(false);

  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToEvents = () =>
    eventsRef.current?.scrollIntoView({ behavior: "smooth" });

  const heroSlides = [
    {
      image: "/arn.JPG",
      text: [
        "BEHIND EVERY STEP OUR CHILDREN TAKE",
        "THERE ARE HANDS THAT HOLD, HEARTS THAT CARE,",
        "AND WHO BELIEVE IN THEIR POTENTIAL.",
      ],
    },
    {
      image: "/image1.jpg",
      text: [
        "TOGETHER WE RISE, TOGETHER WE GROW",
        "SUPPORT MAKES EVERY DREAM POSSIBLE",
      ],
    },
    {
      image: "/image2.jpg",
      text: [
        "EVERY CHILD SHINES IN THEIR OWN WAY",
        "LET’S HELP THEM SPREAD THEIR LIGHT",
      ],
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="nav">
        <div className="logoSection">
          <div className="logo">
            <img src="/Sevauk logo.jpg" alt="Sevauk Logo" />
          </div>
          <div className="logo">
            <img src="/logo22.jpg" alt="Arunodaya Logo" />
          </div>
          <div className="titleBlock">
            <span className="title">ARUNODAYA</span>
            <div className="logo-quote">
              Empowering Special Minds for a Brighter Tomorrow.
            </div>
          </div>
        </div>
        {/* Hamburger for mobile */}
        <div
          className={`hamburger${isOpen ? " open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Nav links */}
        <ul className={`navLinks${isOpen ? " open" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a className="linkBtn" onClick={scrollToAbout}>
              About
            </a>
          </li>
          <li>
            <a className="linkBtn" onClick={scrollToEvents}>
              Events
            </a>
          </li>
          <li>
            <a className="linkBtn" onClick={handleContactClick}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section with Slider */}
      <div className="hero-slider-container">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          effect="fade"
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="hero-swiper"
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="hero-slide"
                style={{
                  background: `linear-gradient(rgba(29, 90, 140, 0.7), rgba(29, 90, 140, 0.7)), url("${slide.image}") center/cover no-repeat`,
                }}
              >
                <div className="contentCenter">
                  <div className="slogan">
                    {slide.text.map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                  <button className="loginBtn" onClick={handleDonateClick}>
                    Donate Us
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="donateSticky" onClick={handleDonateClick}>
          Donate Us
        </button>
      </div>

      {/* Payment Modal */}
      {showPayment && (
        <div className="paymentModal">
          <div className="modalOverlay" onClick={handleClosePayment}></div>
          <div className="slideUpModal">
            <div className="modalHeader">
              <h2>Donate to Arunodaya</h2>
              <button className="closeBtn" onClick={handleClosePayment}>
                ×
              </button>
            </div>
            <div className="modalBody">
              <h3>
                "A Small Gift From You Creates A World Of Possibilities For
                Them."
              </h3>
              <Payment />
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && <ContactModal onClose={handleCloseContact} />}

      {/* Vision Section */}
      <div className="vision-section">
        <h2 className="school-heading">Vision</h2>
        <p className="school-text-center school-mb-40">
          Our vision is rooted in providing a blend of home-based emotional care
          and professionally guided special Training/ Education and therapy.
        </p>
      </div>

      {/* Mission Section */}
      <div className="school-mission-section">
        <div className="school-mission-text">
          <h3 className="school-subheading">Our Mission</h3>
          <p>
            To provide a high-quality education that nurtures the holistic
            development of students.
            <br />
            <br />
            To help students develop into responsible and responsive global
            citizens with strong moral values and an understanding of diverse
            cultures.
          </p>
        </div>
        <div className="school-diagram">
          <img
            src="/diagram.jpg"
            alt="Mission Diagram"
            className="mission-img"
          />
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="about-section-row">
        <div className="about-us-left">
          <h2 className="school-subheading">About Us</h2>
          <p className="school-about-text">
            Arunodaya Special School began its journey in a small rented room with just 8–12 students, supported by three passionate faculty members and limited resources. What started as a humble initiative has today grown into a recognized institution for children with special needs in Gadag.

            The school is currently training 42 children, while more than 120 parents seek counselling and guidance from the team. Over the years, Arunodaya has trained 183 children, with 29 successfully integrated into mainstream schools. Among them, one proud student went on to complete a postgraduate degree in Social Work — a milestone that reflects the school’s vision and impact.

            Arunodaya strongly believes in holistic development. Children here are nurtured not only through academics but also through arts, physical education, medical support, and specialized therapies. The focus is on empowering each child to achieve independence, confidence, and dignity in life.

            The school is equally committed to supporting families by providing counselling, awareness programs, and guidance to parents of special children. This two-way approach strengthens both the child’s and the family’s journey.

            Over time, Arunodaya has built a strong reputation for its social service and inclusive education model. With the continued support of well-wishers, community members, and organizations like Seva Bharati and Seva UK, the school remains steadfast in its mission — to provide every child with special needs a nurturing, inclusive, and hopeful future.</p>
            <hr className="school-hr" />
        </div>
        <div className="about-us-collage">
          <div className="collage-frame">
            <img src="/image1.jpg" alt="Activity" />
            <img src="/image2.jpg" alt="Classroom" />
          </div>
          <div className="collage-frame">
            <img src="/image3.jpg" alt="Outdoor Event" />
            <img src="/image4.jpg" alt="Celebration" />
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div ref={eventsRef} className="events-section">
        <h2 className="school-subheading">Our Events</h2>
        <ImageSlider />
        <hr className="school-hr" />
      </div>
    </div>
  );
}

export default HomePage1;
