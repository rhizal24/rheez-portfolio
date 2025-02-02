import React, { useEffect } from "react";

const SmoothScroll = ({ targetRef }) => {
  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetRef]);

  return null;
};

export default SmoothScroll;
