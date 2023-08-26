import React from "react";
import "../styles/styles.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="indicator">
        <svg
          width="18px"
          height="20px"
          viewBox="0 0 28 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="New-Customer"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Loading"
              transform="translate(-526.000000, -915.000000)"
              fill="#FFFFFF"
            >
              <g
                id="Loading-Indicator"
                transform="translate(468.000000, 862.000000)"
              >
                <g id="Secure" transform="translate(58.000000, 53.000000)">
                  <path
                    d="M6,10 L6,7.9998866 C6,3.57774184 9.581722,0 14,0 C18.4092877,0 22,3.58167123 22,7.9998866 L22,10 L18,10 L18,7.9947834 C18,5.78852545 16.2046438,4 14,4 C11.790861,4 10,5.79171562 10,7.9947834 L10,10 L6,10 Z M0.996534824,14 C0.446163838,14 0,14.4449463 0,14.9933977 L0,31.0066023 C0,31.5552407 0.439813137,32 0.996534824,32 L27.0034652,32 C27.5538362,32 28,31.5550537 28,31.0066023 L28,14.9933977 C28,14.4447593 27.5601869,14 27.0034652,14 L0.996534824,14 Z"
                    id="Rectangle-520"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
