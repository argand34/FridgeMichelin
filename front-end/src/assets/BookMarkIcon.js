import React from "react";

function FillBookMark({ color }) {
  return (
    <svg
      width="20"
      height="27"
      viewBox="0 0 20 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.02539 23.6739V3.75934C2.02539 2.62155 2.91935 1.69922 4.02214 1.69922H16.0026C17.1054 1.69922 17.9994 2.62155 17.9994 3.75934V23.6739L10.0124 18.8669L2.02539 23.6739Z"
        fill={color}
        stroke={color}
        strokeWidth="3.14286"
      />
    </svg>
  );
}

function StrokeBookMark({ color }) {
  return (
    <svg
      width="20"
      height="27"
      viewBox="0 0 20 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.02539 23.6368V3.72224C2.02539 2.58444 2.91935 1.66211 4.02214 1.66211H16.0026C17.1054 1.66211 17.9994 2.58444 17.9994 3.72224V23.6368L10.0124 18.8298L2.02539 23.6368Z"
        stroke={color}
        strokeWidth="3.14286"
      />
    </svg>
  );
}

export { FillBookMark, StrokeBookMark };
