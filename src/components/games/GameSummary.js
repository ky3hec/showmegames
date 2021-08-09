import React, { useState, useMemo } from "react";
import { reasonableLength } from "./../../appConfig";
export default function GameSummary({ summary }) {
  const partOfSummary = useMemo(
    () => summary.slice(0, reasonableLength - 1),
    [summary]
  );
  const [isFullyVisible, setIsFullyVisible] = useState(
    () => summary?.length <= reasonableLength
  );
  return (
    <div className="list-group-item">
      {isFullyVisible ? (
        <p>{summary}</p>
      ) : (
        <p>
          {`${partOfSummary}...`}
          <a
            href="/#"
            alt="Read more"
            onClick={(e) => {
              e.preventDefault();
              setIsFullyVisible(true);
            }}
          >
            Read more
          </a>
        </p>
      )}
    </div>
  );
}
