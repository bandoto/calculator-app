import React from "react";

export const adaptTextSize = (
  blockRef: React.RefObject<HTMLDivElement>,
  textRef: React.RefObject<HTMLSpanElement>
) => {
  const updateFontSize = () => {
    const blockElement = blockRef.current;
    const textElement = textRef.current;

    if (blockElement && textElement) {
      const blockWidth = blockElement.getBoundingClientRect().width;
      let fontSize = 100;

      while (
        textElement.getBoundingClientRect().width > blockWidth &&
        fontSize > 0
      ) {
        fontSize -= 1;
        textElement.style.fontSize = `${fontSize}%`;
      }
    }
  };

  const handleResize = () => {
    requestAnimationFrame(updateFontSize);
  };

  updateFontSize();

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
};
