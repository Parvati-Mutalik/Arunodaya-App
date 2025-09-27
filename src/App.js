import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage1 from "./pages/HomePage1";
import HomePage2 from "./pages/HomePage2";
import TeamSection from "./pages/TeamSection";
import VideoEmbed from "./pages/VideoEmbed";
import TestimonialsSlider from "./pages/TestimonialsSlider";
import InfoEdgeSection from "./pages/InfoEdgeSection";
import Footer from "./pages/Footer";


// Temporary Payment Page (replace with your real one later)
function Payment() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Payment Page</h1>
      <p>This is where the donation/payment flow will go.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage1 />
              <HomePage2 />
              <TeamSection />
              <VideoEmbed />
              <TestimonialsSlider/>
              <InfoEdgeSection />
              <Footer />
            </>
          }
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
