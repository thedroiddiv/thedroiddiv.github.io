import React, { useEffect, useState } from 'react';

type Props = {
  time?: string;
  title?: string;
  desc?: string;
  color?: string;
};

function TimelineCard({ time, title, desc, color }: Props) {
  const [col, setCol] = useState(['stroke-cyan-600', 'bg-cyan-600']);
  useEffect(() => {
    color && setCol([`stroke-${color}-600`, `bg-${color}-600`]);
  }, []);

  return (
    <div className="m-8 w-64 h-[32rem] bg-black text-white static">
      <svg
        className={`${col[0]} absolute`}
        width="256"
        height="512"
        viewBox="0 0 256 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_9_3)">
          <circle cx="160.405" cy="439.183" r="57.5953" strokeWidth="4" />
          <circle cx="75.2866" cy="441.634" r="9.64411" strokeWidth="4" />
          <circle cx="15.9843" cy="53.6441" r="9.64411" strokeWidth="4" />
          <path
            d="M15.5637 61.4832L15.5637 425.124C15.5637 434.513 23.1749 442.124 32.5637 442.124L66.2057 442.124"
            strokeWidth="4"
          />
        </g>
        <defs>
          <clipPath id="clip0_9_3">
            <rect width="256" height="512" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <h2 className="ml-16 pt-2 text-3xl font-bold">{time}</h2>
      <p className={`w-full h-fit p-2 text-center ${col[1]} mt-8`}>{title}</p>
      <div className="bg-green- ml-4 mt-8 p-2">
        <p className="text-center">{desc}</p>
      </div>
    </div>
  );
}

export default TimelineCard;
