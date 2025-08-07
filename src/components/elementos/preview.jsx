import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Preview = ({ file }) => {
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  }, [file]);

  return (
    <div className="border-2 h-40 w-40 flex justify-center items-center">
      {preview ? (
        <img src={preview} alt="image" className="w-full h-full object-fill" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={70}
          height={70}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon m-auto icon-tabler icons-tabler-outline icon-tabler-photo-plus"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 8h.01" />
          <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
          <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
          <path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54" />
          <path d="M16 19h6" />
          <path d="M19 16v6" />
        </svg>
      )}
    </div>
  );
};

export default Preview;
