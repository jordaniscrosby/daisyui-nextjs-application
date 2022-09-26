import React, { useMemo, useRef, useEffect } from "react";

const useExistingOrNewRef = (existingRef) => {
  const newRef = useRef();
  const ref = useMemo(() => existingRef || newRef, [existingRef]);

  return ref;
};

export const useKeyboardEvent = ({
  cb = () => {},
  eventName = "keydown",
  existingRef,
  keyCode = 13,
}) => {
  const ref = useExistingOrNewRef(existingRef);

  useEffect(() => {
    const isolatedCb = (e) => {
      if (e.target === ref.current && e.keyCode === keyCode) {
        cb();
      }
    };

    document.addEventListener(eventName, isolatedCb);

    return () => {
      document.removeEventListener(eventName, isolatedCb);
    };
  }, [cb, eventName, keyCode, ref]);

  return ref;
};
