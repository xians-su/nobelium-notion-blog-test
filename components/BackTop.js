import { useLayout } from "@/lib/layout";
import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const BackTop = ({ visibleHeight = 240, onBackingTop, onBackedTop }) => {
  const [show, setShow] = useState(false);
  const [y, setY] = useState(window.scrollY);

  // Important: setLayout before access the ref
  const {
    layout: { scrollTopRef },
  } = useLayout();

  const handleScrollDirection = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (window.scrollY === 0) onBackedTop();
      if (window.scrollY < visibleHeight) {
        setShow(false);
        return;
      }
      if (y > window.scrollY) {
        setShow(true);
      } else if (y < window.scrollY) {
        setShow(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  const handleBackTop = (e) => {
    onBackingTop(e);
    scrollTopRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleScrollDirection);

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, [handleScrollDirection]);

  return ReactDOM.createPortal(
    <button
      className={`back-top fixed flex justify-center items-center h-11 w-11 bg-white rounded-full hover:bg-gray-50 active:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:active:bg-gray-600 z-[999] ${
        show ? "scale-100" : "scale-0"
      }`}
      onClick={handleBackTop}
    >
      ↑
    </button>,
    document.body
  );
};

export default React.memo(BackTop);
