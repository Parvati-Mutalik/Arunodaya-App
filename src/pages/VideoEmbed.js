import React from "react";
import "./VideoEmbed.css";

export default function VideoEmbed({ src, type = "youtube", title = "Video" }) {
  if (type === "youtube") {
    return (
      <div className="video-embed-container">
        <iframe
          width="800"
          height="450"
           src="https://www.youtube.com/embed/2BrOlft2h7o"  // Use embed link here
           title="Sewa UK Divya Arunodaya School"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-embed-frame"
        ></iframe>
      </div>
    );
   
  }

  return (
    <div className="video-embed-container">
      <video width="800" height="450" controls className="video-embed-frame">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
