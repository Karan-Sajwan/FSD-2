import { useState } from "react";

export default function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating-container">
      <p>Rate this:</p>

      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{
              color: star <= rating ? "#facc15" : "#64748b",
            }}
          >
            ★
          </span>
        ))}
      </div>

      <div className="rating-value">Your Rating: {rating}</div>
    </div>
  );
}
