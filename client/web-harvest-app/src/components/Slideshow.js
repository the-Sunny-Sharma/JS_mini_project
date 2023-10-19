import React from "react";
import '../styles/caurosel.css';

function Slideshow() {
  

  const images = [
    "https://www.grocistore.com/admin/uploads/banners/web_banners/banner1576516931.JPG",
    "https://sabzimart1.files.wordpress.com/2016/12/sabz-fb.jpg",
    "https://content.jdmagicbox.com/comp/jabalpur/v5/9999px761.x761.180405140551.p7v5/catalogue/vegetables-king-jabalpur-online-shopping-websites-for-grocery-p7kt0.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2_QX5a5sR6HYPdXQvDxyql9WxyToqqZ62NZrmCiIssHF7zEWypK7sJ59pl9mWFJ9PBE&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_fj74t_9UoY81JgJ2o_MlJSLkbEwumW729tB_GGbkfCbW6ZrGtMuN5n2LA85C2eJ9g&usqp=CAU"
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