import React, { useEffect, useRef } from "react";

const Animatebg = ({ src }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const animateDiv = () => {
      const newCoordinates = makeNewPosition();
      const div = divRef.current;
      console.log(div)
      if (div) {
        div.style.transitionDuration = "5s";
        div.style.right = newCoordinates[0] + "px";
        div.style.bottom = newCoordinates[1] + "px";
        
      }
    };

    const intervalId = setInterval(animateDiv, 5000); // Call animateDiv every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  const makeNewPosition = () => {
    const h = window.innerHeight - 50;
    const w = window.innerWidth - 50;
    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);
    return [nh, nw];
  };
  return (
    <img
      src={src}
      ref={divRef}
      className="a sm:w-36 w-20 absolute sm:left-16a sm:-top-12a left-0a top-28a opacity-30"
      alt="globe"
    />
  );
};

export default Animatebg;
