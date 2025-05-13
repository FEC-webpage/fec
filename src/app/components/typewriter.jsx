import React, { useEffect, useRef } from 'react';
import '../styles/typewriter.css';

const Typewriter = ({ textArray, period = 2000 }) => {
  const el = useRef(null);
  let loopNum = 0;
  let isDeleting = false;
  let text = '';

  const tick = () => {
    const fullTxt = textArray[loopNum % textArray.length];

    if (isDeleting) {
      text = fullTxt.substring(0, text.length - 1);
    } else {
      text = fullTxt.substring(0, text.length + 1);
    }

    el.current.innerHTML = `<span class="wrap">${text}</span>`;

    let delta = 200 - Math.random() * 100;

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && text === fullTxt) {
      delta = period;
      isDeleting = true;
    } else if (isDeleting && text === '') {
      isDeleting = false;
      loopNum++;
      delta = 500;
    }

    setTimeout(() => {
      tick();
    }, delta);
  };

  useEffect(() => {
    tick();
    // eslint-disable-next-line
  }, []);

  return (
    <a
      ref={el}
      className="typewriter link-light"
      style={{ fontSize: '25px', fontWeight: 800, fontFamily: 'Manrope' }}
    ></a>
  );
};

export default Typewriter; 