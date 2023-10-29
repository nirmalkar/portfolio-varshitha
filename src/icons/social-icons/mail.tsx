// import React from "react"

// function mail({ color, width }) {
//   return (
//     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="125" height="100" viewBox="0 0 125 100">
//     <path d="M60,0 l50,0 a10,10 0 0,1 7,17 l-50,50 a10,10 0 0,1 -13,0 l-50,-50 a10,10 0 0,1 7,-17z" stroke="#000" stroke-width="0" fill="#000" />
//     <path d="M60,90 l54,0 a10,10 0 0,0 7,-7 l0,-60 -50,50 a15,15 0 0,1 -21,0 l-50,-50 0,60 a10,10 0 0,0 7,7z" stroke="#000" stroke-width="0" fill="#000" />
//     </svg>
//   )
// }

import React from "react";

function mail({ color, width }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 402 300"
      width={width}
      height={60}
      className="mail"
    >
      <path
        fill="#BF8000"
        stroke="#BF8000"
        stroke-width=".1"
        d="M249.6 101.5c-2 .7-5.5 2.8-7.9 4.7l-4.2 3.5.2 8.4c.1 4.6.2 13 .3 18.7V147l14.5-10.7 14.4-10.8.1-6.8c0-8-1.7-12.6-5.6-15.4-3.9-2.7-7.5-3.2-11.8-1.8z"
      />
      <path
        fill="#BF0000"
        stroke="#BF0000"
        stroke-width=".1"
        d="M140.8 102.6c-4 2.1-6 6.7-6.5 15.3l-.4 7.6 14.2 10.5c7.8 5.8 14.6 10.6 15 10.8.5.2.9-8.2.9-18.6v-18.9l-5.9-4.2c-4.8-3.3-6.7-4.1-10.3-4.1-2.3.1-5.5.7-7 1.6z"
      />
      <path
        fill="#BF4000"
        stroke="#BF4000"
        stroke-width=".1"
        d="M218.6 123.5c-11.2 8.4-18.3 13.2-19 12.6-9.3-7.1-33.7-25.1-34.1-25.1-.3 0-.5 8.4-.5 18.7l.1 18.8 17.5 13c9.7 7.1 18 12.9 18.5 12.7.5-.1 8.8-6.1 18.4-13.3l17.5-13.1v-18.9c0-10.4-.1-18.9-.2-18.9-.2 0-8.4 6.1-18.2 13.5z"
      />
      <path
        fill="#008040"
        fill-opacity=".3"
        stroke="#008040"
        stroke-opacity=".3"
        stroke-width=".1"
        d="M267.4 158.5c0 18.1.2 25.7.3 16.8.2-8.9.2-23.7 0-33-.1-9.2-.3-2-.3 16.2z"
      />
      <path
        fill="#4080BF"
        stroke="#4080BF"
        stroke-width=".1"
        d="m134.2 160.4.3 33.6 2.8 2.7c2.6 2.7 3.2 2.8 14.7 3.2l12 .3v-51.1l-13.7-10.4c-7.6-5.7-14.4-10.7-15.1-11.1-1.1-.6-1.2 5.4-1 32.8z"
      />
      <path
        fill="#008040"
        stroke="#008040"
        stroke-width=".1"
        d="m252.5 137.6-14 10.5-.5 26-.5 25.9h9.5c5.2 0 11.2-.5 13.2-1.1 6.7-1.8 6.9-2.5 6.6-39.3l-.3-32.5-14 10.5z"
      />
      <path
        fill="#4080BF"
        fill-opacity=".3"
        stroke="#4080BF"
        stroke-opacity=".3"
        stroke-width=".1"
        d="M164.4 174.5c0 14.3.2 20 .3 12.7.2-7.3.2-19 0-26-.1-7-.3-1-.3 13.3z"
      />
    </svg>
  );
}

export default mail;
