import React, { useState } from "react";
export default function GameSummary({ summary }) {
  const reasonableLength = 250;
  const [showMore, setShowMore] = useState(false);
  if (summary?.length > reasonableLength) {
    const partOfSummary = summary.slice(0, reasonableLength - 1);
    return (
      <div className="list-group-item">
        {showMore ? (
          <p>{summary}</p>
        ) : (
          <p>
            {`${partOfSummary}...`}
            <a
              href="/#"
              alt="Read more"
              onClick={(e) => {
                e.preventDefault();
                setShowMore(true);
              }}
            >
              Read more
            </a>
          </p>
        )}
      </div>
    );
  } else
    return (
      <div className="list-group-item">
        <p>{summary}</p>
      </div>
    );
}
