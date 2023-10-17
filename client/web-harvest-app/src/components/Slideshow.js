import React from "react";
import '../styles/caurosel.css';

function Slideshow() {
  

  const images = [
    "https://source.unsplash.com/random/30×10/?fruits",
    "https://source.unsplash.com/random/30×10/?farming",
    "https://source.unsplash.com/random/30×10/?vegetables"
  ];
  
   
const delay = 2500;

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
  {images.map((imageUrl, index) => (
    <div className="slide" key={index}>
      <img src={imageUrl} alt={`Image ${index + 1}`} />
    </div>
  ))}
</div>
      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;