import React from "react";
import styles from './ScrollButton.module.css'
import { BiSolidDownArrowCircle } from "react-icons/bi";

const ScrollButton = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <button className={styles['scroll-down-button']} onClick={handleScrollDown}>
      <BiSolidDownArrowCircle className={styles.iconScroll} />
    </button>
  );
};

export default ScrollButton;
